// src/types/image.types.ts

export interface ImageItem {
    id: string;
    image: {
      url: string;
      alt?: string;
    };
  }
  
  export interface ProductsImgProps {
    items?: ImageItem[];
  }