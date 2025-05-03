// useTruncateText.tsx
import { useMemo } from 'react';

export const useTruncateText = () => {
  const truncateToWords = useMemo(() => (text: string, wordLimit: number): string => {
    if (!text) return '';
    
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    
    return words.slice(0, wordLimit).join(' ') + '...';
  }, []);

  return truncateToWords;
};