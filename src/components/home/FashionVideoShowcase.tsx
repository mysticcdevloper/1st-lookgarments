import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  Sparkles, 
  Scissors, 
  Layers, 
  Shirt 
} from 'lucide-react';

interface VideoChapter {
  id: string;
  title: string;
  category: string;
  categoryPath: string;
  description: string;
  icon: React.ElementType;
  poster: string;
}

const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    id: 'tailoring',
    title: 'Master Tailoring & Silhouettes',
    category: 'Blazers & Suits',
    categoryPath: '/shop?category=blazers',
    description: 'Structured chest canvassing, natural shoulder rolls, and two-button formal blazers cut for distinction.',
    icon: Scissors,
    poster: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=85&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fabrics',
    title: 'Artisan Weaves & Pure Cottons',
    category: 'Formal & Casual Shirts',
    categoryPath: '/shop?category=shirts',
    description: 'High-density Royal Oxford, breathable poplin, and European washed linen with durable collar stays.',
    icon: Shirt,
    poster: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=85&w=1200&auto=format&fit=crop',
  },
  {
    id: 'smart-casuals',
    title: 'Smart Ensembles & Trousers',
    category: 'Trousers & Chinos',
    categoryPath: '/shop?category=trousers',
    description: 'Pleated trousers, tapered chinos, and flexible stretch denim engineered for comfort and movement.',
    icon: Layers,
    poster: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=85&w=1200&auto=format&fit=crop',
  },
];

export const FashionVideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Fallback poster image
  const primaryPoster = VIDEO_CHAPTERS[activeChapter].poster;

  // Autoplay / Pause based on viewport visibility to optimize performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            setIsPlaying(false);
          });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section 
      ref={containerRef} 
      className="py-20 bg-dark text-white relative overflow-hidden"
      aria-label="Fashion Video Showcase"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-xs backdrop-blur-xs border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-brand font-bold">
              Motion & Craftsmanship
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
            THE ART OF DRESSING WELL
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light mt-3 leading-relaxed">
            Discover timeless style, refined details, and everyday elegance at 1st Look Garments.
          </p>
        </div>

        {/* Video & Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Cinematic Video Player */}
          <div className="lg:col-span-8 relative rounded-xs overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl flex flex-col justify-between group min-h-[420px] sm:min-h-[500px]">
            
            {/* Native Video Element with poster fallback */}
            <video
              ref={videoRef}
              src="/assets/videos/fashion-showcase.mp4"
              poster={primaryPoster}
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setHasError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-90'}`}
            />

            {/* In case of error or before load, poster displays naturally */}
            {hasError && (
              <img
                src={primaryPoster}
                alt="1st Look Garments Fashion Presentation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Subtle Gradient Overlays for Readability and Cinema Feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

            {/* Top Bar: Editorial Brand Pill */}
            <div className="relative z-20 p-6 flex items-center justify-between">
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-bold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/10">
                <Sparkles className="w-3 h-3 text-brand" />
                <span>Editorial Runway & Garment Details</span>
              </span>

              {/* Sound Toggle */}
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                aria-label={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-neutral-300" />
                ) : (
                  <Volume2 className="w-4 h-4 text-brand" />
                )}
              </button>
            </div>

            {/* Center Big Play/Pause Toggle Indicator on Hover */}
            <div className="relative z-20 self-center my-auto">
              <button
                onClick={togglePlay}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand/90 hover:bg-brand text-white shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none"
                title={isPlaying ? 'Pause Fashion Film' : 'Play Fashion Film'}
                aria-label={isPlaying ? 'Pause Fashion Film' : 'Play Fashion Film'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
                ) : (
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Overlay: Video Title & Category Link */}
            <div className="relative z-20 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
                  1st Look Garments • Seasonal Showcase
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                  Dressed with Precision
                </h3>
                <p className="text-xs text-neutral-300 mt-1 max-w-md font-light leading-relaxed">
                  Experience clean stitching, structured shoulders, and rich textile textures in every cut.
                </p>
              </div>

              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 bg-white text-dark hover:bg-brand hover:text-white px-5 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors shrink-0 shadow-lg"
              >
                <span>Explore Catalog</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: Narrative Fashion Chapters */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Garment Pillars
                </span>
                <span className="text-[10px] text-brand uppercase tracking-wider font-bold">
                  The Fixed Price Shop
                </span>
              </div>

              {VIDEO_CHAPTERS.map((chapter, idx) => {
                const IconComponent = chapter.icon;
                const isActive = activeChapter === idx;

                return (
                  <div
                    key={chapter.id}
                    onClick={() => setActiveChapter(idx)}
                    className={`p-4 rounded-xs border cursor-pointer transition-all duration-300 text-left ${
                      isActive 
                        ? 'bg-white/10 border-brand/80 shadow-md translate-x-1' 
                        : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-8 h-8 rounded-xs bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-brand' : 'text-neutral-300'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                          {chapter.category}
                        </span>
                        <h4 className="font-editorial text-base text-white font-normal truncate mt-0.5">
                          {chapter.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light leading-relaxed">
                          {chapter.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-light">Featured in store</span>
                      <Link
                        to={chapter.categoryPath}
                        onClick={(e) => e.stopPropagation()}
                        className="text-brand hover:text-white font-semibold uppercase tracking-wider inline-flex items-center space-x-1 group"
                      >
                        <span>View Styles</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visit Store Callout */}
            <div className="p-4 bg-brand/10 border border-brand/30 rounded-xs mt-2">
              <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
                Experience It In Person
              </span>
              <p className="text-xs text-neutral-200 leading-relaxed font-light">
                Visit Ramanuj Dayal Market, Ghanta Ghar to feel the fabrics, test the sizing, and experience our complete collection firsthand.
              </p>
              <div className="mt-3 flex items-center space-x-3">
                <Link
                  to="/visit-store"
                  className="text-xs text-white hover:text-brand font-semibold underline underline-offset-4"
                >
                  Store Directions & Timings →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
