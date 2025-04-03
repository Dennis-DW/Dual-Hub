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
      className='flex flex-1 justify-between gap-4 bg-white p-2 rounded-full shadow-md ring-1 ring-gray-300 hover:ring-gray-400 transition duration-300' 
      onSubmit={handleSearch}
    >
      <input 
        type='text'
        name='name'
        placeholder='Search...'
        className='flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 px-4'
      />
      <button className='cursor-pointer p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300'>
        <Image src={'/search.png'} alt='search' height={18} width={18} className='invert'/>
      </button>
    </form>
  )
}
