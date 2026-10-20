import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] md:min-h-[88vh] flex items-center bg-dark overflow-hidden">
      {/* Background Editorial Fashion Imagery with High-Resolution Photography */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=85&w=2000&auto=format&fit=crop"
          />
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=85&w=1200&auto=format&fit=crop"
            alt="1st Look Garments Editorial Menswear Collection"
            className="w-full h-full object-cover object-[center_20%] opacity-40 md:opacity-45 scale-100 transition-transform duration-1000 ease-out"
          />
        </picture>
        {/* Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          
          {/* Subtle Tagline / Location Pill */}
          <div className="inline-flex items-center space-x-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] uppercase tracking-widest mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
            <span className="font-semibold text-ivory">Ghanta Ghar, Ghaziabad</span>
            <span className="text-white/40">|</span>
            <span className="text-neutral-300">Retail & Wholesale</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight mb-6">
            STYLE THAT <br />
            <span className="italic font-light text-ivory-100">SPEAKS.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-xl">
            Discover everyday essentials, timeless tailored blazers, crisp formal shirts, and contemporary ethnic wear at <span className="text-white font-medium">1st Look Garments</span>. Premium fabrics and precision tailoring in the heart of Ghaziabad.
          </p>

          {/* Slogan Pill Accent */}
          <div className="mb-10 pl-4 border-l-2 border-brand">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-0.5">
              Official Store Motto
            </p>
            <p className="font-editorial italic text-lg sm:text-xl text-ivory">
              “{BUSINESS_CONFIG.officialSlogan}”
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center space-x-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs shadow-lg transition-all duration-300 group"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/visit-store"
              className="inline-flex items-center justify-center space-x-2.5 bg-white/10 hover:bg-white hover:text-dark text-white border border-white/30 hover:border-white px-7 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs backdrop-blur-xs transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-brand" />
              <span>Visit Our Store</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Floating Bottom Quick Fact Bar */}
      <div className="hidden lg:block absolute bottom-0 right-0 max-w-md bg-white/95 backdrop-blur-md p-6 border-t border-l border-neutral-200 z-10 text-dark">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-widest text-brand font-bold">
            The Fixed Price Shop
          </span>
          <Sparkles className="w-4 h-4 text-brand" />
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed">
          No artificial inflation. Direct manufacturer pricing and uncompromising quality on every stitch.
        </p>
      </div>
    </section>
  );
};
