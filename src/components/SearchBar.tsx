'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const SearchBar = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/lis?name=${name}`)
    }
  }

  return (
    <form
      className='flex flex-1 justify-between items-center max-w-2xl mx-auto gap-3 
                 bg-white/90 backdrop-blur-sm p-3 rounded-full 
                 shadow-lg ring-1 ring-gray-200 
                 hover:ring-2 hover:ring-pink-200 hover:shadow-blue-100
                 transition-all duration-300 ease-in-out'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        name='name'
        placeholder='Search anything...'
        className='flex-1 bg-transparent outline-none text-gray-800 
                   placeholder-gray-400 text-base px-4
                   focus:placeholder-gray-300 transition-colors'
      />
      <button
        className='cursor-pointer p-2.5 rounded-full
                   bg-gradient-to-r from-blue-500 to-blue-600
                   hover:from-blue-600 hover:to-blue-700
                   active:scale-95 transform transition-all duration-200
                   shadow-md hover:shadow-lg'
      >
        <Image
          src={'/search.png'}
          alt='search'
          height={20}
          width={20}
          className='invert brightness-200'
        />
      </button>
    </form>
  )
}
