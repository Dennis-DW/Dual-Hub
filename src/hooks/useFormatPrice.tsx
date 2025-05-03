// src/hooks/useFormatPrice.ts

import { useMemo } from 'react';

export const useFormatPrice = () => {
  const formatPrice = useMemo(() => (price: number): string => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  }, []);

  return formatPrice;
};