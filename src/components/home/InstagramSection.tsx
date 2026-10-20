import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
      caption: 'Evening formals & tailored navy blazers. #1stlookgarments #ghaziabad',
      tag: 'Blazers',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
      caption: 'Pure Egyptian cotton formal shirts. Don’t compare the price, compare the quality.',
      tag: 'Shirts',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
      caption: 'Selvedge comfort stretch denim for everyday movement. #thefixedpriceshop',
      tag: 'Denim',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=800&auto=format&fit=crop',
      caption: 'Festive raw silk kurtas crafted for wedding season. In-store at Ghanta Ghar.',
      tag: 'Ethnic',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-t border-borderSoft">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-brand text-xs uppercase tracking-widest font-semibold mb-2">
            <Instagram className="w-4 h-4" />
            <span>@1stlookgarments</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl font-normal text-dark tracking-tight mb-2 sm:mb-4">
            FOLLOW YOUR STYLE.
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 font-light leading-relaxed mb-4 sm:mb-6">
            Explore more looks, discover new inspiration, and stay connected with 1st Look Garments on Instagram.
          </p>

          <a
            href={BUSINESS_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-dark hover:bg-brand text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-ivory overflow-hidden rounded-xs block border border-neutral-200"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold bg-white/20 px-2 py-0.5 rounded-2xs w-fit">
                  {post.tag}
                </span>
                <p className="text-xs line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand font-semibold">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>View Post</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
