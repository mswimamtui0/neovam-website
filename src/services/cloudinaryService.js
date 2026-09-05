import axios from 'axios';

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;

class CloudinaryService {
  constructor() {
    this.uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  }

  // Upload image to Cloudinary - SIMPLIFIED VERSION
  async uploadImage(file) {
    if (!file) {
      throw new Error('No file provided');
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      throw new Error('Invalid file type. Please upload JPEG, PNG, GIF, or WebP image.');
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new Error('File size too large. Maximum size is 5MB.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    
    // REMOVED ALL OTHER PARAMETERS for testing
    // No folder, no tags, no transformation

    try {
      const response = await axios.post(this.uploadUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`Upload progress: ${percentCompleted}%`);
        }
      });

      return {
        success: true,
        url: response.data.secure_url,
        publicId: response.data.public_id,
        format: response.data.format,
        bytes: response.data.bytes,
        width: response.data.width,
        height: response.data.height
      };
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      console.error('Error response:', error.response?.data);
      throw new Error(`Upload failed: ${error.response?.data?.error?.message || error.message}`);
    }
  }

  // Generate thumbnail URL with transformations
  getThumbnailUrl(publicId, options = {}) {
    const defaultOptions = {
      width: 800,
      height: 450,
      crop: 'fill',
      quality: 'auto',
      format: 'auto'
    };

    const config = { ...defaultOptions, ...options };
    const transformations = Object.entries(config)
      .map(([key, value]) => `${key}_${value}`)
      .join(',');

    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
  }

  // Delete image from Cloudinary
  async deleteImage(publicId) {
    try {
      const timestamp = Math.round((new Date()).getTime() / 1000);
      const signature = this.generateSignature(publicId, timestamp);
      
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`, {
        public_id: publicId,
        timestamp: timestamp,
        signature: signature,
        api_key: API_KEY
      });

      return response.data.result === 'ok';
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      return false;
    }
  }

  // Generate signature for secure operations
  generateSignature(publicId, timestamp) {
    // For production, generate signature on backend
    // This is a simplified version
    const params = `public_id=${publicId}&timestamp=${timestamp}`;
    return params; // In production, use proper signing
  }

  // Validate Cloudinary URL
  isValidCloudinaryUrl(url) {
    return url && url.includes('res.cloudinary.com') && url.includes(CLOUD_NAME);
  }

  // Extract public ID from URL
  extractPublicId(url) {
    if (!this.isValidCloudinaryUrl(url)) return null;
    
    const parts = url.split('/');
    const uploadIndex = parts.indexOf('upload');
    if (uploadIndex === -1) return null;
    
    return parts.slice(uploadIndex + 2).join('/').split('.')[0];
  }
}

const cloudinaryService = new CloudinaryService();
export default cloudinaryService;