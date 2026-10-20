import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello 1st Look Garments, I would like to get in touch regarding your clothing collections and wholesale enquiries.'
  );

  return (
    <footer className="bg-dark text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Slogan Editorial Banner */}
        <div className="pb-12 mb-12 border-b border-neutral-800 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
              {BUSINESS_CONFIG.secondaryTagline}
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-ivory">
              “{BUSINESS_CONFIG.officialSlogan}”
            </h2>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <Link
              to="/visit-store"
              className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
            >
              Plan Store Visit
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-700 hover:border-white text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <img
                src="/assets/logo.png"
                alt="1st Look Garments"
                className="w-14 h-14 object-contain rounded-full border border-neutral-700 bg-white p-0.5"
              />
              <div>
                <span className="block font-editorial text-xl font-bold tracking-tight text-white group-hover:text-brand transition-colors">
                  1ST LOOK GARMENTS
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-neutral-400">
                  Clothing Retail & Wholesale
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Your destination for premium blazers, formal shirts, comfortable denims, casual wear, and traditional kurtas. Serving retail shoppers and bulk buyers in Ghanta Ghar, Ghaziabad.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={BUSINESS_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand hover:bg-brand/10 transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand hover:bg-brand/10 transition-colors"
                aria-label="Google Maps directions"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand hover:bg-brand/10 transition-colors"
                aria-label="Call store"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {BUSINESS_CONFIG.categories.map((c) => (
                <li key={c.id}>
                  <Link to={c.path} className="hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/new-arrivals" className="text-brand hover:underline font-medium">
                  ✦ New Arrivals 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link to="/visit-store" className="hover:text-white transition-colors">
                  Store Visit & Booking
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-white transition-colors">
                  Wholesale & Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Store Location & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Store Location
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {BUSINESS_CONFIG.contact.address.line1},<br />
                  {BUSINESS_CONFIG.contact.address.line2},<br />
                  {BUSINESS_CONFIG.contact.address.city}, {BUSINESS_CONFIG.contact.address.state} - {BUSINESS_CONFIG.contact.address.postalCode}
                </address>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <a 
                  href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                  className="hover:text-white transition-colors font-medium text-neutral-300"
                >
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-brand hover:underline font-medium text-[11px]"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} 1st Look Garments. All rights reserved. Ghanta Ghar, Ghaziabad.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-neutral-400 transition-colors">
              Terms & Conditions
            </Link>
            <span className="flex items-center text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-brand mr-1" />
              Verified Local Business
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
