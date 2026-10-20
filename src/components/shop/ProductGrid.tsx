import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { Sparkles, RefreshCw } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onClearFilters?: () => void;
  isLoading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onClearFilters,
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-white border border-neutral-100 rounded-xs p-4">
            <div className="bg-neutral-100 aspect-[3/4] w-full rounded-xs mb-4"></div>
            <div className="h-4 bg-neutral-100 rounded w-1/3 mb-2"></div>
            <div className="h-5 bg-neutral-100 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-ivory border border-borderSoft rounded-xs p-12 text-center max-w-xl mx-auto my-12">
        <Sparkles className="w-8 h-8 text-neutral-400 mx-auto mb-4" />
        <h3 className="font-editorial text-2xl font-bold text-dark mb-2">
          No Garments Found
        </h3>
        <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
          We couldn't find any garments matching your exact filters. Try adjusting your search query, selecting another category, or resetting your filters.
        </p>
        {onClearFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center space-x-2 bg-dark hover:bg-brand text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
