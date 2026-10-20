import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { WholesaleForm } from '../components/forms/WholesaleForm';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Building2, 
  Layers, 
  Phone, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const WholesalePage: React.FC = () => {
  const directWholesaleWhatsApp = buildWhatsAppUrl(
    'Hello 1st Look Garments, I am interested in wholesale garments for my clothing store. Please share wholesale terms and product catalogues.'
  );

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'Wholesale & B2B Inquiries' }]} />

        {/* Hero Section */}
        <div className="pt-4 pb-12 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            B2B Garment Supply • Ghaziabad Wholesale Market
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-dark tracking-tight mb-4">
            YOUR PARTNER IN <br />
            <span className="italic text-brand font-light">EVERYDAY FASHION.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl">
            1st Look Garments supplies retail boutiques, multi-brand outlets, and corporate buyers with quality-checked menswear. From trending shirts and premium blazers to comfort-stretch denims and festive ethnic wear, we provide competitive trade pricing with consistent sizing.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <WholesaleForm />
          </div>

          {/* Right Column: Wholesale Information & Fast Track WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-dark text-white p-6 sm:p-8 rounded-xs shadow-xl">
              <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
                Direct Wholesale Desk
              </span>
              <h3 className="font-editorial text-2xl font-bold text-white mb-2">
                Talk to Our Wholesale Team
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">
                Prefer to discuss lot availability, fabric swatches, or sample dispatches immediately? Reach us directly on WhatsApp or phone.
              </p>

              <div className="space-y-3">
                <a
                  href={directWholesaleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-5 text-xs font-semibold uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Wholesale Chat</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                  className="w-full border border-neutral-700 hover:border-white text-white py-3 px-5 text-xs font-semibold uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand" />
                  <span>Call +91 98915 17860</span>
                </a>
              </div>
            </div>

            {/* Wholesale Trade Pillars */}
            <div className="bg-ivory border border-borderSoft p-6 sm:p-8 rounded-xs space-y-5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-dark">
                Wholesale Categories & Highlights
              </h4>

              <div className="space-y-3.5 text-xs text-neutral-600">
                <div className="flex items-start space-x-3">
                  <Layers className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark block">Curated Assortments:</strong>
                    Balanced size ratios (38 to 44 / M to XXL) prepared for quick retail resale.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark block">Zero Defect Verification:</strong>
                    Every bulk batch undergoes stitch, button, and fabric checking before dispatch.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark block">In-Person Sample Trials:</strong>
                    Visit our Ghanta Ghar store to inspect bulk lots and verify textures before placing your lot order.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 text-[11px] text-neutral-500 italic">
                * Note: Exact wholesale price tiers, GST invoicing, and freight logistics are finalized transparently during order consultation.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
