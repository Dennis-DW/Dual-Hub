import { products } from '@wix/stores';

// Base search parameters (raw from URL)
export interface SearchParams {
  category?: string;
  name?: string;
  type?: string;
  min?: string;
  max?: string;
  sort?: string;
 }

// Parsed search parameters (after processing)
export type ParsedSearchParams = {
  category?: string;
  name?: string;
  type?: ProductType;
  min?: number;
  max?: number;
  sort?: SortOption;
};

// Page props for Next.js pages
export interface PageProps {
  searchParams: SearchParams;
}

// Product list specific props
export interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: ParsedSearchParams; 
}

// Extended product interface
export interface Product extends products.Product {
  slug: string;
  sanitizedDescription?: string;
}

// Sort options for type safety
export type SortOption = 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';

// Product type options
export type ProductType = 'physical' | 'digital';