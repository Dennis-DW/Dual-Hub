import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/search.types'
import { useFormatPrice } from '@/hooks/useFormatPrice'

interface ProductCardProps {
  product: Product & {
    sanitizedDescription: string
  }
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = useFormatPrice()

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col gap-4 w-full transition-transform hover:scale-[1.02]"
    >
      <div className="relative w-full h-80 overflow-hidden rounded-md">
        <Image
          src={product.media?.mainMedia?.image?.url || '/product.png'}
          alt={product.name || 'Product image'}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 22vw"
          className="object-cover absolute z-10 group-hover:opacity-0 transition-opacity duration-500"
        />
        {product.media?.items?.[1] && (
          <Image
            src={product.media.items[1].image?.url || '/product.png'}
            alt={`Secondary view of ${product.name || 'product'}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 22vw"
            className="object-cover absolute"
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <h3 className="font-medium truncate">
          {product.name || 'Unnamed Product'}
        </h3>
        <span className="font-semibold text-red-500">
          {product.price?.price
            ? formatPrice(product.price.price)
            : 'Price not available'}
        </span>
      </div>

      <div
        className="text-sm text-gray-600 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: product.sanitizedDescription }}
      />

      <button
        className="w-max rounded-2xl ring-1 ring-red-500 text-yellow-50 py-2 px-4 text-sm 
          hover:bg-white hover:text-black transition-colors"
        aria-label={`Add ${product.name || 'product'} to cart`}
      >
        Add to cart
      </button>
    </Link>
  )
}