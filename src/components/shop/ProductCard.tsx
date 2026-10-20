import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Product } from '../../types';
import { getProductEnquiryUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = getProductEnquiryUrl(product);

  return (
    <div className="group flex flex-col bg-white border border-borderSoft hover:border-dark/30 hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 rounded-xs overflow-hidden">
      
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="bg-brand text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-2xs sm:rounded-xs shadow-xs">
              {product.badge}
            </span>
          )}
          {product.isNewArrival && !product.badge && (
            <span className="bg-dark text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-2xs sm:rounded-xs shadow-xs">
              New Arrival
            </span>
          )}
        </div>

        {/* Quick WhatsApp Action on hover */}
        <div className="absolute bottom-2 right-2 left-2 sm:bottom-3 sm:right-3 sm:left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-1.5 sm:gap-2 z-10 pointer-events-none group-hover:pointer-events-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/95 hover:bg-emerald-600 hover:text-white text-dark text-[11px] sm:text-xs font-semibold uppercase tracking-wider py-2 sm:py-2.5 px-2 sm:px-3 rounded-xs shadow-md backdrop-blur-xs flex items-center justify-center space-x-1 sm:space-x-1.5 transition-colors"
          >
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 group-hover:text-white" />
            <span>Enquire</span>
          </a>
          <Link
            to={`/product/${product.slug}`}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-dark hover:bg-brand text-white flex items-center justify-center rounded-xs shadow-md transition-colors"
            title="View Details"
          >
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-semibold text-neutral-400 block mb-0.5 sm:mb-1">
            {product.categoryLabel}
          </span>
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-editorial text-xs sm:text-base font-bold text-dark group-hover:text-brand transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5 sm:mt-1 line-clamp-1 hidden xs:block">
            {product.editorialTagline || product.description}
          </p>
        </div>

        {/* Available Sizes & Action Link (Prices removed per store policy) */}
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center space-x-1 flex-wrap overflow-hidden">
            <span className="text-[9px] sm:text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mr-0.5">Sizes:</span>
            {product.sizes.slice(0, 2).map((sz) => (
              <span 
                key={sz} 
                className="text-[9px] sm:text-[10px] border border-neutral-200 px-1 py-0.5 rounded-2xs text-neutral-700 bg-neutral-50/70 font-medium"
              >
                {sz}
              </span>
            ))}
            {product.sizes.length > 2 && (
              <span className="text-[9px] sm:text-[10px] text-neutral-400 font-medium">+{product.sizes.length - 2}</span>
            )}
          </div>

          {/* Clean Editorial Action replacing price with seamless alignment */}
          <Link
            to={`/product/${product.slug}`}
            className="text-right shrink-0 pl-1 group/action"
            title={`View ${product.name}`}
          >
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-500 group-hover:text-brand transition-colors inline-flex items-center">
              <span className="hidden xs:inline">Details</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5 text-neutral-400 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};
