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
      className='flex flex-1 justify-between items-center max-w-2xl mx-auto 
                 bg-white border border-gray-300 rounded-full overflow-hidden
                 hover:border-gray-400 focus-within:border-blue-500 focus-within:shadow-md
                 transition-all duration-200'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        name='name'
        placeholder='Search'
        className='flex-1 py-2 px-3 bg-transparent outline-none text-gray-900
                   placeholder-gray-500 text-base
                   focus:placeholder-gray-400'
      />
      <button
        className='px-6 py-2 bg-gray-100 hover:bg-gray-200
                   border-l border-gray-300
                   transition-colors duration-200
                   flex items-center justify-center'
        aria-label="Search"
      >
        <Image
          src='/search.png'
          alt='search'
          width={20}
          height={20}
          className='opacity-60'
        />
      </button>
    </form>
  )
}



