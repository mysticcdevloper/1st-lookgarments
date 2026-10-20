import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  Sparkles, 
  Store, 
  Scissors, 
  Layers, 
  Shirt, 
  Instagram,
  MapPin,
  Crown
} from 'lucide-react';

interface GarmentPillar {
  id: string;
  title: string;
  category: string;
  categoryPath: string;
  description: string;
  icon: React.ElementType;
}

const GARMENT_PILLARS: GarmentPillar[] = [
  {
    id: 'tailoring',
    title: 'Master Tailoring & Silhouettes',
    category: 'Blazers & Suits',
    categoryPath: '/shop?category=blazers',
    description: 'Structured chest canvassing, natural shoulder rolls, and two-button formal blazers cut for distinction.',
    icon: Scissors,
  },
  {
    id: 'fabrics',
    title: 'Artisan Weaves & Pure Cottons',
    category: 'Formal & Casual Shirts',
    categoryPath: '/shop?category=shirts',
    description: 'High-density Royal Oxford, breathable poplin, and European washed linen with durable collar stays.',
    icon: Shirt,
  },
  {
    id: 'smart-casuals',
    title: 'Smart Ensembles & Trousers',
    category: 'Trousers & Chinos',
    categoryPath: '/shop?category=trousers',
    description: 'Pleated trousers, tapered chinos, and flexible stretch denim engineered for comfort and movement.',
    icon: Layers,
  },
];

export const FashionVideoShowcase: React.FC = () => {
  // Video 1: Fashion Editorial Runway Video (Preserved)
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const [isPlaying1, setIsPlaying1] = useState<boolean>(true);
  const [isMuted1, setIsMuted1] = useState<boolean>(true);
  const [hasError1, setHasError1] = useState<boolean>(false);

  // Video 2: Authentic Shop Tour Video (Preserved)
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isPlaying2, setIsPlaying2] = useState<boolean>(false);
  const [isMuted2, setIsMuted2] = useState<boolean>(true);
  const [hasError2, setHasError2] = useState<boolean>(false);

  // Video 3: Festive & Sizing Showcase M-10XL Video (Added)
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const [isPlaying3, setIsPlaying3] = useState<boolean>(false);
  const [isMuted3, setIsMuted3] = useState<boolean>(true);
  const [hasError3, setHasError3] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Posters
  const fashionPoster = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=85&w=1200&auto=format&fit=crop';
  const shopPoster = '/assets/1st-look-shop-video-poster.jpg';
  const festivePoster = '/assets/1st-look-festive-video-poster.jpg';

  // IntersectionObserver for responsive lazy playback
  useEffect(() => {
    const v1 = videoRef1.current;
    if (!v1) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying1(false);
      v1.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play video 1 by default when visible
          v1.play().then(() => setIsPlaying1(true)).catch(() => setIsPlaying1(false));
        } else {
          // Pause all videos when scrolled out of view
          if (videoRef1.current && !videoRef1.current.paused) {
            videoRef1.current.pause();
            setIsPlaying1(false);
          }
          if (videoRef2.current && !videoRef2.current.paused) {
            videoRef2.current.pause();
            setIsPlaying2(false);
          }
          if (videoRef3.current && !videoRef3.current.paused) {
            videoRef3.current.pause();
            setIsPlaying3(false);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Controls for Video 1 (Fashion Runway Film)
  const togglePlay1 = () => {
    const v1 = videoRef1.current;
    if (!v1) return;

    if (v1.paused) {
      // Pause other videos to avoid competing audio
      if (videoRef2.current && !videoRef2.current.paused) {
        videoRef2.current.pause();
        setIsPlaying2(false);
      }
      if (videoRef3.current && !videoRef3.current.paused) {
        videoRef3.current.pause();
        setIsPlaying3(false);
      }
      v1.play().then(() => setIsPlaying1(true)).catch(() => setIsPlaying1(false));
    } else {
      v1.pause();
      setIsPlaying1(false);
    }
  };

  const toggleMute1 = () => {
    const v = videoRef1.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted1(v.muted);
  };

  // Controls for Video 2 (Authentic Shop Tour)
  const togglePlay2 = () => {
    const v2 = videoRef2.current;
    if (!v2) return;

    if (v2.paused) {
      // Pause other videos to avoid competing audio
      if (videoRef1.current && !videoRef1.current.paused) {
        videoRef1.current.pause();
        setIsPlaying1(false);
      }
      if (videoRef3.current && !videoRef3.current.paused) {
        videoRef3.current.pause();
        setIsPlaying3(false);
      }
      v2.play().then(() => setIsPlaying2(true)).catch(() => setIsPlaying2(false));
    } else {
      v2.pause();
      setIsPlaying2(false);
    }
  };

  const toggleMute2 = () => {
    const v = videoRef2.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted2(v.muted);
  };

  // Controls for Video 3 (Festive & Sizing Showcase)
  const togglePlay3 = () => {
    const v3 = videoRef3.current;
    if (!v3) return;

    if (v3.paused) {
      // Pause other videos to avoid competing audio
      if (videoRef1.current && !videoRef1.current.paused) {
        videoRef1.current.pause();
        setIsPlaying1(false);
      }
      if (videoRef2.current && !videoRef2.current.paused) {
        videoRef2.current.pause();
        setIsPlaying2(false);
      }
      v3.play().then(() => setIsPlaying3(true)).catch(() => setIsPlaying3(false));
    } else {
      v3.pause();
      setIsPlaying3(false);
    }
  };

  const toggleMute3 = () => {
    const v = videoRef3.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted3(v.muted);
  };

  return (
    <section 
      ref={containerRef} 
      className="py-12 sm:py-20 bg-dark text-white relative overflow-hidden"
      aria-label="Fashion & Store Video Showcase"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-white/10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-2.5 py-1 rounded-xs backdrop-blur-xs border border-white/10 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-brand font-bold">
                Motion, Craftsmanship & Store Tour
              </span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              THE ART OF DRESSING WELL
            </h2>

            <p className="text-xs sm:text-base text-neutral-300 font-light mt-2 leading-relaxed">
              Discover timeless style, refined details, and everyday elegance at 1st Look Garments.
            </p>
          </div>

          <Link
            to="/visit-store"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-neutral-300 hover:text-brand transition-colors group shrink-0"
          >
            <span>Visit Ghanta Ghar Store</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3-Video Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          
          {/* Card 1: Existing Preserved Fashion Runway Film */}
          <div className="relative rounded-xs overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl flex flex-col justify-between group min-h-[380px] sm:min-h-[460px] transition-transform duration-300 hover:border-white/20">
            
            {/* Native Video 1 */}
            <video
              ref={videoRef1}
              src="/assets/videos/fashion-showcase.mp4"
              poster={fashionPoster}
              loop
              muted={isMuted1}
              playsInline
              preload="metadata"
              onError={() => setHasError1(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />

            {hasError1 && (
              <img
                src={fashionPoster}
                alt="1st Look Garments Fashion Presentation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

            {/* Top Bar: Label & Mute Toggle */}
            <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between">
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-bold text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/10">
                <Sparkles className="w-3 h-3 text-brand" />
                <span>Runway & Garments</span>
              </span>

              <button
                onClick={toggleMute1}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105"
                title={isMuted1 ? 'Unmute Audio' : 'Mute Audio'}
                aria-label={isMuted1 ? 'Unmute Fashion Film Audio' : 'Mute Fashion Film Audio'}
              >
                {isMuted1 ? <VolumeX className="w-4 h-4 text-neutral-300" /> : <Volume2 className="w-4 h-4 text-brand" />}
              </button>
            </div>

            {/* Center Big Play/Pause Toggle */}
            <div className="relative z-20 self-center my-auto py-3">
              <button
                onClick={togglePlay1}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand/90 hover:bg-brand text-white shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none"
                title={isPlaying1 ? 'Pause Fashion Film' : 'Play Fashion Film'}
                aria-label={isPlaying1 ? 'Pause Fashion Film' : 'Play Fashion Film'}
              >
                {isPlaying1 ? (
                  <Pause className="w-5 h-5 text-white fill-white" />
                ) : (
                  <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Overlay Info */}
            <div className="relative z-20 p-4 sm:p-5 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-0.5">
                  Collection Film
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-white font-normal leading-snug">
                  Tailored Craft & Silhouette
                </h3>
                <p className="text-xs text-neutral-300 mt-1 font-light leading-relaxed line-clamp-2">
                  Structured canvassing, sharp shoulder lines, and premium fabrics.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center space-x-1.5 w-full bg-white text-dark hover:bg-brand hover:text-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-md"
                >
                  <span>Explore Catalog</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Card 2: Existing Preserved Authentic Shop Tour */}
          <div className="relative rounded-xs overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl flex flex-col justify-between group min-h-[380px] sm:min-h-[460px] transition-transform duration-300 hover:border-white/20">
            
            {/* Native Video 2 */}
            <video
              ref={videoRef2}
              src="/assets/videos/1st-look-shop-video.mp4"
              poster={shopPoster}
              loop
              muted={isMuted2}
              playsInline
              preload="metadata"
              onError={() => setHasError2(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />

            {hasError2 && (
              <img
                src={shopPoster}
                alt="1st Look Garments Actual Shop Storefront"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

            {/* Top Bar: Official "OUR STORE" Label + Instagram Link & Sound Toggle */}
            <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between">
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-bold text-white/95 bg-brand px-2.5 py-1 rounded-xs shadow-xs">
                <Store className="w-3 h-3" />
                <span>OUR STORE</span>
              </span>

              <div className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/p/DecHhLBgimP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 bg-black/50 hover:bg-black/80 backdrop-blur-md text-[10px] text-neutral-200 hover:text-white px-2.5 py-1 rounded-xs border border-white/15 transition-colors"
                  title="Watch Store Tour Reel on Instagram"
                >
                  <Instagram className="w-3 h-3 text-pink-400" />
                  <span className="hidden sm:inline">Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <button
                  onClick={toggleMute2}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105"
                  title={isMuted2 ? 'Unmute Audio' : 'Mute Audio'}
                  aria-label={isMuted2 ? 'Unmute Store Tour Audio' : 'Mute Store Tour Audio'}
                >
                  {isMuted2 ? <VolumeX className="w-4 h-4 text-neutral-300" /> : <Volume2 className="w-4 h-4 text-brand" />}
                </button>
              </div>
            </div>

            {/* Center Big Play/Pause Toggle */}
            <div className="relative z-20 self-center my-auto py-3">
              <button
                onClick={togglePlay2}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand/90 hover:bg-brand text-white shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none"
                title={isPlaying2 ? 'Pause Store Tour' : 'Play Store Tour'}
                aria-label={isPlaying2 ? 'Pause Store Tour' : 'Play Store Tour'}
              >
                {isPlaying2 ? (
                  <Pause className="w-5 h-5 text-white fill-white" />
                ) : (
                  <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Overlay Info */}
            <div className="relative z-20 p-4 sm:p-5 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-0.5">
                  EXPERIENCE OUR STORE
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-white font-normal leading-snug">
                  Step Inside 1st Look Garments
                </h3>
                <p className="text-xs text-neutral-300 mt-1 font-light leading-relaxed line-clamp-2">
                  Step inside 1st Look Garments and discover your next look.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/visit-store"
                  className="inline-flex items-center justify-center space-x-1.5 w-full bg-brand hover:bg-brand-dark text-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Visit Store</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Card 3: NEW Festive & Sizing Showcase (M to 10XL) */}
          <div className="relative rounded-xs overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl flex flex-col justify-between group min-h-[380px] sm:min-h-[460px] md:col-span-2 lg:col-span-1 transition-transform duration-300 hover:border-white/20">
            
            {/* Native Video 3 */}
            <video
              ref={videoRef3}
              src="/assets/videos/1st-look-festive-video.mp4"
              poster={festivePoster}
              loop
              muted={isMuted3}
              playsInline
              preload="metadata"
              onError={() => setHasError3(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />

            {hasError3 && (
              <img
                src={festivePoster}
                alt="1st Look Garments Festive & All-Sizes Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

            {/* Top Bar: Festive Badge + Instagram Link & Sound Toggle */}
            <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between">
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-bold text-white/95 bg-amber-600/90 backdrop-blur-md px-2.5 py-1 rounded-xs border border-amber-400/30">
                <Crown className="w-3 h-3 text-amber-200" />
                <span>Festive & All Sizes M–10XL</span>
              </span>

              <div className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/p/DefBDeRgeKo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 bg-black/50 hover:bg-black/80 backdrop-blur-md text-[10px] text-neutral-200 hover:text-white px-2.5 py-1 rounded-xs border border-white/15 transition-colors"
                  title="Watch Festive Collection on Instagram"
                >
                  <Instagram className="w-3 h-3 text-pink-400" />
                  <span className="hidden sm:inline">Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <button
                  onClick={toggleMute3}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105"
                  title={isMuted3 ? 'Unmute Audio' : 'Mute Audio'}
                  aria-label={isMuted3 ? 'Unmute Festive Showcase Audio' : 'Mute Festive Showcase Audio'}
                >
                  {isMuted3 ? <VolumeX className="w-4 h-4 text-neutral-300" /> : <Volume2 className="w-4 h-4 text-brand" />}
                </button>
              </div>
            </div>

            {/* Center Big Play/Pause Toggle */}
            <div className="relative z-20 self-center my-auto py-3">
              <button
                onClick={togglePlay3}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand/90 hover:bg-brand text-white shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none"
                title={isPlaying3 ? 'Pause Festive Reel' : 'Play Festive Reel'}
                aria-label={isPlaying3 ? 'Pause Festive Reel' : 'Play Festive Reel'}
              >
                {isPlaying3 ? (
                  <Pause className="w-5 h-5 text-white fill-white" />
                ) : (
                  <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Overlay Info */}
            <div className="relative z-20 p-4 sm:p-5 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block mb-0.5">
                  Ghaziabad Festive Showcase
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-white font-normal leading-snug">
                  Festive Fits & Sizing M to 10XL
                </h3>
                <p className="text-xs text-neutral-300 mt-1 font-light leading-relaxed line-clamp-2">
                  Complete fitting from M to 10XL in premium ethnic, festive, and casual menswear.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/collections/ethnic-wear"
                  className="inline-flex items-center justify-center space-x-1.5 w-full bg-white text-dark hover:bg-brand hover:text-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-md"
                >
                  <span>Explore Festive Wear</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Garment Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
          {GARMENT_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <Link
                key={pillar.id}
                to={pillar.categoryPath}
                className="p-4 rounded-xs border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/60 transition-all duration-300 group block"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xs bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand group-hover:bg-brand/20 transition-colors">
                    <IconComponent className="w-4 h-4 text-brand" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium block">
                      {pillar.category}
                    </span>
                    <h4 className="font-editorial text-sm sm:text-base text-white font-normal truncate mt-0.5 group-hover:text-brand transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
