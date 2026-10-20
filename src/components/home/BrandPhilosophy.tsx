import React from 'react';
import { ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory border-y border-borderSoft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge Emblem Display */}
          <div className="inline-flex items-center justify-center mb-8">
            <img
              src="/assets/logo.png"
              alt="1st Look Garments Slogan Badge"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full shadow-subtle border-2 border-white bg-white p-1"
            />
          </div>

          <span className="text-xs uppercase tracking-widest font-semibold text-brand block mb-4">
            Our Brand Philosophy • The Fixed Price Shop
          </span>

          {/* Slogan */}
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-dark tracking-tight leading-[1.15] mb-8">
            “DON'T COMPARE THE PRICE.<br />
            <span className="italic font-light text-brand">COMPARE THE QUALITY.”</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Explore garments crafted for life’s defining moments — from daily office formals to festive celebrations. Discover high-grade textiles, durable stitching, and transparent pricing at our Ghanta Ghar store.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-300 text-left">
            <div className="bg-white p-6 border border-borderSoft rounded-xs shadow-xs">
              <ShieldCheck className="w-6 h-6 text-brand mb-3" />
              <h3 className="font-editorial text-base font-bold text-dark mb-1">
                Authentic Quality
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Carefully selected cottons, linen blends, and structured wool suitings built to retain fit and finish.
              </p>
            </div>

            <div className="bg-white p-6 border border-borderSoft rounded-xs shadow-xs">
              <Award className="w-6 h-6 text-brand mb-3" />
              <h3 className="font-editorial text-base font-bold text-dark mb-1">
                Fixed & Honest Pricing
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                No gimmicks or inflated markups. Fair, standardized retail and bulk wholesale rates for all.
              </p>
            </div>

            <div className="bg-white p-6 border border-borderSoft rounded-xs shadow-xs">
              <MapPin className="w-6 h-6 text-brand mb-3" />
              <h3 className="font-editorial text-base font-bold text-dark mb-1">
                Ghanta Ghar Heritage
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Centrally situated at Ramanuj Dayal Market, Ghaziabad. Easy accessibility with warm personal service.
              </p>
            </div>
          </div>

          <div className="mt-10">
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
