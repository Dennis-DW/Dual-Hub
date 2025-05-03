import { myWixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Category } from '@/types/categoryList.types'

export const CategoryList = async () => {
  try {
    const wixClient = await myWixClientServer()
    const categories = await wixClient.collections.queryCollections().find() as { items: Category[] }

    if (!categories?.items?.length) {
      return <div className='text-center py-10 text-pink-400'>No categories found</div>
    }

    return (
      <div className='px-4 overflow-x-scroll scrollbar-hide py-6' role="region" aria-label="Categories">
        <div className='flex gap-6 md:gap-10'>
          {categories.items.map((item: Category) => (
            <Link
              href={`/list?category=${item.slug}`}
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 transition-transform hover:scale-105'
              key={item._id}
            >
              <div className='relative bg-pink-100 w-full h-80 rounded-2xl shadow-md overflow-hidden'>
                <Image
                  src={item.media?.mainMedia?.image?.url || '/cat.png'}
                  alt={item.name || 'Category image'}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  className='object-cover rounded-2xl'
                  loading="lazy"
                />
              </div>
              <h2 className="mt-4 text-lg font-light tracking-wider text-gray-800">
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading categories:', error)
    return <div className='text-red-400 text-center py-6' role="alert">Failed to load categories</div>
  }
}