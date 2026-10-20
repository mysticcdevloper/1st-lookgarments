import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AppointmentForm } from '../components/forms/AppointmentForm';
import { BUSINESS_CONFIG } from '../config/business';
import { MapPin, Phone, MessageCircle, Navigation, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const VisitStorePage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello 1st Look Garments, I am planning a visit to your Ghanta Ghar store and would like directions.'
  );

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'Visit Store & Appointments' }]} />

        {/* Hero Section */}
        <div className="pt-4 pb-12 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            Ramanuj Dayal Market • Ghanta Ghar
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-dark tracking-tight mb-4">
            PLAN YOUR VISIT.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl">
            Tell us when you would like to visit 1st Look Garments, and send us your request directly. Experience personalized fit consultations and try on our complete collection of blazers, shirts, denims, and ethnic wear.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, Location & Guide on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16">
          
          {/* Left Column: Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>

          {/* Right Column: Directions, Map & Store Guide */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Information Card */}
            <div className="bg-ivory border border-borderSoft p-6 sm:p-8 rounded-xs shadow-xs">
              <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
                Store Location Details
              </span>
              <h3 className="font-editorial text-2xl font-bold text-dark mb-4">
                1st Look Garments
              </h3>

              <div className="space-y-4 text-xs text-neutral-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark block mb-0.5">Physical Address:</strong>
                    <address className="not-italic leading-relaxed">
                      {BUSINESS_CONFIG.contact.address.fullAddress}
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark block mb-0.5">Nearby Landmarks:</strong>
                    <p className="leading-relaxed">
                      Near Ramte Ram Road, close to the historic Ghanta Ghar Clock Tower, Ghaziabad. Ramanuj Dayal Market is easily accessible from local transit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark block mb-0.5">Need Directions on Call:</strong>
                    <a 
                      href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                      className="text-dark font-bold hover:text-brand transition-colors"
                    >
                      {BUSINESS_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Maps Action */}
              <div className="mt-6 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-dark hover:bg-neutral-800 text-white py-3 px-4 text-xs font-semibold uppercase tracking-widest rounded-xs text-center transition-colors flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand" />
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-emerald-600 hover:bg-emerald-50 text-emerald-700 py-3 px-4 text-xs font-semibold uppercase tracking-widest rounded-xs text-center transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Help</span>
                </a>
              </div>
            </div>

            {/* In-Store Benefits */}
            <div className="bg-white border border-borderSoft p-6 rounded-xs space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-dark">
                Why Visit Our Ghaziabad Store?
              </h4>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complete size trials across slim, regular, and custom fits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Feel genuine fabrics: Supima cotton, pure linen, raw silk</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Exclusive in-store ethnic kurta sets and wedding blazers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct wholesale desk discussion for bulk purchases</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
