import React from 'react';
import { products } from '@wix/stores'
import { JSDOM } from 'jsdom'
import createDOMPurify from 'dompurify'
import { Product, ProductListProps, SortOption, ParsedSearchParams, ProductType } from '@/types/search.types'
import { useTruncateText } from '@/hooks/useTruncateText'
import { myWixClientServer } from '@/lib/wixClientServer'
import { ProductGridWrapper } from '@/components/ProductGridWrapper'
import { Pagination } from './Pagination'
import { LoadingFallback } from './LoadingFallback'

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

export const ProductList = async ({
  categoryId,
  limit = 12,
  searchParams,
  showPagination = true,
}: ProductListProps) => {
  const truncateToWords = useTruncateText();
  const wixClient = await myWixClientServer();

  const parsedParams: ParsedSearchParams = {
    ...searchParams,
    min: searchParams?.min ? Number(searchParams.min) : undefined,
    max: searchParams?.max ? Number(searchParams.max) : undefined,
    type: searchParams?.type as ProductType,
    sort: searchParams?.sort as SortOption,
    page: searchParams?.page ? Number(searchParams.page) : 0
  };

  try {
    if (!categoryId) {
      throw new Error('Category ID is required');
    }

    const productQuery = wixClient.products
      .queryProducts()
      .startsWith('name', parsedParams.name || '')
      .hasSome('productType', [parsedParams.type || 'physical', 'digital'])
      .gt('priceData.price', parsedParams.min || 0)
      .lt('priceData.price', parsedParams.max || 99999)
      .eq('collectionIds', categoryId)
      .limit(limit)
      .skip((parsedParams.page || 0) * limit);

    const res = await productQuery.find();

    if (!res.items?.length) {
      return <div className="text-center py-8">No products found in this category</div>;
    }

    let sanitizedProducts = res.items.map((product: products.Product) => ({
      ...product,
      slug: product.slug || 'default-slug',
      _id: product._id || '',
      sanitizedDescription: DOMPurify.sanitize(
        truncateToWords(product.description || 'No description available', 10)
      ),
    }));

    if (parsedParams.sort) {
      const normalizedSort = parsedParams.sort.replace(/\+|\s+/, '_');
      const [field, direction] = normalizedSort.split('_');

      if (field === 'price' || field === 'name') {
        sanitizedProducts.sort((a, b) => {
          const valueA = field === 'price' ? (a.priceData?.price || 0) : (a.name || '');
          const valueB = field === 'price' ? (b.priceData?.price || 0) : (b.name || '');
          return direction === 'asc'
            ? (field === 'price' ? Number(valueA) - Number(valueB) : (valueA as string).localeCompare(valueB as string))
            : (field === 'price' ? Number(valueB) - Number(valueA) : (valueB as string).localeCompare(valueA as string));
        });
      }
    }

    return (
      <div className="flex flex-col gap-8 mt-12">
        <ProductGridWrapper products={sanitizedProducts} />
        {showPagination !== false && (
          <div className="flex justify-center mt-8">
            <Pagination
              currentPage={parsedParams.page ?? 0}
              hasPrev={(parsedParams.page || 0) > 0}
              hasNext={sanitizedProducts.length === limit}
            />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className="text-red-500 text-center py-8">
        <div className="flex justify-center mb-4">
          <svg
            className="w-12 h-12 text-red-400 animate-bounce mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <LoadingFallback />
      </div>
    );
  }
};