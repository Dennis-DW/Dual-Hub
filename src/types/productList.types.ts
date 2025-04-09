import { products } from '@wix/stores';

export interface Product extends products.Product {
    slug: string;
    _id: string;
  }
  
  export interface ProductListProps {
    categoryId: string;
    limit?: number;
    searchParams: { [key: string]: string | string[] | undefined };
  }