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
    <div className="group flex flex-col bg-white border border-borderSoft hover:border-dark/40 transition-all duration-300 rounded-xs overflow-hidden">
      
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
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs shadow-xs">
              {product.badge}
            </span>
          )}
          {product.isNewArrival && !product.badge && (
            <span className="bg-dark text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs shadow-xs">
              New Arrival
            </span>
          )}
        </div>

        {/* Quick WhatsApp Action on hover */}
        <div className="absolute bottom-3 right-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2 z-10 pointer-events-none group-hover:pointer-events-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/95 hover:bg-emerald-600 hover:text-white text-dark text-xs font-semibold uppercase tracking-wider py-2.5 px-3 rounded-xs shadow-md backdrop-blur-xs flex items-center justify-center space-x-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
            <span>Enquire</span>
          </a>
          <Link
            to={`/product/${product.slug}`}
            className="w-10 h-10 bg-dark hover:bg-brand text-white flex items-center justify-center rounded-xs shadow-md transition-colors"
            title="View Details"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400 block mb-1">
            {product.categoryLabel}
          </span>
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-editorial text-base font-bold text-dark group-hover:text-brand transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
            {product.editorialTagline || product.description}
          </p>
        </div>

        {/* Available Sizes & Colors Preview */}
        <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-[10px] text-neutral-400 font-medium mr-1 uppercase">Sizes:</span>
            {product.sizes.slice(0, 3).map((sz) => (
              <span key={sz} className="text-[10px] border border-neutral-200 px-1.5 py-0.5 rounded-2xs text-neutral-600">
                {sz}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[10px] text-neutral-400 font-medium">+{product.sizes.length - 3}</span>
            )}
          </div>

          {/* Price display */}
          <div className="text-right">
            {product.price ? (
              <div className="flex items-baseline space-x-1.5">
                {product.originalPrice && (
                  <span className="text-[11px] text-neutral-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-sm font-bold text-dark font-sans">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>
            ) : (
              <span className="text-xs font-semibold text-brand tracking-wider uppercase">
                Ask for Price
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
