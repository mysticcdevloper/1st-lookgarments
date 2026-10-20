import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Products & Sizing' | 'Pricing' | 'Wholesale' | 'Store Visit';
}

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'General',
      question: 'Where is 1st Look Garments located?',
      answer: 'Our store is located at 87/2 Ramanuj Dayal Market, Near Ramte Ram Road, Ghanta Ghar, Ghaziabad, Uttar Pradesh 201001. We are in the vibrant Ghanta Ghar market area, easily accessible from all parts of Ghaziabad and NCR.',
    },
    {
      category: 'Pricing',
      question: 'What does "The Fixed Price Shop" mean?',
      answer: 'At 1st Look Garments, "The Fixed Price Shop" means all garments are priced fairly, accurately, and honestly from day one. Our motto is "Don\'t Compare The Price, Compare The Quality." We avoid inflated markup tags followed by misleading discounts, offering direct honest pricing to all customers.',
    },
    {
      category: 'Products & Sizing',
      question: 'What garment categories do you stock?',
      answer: 'We stock a comprehensive range of menswear and occasion wear, including: tailored blazers and tuxedos, pure cotton formal shirts, casual and trending printed shirts, comfort-stretch jeans and denim, pleated and flat-front formal trousers, heavyweight t-shirts and pique polos, and festive kurtas and pathani sets.',
    },
    {
      category: 'Products & Sizing',
      question: 'What sizes are available in store?',
      answer: 'Most shirts and blazers are stocked in sizes 38, 39, 40, 42, 44, and 46. Trousers and jeans typically range from waist size 30 to 38. T-shirts and casuals are available in M, L, XL, and XXL. If you have custom size requirements, you can message us in advance on WhatsApp before visiting.',
    },
    {
      category: 'Store Visit',
      question: 'Can I visit the store to try on clothes before buying?',
      answer: 'Absolutely. We encourage all customers to visit our Ramanuj Dayal Market store. Trying on garments ensures the shoulder pitch, sleeve length, chest drape, and trouser inseam match your personal comfort. You can also use our "Visit Store" page to let us know when you plan to visit.',
    },
    {
      category: 'Wholesale',
      question: 'Do you sell wholesale garments to boutiques and retail shops?',
      answer: 'Yes! 1st Look Garments actively caters to clothing retail stores, boutiques, and bulk buyers. We supply assorted size packs across shirts, blazers, trousers, and ethnic garments with wholesale price structures. Submit a wholesale inquiry on our Wholesale page or chat with our wholesale team on WhatsApp.',
    },
    {
      category: 'General',
      question: 'How do I place an online order or ask for product prices?',
      answer: 'Browse any garment on our website and click "Enquire on WhatsApp". Your message will automatically include the product name, selected size, and color. Our team will verify live in-store stock and guide you through payment and pickup/dispatch.',
    },
    {
      category: 'General',
      question: 'Is online doorstep delivery operational?',
      answer: 'We currently prioritize in-store trials and WhatsApp-assisted local pickups and shipments. Direct online cart checkout and automated courier tracking are under development for our next digital phase.',
    },
  ];

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Header */}
        <div className="pt-4 pb-12 text-center max-w-2xl mx-auto">
          <HelpCircle className="w-8 h-8 text-brand mx-auto mb-3" />
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            Clear & Honest Answers
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-dark tracking-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            Everything you need to know about our Ghanta Ghar store, fixed price policy, garment sizing, store visits, and wholesale purchasing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 pb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-borderSoft rounded-xs bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-2xs bg-neutral-100 text-neutral-600 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-editorial text-base sm:text-lg font-bold text-dark">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-ivory/30 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-ivory border border-borderSoft p-8 rounded-xs text-center mb-12">
          <h3 className="font-editorial text-2xl font-bold text-dark mb-2">
            Still have a question?
          </h3>
          <p className="text-xs text-neutral-600 mb-6 max-w-md mx-auto">
            Our team is always happy to answer questions regarding particular fabrics, fits, or wholesale terms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl('Hello 1st Look Garments, I have a question not covered in your FAQ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="border border-neutral-300 hover:border-dark text-dark px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
