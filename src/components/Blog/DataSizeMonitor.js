// src/components/Blog/DataSizeMonitor.js

import React, { useEffect, useState } from 'react';

const DataSizeMonitor = ({ data }) => {
  const [size, setSize] = useState(0);
  const [warning, setWarning] = useState('');

  useEffect(() => {
    const calculateSize = () => {
      try {
        const jsonString = JSON.stringify(data);
        const bytes = new Blob([jsonString]).size;
        const mb = bytes / 1024 / 1024;
        setSize(mb);
        
        if (mb > 4) {
          setWarning(`⚠️ Large payload: ${mb.toFixed(2)}MB (near Vercel's 4.5MB limit)`);
        } else if (mb > 3) {
          setWarning(`⚠️ Payload size: ${mb.toFixed(2)}MB`);
        } else {
          setWarning('');
        }
      } catch (e) {
        console.error('Size calculation error:', e);
      }
    };

    calculateSize();
  }, [data]);

  if (!warning) return null;

  return (
    <div className={`text-sm p-2 rounded mt-2 ${
      size > 4 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
    }`}>
      {warning}
      {size > 4 && (
        <div className="mt-1 text-xs">
          Suggestions:
          <ul className="list-disc ml-4 mt-1">
            <li>Use shorter content</li>
            <li>Ensure all images are Cloudinary URLs (not base64)</li>
            <li>Split into multiple blog posts if needed</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataSizeMonitor;