// src/types/search.types.ts

export interface SearchParams {
    category?: string;
    [key: string]: string | undefined;
  }
  
  export interface PageProps {
    searchParams: SearchParams;
  }