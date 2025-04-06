'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import {ProductsImgProps } from '@/types/image.types';

export const ProductsImg: React.FC<ProductsImgProps> = ({ items = [] }) => {
  const [index, setIndex] = useState(0)
  
  if (!items.length) {
    return (
      <div className="h-[490px] bg-gray-100 rounded-md flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  return (
    <div aria-label="Product image gallery">
      <div className="h-[490px] relative mt-5">
        <Image 
          src={items[index].image?.url}
          alt={items[index].image?.alt || `Product image ${index + 1}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          priority={index === 0}
          className="object-cover rounded-md"
        />
      </div>
      
      <div className="flex justify-between gap-4 mt-4" role="tablist">
        {items.map((item, i) => (
          <button
            key={item.id}
            className={`w-1/4 h-32 relative rounded-md overflow-hidden transition-opacity ${
              i === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => setIndex(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`View image ${i + 1}`}
          >
            <Image 
              src={item.image?.url}
              alt={item.image?.alt || `Thumbnail ${i + 1}`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}