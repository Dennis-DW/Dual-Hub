'use client'

import Link from 'next/link'
import React from 'react'
import { MobileMenu } from './MobileMenu'
import Image from 'next/image'
import { SearchBar } from './SearchBar'
import NavIcons from './NavIcons'

export const Navbar = () => {

  
  return (
    <>
      {/* Navbar */}
      <div className='fixed top-0 left-0 w-full h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-50 shadow-md bg-white'>
        <div className='h-full flex items-center justify-between md:hidden'>
          {/* Small Screens */}
          <Link href='/'>
            <div className='text-lg tracking-wide font-semibold text-gray-800'>Dual Hub</div>
          </Link>
          <MobileMenu />
        </div>
        {/* Large Screens */}
        <div className='hidden md:flex items-center h-full justify-between gap-8'>
          <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
            <Link href='/' className='flex items-center gap-3'>
              <Image src='/logo.png' alt='Menu' height={32} width={32} className='rounded-full shadow-md' />
              <div className='text-lg tracking-wide font-semibold text-gray-800'>Dual Hub</div>
            </Link>
            <div className='hidden xl:flex gap-6 font-medium text-gray-700'>
              <Link href='/' className='hover:text-pink-500 transition duration-300'>Homepage</Link>
              <Link href='/' className='hover:text-pink-500 transition duration-300'>Shop</Link>
              <Link href='/' className='hover:text-pink-500 transition duration-300'>About</Link>
              <Link href='/' className='hover:text-pink-500 transition duration-300'>Contact</Link>
            </div>
          </div>
          <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
            <SearchBar />
            <div className='flex items-center'>
              <NavIcons />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent overlap */}
      <div className='h-20'></div>
    </>
  )
}