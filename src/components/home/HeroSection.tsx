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
  image: string;
  category: string;
  alt: string;
}

// 7 Verified Distinct Fashion Images across all major clothing categories
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'blazers',
    category: 'Tailored Blazers & Suits',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=85&w=2000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=85&w=2000&auto=format&fit=crop',
    alt: 'Italian-Cut Pleated Formal Trousers and Stretch Bottomwear',
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
    category: 'Comfort-Stretch Denim',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=85&w=2000&auto=format&fit=crop',
    alt: 'Selvedge Comfort-Stretch Denim and Elevated Everyday Polos',
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

  // Preload all slideshow images in the browser cache immediately
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
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-dark overflow-hidden select-none"
      aria-label="1st Look Garments Editorial Showcase"
    >
      {/* Background Slideshow Layer */}
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
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-[center_20%] md:object-[center_25%] transition-transform duration-[2500ms] ease-out ${
                  isActive && !isReducedMotion ? 'scale-105' : 'scale-100'
                } opacity-50 md:opacity-45`}
              />
            </div>
          );
        })}

        {/* High-Contrast Gradient & Vignette Overlays for 100% Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/30 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60 z-20"></div>
      </div>

      {/* Hero Stable Content — Staggered Entrance on Initial Mount, NOT re-animated on slide changes */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          
          {/* Subtle Tagline / Location Pill */}
          <div className="hero-animate-1 inline-flex items-center space-x-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
            <span className="font-semibold text-ivory">Ghanta Ghar, Ghaziabad</span>
            <span className="text-white/40">|</span>
            <span className="text-neutral-300">Retail & Wholesale</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="hero-animate-2 font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight mb-6">
            STYLE THAT <br />
            <span className="italic font-light text-ivory-100">SPEAKS.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-animate-3 text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-xl">
            Discover everyday essentials, timeless tailored blazers, crisp formal shirts, and contemporary ethnic wear at <span className="text-white font-medium">1st Look Garments</span>. Premium fabrics and precision tailoring in the heart of Ghaziabad.
          </p>

          {/* Slogan Pill Accent */}
          <div className="hero-animate-4 mb-10 pl-4 border-l-2 border-brand">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-0.5">
              Official Store Motto
            </p>
            <p className="font-editorial italic text-lg sm:text-xl text-ivory">
              “{BUSINESS_CONFIG.officialSlogan}”
            </p>
          </div>

          {/* CTAs with Refined Hover Interactions */}
          <div className="hero-animate-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center space-x-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>

            <Link
              to="/visit-store"
              className="inline-flex items-center justify-center space-x-2.5 bg-white/10 hover:bg-white hover:text-dark text-white border border-white/30 hover:border-white px-7 py-4 text-xs font-semibold uppercase tracking-widest rounded-xs backdrop-blur-xs hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-brand" />
              <span>Visit Our Store</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Slideshow Progress Bar, Category Pill & Navigation Controls */}
      <div className="absolute bottom-6 left-4 sm:left-8 md:left-12 z-30 flex items-center space-x-4 bg-dark/75 backdrop-blur-md border border-neutral-700/80 px-4 py-2.5 rounded-full text-white text-xs shadow-xl">
        
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
                  : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
              }`}
              aria-label={`Jump to slide ${idx + 1}: ${slide.category}`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
          0{currentIndex + 1}/0{HERO_SLIDES.length}
        </span>

        {/* Previous / Next & Pause Controls */}
        <div className="flex items-center space-x-1 pl-2 border-l border-neutral-700">
          <button
            onClick={goToPrev}
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3 h-3 text-brand" /> : <Play className="w-3 h-3 text-emerald-400" />}
          </button>

          <button
            onClick={goToNext}
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Bottom Quick Fact Bar */}
      <div className="hidden lg:block absolute bottom-0 right-0 max-w-md bg-white/95 backdrop-blur-md p-6 border-t border-l border-neutral-200 z-30 text-dark">
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
