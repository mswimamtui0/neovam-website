import axios from 'axios';

// Use environment variable for API base
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || '/api';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

// Create axios instance
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  maxBodyLength: 5 * 1024 * 1024, // 5MB
  maxContentLength: 5 * 1024 * 1024 // 5MB
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('neovam_auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Log request size in development
  if (process.env.NODE_ENV === 'development' && config.data) {
    const size = new Blob([JSON.stringify(config.data)]).size;
    console.log(`📦 Request size: ${(size / 1024 / 1024).toFixed(2)}MB`);
  }

  return config;
}, (error) => Promise.reject(error));

// Response interceptor for error handling - FIXED
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only redirect to login for admin routes, not public blog routes
    if (error.response?.status === 401) {
      // Check if this is an admin-only route
      const isWriteOperation = error.config.method !== 'get';
      const isAdminRoute = error.config.url?.includes('/admin') || 
                          error.config.url?.includes('/users');
      
      // Only redirect for write operations or explicit admin routes
      if (isWriteOperation || isAdminRoute) {
        console.log('🔒 Unauthorized admin operation, redirecting to login');
        localStorage.removeItem('neovam_auth_token');
        window.location.href = '/admin/login';
      } else {
        // For public GET requests, just log and let the error propagate
        console.log('⚠️ Public API returned 401 - check server configuration');
      }
    }
    return Promise.reject(error);
  }
);

class BlogService {
  constructor() {
    this.MAX_PAYLOAD_SIZE = 4.5 * 1024 * 1024; // 4.5MB (safety margin)
  }

  /**
   * Check if payload size is within limits
   */
  checkPayloadSize(data) {
    const size = new Blob([JSON.stringify(data)]).size;
    return {
      bytes: size,
      mb: Number((size / 1024 / 1024).toFixed(2)),
      isValid: size <= this.MAX_PAYLOAD_SIZE
    };
  }

  /**
   * Convert base64 to Blob for upload
   */
  async base64ToBlob(base64Data) {
    const response = await fetch(base64Data);
    return await response.blob();
  }

  /**
   * Upload an image to Cloudinary
   */
  async uploadImageToCloudinary(file, folder = 'neovam/blog/content') {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      formData.append('folder', folder);

      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Upload failed');
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('❌ Cloudinary upload error:', error);
      throw error;
    }
  }

  /**
   * Sanitize blog data - upload any base64 images to Cloudinary
   */
  async sanitizeBlogData(blogData) {
    const sanitized = { ...blogData };

    // Handle thumbnail if it's base64 (though it shouldn't be with your ThumbnailUpload)
    if (sanitized.thumbnail && sanitized.thumbnail.startsWith('data:')) {
      console.log('🖼️ Uploading thumbnail to Cloudinary...');
      try {
        const blob = await this.base64ToBlob(sanitized.thumbnail);
        const imageUrl = await this.uploadImageToCloudinary(blob, 'neovam/blog/thumbnails');
        sanitized.thumbnail = imageUrl;
        console.log('✅ Thumbnail uploaded:', imageUrl);
      } catch (error) {
        console.error('❌ Thumbnail upload failed:', error);
        sanitized.thumbnail = '';
      }
    }

    // Process content images
    if (sanitized.content) {
      const base64Regex = /<img[^>]+src="(data:image\/[^;]+;base64[^"]+)"[^>]*>/g;
      const matches = [...sanitized.content.matchAll(base64Regex)];

      if (matches.length > 0) {
        console.log(`🖼️ Found ${matches.length} base64 images in content, uploading...`);
      }

      for (const match of matches) {
        const base64Data = match[1];
        const fullImgTag = match[0];

        try {
          const blob = await this.base64ToBlob(base64Data);
          const imageUrl = await this.uploadImageToCloudinary(blob, 'neovam/blog/content');

          const newImgTag = fullImgTag.replace(base64Data, imageUrl);
          sanitized.content = sanitized.content.replace(fullImgTag, newImgTag);
          
          console.log('✅ Content image uploaded:', imageUrl);
        } catch (err) {
          console.error('❌ Content image upload failed:', err);
        }
      }
    }

    return sanitized;
  }

  /**
   * Extract thumbnail URL from blog data (handles multiple field names)
   */
  extractThumbnailUrl(blogData) {
    // Check all possible field names
    const possibleFields = ['thumbnail', 'featuredImage', 'image', 'thumb', 'featured_image'];
    
    for (const field of possibleFields) {
      if (blogData[field] && typeof blogData[field] === 'string' && blogData[field].startsWith('http')) {
        console.log(`✅ Found thumbnail in field '${field}':`, blogData[field]);
        return blogData[field];
      }
    }
    
    console.log('⚠️ No thumbnail found in blogData');
    return '';
  }

  // ============================================
  // CREATE BLOG
  // ============================================
  async createBlog(blogData) {
    try {
      console.log('%c📝 CREATING BLOG', 'color: blue; font-size: 14px');
      
      // Extract thumbnail from any field
      const thumbnailUrl = this.extractThumbnailUrl(blogData);

      // Prepare cleaned data
      const cleanedBlogData = {
        title: blogData.title || '',
        slug: blogData.slug || '',
        content: blogData.content || '',
        thumbnail: thumbnailUrl,
        category: blogData.category || '',
        excerpt: blogData.excerpt || '',
        tags: Array.isArray(blogData.tags) ? blogData.tags : [],
        published: blogData.published !== false,
        metaTitle: blogData.metaTitle || '',
        metaDescription: blogData.metaDescription || '',
        keywords: blogData.keywords || ''
      };

      console.log('📦 Blog data prepared:', {
        title: cleanedBlogData.title,
        slug: cleanedBlogData.slug,
        hasThumbnail: !!cleanedBlogData.thumbnail,
        thumbnailUrl: cleanedBlogData.thumbnail,
        category: cleanedBlogData.category,
        tagsCount: cleanedBlogData.tags.length
      });

      // Upload any base64 images in content
      const sanitizedData = await this.sanitizeBlogData(cleanedBlogData);

      // Check payload size
      const sizeInfo = this.checkPayloadSize(sanitizedData);
      console.log(`📊 Payload size: ${sizeInfo.mb}MB`);

      if (!sizeInfo.isValid) {
        throw new Error(
          `Blog content too large (${sizeInfo.mb}MB). Maximum allowed is 4.5MB.`
        );
      }

      // Send to API
      console.log('🚀 Sending to API...');
      const response = await api.post('/blogs', sanitizedData, {
        timeout: 30000 // 30 second timeout
      });

      console.log('✅ Blog created successfully:', {
        id: response.data.id,
        title: response.data.title,
        thumbnail: response.data.thumbnail || response.data.featuredImage
      });

      return response.data;

    } catch (error) {
      console.error('❌ Create blog error:', error);

      if (error.response) {
        console.error('Server response:', error.response.data);
        console.error('Status:', error.response.status);
        
        if (error.response.status === 413) {
          throw new Error('Blog content too large (max 4.5MB). Reduce content or use Cloudinary.');
        }
        
        if (error.response.status === 400) {
          throw new Error(error.response.data.error || 'Invalid blog data');
        }
      }

      throw new Error(error.message || 'Failed to create blog');
    }
  }

  // ============================================
  // UPDATE BLOG
  // ============================================
  async updateBlog(id, blogData) {
    try {
      console.log(`📝 Updating blog: ${id}`);
      
      // Extract thumbnail from any field
      const thumbnailUrl = this.extractThumbnailUrl(blogData);

      const cleanedBlogData = {
        title: blogData.title,
        slug: blogData.slug,
        content: blogData.content,
        thumbnail: thumbnailUrl,
        category: blogData.category,
        excerpt: blogData.excerpt,
        tags: blogData.tags,
        published: blogData.published,
        metaTitle: blogData.metaTitle,
        metaDescription: blogData.metaDescription,
        keywords: blogData.keywords
      };

      // Upload any base64 images
      const sanitizedData = await this.sanitizeBlogData(cleanedBlogData);

      // Check size
      const sizeInfo = this.checkPayloadSize(sanitizedData);
      if (!sizeInfo.isValid) {
        throw new Error(`Update payload too large (${sizeInfo.mb}MB).`);
      }

      const response = await api.put(`/blogs/${id}`, sanitizedData);
      console.log('✅ Blog updated:', response.data.title);
      
      return response.data;

    } catch (error) {
      console.error('❌ Update error:', error);
      throw new Error(error.message || 'Update failed');
    }
  }

  // ============================================
  // DELETE BLOG
  // ============================================
  async deleteBlog(id) {
    try {
      console.log(`🗑️ Deleting blog: ${id}`);
      await api.delete(`/blogs/${id}`);
      console.log('✅ Blog deleted');
      return true;
    } catch (error) {
      console.error('❌ Delete error:', error);
      throw new Error('Failed to delete blog');
    }
  }

  // ============================================
  // GET BLOGS
  // ============================================
  async getBlogs(filter = {}) {
    try {
      const response = await api.get('/blogs', { params: filter });
      return response.data;
    } catch (error) {
      console.error('❌ Get blogs error:', error);
      throw new Error('Failed to fetch blogs');
    }
  }

  // ============================================
  // GET BLOG BY SLUG
  // ============================================
  async getBlogBySlug(slug) {
    try {
      const response = await api.get(`/blogs/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error('❌ Get blog error:', error);
      throw new Error('Failed to fetch blog');
    }
  }

  // ============================================
  // GET BLOG BY ID
  // ============================================
  async getBlogById(id) {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error('❌ Get blog error:', error);
      throw new Error('Failed to fetch blog');
    }
  }

  // ============================================
  // INCREMENT BLOG VIEWS - FIXED (no auth required)
  // ============================================
  async incrementViews(slug) {
    try {
      console.log(`👁️ Incrementing views for slug: ${slug}`);
      
      // Use fetch instead of axios to avoid auth headers
      const baseURL = REACT_APP_API_URL || '/api';
      const endpoints = [
        `${baseURL}/blogs/slug/${slug}/view`,
        `${baseURL}/blogs/${slug}/view`,
        `${baseURL}/blogs/view/${slug}`,
        `${baseURL}/blogs/${slug}/increment-views`
      ];
      
      let success = false;
      
      // Try each endpoint until one works
      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
            // NO AUTH HEADERS - this is intentional!
          });
          
          if (response.ok) {
            console.log(`✅ Views incremented via ${endpoint}`);
            success = true;
            break;
          }
        } catch (err) {
          // Continue to next endpoint
          console.debug(`Endpoint failed: ${endpoint}`);
        }
      }
      
      if (!success) {
        console.warn('⚠️ Could not increment views (endpoints not found), but blog loaded successfully');
      }
      
      return true;
    } catch (error) {
      // Completely silent fail - don't break the user experience
      console.debug('View increment skipped (non-critical)');
      return false;
    }
  }
}

export default new BlogService();