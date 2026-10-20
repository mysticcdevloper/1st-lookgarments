import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Calendar, 
  ArrowUpRight, 
  Send 
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello 1st Look Garments,\nMy Name: ${name || 'Customer'}\nMessage: ${message || 'I have an inquiry regarding your garments.'}`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Page Header */}
        <div className="pt-4 pb-12 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            Get In Touch • Ghaziabad Store
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-dark tracking-tight mb-4">
            CONTACT & VISIT US.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Have questions about a particular garment, need size recommendations, or want to discuss bulk wholesale requirements? We’re here to help.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Phone */}
          <div className="bg-ivory border border-borderSoft p-6 sm:p-8 rounded-xs">
            <Phone className="w-6 h-6 text-brand mb-4" />
            <h3 className="font-editorial text-xl font-bold text-dark mb-1">
              Call Us Directly
            </h3>
            <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
              Speak with our store manager for quick answers on stock, sizes, and market directions.
            </p>
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
              className="inline-flex items-center space-x-2 text-dark font-bold text-sm hover:text-brand transition-colors"
            >
              <span>{BUSINESS_CONFIG.contact.phoneDisplay}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-emerald-50/60 border border-emerald-200 p-6 sm:p-8 rounded-xs">
            <MessageCircle className="w-6 h-6 text-emerald-600 mb-4" />
            <h3 className="font-editorial text-xl font-bold text-dark mb-1">
              WhatsApp Support
            </h3>
            <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
              Send screenshots, check product availability, or ask for sizing charts directly on chat.
            </p>
            <a
              href={buildWhatsAppUrl('Hello 1st Look Garments, I would like to get in touch.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-emerald-800 font-bold text-sm hover:underline"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Instagram */}
          <div className="bg-ivory border border-borderSoft p-6 sm:p-8 rounded-xs">
            <Instagram className="w-6 h-6 text-brand mb-4" />
            <h3 className="font-editorial text-xl font-bold text-dark mb-1">
              Official Instagram
            </h3>
            <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
              Follow our official profile for styling inspiration and new seasonal drops.
            </p>
            <a
              href={BUSINESS_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-dark font-bold text-sm hover:text-brand transition-colors"
            >
              <span>@1stlookgarments</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
            </a>
          </div>

        </div>

        {/* 2-Column: Physical Store Details on Left, Direct WhatsApp Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16 border-t border-borderSoft pt-12">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand font-semibold block">
              Store Address & Directions
            </span>
            <h2 className="font-editorial text-3xl font-normal text-dark tracking-tight">
              Ghanta Ghar, Ghaziabad Store
            </h2>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xs space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark block mb-1 text-sm font-editorial">1st Look Garments</strong>
                  <address className="not-italic text-neutral-600 leading-relaxed text-xs">
                    {BUSINESS_CONFIG.contact.address.line1},<br />
                    {BUSINESS_CONFIG.contact.address.line2},<br />
                    {BUSINESS_CONFIG.contact.address.city}, {BUSINESS_CONFIG.contact.address.state} - {BUSINESS_CONFIG.contact.address.postalCode}
                  </address>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark hover:bg-neutral-800 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors inline-flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-brand" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/visit-store"
                className="border border-neutral-300 hover:border-dark text-dark px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors inline-flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-brand" />
                <span>Book Store Appointment</span>
              </Link>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-6 bg-white border border-borderSoft p-6 sm:p-8 rounded-xs shadow-xs">
            <h3 className="font-editorial text-2xl font-bold text-dark mb-1">
              Send a Direct Note
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Write your inquiry below. Submitting will open WhatsApp with your message ready to send.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vikram Singh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1">
                  Your Inquiry or Question
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're looking for (e.g., sizes, blazer trials, wedding outfits, wholesale)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Send to 1st Look Garments on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
