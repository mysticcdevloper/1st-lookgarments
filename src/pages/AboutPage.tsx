import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Award, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'About The Brand' }]} />

        {/* Editorial Story Hero */}
        <div className="pt-6 pb-16 text-center max-w-3xl mx-auto">
          
          <img
            src="/assets/logo.png"
            alt="1st Look Garments Official Seal"
            className="w-24 h-24 mx-auto mb-6 object-contain rounded-full shadow-subtle border-2 border-neutral-100 bg-white p-1"
          />

          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            The Fixed Price Shop • Ghanta Ghar, Ghaziabad
          </span>

          <h1 className="font-editorial text-3xl sm:text-6xl font-normal text-dark tracking-tight leading-[1.12] mb-4 sm:mb-6">
            Clothing Built on <br />
            <span className="italic text-brand font-light">Honest Quality.</span>
          </h1>

          <p className="font-editorial italic text-lg sm:text-2xl text-neutral-700 leading-snug mb-5 sm:mb-8">
            “{BUSINESS_CONFIG.officialSlogan}”
          </p>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
            1st Look Garments is a retail and wholesale clothing establishment located in the heart of Ghaziabad at Ramanuj Dayal Market, Ghanta Ghar. We believe true fashion value comes not from promotional gimmicks, but from superior fabric touch, reliable construction, and direct, fair pricing.
          </p>

        </div>

        {/* Visual Asymmetric Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12 border-y border-borderSoft">
          
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-xs overflow-hidden shadow-xl border border-neutral-200 group">
              <img
                src="/assets/1st-look-garments-store.jpg"
                alt="1st Look Garments Storefront in Ghanta Ghar Ghaziabad"
                className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark text-white p-6 rounded-xs shadow-xl hidden sm:block max-w-xs border-l-4 border-brand">
              <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
                Store Philosophy
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                “Every garment on our racks is chosen with fabric weight, tensile strength, and skin-friendly breathability in mind.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand font-semibold block">
              What Sets Us Apart
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-dark tracking-tight">
              A Culture of Transparency & Distinction
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                In an era dominated by inflated retail tags followed by deceptive discount banners, 1st Look Garments was founded on a straightforward principle: <strong>The Fixed Price Shop</strong>. We eliminate the guesswork for both retail buyers and wholesale partners by pricing our garments accurately from the start.
              </p>
              <p>
                From two-button formal blazers with structured chest canvassing to everyday 2-ply Oxford cotton shirts and selvedge stretch denim, every product represents thoughtful procurement and rigorous quality inspection.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-dark">
                    Retail Garments
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Individual fitting, trials, and personal styling assistance for every shopper.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-dark">
                    Wholesale Lots
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Volume supply for regional apparel stores and boutique owners across North India.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center space-x-4">
              <Link
                to="/visit-store"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors inline-flex items-center space-x-2"
              >
                <span>Visit Ghanta Ghar Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/wholesale"
                className="border border-neutral-300 hover:border-dark text-dark px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
              >
                Wholesale Inquiry
              </Link>
            </div>

          </div>

        </div>

        {/* Location & Verified Details Strip */}
        <div className="py-16">
          <div className="bg-ivory border border-borderSoft p-8 sm:p-12 rounded-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <MapPin className="w-6 h-6 text-brand mb-3" />
                <h4 className="font-editorial text-lg font-bold text-dark mb-1">
                  Store Address
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {BUSINESS_CONFIG.contact.address.fullAddress}
                </p>
                <a
                  href={BUSINESS_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand font-semibold hover:underline mt-2 inline-block"
                >
                  View on Google Maps →
                </a>
              </div>

              <div>
                <Phone className="w-6 h-6 text-brand mb-3" />
                <h4 className="font-editorial text-lg font-bold text-dark mb-1">
                  Direct Line & WhatsApp
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  For retail availability, directions, or wholesale orders:
                </p>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                  className="text-sm font-bold text-dark hover:text-brand mt-1 block"
                >
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div>
                <Award className="w-6 h-6 text-brand mb-3" />
                <h4 className="font-editorial text-lg font-bold text-dark mb-1">
                  Our Business Commitment
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Honest fabric composition, fixed fair price tag, and verified customer respect in every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
