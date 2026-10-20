import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductCard } from '../components/shop/ProductCard';
import { getProductEnquiryUrl } from '../utils/whatsapp';
import { 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft,
  Check
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="font-editorial text-3xl font-bold text-dark mb-4">
          Garment Not Found
        </h2>
        <p className="text-sm text-neutral-500 mb-8">
          The requested garment might have been relocated or updated in our catalog.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 bg-dark hover:bg-brand text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Garments</span>
        </Link>
      </div>
    );
  }

  // Selected State
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');

  // Dynamic WhatsApp enquiry link based on selected variant
  const whatsappUrl = getProductEnquiryUrl(product, selectedSize, selectedColor);

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Shop', path: '/shop' },
            { label: product.categoryLabel, path: `/collections/${product.category}` },
            { label: product.name },
          ]}
        />

        {/* Product Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 mt-4 sm:mt-6">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Featured Image */}
            <div className="aspect-[3/4] w-full bg-ivory rounded-xs overflow-hidden border border-borderSoft relative">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-brand text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-24 rounded-xs overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === img ? 'border-brand shadow-sm' : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* In-store Trial Notice */}
            <div className="p-4 bg-ivory border border-borderSoft rounded-xs text-xs text-neutral-600 flex items-start space-x-3 mt-4">
              <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-dark">Try this garment in-store:</strong> Available for fitting and fabric inspection at our Ghanta Ghar, Ghaziabad shop.
              </div>
            </div>

          </div>

          {/* Right Column: Product Details & Variant Selectors */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand font-bold block mb-1">
                {product.categoryLabel} • {product.subCategory || 'Fixed Price Shop'}
              </span>
              <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-dark tracking-tight">
                {product.name}
              </h1>
              {product.editorialTagline && (
                <p className="font-editorial italic text-base text-neutral-500 mt-1">
                  “{product.editorialTagline}”
                </p>
              )}
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-neutral-50 rounded-xs border border-neutral-200">
              {product.price ? (
                <div className="flex items-baseline space-x-3">
                  <span className="text-2xl sm:text-3xl font-bold text-dark font-sans">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-neutral-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-2xs">
                        Fixed Fair Price
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-brand uppercase tracking-wider">
                    Ask For Price
                  </span>
                  <span className="text-xs text-neutral-500">Contact for live rate</span>
                </div>
              )}
              <p className="text-[11px] text-neutral-500 mt-1">
                Inclusive of all taxes. Special wholesale lot rates available on request.
              </p>
            </div>

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-dark">
                    Select Size: <span className="text-brand font-bold">{selectedSize}</span>
                  </label>
                  <Link
                    to="/visit-store"
                    className="text-[11px] text-neutral-500 hover:text-brand underline"
                  >
                    Need fit assistance?
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-12 py-2 px-3 text-xs font-semibold rounded-xs border transition-all ${
                        selectedSize === sz
                          ? 'border-brand bg-brand text-white shadow-xs'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-2">
                  Select Color: <span className="text-neutral-500 font-normal">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center space-x-2 py-1.5 px-3 rounded-xs border text-xs transition-all ${
                        selectedColor === color.name
                          ? 'border-dark bg-dark text-white font-semibold'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                      {selectedColor === color.name && <Check className="w-3 h-3 text-white ml-1" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Primary Conversion CTA: WhatsApp Enquiry */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2.5 shadow-md group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire via WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/visit-store"
                  className="w-full bg-white hover:bg-neutral-50 text-dark border border-neutral-300 py-3 text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors"
                >
                  Book Store Trial
                </Link>

                <Link
                  to="/wholesale"
                  className="w-full bg-ivory hover:bg-neutral-100 text-dark border border-borderSoft py-3 text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors"
                >
                  Wholesale Enquiry
                </Link>
              </div>

              <p className="text-[11px] text-neutral-400 text-center">
                * Direct WhatsApp opens with product details ({product.name}, Size {selectedSize}, {selectedColor}) pre-filled.
              </p>
            </div>

            {/* Description & Specs Tabs */}
            <div className="pt-6 border-t border-neutral-200 space-y-4">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-dark mb-2">
                  Garment Overview
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                {product.fabric && (
                  <div className="bg-neutral-50 p-3 rounded-xs border border-neutral-100">
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Fabric</span>
                    <span className="text-dark font-medium">{product.fabric}</span>
                  </div>
                )}
                {product.fit && (
                  <div className="bg-neutral-50 p-3 rounded-xs border border-neutral-100">
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Fit Silhouette</span>
                    <span className="text-dark font-medium">{product.fit}</span>
                  </div>
                )}
              </div>

              {/* Garment Features */}
              {product.features && product.features.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-dark mb-2">
                    Key Tailoring Details
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Care Instructions */}
              {product.careInstructions && product.careInstructions.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-dark mb-2">
                    Care Guidelines
                  </h4>
                  <ul className="space-y-1 text-xs text-neutral-500">
                    {product.careInstructions.map((care, idx) => (
                      <li key={idx}>• {care}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Store Guarantee Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-100 text-neutral-600 text-xs">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                  <span>The Fixed Price Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-brand shrink-0" />
                  <span>100% Quality Checked</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products from Category */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-borderSoft">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-1">
                  Complete Your Look
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-dark">
                  Related in {product.categoryLabel}
                </h3>
              </div>
              <Link
                to={`/collections/${product.category}`}
                className="text-xs uppercase tracking-widest font-semibold text-neutral-800 hover:text-brand"
              >
                View Category →
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
