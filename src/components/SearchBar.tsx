'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const SearchBar = () => {
const router = useRouter()

const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
const formData = new FormData(e.currentTarget);
const name = formData.get('name') as string;

if(name){
router.push(`/lis?name=${name}`)
}
}

  return (
    <form className=' flex flex-1 justify-between gap-4 bg-gray-100 p-2 rounded-md' onSubmit={handleSearch}>
        <input type='text'
        name='name'
        placeholder='Search'
        className='flex-1 bg-transparent outline-none'
        />
        <button className='cursor-pointer'>
            <Image src={'/search.png'} alt='search' height={16} width={16}/>
        </button>
    </form>
  )
}
