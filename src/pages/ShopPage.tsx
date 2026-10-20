import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductFilters, FilterState } from '../components/shop/ProductFilters';
import { ProductGrid } from '../components/shop/ProductGrid';
import { PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';
import { Info } from 'lucide-react';

interface ShopPageProps {
  initialCategory?: ProductCategory | 'all';
  pageTitle?: string;
  pageSubtitle?: string;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  initialCategory = 'all',
  pageTitle = 'Shop All Collections',
  pageSubtitle = 'Explore our fixed-price menswear collection in Ghanta Ghar, Ghaziabad. Don’t compare the price, compare the quality.',
}) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: initialCategory,
    selectedSize: 'all',
    selectedColor: 'all',
    sortBy: 'featured',
  });

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      selectedSize: 'all',
      selectedColor: 'all',
      sortBy: 'featured',
    });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Search Query filter
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.categoryLabel.toLowerCase().includes(query);
        const matchesSub = product.subCategory?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat && !matchesSub) {
          return false;
        }
      }

      // Size filter
      if (filters.selectedSize !== 'all') {
        if (!product.sizes.includes(filters.selectedSize)) {
          return false;
        }
      }

      // Color filter
      if (filters.selectedColor !== 'all') {
        const hasColor = product.colors.some(
          (c) => c.name.toLowerCase() === filters.selectedColor.toLowerCase()
        );
        if (!hasColor) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'newest') {
        return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      }
      if (filters.sortBy === 'price-asc') {
        return (a.price || 0) - (b.price || 0);
      }
      if (filters.sortBy === 'price-desc') {
        return (b.price || 0) - (a.price || 0);
      }
      // 'featured'
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filters]);

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'Shop', path: '/shop' }, { label: pageTitle }]} />

        {/* Page Header */}
        <div className="pt-4 pb-8 border-b border-borderSoft mb-8">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            1st Look Garments Catalog
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-dark tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl font-light">
            {pageSubtitle}
          </p>

          {/* Sample Data Disclaimer Note per prompt instructions */}
          <div className="mt-4 p-3 bg-ivory border border-neutral-200 rounded-xs flex items-center space-x-2.5 text-xs text-neutral-600">
            <Info className="w-4 h-4 text-brand shrink-0" />
            <span>
              <strong>Note:</strong> Items shown represent curated garment styles available at our Ghaziabad store. Click any item to inquire about live stock, exact sizes, or wholesale rates on WhatsApp.
            </span>
          </div>
        </div>

        {/* Filters and Controls */}
        <ProductFilters
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
          totalCount={filteredProducts.length}
        />

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onClearFilters={handleResetFilters}
        />

      </div>
    </div>
  );
};
