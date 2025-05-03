import { products } from '@wix/stores'

export interface CustomizeItemsProps {
  productId: string
  variants: products.Variant[]
  productOptions: products.ProductOption[]
}

export interface OptionChoice {
  value: string
  description: string
}

export interface OptionProps {
  choice: OptionChoice
  selected: boolean
  disabled: boolean
  onClick?: () => void
}

export interface SelectedOptions {
  [key: string]: string
}