import React from 'react';
import { ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-ivory border-y border-borderSoft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Subtle Badge Emblem */}
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-neutral-200 bg-white p-1 shadow-2xs flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="1st Look Garments Slogan Badge"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-brand block mb-2 sm:mb-3">
            Our Brand Philosophy • The Fixed Price Shop
          </span>

          {/* Slogan */}
          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-dark tracking-tight leading-[1.15] mb-4 sm:mb-6">
            “DON'T COMPARE THE PRICE.<br />
            <span className="italic font-light text-brand">COMPARE THE QUALITY.”</span>
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-neutral-600 font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Explore garments crafted for life’s defining moments — from daily office formals to festive celebrations. Discover high-grade textiles, durable stitching, and transparent pricing at our Ghanta Ghar store.
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-10 border-t border-neutral-300/80 text-left">
            <div className="bg-white p-5 sm:p-6 border border-borderSoft rounded-xs shadow-2xs hover:border-neutral-300 transition-colors">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand mb-2.5 sm:mb-3" />
              <h3 className="font-editorial text-base sm:text-lg font-bold text-dark mb-1">
                Authentic Quality
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Carefully selected cottons, linen blends, and structured wool suitings built to retain fit and finish.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 border border-borderSoft rounded-xs shadow-2xs hover:border-neutral-300 transition-colors">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand mb-2.5 sm:mb-3" />
              <h3 className="font-editorial text-base sm:text-lg font-bold text-dark mb-1">
                Fixed & Honest Pricing
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                No gimmicks or inflated markups. Fair, standardized retail and bulk wholesale rates for all.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 border border-borderSoft rounded-xs shadow-2xs hover:border-neutral-300 transition-colors">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand mb-2.5 sm:mb-3" />
              <h3 className="font-editorial text-base sm:text-lg font-bold text-dark mb-1">
                Ghanta Ghar Heritage
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Centrally situated at Ramanuj Dayal Market, Ghaziabad. Easy accessibility with warm personal service.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-dark hover:text-brand border-b border-dark hover:border-brand pb-1 transition-colors"
            >
              <span>Read Our Full Story</span>
              <Sparkles className="w-3.5 h-3.5 text-brand" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
