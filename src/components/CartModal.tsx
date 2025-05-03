'use client'
import Image from 'next/image'
import React from 'react'

export const CartModal = () => {
    const cartItems = true;

    return (
        <div className='w-80 absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cartItems ? (
                <div className='text-center text-gray-500 font-medium'>Cart is Empty</div>
            ) : (
                <>
                <h2 className='text-lg font-semibold text-gray-800 border-b pb-2'>Shopping Cart</h2>
                    <div className='flex flex-col gap-6'>
                        {/* Item 1 */}
                        <div className='flex gap-4'>
                            <Image
                                src={'https://images.pexels.com/photos/30553626/pexels-photo-30553626/free-photo-of-colorful-array-of-fresh-vegetables-at-seattle-market.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                                alt='Product Image'
                                width={72}
                                height={96}
                                className='object-cover rounded-md'
                            />
                            <div className='flex flex-col justify-between w-full'>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='font-semibold text-sm'>Product Name</h3>
                                        <div className='p-1 bg-gray-100 rounded-sm text-sm'>$50</div>
                                    </div>
                                    <div className='text-sm text-gray-500'>Available</div>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty: 2</span>
                                    <span className='text-blue-500 cursor-pointer'>Remove</span>
                                </div>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className='flex gap-4'>
                            <Image
                                src={'https://images.pexels.com/photos/30553626/pexels-photo-30553626/free-photo-of-colorful-array-of-fresh-vegetables-at-seattle-market.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                                alt='Product Image'
                                width={72}
                                height={96}
                                className='object-cover rounded-md'
                            />
                            <div className='flex flex-col justify-between w-full'>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='font-semibold text-sm'>Product Name</h3>
                                        <div className='p-1 bg-gray-100 rounded-sm text-sm'>$50</div>
                                    </div>
                                    <div className='text-sm text-gray-500'>Available</div>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty: 2</span>
                                    <span className='text-blue-500 cursor-pointer'>Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Subtotal Section */}
                    <div className='border-t pt-4'>
                        <div className='flex items-center justify-between font-semibold text-sm'>
                            <span>Subtotal</span>
                            <span>$100</span>
                        </div>
                        <p className='text-gray-500 text-xs mt-2 mb-4'>Shipping and taxes calculated at checkout.</p>
                        <div className='flex justify-between gap-4'>
                            <button className='w-1/2 py-2 bg-gray-100 text-sm font-medium rounded-md hover:bg-gray-200'>
                                View Cart
                            </button>
                            <button className='w-1/2 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600'>
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}