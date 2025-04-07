// src/types/Slug_product.types.ts
import { products } from '@wix/stores'

export interface SinglePageProps {
  params: {
    slug: string
  }
}

export interface Product extends products.Product {
  slug: string
  media?: {
    items: any[]
  }
  productOptions?: products.ProductOption[]
  variants?: products.Variant[]
  additionalInfoSections?: {
    title: string
    description: string
  }[]
}