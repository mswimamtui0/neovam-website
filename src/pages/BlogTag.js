import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogCard from '../components/Blog/BlogCard';
import BlogSidebar from '../components/Blog/BlogSidebar';
import { fetchBlogs } from '../services/blogApi';

const BlogTag = () => {
  const { tag } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTagBlogs();
  }, [tag]);

  const loadTagBlogs = async () => {
    try {
      const { data } = await fetchBlogs();
      const filtered = data.filter(blog => 
        blog.tags && blog.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
      setBlogs(filtered);
    } catch (error) {
      console.error('Error loading tag blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const tagName = tag.charAt(0).toUpperCase() + tag.slice(1);

  // Mock data for sidebar
  const categories = [
    { id: 1, name: 'Artificial Intelligence', slug: 'artificial-intelligence', count: 12 },
    { id: 2, name: 'Cloud Computing', slug: 'cloud-computing', count: 8 },
    { id: 3, name: 'Fintech', slug: 'fintech', count: 15 },
    { id: 4, name: 'Digital Transformation', slug: 'digital-transformation', count: 10 },
  ];

  const recentPosts = blogs.slice(0, 3).map(blog => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    image: blog.featuredImage,
    date: new Date(blog.createdAt).toLocaleDateString()
  }));

  const tags = ['AI', 'Machine Learning', 'Cloud', 'Blockchain', 'Fintech', 'Startup', 'Technology', 'Innovation'];

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
        <title>#{tagName} Articles | NeoVam Technologies Blog</title>
        <meta name="description" content={`Browse our articles tagged with ${tagName} from NeoVam Technologies experts.`} />
        <link rel="canonical" href={`https://neovam.com/blog/tag/${tag}`} />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Tag Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">Blog</a>
              <span className="text-gray-400">/</span>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">#{tagName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Articles Tagged <span className="text-gradient">#{tagName}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our insights related to {tagName}
            </p>
            <div className="mt-4 text-gray-500 dark:text-gray-400">
              {blogs.length} {blogs.length === 1 ? 'article' : 'articles'} with this tag
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {blogs.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {blogs.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    No articles found with tag #{tagName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Check back soon for new articles with this tag.
                  </p>
                  <a
                    href="/blog"
                    className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow transition-all"
                  >
                    Browse All Articles
                  </a>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar 
                categories={categories}
                recentPosts={recentPosts}
                tags={tags}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTag;