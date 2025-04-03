import React from 'react';
import { FaFilter } from 'react-icons/fa';

export const Filter = () => {
  return (
    <div className='mt-12 flex flex-wrap justify-between items-center bg-white p-4 rounded-xl shadow-md'>
      <div className='flex gap-4 flex-wrap items-center'>
        <select name='type' className='filter-select'>
          <option>Type</option>
          <option value='physical'>Physical</option>
          <option value='digital'>Digital</option>
        </select>
        
        <input type='text' name='min' placeholder='Min Price' className='filter-input' />
        <input type='text' name='max' placeholder='Max Price' className='filter-input' />
        
        <select name='size' className='filter-select'>
          <option>Size</option>
          <option value='size'>Size</option>
        </select>
        
        <select name='color' className='filter-select'>
          <option>Color</option>
          <option value=''>Test</option>
        </select>
        
        <select name='ribbon' className='filter-select'>
          <option>Category</option>
          <option value='new-arrival'>New Arrival</option>
          <option value='popular'>Popular</option>
        </select>
        
        <select className='filter-select'>
          <option>All Filters</option>
        </select>
      </div>
      
      <div className='flex items-center gap-2'>
        <FaFilter className='text-yellow-500' />
        <select className='filter-select'>
          <option>Sort By</option>
          <option value='low-high'>Price (Low to High)</option>
          <option value='high-low'>Price (High to Low)</option>
          <option value='newest'>Newest</option>
          <option value='oldest'>Oldest</option>
        </select>
      </div>
    </div>
  );
};

// Tailwind Utility Classes
const styles = `
  .filter-select {
    @apply py-2 px-4 rounded-lg text-sm font-medium bg-yellow-100 hover:bg-yellow-200 transition-all;
  }
  .filter-input {
    @apply text-sm rounded-lg px-3 py-2 w-28 border border-red-400 focus:ring-2 focus:ring-red-500 outline-none;
  }
`;
export default () => <style>{styles}</style>;
