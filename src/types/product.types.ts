// src/types/product.types.ts

export interface ProductPrice {
    price: number
    discountedPrice: number
  }
  
  export interface ProductMedia {
    items: Array<{
      url: string
      alt?: string
    }>
  }
  
  export interface AdditionalSection {
    title: string
    description: string
  }
  
  export interface Product {
    name: string
    description: string
    price?: ProductPrice
    media?: ProductMedia
    additionalInfoSections?: AdditionalSection[]
    slug: string
  }
  
  export interface SinglePageProps {
    params: {
      slug: string
    }
  }