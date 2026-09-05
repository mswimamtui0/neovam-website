import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BlogCard from '../components/Blog/BlogCard';
import BlogSidebar from '../components/Blog/BlogSidebar';
import blogService from '../services/blogService';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const postsPerPage = 6;

  useEffect(() => {
    loadBlogs();
  }, [selectedCategory, searchTerm]);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const filter = {
        published: true,
        category: selectedCategory || undefined,
        search: searchTerm || undefined,
        sortBy: 'date'
      };
      
      const allBlogs = await blogService.getBlogs(filter);
      
      // ✅ FIX: Ensure allBlogs is an array before setting state
      const blogsArray = Array.isArray(allBlogs) ? allBlogs : [];
      setBlogs(blogsArray);
      setTotalPages(Math.ceil(blogsArray.length / postsPerPage));
    } catch (error) {
      console.error('Error loading blogs:', error);
      // ✅ FIX: Set empty array on error
      setBlogs([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  // ✅ FIX: Ensure blogs is an array before using array methods
  const safeBlogs = Array.isArray(blogs) ? blogs : [];

  // Get categories for sidebar - with safety checks
  const categories = [
    { id: 1, name: 'Artificial Intelligence', slug: 'artificial-intelligence', count: safeBlogs.filter(b => b?.category === 'Artificial Intelligence').length },
    { id: 2, name: 'Cloud Computing', slug: 'cloud-computing', count: safeBlogs.filter(b => b?.category === 'Cloud Computing').length },
    { id: 3, name: 'Fintech', slug: 'fintech', count: safeBlogs.filter(b => b?.category === 'Fintech').length },
    { id: 4, name: 'Digital Transformation', slug: 'digital-transformation', count: safeBlogs.filter(b => b?.category === 'Digital Transformation').length },
  ];

  // Recent posts with safety check
  const recentPosts = safeBlogs.slice(0, 3).map(blog => ({
    id: blog?.id || '',
    title: blog?.title || '',
    slug: blog?.slug || '',
    image: blog?.featuredImage || '',
    date: blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''
  }));

  // Tags with safety check
  const tags = Array.from(new Set(safeBlogs.flatMap(blog => Array.isArray(blog?.tags) ? blog.tags : []))).slice(0, 10);

  // Pagination with safety check
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = safeBlogs.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog | NeoVam Technologies - AI Insights & Technology News</title>
        <meta name="description" content="Read the latest articles on AI, Cloud Computing, Fintech, and Digital Transformation from NeoVam Technologies experts." />
        <meta name="keywords" content="AI blog, technology news, fintech insights, cloud computing articles, digital transformation" />
        <meta property="og:title" content="NeoVam Technologies Blog" />
        <meta property="og:description" content="Expert insights on AI, Cloud, and Fintech innovations." />
        <link rel="canonical" href="https://neovam.com/blog" />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              NeoVam <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Insights, trends, and innovations in AI, Cloud Computing, and Fintech
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-lg"
                />
                <button className="absolute right-4 top-4 text-gray-400 hover:text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-full ${!selectedCategory 
                  ? 'bg-gradient-primary text-white' 
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'}`}
              >
                All Articles
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full ${selectedCategory === category.name
                    ? 'bg-gradient-primary text-white' 
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'}`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {currentPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {searchTerm ? 'Try a different search term' : 'Check back soon for new articles!'}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {currentPosts.map((blog) => (
                      <BlogCard key={blog?.id || Math.random()} blog={blog} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-dark-700"
                      >
                        Previous
                      </button>
                      
                      {[...Array(totalPages)].map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(idx + 1)}
                          className={`px-4 py-2 rounded-lg ${currentPage === idx + 1 
                            ? 'bg-gradient-primary text-white' 
                            : 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-700'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-dark-700"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar 
                categories={categories}
                recentPosts={recentPosts}
                tags={tags}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;