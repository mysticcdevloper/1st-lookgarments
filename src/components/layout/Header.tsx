import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
  }, [location.pathname]);

  const whatsappGeneralUrl = buildWhatsAppUrl(
    'Hello 1st Look Garments, I would like to inquire about your clothing collection and store visits.'
  );

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-2.5' 
          : 'bg-white border-b border-borderSoft py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-dark hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded-sm transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Slogan Sub-label */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/" 
              className="flex items-center group transition-transform hover:opacity-95"
              aria-label="1st Look Garments Homepage"
            >
              <img
                src="/assets/logo.png"
                alt="1st Look Garments Official Circular Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full border border-neutral-200/80 shadow-xs group-hover:scale-102 transition-transform duration-300"
              />
              <div className="ml-3 hidden sm:block">
                <span className="block font-editorial text-lg md:text-xl font-bold tracking-tight text-dark group-hover:text-brand transition-colors">
                  1ST LOOK GARMENTS
                </span>
                <span className="block text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
                  Ghanta Ghar • Ghaziabad
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with Smooth Hover Underline Animation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 ${
                  isActive ? 'text-brand font-semibold after:w-full' : 'text-neutral-800'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 ${
                  isActive ? 'text-brand font-semibold after:w-full' : 'text-neutral-800'
                }`
              }
            >
              Shop All
            </NavLink>

            <NavLink
              to="/new-arrivals"
              className={({ isActive }) =>
                `nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 ${
                  isActive ? 'text-brand font-semibold after:w-full' : 'text-neutral-800'
                }`
              }
            >
              New Arrivals
            </NavLink>

            {/* Dropdown for Categories with Smooth Animated Transition */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 text-neutral-800 flex items-center space-x-1"
                aria-expanded={categoryDropdownOpen}
              >
                <span>Collections</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${categoryDropdownOpen ? 'rotate-180 text-brand' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {categoryDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-white border border-borderSoft shadow-editorial py-2.5 rounded-sm z-50 transition-all duration-200 transform origin-top animate-fadeIn">
                  <div className="px-4 py-1.5 border-b border-neutral-100 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                    Garment Categories
                  </div>
                  {BUSINESS_CONFIG.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={cat.path}
                      className="block px-4 py-2.5 text-xs text-neutral-700 hover:text-brand hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="font-medium group-hover:translate-x-1 transition-transform duration-200">{cat.name}</div>
                      <div className="text-[10px] text-neutral-400 font-normal truncate">{cat.description}</div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-neutral-100 px-4">
                    <Link 
                      to="/shop" 
                      className="text-[11px] font-semibold text-brand hover:underline flex items-center justify-between"
                    >
                      <span>Explore Full Catalog</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/wholesale"
              className={({ isActive }) =>
                `nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 ${
                  isActive ? 'text-brand font-semibold after:w-full' : 'text-neutral-800'
                }`
              }
            >
              Wholesale
            </NavLink>

            <NavLink
              to="/visit-store"
              className={({ isActive }) =>
                `nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 ${
                  isActive ? 'text-brand font-semibold after:w-full' : 'text-neutral-800'
                }`
              }
            >
              Visit Store
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-hover text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand pb-1 ${
                  isActive ? 'text-brand font-semibold after:w-full' : 'text-neutral-800'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Right Action Icons & Direct WhatsApp Action */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Single Clean Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-neutral-700 hover:text-brand transition-colors rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand"
              aria-label="Search garments"
              title="Search catalog"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Direct Phone Link */}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-neutral-700 hover:text-brand font-medium transition-colors p-2"
              title="Call 1st Look Garments"
            >
              <Phone className="w-4 h-4 text-brand" />
              <span className="hidden xl:inline">{BUSINESS_CONFIG.contact.phoneDisplay}</span>
            </a>

            {/* Direct WhatsApp CTA Button with Smooth Hover / Scale Animation */}
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-brand hover:bg-brand-dark hover:shadow-md hover:scale-103 active:scale-97 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium uppercase tracking-widest rounded-sm shadow-xs transition-all duration-300"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 border-r border-neutral-200 animate-fadeIn">
            <div>
              {/* Header brand tag */}
              <div className="pb-4 mb-4 border-b border-neutral-100">
                <span className="text-[10px] uppercase tracking-widest text-brand font-semibold">
                  The Fixed Price Shop
                </span>
                <h3 className="font-editorial text-lg font-bold text-dark mt-0.5">
                  1st Look Garments
                </h3>
                <p className="text-xs text-neutral-500 mt-1 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-brand shrink-0" />
                  Ghanta Ghar, Ghaziabad
                </p>
              </div>

              {/* Nav links */}
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Shop All Collections
                </Link>
                <Link
                  to="/new-arrivals"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  New Arrivals
                </Link>

                {/* Categories Sub-tree */}
                <div className="py-2 pl-3 border-l-2 border-brand/40 space-y-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                    Categories
                  </div>
                  {BUSINESS_CONFIG.categories.map((c) => (
                    <Link
                      key={c.id}
                      to={c.path}
                      className="block text-xs font-medium text-neutral-700 hover:text-brand"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/wholesale"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Wholesale & Bulk
                </Link>
                <Link
                  to="/visit-store"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Visit Ghanta Ghar Store
                </Link>
                <Link
                  to="/about"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  About The Brand
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Contact & Directions
                </Link>
                <Link
                  to="/faq"
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  FAQ & Inquiries
                </Link>
              </div>
            </div>

            {/* Bottom contact info in drawer */}
            <div className="pt-6 mt-6 border-t border-neutral-100">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-brand text-white py-2.5 rounded-xs text-xs uppercase tracking-widest font-semibold shadow-xs mb-3 hover:bg-brand-dark transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                className="w-full flex items-center justify-center space-x-2 border border-neutral-300 py-2.5 rounded-xs text-xs uppercase tracking-widest font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand" />
                <span>Call +91 98915 17860</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
