import React, { useState } from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { ProductCategory } from '../../types';
import { BUSINESS_CONFIG } from '../../config/business';
import { ALL_SIZES, ALL_COLORS } from '../../data/products';

export interface FilterState {
  searchQuery: string;
  category: ProductCategory | 'all';
  selectedSize: string | 'all';
  selectedColor: string | 'all';
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc';
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalCount,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const hasActiveFilters = 
    filters.searchQuery !== '' ||
    filters.category !== 'all' ||
    filters.selectedSize !== 'all' ||
    filters.selectedColor !== 'all' ||
    filters.sortBy !== 'featured';

  return (
    <div className="bg-white border-b border-borderSoft pb-6 mb-8">
      
      {/* Top Filter Bar: Search, Quick Category Pills, Sort & Mobile Filter Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search shirts, blazers, trousers..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
            className="w-full pl-10 pr-10 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xs text-xs text-dark placeholder:text-neutral-400 focus:outline-none focus:border-dark transition-colors"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-dark"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right side controls: Sort, Count, Mobile Toggle */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2 sm:space-x-3">
          
          <span className="text-[11px] sm:text-xs text-neutral-500 font-medium whitespace-nowrap">
            Showing <strong className="text-dark">{totalCount}</strong> garments
          </span>

          <div className="flex items-center space-x-2">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-1.5">
              <ArrowUpDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" />
              <select
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
                className="bg-neutral-50 border border-neutral-200 text-[11px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-xs text-dark focus:outline-none focus:border-dark cursor-pointer font-medium max-w-[140px] sm:max-w-none"
              >
                <option value="featured">Featured Collections</option>
                <option value="newest">New Arrivals First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center space-x-1 border border-neutral-200 px-2.5 py-1.5 text-[11px] font-medium text-dark rounded-xs"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Filters</span>
            </button>
          </div>

          {/* Reset Filters button */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="hidden lg:inline-flex items-center space-x-1 text-xs text-brand hover:underline font-semibold"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills (Always accessible on desktop, expandable on mobile) */}
      <div className={`mt-5 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-100">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mr-1">
            Category:
          </span>
          <button
            onClick={() => onFilterChange({ ...filters, category: 'all' })}
            className={`text-xs px-3 py-1.5 rounded-xs transition-colors font-medium ${
              filters.category === 'all'
                ? 'bg-dark text-white'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            All Categories
          </button>
          {BUSINESS_CONFIG.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onFilterChange({ ...filters, category: cat.id as ProductCategory })}
              className={`text-xs px-3 py-1.5 rounded-xs transition-colors font-medium ${
                filters.category === cat.id
                  ? 'bg-dark text-white'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Size and Color Filter Strips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-neutral-100">
          
          {/* Size Filter */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">
              Filter by Size:
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => onFilterChange({ ...filters, selectedSize: 'all' })}
                className={`text-xs px-2.5 py-1 border rounded-xs font-medium transition-colors ${
                  filters.selectedSize === 'all'
                    ? 'border-dark bg-dark text-white'
                    : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                }`}
              >
                All Sizes
              </button>
              {ALL_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => onFilterChange({ ...filters, selectedSize: size })}
                  className={`text-xs px-2.5 py-1 border rounded-xs font-medium transition-colors ${
                    filters.selectedSize === size
                      ? 'border-dark bg-dark text-white'
                      : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">
              Filter by Color:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onFilterChange({ ...filters, selectedColor: 'all' })}
                className={`text-xs px-2.5 py-1 border rounded-xs font-medium transition-colors ${
                  filters.selectedColor === 'all'
                    ? 'border-dark bg-dark text-white'
                    : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                }`}
              >
                All Colors
              </button>
              {ALL_COLORS.map((color) => (
                <button
                  key={color.name}
                  onClick={() => onFilterChange({ ...filters, selectedColor: color.name })}
                  className={`text-xs px-2.5 py-1 border rounded-xs font-medium flex items-center space-x-1.5 transition-colors ${
                    filters.selectedColor === color.name
                      ? 'border-brand text-brand bg-brand/5 font-semibold'
                      : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                  }`}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full border border-neutral-300 inline-block" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Reset Action */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-neutral-100 lg:hidden flex justify-end">
            <button
              onClick={onResetFilters}
              className="text-xs text-brand hover:underline font-semibold flex items-center space-x-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
