import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
        <Link href={'/List?cat=test'} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-200 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' fill sizes='30vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-clip tracking-wide'>Category Name</h1>
        </Link>
      </div>
    </div>
  )
}
