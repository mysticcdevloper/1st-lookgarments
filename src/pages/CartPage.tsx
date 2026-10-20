import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShoppingBag, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const CartPage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello 1st Look Garments, I would like to inquire about purchasing garments and placing an order.'
  );

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Shopping Cart & Orders' }]} />

        <div className="pt-6 pb-16 text-center max-w-xl mx-auto">
          
          <div className="w-20 h-20 bg-ivory border border-borderSoft rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
            <ShoppingBag className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            Order Experience Notice
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-dark tracking-tight mb-4">
            Direct & Personalized Shopping
          </h1>

          <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8">
            To guarantee perfect sizing, fit satisfaction, and verified quality, <strong>1st Look Garments</strong> currently operates via direct WhatsApp order consultation and in-person trials at our Ghanta Ghar, Ghaziabad store.
          </p>

          <div className="bg-ivory border border-borderSoft p-6 rounded-xs text-left mb-8 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-dark uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand" />
              <span>How To Order Today:</span>
            </div>
            <ul className="text-xs text-neutral-600 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                <span>Select any garment from our catalog and choose your preferred size and color.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                <span>Click <strong>“Enquire on WhatsApp”</strong> to send your garment choice directly to the store.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                <span>Or book an appointment on our <strong>“Visit Store”</strong> page for complete in-person trial and styling.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/shop"
              className="w-full sm:w-auto bg-dark hover:bg-brand text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore Garments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Order</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
