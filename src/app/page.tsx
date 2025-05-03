import { ProductList } from "@/components/ProductList"
import { Slider } from "@/components/Slider"
import { CategoryList } from "@/components/CategoryList"
import { Suspense } from "react"
import { LoadingFallback } from "@/components/LoadingFallback"


const HomePage = async () => {
  return (
    <main className="min-h-screen">
      <Slider />
      <section className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-bold">Featured Wear</h1>
        <Suspense fallback={<LoadingFallback />}>
          <ProductList 
            categoryId={process.env.NEXT_PUBLIC_FEATURED_CLOTHES!} 
            limit={4} 
            showPagination={false}
          />
        </Suspense>
      </section>

      <section className="mt-24">
        <h2 className="text-2xl font-bold mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h2>
        <Suspense fallback={<LoadingFallback />}>
          <CategoryList />
        </Suspense>
      </section>

      <section className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl font-bold">New Clothing</h2>
        <Suspense fallback={<LoadingFallback />}>
          <ProductList 
            categoryId={process.env.NEXT_PUBLIC_NEW_CLOTHES!} 
            limit={8}
            showPagination={false}
          />
        </Suspense>
      </section>
    </main>
  )
}

export default HomePage;