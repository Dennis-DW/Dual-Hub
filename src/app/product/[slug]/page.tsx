import { AddItem } from '@/components/AddItem'
import { CustomizeItems } from '@/components/CustomizeItems'
import { ProductsImg } from '@/components/ProductsImg'
import { myWixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Product, SinglePageProps } from '@/types/product.types'
import { useFormatPrice } from '@/hooks/useFormatPrice';


const SinglePage = async ({ params }: SinglePageProps) => {
  const formatPrice = useFormatPrice();

  try {
    const wixClient = await myWixClientServer()
    const { items } = await wixClient.products
      .queryProducts()
      .eq('slug', params.slug)
      .find()

    if (!items[0]) return notFound()

    const product = items[0] as Product
    

    return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        <Suspense fallback={<LoadingSpinner />}>
          <section className="w-full lg:w-1/2 lg:sticky top-20 h-max" aria-label="Product images">
            <ProductsImg items={product.media?.items} />
          </section>

          <section className="w-full lg:w-1/2 mt-10 flex flex-col gap-6">
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

            <hr className="h-[3px] bg-red-300" />

            <CustomizeItems />
            <AddItem />

            <hr className="h-[3px] bg-red-300" />

            {product.additionalInfoSections?.map((section) => (
              <article className="text-sm" key={section.title}>
                <h3 className="font-medium mb-4">{section.title}</h3>
                <p>{section.description}</p>
              </article>
            ))}
          </section>
        </Suspense>
      </div>
    )
  } catch (error) {
    console.error('Error loading product:', error)
    return (
      <div role="alert" className="text-red-500 text-center py-8">
        Failed to load product. Please try again later.
      </div>
    )
  }
}

export default SinglePage