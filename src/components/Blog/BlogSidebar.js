import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebar = ({ categories, recentPosts, tags, onCategorySelect }) => {
  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                window.location.href = `/blog?search=${e.target.value}`;
              }
            }}
          />
          <button className="absolute right-3 top-3 text-gray-400 hover:text-primary-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategorySelect && onCategorySelect(category.name)}
                className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded text-xs">
                  {category.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-3">
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              )}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary-600">
                    {post.title}
                  </Link>
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?search=${tag}`}
              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-900 dark:hover:text-primary-300 rounded-full text-sm transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Widget */}
      <div className="bg-gradient-primary p-6 rounded-2xl text-white">
        <h3 className="text-lg font-bold mb-3">Need AI Solutions?</h3>
        <p className="text-sm mb-4 opacity-90">
          Contact us for custom AI, Cloud, and Fintech solutions tailored for your business.
        </p>
        <Link
          to="/contact"
          className="inline-block w-full text-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;