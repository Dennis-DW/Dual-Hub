'use client'

import React, { useState } from 'react'

interface AddItemProps {
  productId: string
  variantId: string
  stockNumber: number
}

export const AddItem = ({ productId, variantId, stockNumber }: AddItemProps) => {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
    if (type === 'i' && quantity < stockNumber) {
      setQuantity((prev) => prev + 1)
    }
  }

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      // Add cart logic here
    } catch (error) {
      console.error('Failed to add item to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='bg-slate-200 py-2 px-4 rounded-full flex items-center justify-between w-32'>
            <button 
              className='cursor-pointer text-xl hover:text-red-500 transition-colors'
              onClick={() => handleQuantity('d')}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className='font-medium'>{quantity}</span>
            <button 
              className='cursor-pointer text-xl hover:text-red-500 transition-colors'
              onClick={() => handleQuantity('i')}
              disabled={quantity >= stockNumber}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {stockNumber < 1 ? (
          <div className='text-xs font-medium text-red-500'>Out of stock</div>
        ) : (
          <div className='text-xs'>
            Only <span className='text-pink-600 font-medium'>{stockNumber} items</span> left
            <br />Don't miss out!
          </div>
        )}

        <button 
          onClick={handleAddToCart}
          disabled={isLoading || stockNumber < 1}
          className='w-36 text-sm rounded-xl ring-1 ring-red-400 text-red-500 
                     py-2 px-4 hover:bg-red-400 hover:text-white transition-all
                     disabled:cursor-not-allowed disabled:bg-gray-100 
                     disabled:text-gray-400 disabled:ring-gray-200'
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}