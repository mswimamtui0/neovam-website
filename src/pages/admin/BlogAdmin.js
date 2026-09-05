import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogEditor from '../../components/Blog/Editor';
import ThumbnailUpload from '../../components/Blog/ThumbnailUpload';
import blogService from '../../services/blogService';
import authService from '../../services/authService';

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Artificial Intelligence',
    tags: '',
    featuredImage: '',
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    published: true
  });

  useEffect(() => {
    if (!authService.isAdmin()) {
      navigate('/admin/login');
      return;
    }
    loadBlogs();
  }, [navigate]);

  const loadBlogs = async () => {
    try {
      const data = await blogService.getBlogs();
      // ✅ FIX: Ensure data is an array before setting state
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error loading blogs:', error);
      setBlogs([]);
    }
  };

  // ✅ FIXED: Map featuredImage to thumbnail for blogService
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const blogData = {
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      thumbnail: formData.featuredImage,  // ✅ Map featuredImage to thumbnail
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      keywords: formData.keywords,
      published: formData.published
    };

    try {
      if (editingBlog) {
        await blogService.updateBlog(editingBlog.id, blogData);
      } else {
        await blogService.createBlog(blogData);
      }
      
      resetForm();
      loadBlogs();
      alert('Blog saved successfully!');
    } catch (error) {
      alert('Error saving blog: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await blogService.deleteBlog(id);
        loadBlogs();
        alert('Blog deleted successfully!');
      } catch (error) {
        alert('Error deleting blog: ' + error.message);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Artificial Intelligence',
      tags: '',
      featuredImage: '',
      metaTitle: '',
      metaDescription: '',
      keywords: '',
      published: true
    });
    setEditingBlog(null);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleTitleChange = (title) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
      metaTitle: prev.metaTitle || title,
      metaDescription: prev.metaDescription || `${title.substring(0, 150)}...`
    }));
  };

  if (!authService.isAdmin()) {
    return null;
  }

  // ✅ SAFE: Ensure blogs is an array before rendering
  const safeBlogs = Array.isArray(blogs) ? blogs : [];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Blog Management
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Blog Posts ({safeBlogs.length})
                </h2>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  New Post
                </button>
              </div>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {/* ✅ FIXED: Using safeBlogs which is guaranteed to be an array */}
                {safeBlogs.length === 0 ? (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                    No blog posts yet. Create your first post!
                  </p>
                ) : (
                  safeBlogs.map((blog) => (
                    <div key={blog.id} className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                      {blog.featuredImage && (
                        <img 
                          src={blog.featuredImage} 
                          alt={blog.title}
                          className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                      )}
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                        {blog.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 text-xs rounded ${
                          blog.published 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {blog.published ? 'Published' : 'Draft'}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setEditingBlog(blog);
                              setFormData({
                                title: blog.title,
                                slug: blog.slug,
                                excerpt: blog.excerpt || '',
                                content: blog.content || '',
                                category: blog.category || 'Artificial Intelligence',
                                featuredImage: blog.thumbnail || blog.featuredImage || '', // ✅ Handle both fields
                                tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags || '',
                                metaTitle: blog.metaTitle || '',
                                metaDescription: blog.metaDescription || '',
                                keywords: blog.keywords || '',
                                published: blog.published !== false
                              });
                            }}
                            className="text-sm text-primary-600 hover:text-primary-800"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Blog Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Brief summary of the article..."
                  />
                </div>

                {/* Thumbnail Upload Component */}
                <ThumbnailUpload 
                  thumbnail={formData.featuredImage}
                  setThumbnail={(url) => setFormData({ ...formData, featuredImage: url })}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Content *
                  </label>
                  <BlogEditor
                    content={formData.content}
                    setContent={(content) => setFormData({ ...formData, content })}
                    height={400}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Fintech">Fintech</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Technology">Technology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="AI, Machine Learning, Cloud Computing"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Keywords
                  </label>
                  <input
                    type="text"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ai, machine learning, fintech, africa"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Publish immediately
                    </span>
                  </label>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    {editingBlog ? 'Update Blog Post' : 'Create Blog Post'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-8 py-3 bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
                  >
                    Cancel
                  </button>
                  {editingBlog && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this post?')) {
                          handleDelete(editingBlog.id);
                        }
                      }}
                      className="px-8 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;