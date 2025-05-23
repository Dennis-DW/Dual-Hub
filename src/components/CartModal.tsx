'use client'
import { useCartStore } from '@/hooks/useCart_store'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { media as wixMedia } from '@wix/sdk'
import { useWixClient } from '@/hooks/useWixClient'



export const CartModal = () => {
    const { cart, isLoading } = useCartStore()
    const wixClient = useWixClient()
    const { removeItem } = useCartStore()

    return (
        <div className='w-80 absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cart.lineItems ? (
                <div className='text-center text-gray-500 font-medium'>Cart is Empty</div>
            ) : (
                <>
                    <h2 className='text-lg font-semibold text-gray-800 border-b pb-2'>Shopping Cart</h2>
                    <div className='flex flex-col gap-6'>
                        {/* Items */}
                        {cart.lineItems.map((item) => (
                            <div className='flex gap-4' key={item._id}>
                                {item.image && <Image
                                    src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                                    alt='Product Image'
                                    width={72}
                                    height={96}
                                    className='object-cover rounded-md'
                                />
                                }
                                <div className='flex flex-col justify-between w-full'>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <h3 className='font-semibold text-sm'>{item.productName?.original}</h3>
                                            <div className='p-1 bg-gray-100 rounded-sm text-sm flex items-center gap-2'>{item.quantity && item.quantity > 1 && <div className='text-xs text-gree'>{item.quantity}x</div>}Ksh{item.price?.amount}</div>
                                        </div>
                                        <div className='text-sm text-gray-500'>{item.availability?.status}</div>
                                    </div>
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-gray-500'>Qty: {item.quantity}</span>
                                        <span onClick={() => removeItem(wixClient, item._id!)} className='text-blue-500' style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}>Remove</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Subtotal Section */}
                        <div className='border-t pt-4'>
                            <div className='flex items-center justify-between font-semibold text-sm'>
                                <span>Subtotal</span>
                                <span>Ksh{cart.subtotal.amount}</span>
                            </div>
                            <p className='text-gray-500 text-xs mt-2 mb-4'>Shipping and taxes calculated at checkout.</p>
                            <div className='flex justify-between gap-4'>
                                <button className='w-1/2 py-2 bg-gray-100 text-sm font-medium rounded-md hover:bg-gray-200'>
                                    View Cart
                                </button>
                                <button
                                    className='w-1/2 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 disabled:cursor-not-allowed opacity-70' disabled={isLoading}>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </div>
    )
}