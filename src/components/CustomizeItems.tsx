import React from 'react'

export const CustomizeItems = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a Color</h4>

      <ul className='flex items-center gap-3 bg-yellow-50'>
        {/* Red Circle */}
        <li className='w-8 h-8 rounded-full border-2 border-red-500 cursor-pointer relative bg-red-500'>
          <div className='absolute w-10 h-10 rounded-full ring-2 ring-blue-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        </li>
        {/* Black Circle */}
        <li className='w-8 h-8 rounded-full border-2 border-black cursor-pointer relative bg-black'>
        </li>
        {/* White Circle */}
        <li className='w-8 h-8 rounded-full border-2 border-gray-300 cursor-not-allowed relative bg-white'>
          <div className='absolute w-10 h-[2px] bg-red-700 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        </li>
      </ul>

      <h4 className='font-medium'>Choose a Size</h4>
      <ul className='flex items-center gap-3'>
      <li className='ring-1 ring-red-500 text-red-400 rounded-md py-1 px-4 text-sm cursor-pointer'>
        Small
      </li>
      <li className='ring-1 ring-red-500 text-white bg-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer'>
        medium
      </li>
      <li className='ring-1 ring-yellow-100 text-white bg-pink-100 rounded-md py-1 px-4 text-sm cursor-not-allowed'>
        Large
      </li>
      </ul>
    </div>
  )
}