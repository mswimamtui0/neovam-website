import React, { useState } from 'react';
import axios from 'axios';

const ThumbnailUpload = ({ thumbnail, setThumbnail }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // DEBUG: Check environment variables
  console.log('🔍 Cloudinary Config:', {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    nodeEnv: process.env.NODE_ENV
  });

  const uploadToCloudinary = async (file) => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || !uploadPreset) {
      throw new Error('Cloudinary configuration missing. Please check your .env file.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'neovam/blog/thumbnails');
    formData.append('tags', 'neovam,blog,thumbnail');

    // ✅ Removed transformation for unsigned upload
    // formData.append('transformation', 'w_1200,h_630,c_fill,q_auto,f_auto');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        }
      );
      
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
      throw new Error(
        error.response?.data?.error?.message || 
        'Upload failed. Please try again.'
      );
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validation
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPEG, PNG, GIF, WebP)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const result = await uploadToCloudinary(file);
      
      if (result.success) {
        setThumbnail(result.url);
        alert('✅ Image uploaded to Cloudinary successfully!');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(`❌ ${error.message}`);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const imageSuggestions = [
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      label: 'AI & Tech',
      category: 'technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      label: 'Business',
      category: 'business'
    },
    {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      label: 'Cloud',
      category: 'cloud'
    },
    {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      label: 'Data',
      category: 'data'
    },
    {
      url: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      label: 'Innovation',
      category: 'innovation'
    },
    {
      url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      label: 'Africa Tech',
      category: 'africa'
    }
  ];

  const handleSuggestionClick = (url) => {
    setThumbnail(url);
  };

  const handleRemoveThumbnail = () => {
    if (window.confirm('Are you sure you want to remove this thumbnail?')) {
      setThumbnail('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Blog Thumbnail *
        </label>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Upload a thumbnail image that will appear on blog cards and social media.
          Recommended: 1200×630px, JPEG/PNG/WebP, under 5MB.
        </p>

        {/* Upload Section */}
        <div className="mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* File Upload */}
            <div>
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-xl p-6 text-center hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  <div className="mx-auto w-12 h-12 mb-3 text-gray-400">
                    {uploading ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                      </div>
                    ) : (
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {uploading ? `Uploading... ${uploadProgress}%` : 'Upload from Computer'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PNG, JPG, GIF, WebP up to 5MB
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={uploading}
                  />
                </div>
              </label>
              
              {uploading && (
                <div className="mt-3">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* URL Input */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Or use image URL:</p>
              <input
                type="url"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Enter direct image URL or Cloudinary URL
              </p>
            </div>
          </div>
        </div>

        {/* Preview */}
        {thumbnail && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Thumbnail Preview:</p>
              <button
                type="button"
                onClick={handleRemoveThumbnail}
                className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
              </button>
            </div>
            
            <div className="relative max-w-2xl">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-200 dark:border-dark-600">
                <img 
                  src={thumbnail} 
                  alt="Thumbnail preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>
              
              {/* Cloudinary badge if Cloudinary URL */}
              {thumbnail.includes('cloudinary.com') && (
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.866 8.873c-.08-.406-.398-.723-.805-.804-1.035-.203-2.132-.338-3.26-.398-1.22-2.243-3.567-3.822-6.27-3.822-3.985 0-7.215 3.23-7.215 7.215 0 .37.028.734.083 1.09C1.898 12.72 0 14.88 0 17.394 0 20.416 2.584 23 5.606 23h12.667C21.416 23 24 20.416 24 17.394c0-2.512-1.898-4.674-4.473-5.03.055-.357.083-.72.083-1.09 0-.76-.098-1.497-.28-2.197z"/>
                    </svg>
                    Cloudinary
                  </span>
                </div>
              )}
            </div>
            
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div>
                <span className="font-medium">Current URL:</span>
                <div className="truncate mt-1 p-2 bg-gray-50 dark:bg-dark-800 rounded">
                  {thumbnail}
                </div>
              </div>
              <div>
                <span className="font-medium">Status:</span>
                <div className="mt-1">
                  {thumbnail.includes('cloudinary.com') ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✅ Cloudinary Optimized
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⚠️ External URL
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Suggestions */}
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Quick Suggestions (Free Unsplash Images):
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {imageSuggestions.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestionClick(image.url)}
                className="group relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary-500 transition-all"
                title={`${image.label} - Click to use`}
              >
                <img 
                  src={image.url} 
                  alt={image.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-xs text-white font-medium">{image.label}</span>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Unsplash</a> - free to use
          </p>
        </div>

        {/* Best Practices */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Thumbnail Best Practices
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span><strong>Optimal Size:</strong> 1200×630px for social media sharing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span><strong>Aspect Ratio:</strong> 16:9 for blog cards, 1.91:1 for Facebook/Twitter</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span><strong>File Format:</strong> WebP (best), JPEG (good), PNG (transparency)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span><strong>File Size:</strong> Keep under 200KB for faster loading</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span><strong>Cloudinary Benefits:</strong> Auto-optimization, CDN delivery, automatic format selection</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailUpload;