import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.subCategory?.toLowerCase().includes(q)
    );
  }).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-xs shadow-2xl border border-neutral-200 overflow-hidden z-10 animate-fadeIn">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center space-x-3 bg-white">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search garments, blazers, shirts, denims, kurtas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-dark placeholder:text-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-dark"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-brand"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === '' ? (
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Navy Blazer', 'Formal Shirt', 'Stretch Jeans', 'Ethnic Kurta', 'Supima T-Shirt', 'Italian Trouser'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                Matching Garments ({results.length})
              </span>
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center space-x-4 p-2 rounded-xs hover:bg-neutral-50 transition-colors group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-18 object-cover rounded-2xs bg-neutral-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-brand font-semibold block">
                      {product.categoryLabel}
                    </span>
                    <h4 className="font-editorial text-sm font-bold text-dark group-hover:text-brand transition-colors truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs font-semibold text-neutral-700">
                      {product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Ask for Price'}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-neutral-500">
              No garments found matching “{query}”. Try another keyword or browse our categories.
            </div>
          )}
        </div>

        {/* Footer Link */}
        <div className="p-3 bg-neutral-50 border-t border-neutral-100 text-center">
          <Link
            to="/shop"
            onClick={onClose}
            className="text-xs font-semibold text-brand hover:underline"
          >
            Explore Full Catalog →
          </Link>
        </div>

      </div>
    </div>
  );
};
