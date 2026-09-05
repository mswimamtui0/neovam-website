import axios from 'axios';

// Use environment variable in production, fallback to relative path for Vercel
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || '/api';

// For local development only, you can still use localhost if needed
// But better to use Vercel dev environment instead
const API = axios.create({ 
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add auth token to requests if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('neovam_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Blog API calls
export const fetchBlogs = (params) => API.get('/blogs', { params });
export const fetchBlogBySlug = (slug) => API.get(`/blogs/slug/${slug}`); // Note: using slug, not ID
export const fetchBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (blogData) => API.post('/blogs', blogData);
export const updateBlog = (id, blogData) => API.put(`/blogs/${id}`, blogData);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

// For SEO metadata
export const generateSitemap = () => API.get('/sitemap.xml');
export const generateRSS = () => API.get('/rss.xml');

// Optional: Add response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);