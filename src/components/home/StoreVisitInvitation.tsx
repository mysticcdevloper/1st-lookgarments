import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export const StoreVisitInvitation: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello 1st Look Garments, I would like to plan a visit to your Ghanta Ghar store. Please guide me on location and availability.'
  );

  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-borderSoft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-borderSoft rounded-xs shadow-subtle overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Store Details & Actions */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
                  Physical Store Experience
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-dark tracking-tight mb-4">
                  YOUR NEXT LOOK <br />
                  <span className="italic text-neutral-500 font-light">STARTS HERE.</span>
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-8 max-w-lg">
                  Feel the fabric weight, test the stretch, and experience personalized fit guidance in person. Located conveniently in Ramanuj Dayal Market, Ghanta Ghar, Ghaziabad.
                </p>

                {/* Address Box */}
                <div className="bg-ivory border border-borderSoft p-5 rounded-xs mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-dark mb-1">
                        1st Look Garments Store
                      </h4>
                      <address className="not-italic text-xs text-neutral-600 leading-relaxed">
                        {BUSINESS_CONFIG.contact.address.fullAddress}
                      </address>
                      <p className="text-[11px] text-neutral-400 mt-1">
                        Landmark: Near Ramte Ram Road, Ghanta Ghar Clock Tower Market
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <a
                    href={BUSINESS_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-dark hover:bg-neutral-800 text-white py-3.5 px-5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-brand" />
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>

                  <Link
                    to="/visit-store"
                    className="inline-flex items-center justify-center space-x-2 bg-brand hover:bg-brand-dark text-white py-3.5 px-5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Store Visit</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                    className="inline-flex items-center justify-center space-x-2 border border-neutral-300 hover:border-dark text-dark py-3 px-4 text-xs font-medium uppercase tracking-widest rounded-xs hover:bg-neutral-50 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand" />
                    <span>Call Store</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 border border-emerald-600 hover:bg-emerald-50 text-emerald-700 py-3 px-4 text-xs font-medium uppercase tracking-widest rounded-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Note on timings */}
              <div className="pt-6 mt-8 border-t border-neutral-100 text-[11px] text-neutral-500">
                <span>Direct phone inquiries: </span>
                <strong className="text-dark font-semibold">{BUSINESS_CONFIG.contact.phoneDisplay}</strong>
                <span> • Retail & Wholesale walk-ins welcome</span>
              </div>
            </div>

            {/* Right Column: Actual Storefront Photograph */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full bg-neutral-100 overflow-hidden group">
              <img
                src="/assets/1st-look-garments-store.jpg"
                alt="1st Look Garments Storefront in Ghanta Ghar Ghaziabad"
                loading="lazy"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom vignette to ensure caption readability without darkening the storefront or signboard */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-dark/90 via-dark/35 to-transparent pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="inline-flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/10 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-brand font-bold">
                    Official Storefront • Ghanta Ghar
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-normal text-white drop-shadow-sm">
                  Visit Us in Person
                </h3>
                <p className="text-xs text-neutral-200 mt-1 font-light leading-relaxed drop-shadow-sm max-w-sm">
                  Experience our complete fabric and fit collection in person at Ramanuj Dayal Market.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
