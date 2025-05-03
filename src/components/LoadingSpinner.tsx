// src/components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner = () => (
  <div
    className="flex justify-center items-center p-5"
    role="alert"
    aria-label="Loading content"
  >
    <div
      className="w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"
    />
    <span className="ml-2.5 text-gray-600">Loading...</span>
  </div>
);

export default LoadingSpinner;