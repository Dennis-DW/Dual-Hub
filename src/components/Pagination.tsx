'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export const Pagination = ({
  currentPage,
  hasNext,
  hasPrev,
}: {
  currentPage: number
  hasNext: boolean
  hasPrev: boolean
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='mt-12 flex items-center justify-center gap-6 w-full max-w-lg mx-auto'>
      <button
        className='rounded-lg bg-gradient-to-r from-rose-500 to-red-500 text-white px-4 py-2 text-sm font-medium shadow-md transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        ← Previous
      </button>

      <span className='px-4 py-2 text-base font-semibold text-gray-800 bg-gray-100 rounded-lg shadow-sm min-w-[3rem] text-center'>
        {currentPage + 1}
      </span>

      <button
        className='rounded-lg bg-gradient-to-r from-rose-500 to-red-500 text-white px-4 py-2 text-sm font-medium shadow-md transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next →
      </button>
    </div>
  )
}
