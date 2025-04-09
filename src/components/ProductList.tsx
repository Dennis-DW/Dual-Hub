import { products } from '@wix/stores'
import { JSDOM } from 'jsdom'
import createDOMPurify from 'dompurify'
import { Product, ProductListProps, SortOption, ParsedSearchParams, ProductType } from '@/types/search.types'
import { useTruncateText } from '@/hooks/useTruncateText'
import { myWixClientServer } from '@/lib/wixClientServer'
import { ProductCard } from '@/components/ProductCard'

// Server-side DOMPurify setup
const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

export const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: ProductListProps) => {
  const truncateToWords = useTruncateText();
  const wixClient = await myWixClientServer();

  const parsedParams: ParsedSearchParams = {
    ...searchParams,
    min: searchParams?.min ? Number(searchParams.min) : undefined,
    max: searchParams?.max ? Number(searchParams.max) : undefined,
    type: searchParams?.type as ProductType,
    sort: searchParams?.sort as SortOption,
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
      .limit(limit || 20);

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

    // Manual sorting
    if (parsedParams.sort) {
      const normalizedSort = parsedParams.sort.replace(/\+|\s+/, '_');
      const [field, direction] = normalizedSort.split('_');

      console.log(`Sort parsing: raw=${parsedParams.sort}, normalized=${normalizedSort}, field=${field}, direction=${direction}`);

      if (field === 'price') {
        sanitizedProducts.sort((a, b) => {
          const priceA = a.priceData?.price || 0;
          const priceB = b.priceData?.price || 0;
          return direction === 'asc' ? priceA - priceB : priceB - priceA;
        });
      } else if (field === 'name') {
        sanitizedProducts.sort((a, b) => {
          const nameA = a.name || '';
          const nameB = b.name || '';
          return direction === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
      }

      console.log(`Manually sorted products (${field} ${direction}):`, 
        sanitizedProducts.slice(0, 3).map(p => ({ name: p.name, price: p.priceData?.price })));
    }

    return (
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sanitizedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className="text-red-500 text-center py-8">
        Failed to load products. Please try again later.
      </div>
    );
  }
};