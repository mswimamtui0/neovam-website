import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import blogService from '../services/blogService';
import authService from '../services/authService';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const loadBlogPost = async () => {
    setLoading(true);
    try {
      const blogData = await blogService.getBlogBySlug(slug);
      
      if (!blogData) {
        navigate('/404');
        return;
      }
      
      // Don't await - let it run in background
      blogService.incrementViews(slug).catch(err => {
        console.log('View increment failed (non-critical):', err);
      });
      
      setBlog(blogData);
    } catch (error) {
      console.error('Error loading blog post:', error);
      navigate('/404');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.featuredImage,
    "datePublished": blog.createdAt,
    "dateModified": blog.updatedAt || blog.createdAt,
    "author": {
      "@type": "Organization",
      "name": "NeoVam Technologies",
      "url": "https://neovam.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NeoVam Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neovam.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://neovam.com/blog/${blog.slug}`
    },
    "keywords": blog.keywords || (Array.isArray(blog.tags) ? blog.tags.join(', ') : '')
  };

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle || blog.title} | NeoVam Technologies</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
        <meta name="keywords" content={blog.keywords || (Array.isArray(blog.tags) ? blog.tags.join(', ') : '')} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        {blog.featuredImage && <meta property="og:image" content={blog.featuredImage} />}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog.createdAt} />
        <meta property="article:author" content="NeoVam Technologies" />
        <meta property="article:section" content={blog.category} />
        {Array.isArray(blog.tags) && blog.tags.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <link rel="canonical" href={`https://neovam.com/blog/${blog.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {blog.featuredImage && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={blog.featuredImage} 
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 bg-gradient-primary text-white text-sm font-semibold rounded-full">
                  {blog.category}
                </span>
                <time className="text-gray-600 dark:text-gray-400">
                  {format(new Date(blog.createdAt), 'MMMM dd, yyyy')}
                </time>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {Math.ceil(blog.readingTime || 5)} min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {blog.title}
              </h1>
              
              {/* Simple NeoVam branding instead of author */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Published by NeoVam Technologies</span>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => navigate(`/blog?search=${tag}`)}
                      className="px-4 py-2 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-900 dark:hover:text-primary-300 rounded-full transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {authService.isAdmin() && (
              <div className="mb-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-4">Admin Actions</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => navigate(`/admin/blog`)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Edit Post
                  </button>
                </div>
              </div>
            )}

            <div className="mb-12 p-8 bg-gradient-primary rounded-3xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="mb-6 opacity-90">
                Contact our experts to discuss how NeoVam's AI solutions can drive your digital transformation.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;