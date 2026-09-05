import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ blog }) => {
  const excerpt = blog.excerpt || blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {blog.featuredImage && (
        <div className="h-48 overflow-hidden">
          <img 
            src={blog.featuredImage} 
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-gradient-primary/10 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(blog.createdAt), 'MMM dd, yyyy')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          <Link to={`/blog/${blog.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {blog.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
              {blog.author?.name?.charAt(0) || 'N'}
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {blog.author?.name || 'NeoVam Team'}
            </span>
          </div>
          
          <Link 
            to={`/blog/${blog.slug}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-semibold text-sm flex items-center gap-1"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;