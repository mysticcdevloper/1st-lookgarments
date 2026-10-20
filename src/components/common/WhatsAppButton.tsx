import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end space-x-2">
      {/* Editorial Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-white text-dark shadow-xl border border-neutral-200 px-3.5 py-2 rounded-full text-xs font-medium space-x-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Need help finding a size or fit? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-dark p-0.5 ml-1"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact 1st Look Garments on WhatsApp"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
      </a>
    </div>
  );
};
