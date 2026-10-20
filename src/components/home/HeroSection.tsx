import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

interface HeroSlide {
  id: string;
  category: string;
  image: string;
  alt: string;
}

// Curated high-clarity fashion photography showcasing menswear outfits
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
    category: 'Smart Casual Ensembles',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=85&w=2000&auto=format&fit=crop',
    alt: 'Refined Smart Casual Menswear Layers and Linen Shirt',
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
    id: 'evening-suits',
    category: 'Evening Occasion Tailoring',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=85&w=2000&auto=format&fit=crop',
    alt: 'Tailored Evening Suit and Formal Menswear',
  },
  {
    id: 'tuxedos',
    category: 'Occasion Wear & Formals',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=85&w=2000&auto=format&fit=crop',
    alt: 'Satin-Shawl Black-Tie Evening Dinner Jacket',
  },
];

// Carousel transitions every 4.5 seconds per requirement
const SLIDE_INTERVAL_MS = 4500;

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Check user motion preferences on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
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

  // Automatic 4.5-second slideshow timer
  useEffect(() => {
    if (isReducedMotion) {
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
  }, [isReducedMotion, goToNext]);

  return (
    <section 
      className="relative min-h-[68vh] sm:min-h-[78vh] lg:min-h-[88vh] flex items-center bg-[#111111] overflow-hidden select-none"
      aria-label="1st Look Garments Editorial Showcase"
    >
      {/* Background Slideshow Layer - Crisp, Bright, High-End Menswear Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-[center_20%] md:object-[center_25%] transition-transform duration-[4500ms] ease-out ${
                  isActive && !isReducedMotion ? 'scale-103' : 'scale-100'
                } opacity-100`}
              />
            </div>
          );
        })}

        {/* 
          Subtle Gradient:
          Gentle left-side gradient only behind text for crisp contrast, leaving clothing and model 100% natural and bright
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 via-50% to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Hero Content - Clean Editorial Layout with Clear Hierarchy */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <div className="max-w-xl">
          
          {/* Understated Location & Brand Label */}
          <div className="hero-animate-1 inline-flex items-center space-x-1.5 text-white/80 text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-3 sm:mb-4">
            <MapPin className="w-3 h-3 text-brand" />
            <span>Ghanta Ghar, Ghaziabad • The Fixed Price Shop</span>
          </div>

          {/* Headline in Elegant Editorial Serif Typography */}
          <h1 className="hero-animate-2 font-editorial text-3xl sm:text-5xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            STYLE THAT <br />
            <span className="italic font-light text-ivory-100">SPEAKS.</span>
          </h1>

          {/* Concise, Refined Description */}
          <p className="hero-animate-3 text-xs sm:text-base text-neutral-200 font-light leading-relaxed mb-4 sm:mb-6 max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Discover refined menswear, premium fabrics and timeless style at 1st Look Garments.
          </p>

          {/* Compact, Elegant Official Slogan Display (No bulky dark box) */}
          <div className="hero-animate-4 mb-6 sm:mb-8">
            <p className="font-editorial italic text-sm sm:text-base md:text-lg text-ivory drop-shadow-md">
              “{BUSINESS_CONFIG.officialSlogan}”
            </p>
          </div>

          {/* Elegant Action Buttons with Consistent Heights and Refined Style */}
          <div className="hero-animate-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 max-w-md sm:max-w-none">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center space-x-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 sm:px-8 sm:py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              to="/visit-store"
              className="inline-flex items-center justify-center space-x-1.5 bg-black/30 hover:bg-white hover:text-dark text-white/90 border border-white/30 hover:border-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-medium uppercase tracking-widest rounded-xs backdrop-blur-xs transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5 text-brand" />
              <span>Visit Our Store</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Simplified, Minimalist Carousel Controls: Elegant Dots & Subtle Counter */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-30 flex items-center space-x-2.5 text-white/80">
        {/* Subtle Category Tag */}
        <span className="text-[10px] uppercase tracking-wider text-white/70 font-medium hidden sm:inline mr-1">
          {HERO_SLIDES[currentIndex].category}
        </span>

        {/* Small Elegant Pagination Dots */}
        <div className="flex items-center space-x-1.5">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-5 bg-brand'
                  : 'w-1.5 bg-white/40 hover:bg-white/75'
              }`}
              aria-label={`Jump to slide ${idx + 1}: ${slide.category}`}
            />
          ))}
        </div>

        {/* Subtle Slide Counter */}
        <span className="text-[10px] text-white/50 font-mono tracking-wider ml-1">
          0{currentIndex + 1} / 0{HERO_SLIDES.length}
        </span>
      </div>

      {/* Desktop Bottom Tag (Hidden on mobile) */}
      <div className="hidden lg:block absolute bottom-0 right-0 max-w-xs bg-white/95 backdrop-blur-md px-5 py-3.5 border-t border-l border-neutral-200 z-30 text-dark shadow-sm">
        <div className="flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 text-brand" />
          <span className="text-[10px] uppercase tracking-widest text-dark font-bold">
            The Fixed Price Shop
          </span>
        </div>
        <p className="text-[11px] text-neutral-500 mt-0.5">
          Fair pricing, uncompromised quality on every garment.
        </p>
      </div>
    </section>
  );
};
