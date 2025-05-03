// src/components/ProductDetails.tsx
import { Product } from '@/types/singlePage.types'
import { useFormatPrice } from '@/hooks/useFormatPrice'

interface ProductDetailsProps {
  product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const formatPrice = useFormatPrice()
  
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-medium">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
      <hr className="h-[3px] bg-red-300" />
      
      <div className="pricing" aria-label="Product pricing">
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl text-red-500">
            {formatPrice(product.price?.price || 0)}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <p className="text-xl text-gray-500 line-through">
              {formatPrice(product.price?.price || 0)}
            </p>
            <h2 className="font-medium text-2xl text-red-500">
              {formatPrice(product.price?.discountedPrice || 0)}
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}