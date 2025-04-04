'use client'
import { AddItem } from '@/components/AddItem'
import { CustomizeItems } from '@/components/CustomizeItems'
import { ProductsImg } from '@/components/ProductsImg'
import React from 'react'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* Product Image Section */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductsImg />
      </div>

      {/* Product Details Section */}
      <div className='w-full lg:w-1/2 mt-10 flex flex-col gap-6'>
        {/* Product Name */}
        <h1 className='text-4xl font-medium'>Product Name</h1>

        {/* Product Short Description */}
        <p className='text-gray-700'>
          This is a brief description of the product, highlighting its key features and benefits.
        </p>

        {/* Divider */}
        <div className='h-[3px] bg-red-300' />

        {/* Pricing Section */}
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>$80</h3>
          <h2 className='font-medium text-2xl text-red-500'>$50</h2>
        </div>

        {/* Divider */}
        <div className='h-[3px] bg-red-300' />

        {/* Customization Section */}
        <CustomizeItems />

        {/* Add to Cart Section */}
        <AddItem />

        {/* Divider */}
        <div className='h-[3px] bg-red-300' />

        {/* Additional Information Section */}
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Product Details</h4>
          <p>
            This section provides detailed information about the product, including its specifications,
            materials, and other relevant details.   Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
          </p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Care Instructions</h4>
          <p>
            Instructions on how to care for the product to ensure its longevity and maintain its quality.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
          </p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Shipping & Returns</h4>
          <p>
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.
            Information about shipping options, delivery times, and the return policy for this product.   Information about shipping options, delivery times, and the return policy for this product.
          </p>
        </div>
      </div>
    </div>
  )
}