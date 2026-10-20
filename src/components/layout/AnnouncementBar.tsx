import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../../config/business';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  const [currentIndex] = useState(0);

  return (
    <div className="bg-dark text-white text-[11px] md:text-xs py-2 px-4 border-b border-dark-soft">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 overflow-hidden mx-auto md:mx-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
          <p className="tracking-widest uppercase font-medium text-ivory-200 truncate">
            {BUSINESS_CONFIG.announcements[currentIndex]}
          </p>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-neutral-300">
          <Link
            to="/visit-store"
            className="hover:text-white transition-colors flex items-center space-x-1 font-medium"
          >
            <span>Visit Ghanta Ghar Store</span>
            <ArrowRight className="w-3 h-3 text-brand" />
          </Link>
          <span className="text-neutral-600">|</span>
          <Link
            to="/wholesale"
            className="hover:text-white transition-colors flex items-center space-x-1 font-medium"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Wholesale Bulk Inquiries</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
