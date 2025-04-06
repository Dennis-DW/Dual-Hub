// Category Types
export interface Category {
    _id: string;
    slug: string;
    name: string;
    media?: {
      mainMedia?: {
        image?: {
          url: string;
        };
      };
    };
  }
  