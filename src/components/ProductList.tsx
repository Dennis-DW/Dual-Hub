'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href={'/test'} className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
                <div className='relative w-full h-80'>
                    <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src={'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>%50</span>
                </div>
                <div className='text-sm text-gray-600'>My Description</div>
                <button className='w-max rounded-2xl ring-1 ring-red-500 text-yellow-50 py-2 px-4 text-sm hover:bg-white hover:text-black '>Add to cart</button>
            </Link>
            <Link href={'/test'} className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
                <div className='relative w-full h-80'>
                    <Image src={'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>%50</span>
                </div>
                <div className='text-sm text-gray-600'>My Description</div>
                <button className='w-max rounded-2xl ring-1 ring-red-500 text-yellow-50 py-2 px-4 text-sm hover:bg-white hover:text-black '>Add to cart</button>
            </Link>
            <Link href={'/test'} className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
                <div className='relative w-full h-80'>
                    <Image src={'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>%50</span>
                </div>
                <div className='text-sm text-gray-600'>My Description</div>
                <button className='w-max rounded-2xl ring-1 ring-red-500 text-yellow-50 py-2 px-4 text-sm hover:bg-white hover:text-black '>Add to cart</button>
            </Link>
            <Link href={'/test'} className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
                <div className='relative w-full h-80'>
                    <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src={'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='25vw' className='object-cover absolute rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>%50</span>
                </div>
                <div className='text-sm text-gray-600'>My Description</div>
                <button className='w-max rounded-2xl ring-1 ring-red-500 text-yellow-50 py-2 px-4 text-sm hover:bg-white hover:text-black '>Add to cart</button>
            </Link>
        </div>
    )
}
