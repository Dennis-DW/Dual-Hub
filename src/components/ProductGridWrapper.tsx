'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@wix/stores'

export const ProductGridWrapper = ({
  products,
}: {
  products: (products.Product & { _id: string; sanitizedDescription: string })[]
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={JSON.stringify(products.map(p => p._id))} 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
