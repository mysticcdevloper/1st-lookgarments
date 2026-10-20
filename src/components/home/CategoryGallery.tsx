import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const CategoryGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-borderSoft gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
              Curated Wardrobe
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-dark tracking-tight">
              Shop by Category
            </h2>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-neutral-800 hover:text-brand transition-colors group"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CONFIG.categories.map((category, idx) => {
            // Give the first category a larger card feel
            const isFeatured = idx === 0;

            return (
              <Link
                key={category.id}
                to={category.path}
                className={`group relative overflow-hidden rounded-xs bg-dark block ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[420px] lg:min-h-full' : 'min-h-[320px]'
                }`}
              >
                {/* Background Category Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-75"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] uppercase tracking-widest text-white/70 font-semibold bg-dark/60 backdrop-blur-xs px-2.5 py-1 rounded-2xs">
                      Category 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-2 group-hover:text-ivory transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-sm line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-brand group-hover:text-white transition-colors">
                      <span>Explore Collection</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
