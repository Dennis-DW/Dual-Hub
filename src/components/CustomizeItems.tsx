'use client'
import { products } from '@wix/stores'
import React, { useState, useEffect } from 'react'
import { AddItem } from './AddItem'
import { 
  CustomizeItemsProps, 
  OptionProps, 
  OptionChoice
  // SelectedOptions 
} from '@/types/customize-items.types'


const ColorOption = ({ 
  choice, 
  selected, 
  disabled, 
  onClick 
}: { 
  choice: OptionProps
  selected: boolean
  disabled: boolean
  onClick?: () => void 
}) => (
  <li 
    role="button"
    aria-disabled={disabled}
    aria-selected={selected}
    className='w-8 h-8 rounded-full border-2 border-red-500 relative' 
    style={{ 
      background: choice.value, 
      cursor: disabled ? 'not-allowed' : 'pointer' 
    }} 
    onClick={onClick}
  >
    {selected && (
      <div className='absolute w-10 h-10 rounded-full ring-2 ring-blue-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
    )}
    {disabled && (
      <div className='absolute w-10 h-[2px] bg-red-700 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
    )}
  </li>
)

const SizeOption = ({
  choice,
  selected,
  disabled,
  onClick
}: {
  choice: OptionChoice
  selected: boolean
  disabled: boolean
  onClick?: () => void
}) => (
  <li
    role="button"
    aria-disabled={disabled}
    aria-selected={selected}
    className={`
      ring-1 ring-red-500 text-red-400 rounded-md py-1 px-4 text-sm
      ${selected ? 'bg-[#f35c7a] text-white' : ''}
      ${disabled ? 'bg-[#fbcfe8] text-white cursor-not-allowed' : 'bg-white cursor-pointer'}
    `}
    onClick={onClick}
  >
    {choice.description}
  </li>
)

export const CustomizeItems: React.FC<CustomizeItemsProps> = ({ 
  productId, 
  variants, 
  productOptions 
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({})
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>()

  useEffect(() => {
    const variant = variants.find(v => {
      const variantChoices = v.choices
      if (!variantChoices) return false
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      )
    })
    setSelectedVariant(variant)
  }, [selectedOptions, variants])

  const handleOptionsSelect = (optionType: string, choice: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionType]: choice }))
  }

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices
      if (!variantChoices) return false

      return Object.entries(choices).every(
        ([key, value]) => variantChoices[key] === value
      ) && variant.stock?.inStock && variant.stock.quantity! > 0
    })
  }

  return (
    <div className='flex flex-col gap-6'>
      {productOptions.map((option) => (
        <div className='flex flex-col gap-4' key={option.name}>
          <h4 className='font-medium'>Choose a {option.name}</h4>
          <ul className='flex items-center gap-3 bg-yellow-50'>
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({ 
                ...selectedOptions, 
                [option.name!]: choice.description! 
              })
              const selected = selectedOptions[option.name!] === choice.description
              const clickHandler = disabled ? undefined : 
                () => handleOptionsSelect(option.name!, choice.description!)

              return option.name === 'Color' ? (
                <ColorOption
                  key={choice.description}
                  choice={choice}
                  selected={selected}
                  disabled={disabled}
                  onClick={clickHandler}
                />
              ) : (
                <SizeOption
                  key={choice.description}
                  choice={choice}
                  selected={selected}
                  disabled={disabled}
                  onClick={clickHandler}
                />
              )
            })}
          </ul>
        </div>
      ))}
      <AddItem 
        productId={productId} 
        variantId={selectedVariant?._id || '00000000-000000-000000-000000000001'}
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  )
}
