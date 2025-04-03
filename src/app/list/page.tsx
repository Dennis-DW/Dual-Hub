


import { Filter } from '@/components/Filter';
import { ProductList } from '@/components/ProductList';
import Image from 'next/image';
import React from 'react';

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
          <div className="hidden sm:flex justify-between items-center h-72 bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 rounded-lg shadow-lg mx-4 mt-6 transform hover:scale-105 transition-transform duration-300">
          <div className="w-2/3 flex flex-col items-start justify-center gap-6 text-white p-6 ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Snag <span className="text-yellow-300">50% OFF</span> <br /> on Trending Picks!
          </h1>
          <button className="rounded-full bg-white text-purple-600 font-semibold py-3 px-6 text-sm shadow-md hover:bg-yellow-300 hover:text-purple-800 transition-colors duration-200">
            Shop Now
          </button>
        </div>
        <div className="relative w-1/3 h-full">
          <Image
            src={'/woman.png'}
            alt="Stylish woman"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="mt-10">
        <Filter />
      </div>

      {/* Product Section */}
      <h1 className="mt-12 text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Tops For You
        </span>
      </h1>
      <ProductList />
    </div>
  );
};

export default ListPage;