import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <aside 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end space-x-2 pointer-events-auto"
      aria-label="Direct WhatsApp Contact"
    >
      {/* Editorial Tooltip Pill (Desktop only to prevent mobile occlusion) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-white text-dark shadow-xl border border-neutral-200/90 px-3.5 py-2 rounded-full text-xs font-medium space-x-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="whitespace-nowrap text-neutral-800">Need help finding a size or fit? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-dark p-0.5 ml-1 transition-colors"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact 1st Look Garments on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative group shrink-0"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500"></span>
        </span>
      </a>
    </aside>
  );
};
