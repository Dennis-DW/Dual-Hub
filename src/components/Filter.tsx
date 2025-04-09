'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useState, useCallback } from 'react'
import { FaFilter } from 'react-icons/fa'
import { FilterProps } from '@/types/filter.types'

export const Filter: React.FC<FilterProps> = ({ defaultValues }) => {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      try {
        setIsLoading(true)
        const { name, value } = e.target
        const params = new URLSearchParams(searchParams.toString())

        if (value && value !== 'default') {
          // Validate number inputs
          if (name === 'min' || name === 'max') {
            const numValue = Number(value)
            if (isNaN(numValue) || numValue < 0) return

            // Optional: Ensure min <= max
            if (name === 'min' && params.get('max')) {
              const max = Number(params.get('max'))
              if (numValue > max) params.set('max', value)
            } else if (name === 'max' && params.get('min')) {
              const min = Number(params.get('min'))
              if (numValue < min) params.set('min', value) 
            }
          }
          params.set(name, value)
        } else {
          params.delete(name)
        }

        console.log('Updated URL Params:', params.toString()) 
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
      } catch (error) {
        console.error('Filter change error:', error)
      } finally {
        setIsLoading(false)
      }
    },
    [pathname, searchParams, router]
  )

  return (
    <div className="mt-12 flex flex-wrap justify-between items-center bg-white p-4 rounded-xl shadow-md">
      <div className="flex gap-4 flex-wrap items-center">
        <select
          name="type"
          className="filter-select"
          onChange={handleFilterChange}
          defaultValue={searchParams.get('type') || 'default'}
          disabled={isLoading}
        >
          <option value="default">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          type="number"
          name="min"
          placeholder="Min Price"
          className="filter-input"
          onChange={handleFilterChange}
          defaultValue={searchParams.get('min') || ''}
          min="0"
          disabled={isLoading}
        />
        <input
          type="number"
          name="max"
          placeholder="Max Price"
          className="filter-input"
          onChange={handleFilterChange}
          defaultValue={searchParams.get('max') || ''}
          min="0"
          disabled={isLoading}
        />

        <select
          name="sort"
          className="filter-select"
          onChange={handleFilterChange}
          defaultValue={searchParams.get('sort') || 'default'}
          disabled={isLoading}
        >
          <option value="default">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <FaFilter className={`${isLoading ? 'text-gray-400' : 'text-yellow-500'}`} />
      </div>
    </div>
  )
}

