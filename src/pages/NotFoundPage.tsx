import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
          Page Not Found • 404
        </span>

        <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-dark tracking-tight mb-4">
          LOOK NOT FOUND.
        </h1>

        <p className="text-sm text-neutral-500 font-light leading-relaxed mb-8">
          The page or garment link you followed may have moved or doesn't exist. Explore our full collection of shirts, blazers, and ethnic wear.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/shop"
            className="bg-dark hover:bg-brand text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors inline-flex items-center justify-center space-x-2"
          >
            <span>Back to Shopping</span>
          </Link>

          <Link
            to="/"
            className="border border-neutral-300 hover:border-dark text-dark px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
