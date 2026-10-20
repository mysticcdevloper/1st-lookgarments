import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FashionEditorial: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 md:py-28 bg-[#0D0D0D] text-white relative overflow-hidden">
      
      {/* Editorial Decorative Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-white font-editorial text-[18vw] leading-none whitespace-nowrap font-bold">
        1ST LOOK
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Visual Editorial Collage */}
          <div className="lg:col-span-7 relative">
            
            {/* Primary Large Image */}
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full rounded-xs overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=85&w=1200&auto=format&fit=crop"
                alt="1st Look Garments Editorial Campaign"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Overlay handwritten script accent inspired by reference moodboard */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="font-script text-2xl sm:text-4xl text-brand font-medium block drop-shadow-md">
                  Looking for our stories
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-neutral-300 font-semibold mt-1 block">
                  Campaign 2026 • 1st Look Garments Ghaziabad
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Red Mood Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 bg-brand text-white p-6 rounded-xs shadow-2xl border border-brand-dark animate-fadeIn">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 block mb-1">
                Editorial Note
              </span>
              <p className="font-editorial text-lg italic leading-snug">
                “Quality is not an accident. It is always the result of sincere intention.”
              </p>
              <div className="mt-3 pt-3 border-t border-white/20 text-[10px] tracking-wider uppercase font-semibold text-ivory">
                The Fixed Price Shop
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Narrative & CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-brand text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Feature</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white leading-[1.12]">
              YOUR NEXT <br />
              <span className="italic text-ivory-100 font-light">FAVOURITE LOOK.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              True elegance doesn't require extravagant price tags. We curate fine-spun shirts, structured blazers, and versatile trousers designed to withstand continuous wear while maintaining crisp silhouette lines.
            </p>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-brand pl-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                  Precision Pattern Making
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Cut to fit Indian body proportions comfortably with natural shoulder lines and comfortable armholes.
                </p>
              </div>

              <div className="border-l-2 border-brand pl-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                  Wholesale & Retail Ready
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Available in bulk for clothing boutiques, enterprise requirements, and retail buyers seeking everyday distinction.
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                to="/collections/blazers"
                className="inline-flex items-center space-x-2 bg-brand hover:bg-brand-dark text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
              >
                <span>View Blazers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/collections/shirts"
                className="inline-flex items-center space-x-2 border border-neutral-700 hover:border-white text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
              >
                <span>Explore Shirts</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
