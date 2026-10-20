import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandPhilosophy } from '../components/home/BrandPhilosophy';
import { CategoryGallery } from '../components/home/CategoryGallery';
import { FashionEditorial } from '../components/home/FashionEditorial';
import { StoreVisitInvitation } from '../components/home/StoreVisitInvitation';
import { InstagramSection } from '../components/home/InstagramSection';
import { ProductCard } from '../components/shop/ProductCard';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  // Curated new arrivals for homepage
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival || p.isFeatured).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Editorial Hero Campaign with 2s Dynamic Slideshow */}
      <HeroSection />

      {/* Brand Philosophy & Slogan */}
      <ScrollReveal>
        <BrandPhilosophy />
      </ScrollReveal>

      {/* Shop By Category Gallery */}
      <ScrollReveal>
        <CategoryGallery />
      </ScrollReveal>

      {/* New Arrivals Grid */}
      <ScrollReveal>
        <section className="py-20 bg-ivory/60 border-t border-borderSoft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-borderSoft gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
                  Fresh From Ghanta Ghar
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-dark tracking-tight">
                  Our New Arrivals
                </h2>
              </div>

              <Link
                to="/new-arrivals"
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-neutral-800 hover:text-brand transition-colors group"
              >
                <span>View All New Arrivals</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 bg-dark hover:bg-brand text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Discover Full Catalog</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Magazine Editorial Campaign: Your Next Favourite Look */}
      <ScrollReveal>
        <FashionEditorial />
      </ScrollReveal>

      {/* Physical Store Visit Invitation */}
      <ScrollReveal>
        <StoreVisitInvitation />
      </ScrollReveal>

      {/* Instagram Connect */}
      <ScrollReveal>
        <InstagramSection />
      </ScrollReveal>
    </div>
  );
};
