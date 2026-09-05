import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full border-2 border-primary-400/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-400 animate-spin"></div>
      </div>
    </div>
  );
};

const PageLoading = () => {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" className="mx-auto mb-4" />
        <p className="text-gray-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export { LoadingSpinner };
export default PageLoading;