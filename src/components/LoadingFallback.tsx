// src/components/LoadingFallback.jsx
export const LoadingFallback = () => {
    return (
      <div className="animate-pulse p-4 max-w-sm mx-auto">
        {/* Product Card Container */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image Placeholder */}
          <div className="h-64 bg-gray-200 w-full"></div>
  
          {/* Content Section */}
          <div className="p-4 space-y-3">
            {/* Title Placeholder */}
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
  
            {/* Description/Price Placeholder */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
  
            {/* Button Placeholder */}
            <div className="h-10 bg-gray-300 rounded-md w-full"></div>
          </div>
        </div>
      </div>
    );
  };