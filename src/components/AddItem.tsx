'use client'
import React, { useState } from 'react'

export const AddItem = ({productId, variantId, stockNumber}: {productId:string, variantId: string, stockNumber: number} ) => {
    const [quantity, setQuantity] = useState(1)

    // const stock = 4

    const handleQuantity = (type: 'i' | 'd') => {
        if (type === 'd' && quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
        if (type === 'i' && quantity < stockNumber) {
            setQuantity((prev) => prev + 1)
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-medium'>Choose a Quantiy</h4>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='bg-slate-200 py-2 px-4 rounded-s-3xl flex items-center justify-between w-32'>
                        <button className='cursor-pointer text-xl' onClick={() => handleQuantity('d')}>-</button>
                        {quantity}
                        <button className='cursor-pointer text-xl' onClick={() => handleQuantity('i')}>+</button>
                    </div>
                </div>
                <div className='text-xs'>Only <span className='text-pink-600'>{stockNumber} Items</span> left<br /> {"Don't"} miss out!</div>
                <button className='w-36 text-sm rounded-xl ring-1 ring-red-400 text-red-500 py-2 px-4 hover:bg-red-400 hover:text-yellow-50 disabled:cursor-not-allowed disabled:text-white disabled:bg-yellow-100 disabled:ring-none'>Add to Cart</button>
            </div>
        </div>
    )
}
