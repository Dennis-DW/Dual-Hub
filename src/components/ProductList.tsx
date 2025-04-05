// src/components/ProductList.tsx
import Image from 'next/image';
import Link from 'next/link';
import { myWixClientServer } from '@/lib/wixClientServer';
import { products } from '@wix/stores';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

// Server-side DOMPurify setup
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

interface Product extends products.Product {
  slug: string;
  _id: string;
}

interface ProductListProps {
  categoryId: string;
  limit?: number;
}

const truncateToWords = (text: string, wordLimit: number): string => {
  const words = text?.split(' ') || [];
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

export const ProductList = async ({ categoryId, limit }: ProductListProps) => {
  const wixClient = await myWixClientServer();

  try {
    if (!categoryId) {
      throw new Error('Category ID is required');
    }

    const res = await wixClient.products
      .queryProducts()
      .eq('collectionIds', categoryId) 
      .limit(limit || 20)
      .find();

    if (!res.items?.length) {
      return <div>No products found in this category</div>;
    }

    // Pre-sanitize descriptions server-side
    const sanitizedProducts = res.items.map((product: products.Product) => ({
      ...product,
      slug: product.slug || 'default-slug',
      _id: product._id || '', // Ensure _id is always present
      sanitizedDescription: DOMPurify.sanitize(
        truncateToWords(product.description || 'No description available', 10)
      ),
    }));

    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {sanitizedProducts.map((product: Product & { sanitizedDescription: string }) => (
          <Link
            href={`/product/${product.slug}`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || '/product.png'}
                alt={product.name || 'Product image'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 22vw"
                className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
              />
              {product.media?.items?.[1] && (
                <Image
                  src={product.media.items[1].image?.url || '/product.png'}
                  alt={`Secondary view of ${product.name || 'product'}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 22vw"
                  className="object-cover absolute rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name || 'Unnamed Product'}</span>
              <span className="font-semibold">
                {product.price?.price
                  ? `$${product.price.price.toFixed(2)}`
                  : 'Price not available'}
              </span>
            </div>
            <div
              className="text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: product.sanitizedDescription }}
            />
            <button
              className="w-max rounded-2xl ring-1 ring-red-500 text-yellow-50 py-2 px-4 text-sm hover:bg-white hover:text-black transition-colors"
              aria-label={`Add ${product.name || 'product'} to cart`}
            >
              Add to cart
            </button>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className="text-red-500">Failed to load products. Please try again later.</div>
    );
  }
};