import { AddItem } from '@/components/AddItem'
import { CustomizeItems } from '@/components/CustomizeItems'
import { ProductsImg } from '@/components/ProductsImg'
import { ProductDetails } from '@/components/ProductDetails'
import { myWixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import { SinglePageProps } from '@/types/singlePage.types'
import { ErrorBoundary } from 'react-error-boundary'

const SinglePage = async ({ params }: SinglePageProps) => {
  try {
    const wixClient = await myWixClientServer()
    const { items } = await wixClient.products
      .queryProducts()
      .eq('slug', params.slug)
      .find()

    if (!items[0]) return notFound()

    const product = items[0]

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
          <Suspense fallback={<LoadingSpinner />}>
            <section className="w-full lg:w-1/2 lg:sticky top-20 h-max" aria-label="Product images">
              <ProductsImg items={product.media?.items} />
            </section>

            <section className="w-full lg:w-1/2 mt-10">
              <ProductDetails product={product} />
              
              {product.variants && product.productOptions ? (
                <CustomizeItems 
                  productId={product._id} 
                  variants={product.variants} 
                  productOptions={product.productOptions} 
                />
              ) : (
                <AddItem 
                  productId={product._id} 
                  variantId='00000000-000000-000000-000000000001' 
                  stockNumber={product.stock?.quantity || 0} 
                />
              )}

              {product.additionalInfoSections?.map((section) => (
                <article className="text-sm mt-6" key={section.title}>
                  <h3 className="font-medium mb-4">{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </section>
          </Suspense>
        </div>
      </ErrorBoundary>
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