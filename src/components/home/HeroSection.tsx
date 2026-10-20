import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

interface HeroSlide {
  id: string;
  category: string;
  image: string;
  alt: string;
}

// 7 Verified, Bright, High-Clarity Fashion Photographs
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'blazers',
    category: 'Tailored Blazers & Suits',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=85&w=2000&auto=format&fit=crop',
    alt: '1st Look Garments Tailored Navy Wool-Blend Blazer and Formal Suit',
  },
  {
    id: 'formal-shirts',
    category: 'Royal Oxford Formal Shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=85&w=2000&auto=format&fit=crop',
    alt: 'Crisp Royal Oxford Pure Cotton Formal Shirt and Tie',
  },
  {
    id: 'smart-casuals',
    category: 'Washed Linen & Casuals',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=85&w=2000&auto=format&fit=crop',
    alt: 'European Washed Linen Shirt and Smart Casual Layers',
  },
  {
    id: 'trousers',
    category: 'Italian Tailored Trousers',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=85&w=2000&auto=format&fit=crop',
    alt: 'Italian-Cut Pleated Formal Trousers and Modern Chinos',
  },
  {
    id: 'ethnic-wear',
    category: 'Festive Kurtas & Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=85&w=2000&auto=format&fit=crop',
    alt: 'Raw Silk Embroidered Festive Kurta for Weddings and Celebrations',
  },
  {
    id: 'tuxedos',
    category: 'Evening Occasion Tuxedos',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=85&w=2000&auto=format&fit=crop',
    alt: 'Satin-Shawl Black-Tie Evening Tuxedo Dinner Jacket',
  },
  {
    id: 'denim-casuals',
    category: 'Piqué Polos & Modern Denim',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=85&w=2000&auto=format&fit=crop',
    alt: 'Double-Mercerized Cotton Polo Shirt and Selvedge Denim',
  },
];

const SLIDE_INTERVAL_MS = 2000; // 2 seconds per requirement

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Check user motion preferences on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsPlaying(false);
      }
    }
  }, []);

  // Preload all slideshow images in browser cache to eliminate flicker
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic 2-second slideshow timer
  useEffect(() => {
    if (!isPlaying || isReducedMotion) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = window.setInterval(() => {
      goToNext();
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, isReducedMotion, goToNext]);

  return (
    <section 
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-[#111111] overflow-hidden select-none"
      aria-label="1st Look Garments Editorial Showcase"
    >
      {/* Background Slideshow Layer - 100% Brightness on Right, Full Garment Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              aria-hidden={!isActive}
            >
              {/* Full-opacity image: NO dark filter, preserving 100% of fabric details and vibrant outfit colors */}
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-[center_20%] md:object-[center_25%] transition-transform duration-[2500ms] ease-out ${
                  isActive && !isReducedMotion ? 'scale-105' : 'scale-100'
                } opacity-100`}
              />
            </div>
          );
        })}

        {/* 
          Localized Subtle Gradient:
          - Only darkens the left side directly behind the white headline/copy (from-black/75 to via-black/30 at 45%).
          - Transitions to 100% transparent on the right (60% to 100%), leaving models, garments, suits, and fabrics fully bright and clear!
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 via-45% to-transparent z-20 pointer-events-none"></div>
        {/* Very subtle bottom vignette only for control contrast */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Hero Stable Content with High Contrast Text Shadows */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          
          {/* Subtle Tagline / Location Pill */}
          <div className="hero-animate-1 inline-flex items-center space-x-2.5 bg-black/50 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] uppercase tracking-widest mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
            <span className="font-semibold text-ivory">Ghanta Ghar, Ghaziabad</span>
            <span className="text-white/40">|</span>
            <span className="text-neutral-200">Retail & Wholesale</span>
          </div>

          {/* Main Editorial Headline with Text Shadow for Perfect Readability */}
          <h1 className="hero-animate-2 font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            STYLE THAT <br />
            <span className="italic font-light text-ivory-100">SPEAKS.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-animate-3 text-base sm:text-lg text-neutral-200 font-light leading-relaxed mb-8 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Discover everyday essentials, timeless tailored blazers, crisp formal shirts, and contemporary ethnic wear at <span className="text-white font-medium">1st Look Garments</span>. Premium fabrics and precision tailoring in the heart of Ghaziabad.
          </p>

          {/* Slogan Pill Accent with Dark Backdrop for Readability */}
          <div className="hero-animate-4 mb-10 pl-4 border-l-2 border-brand bg-black/30 backdrop-blur-xs py-2 pr-4 rounded-r-xs max-w-lg">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-0.5">
              Official Store Motto
            </p>
            <p className="font-editorial italic text-lg sm:text-xl text-ivory drop-shadow-md">
              “{BUSINESS_CONFIG.officialSlogan}”
            </p>
          </div>

          {/* CTAs with Refined Hover Interactions */}
          <div className="hero-animate-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center space-x-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>

            <Link
              to="/visit-store"
              className="inline-flex items-center justify-center space-x-2.5 bg-black/40 hover:bg-white hover:text-dark text-white border border-white/40 hover:border-white px-7 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs backdrop-blur-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-brand" />
              <span>Visit Our Store</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Slideshow Progress Bar, Category Pill & Navigation Controls */}
      <div className="absolute bottom-6 left-4 sm:left-8 md:left-12 z-30 flex items-center space-x-4 bg-black/75 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full text-white text-xs shadow-2xl">
        
        {/* Current Category Label Badge */}
        <div className="flex items-center space-x-2 pr-3 border-r border-neutral-700">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-ivory truncate max-w-[150px] sm:max-w-[200px]">
            {HERO_SLIDES[currentIndex].category}
          </span>
        </div>

        {/* Slide Indicator Pills */}
        <div className="flex items-center space-x-1.5">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-brand'
                  : 'w-1.5 bg-neutral-500 hover:bg-neutral-300'
              }`}
              aria-label={`Jump to slide ${idx + 1}: ${slide.category}`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-[10px] text-neutral-300 font-mono tracking-wider">
          0{currentIndex + 1}/0{HERO_SLIDES.length}
        </span>

        {/* Previous / Next & Pause Controls */}
        <div className="flex items-center space-x-1 pl-2 border-l border-neutral-700">
          <button
            onClick={goToPrev}
            className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3 h-3 text-brand" /> : <Play className="w-3 h-3 text-emerald-400" />}
          </button>

          <button
            onClick={goToNext}
            className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Bottom Quick Fact Bar */}
      <div className="hidden lg:block absolute bottom-0 right-0 max-w-md bg-white/95 backdrop-blur-md p-6 border-t border-l border-neutral-200 z-30 text-dark shadow-xl">
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
