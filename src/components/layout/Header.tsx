import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  MessageCircle
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
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappGeneralUrl = buildWhatsAppUrl(
    'Hello 1st Look Garments, I would like to inquire about your clothing collection and store visits.'
  );

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-neutral-100 py-2 sm:py-2.5' 
          : 'bg-white border-b border-borderSoft py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          
          {/* Left Brand Identity: Official Logo + "1ST LOOK GARMENTS" in Elegant Typography */}
          <Link 
            to="/" 
            className="flex items-center group transition-transform hover:opacity-95 shrink-0"
            aria-label="1st Look Garments Homepage"
          >
            {/* Official Circular Logo */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full overflow-hidden border border-neutral-200/90 shadow-2xs shrink-0 bg-white flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="1st Look Garments Official Logo"
                className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Shop Name in Elegant Editorial Typography */}
            <div className="ml-2.5 sm:ml-3 flex flex-col justify-center">
              <span className="font-editorial text-sm sm:text-base md:text-xl font-bold tracking-tight text-dark leading-none group-hover:text-brand transition-colors whitespace-nowrap">
                1ST LOOK GARMENTS
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-neutral-400 font-medium leading-tight mt-0.5 whitespace-nowrap">
                Ghanta Ghar • Ghaziabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (lg+) */}
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

          {/* Desktop Right Action Icons (lg+) */}
          <div className="hidden lg:flex items-center space-x-3 sm:space-x-4">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-neutral-700 hover:text-brand transition-colors rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand"
              aria-label="Search garments"
              title="Search catalog"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
              className="inline-flex items-center space-x-1.5 text-xs text-neutral-700 hover:text-brand font-medium transition-colors p-2"
              title="Call 1st Look Garments"
            >
              <Phone className="w-4 h-4 text-brand" />
              <span className="hidden xl:inline">{BUSINESS_CONFIG.contact.phoneDisplay}</span>
            </a>

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-brand hover:bg-brand-dark hover:shadow-md hover:scale-103 active:scale-97 text-white px-4 py-2 text-xs font-medium uppercase tracking-widest rounded-sm shadow-xs transition-all duration-300"
            >
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: [Search] [Menu] (Clean, luxury, aligned) */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 lg:hidden shrink-0">
            {/* Search Button on Mobile */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="w-10 h-10 flex items-center justify-center text-neutral-700 hover:text-brand rounded-xs transition-colors"
              aria-label="Search garments"
              title="Search catalog"
            >
              <Search className="w-5 h-5 text-neutral-700" />
            </button>

            {/* Hamburger Menu Toggle Button at Far Right */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-dark hover:text-brand focus:outline-none rounded-xs transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand" />
              ) : (
                <Menu className="w-6 h-6 text-dark" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-5 sm:p-6 z-10 border-r border-neutral-200 animate-fadeIn">
            <div>
              {/* Drawer Top Header with Close Button */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <div className="flex items-center space-x-2.5">
                  <img
                    src="/assets/logo.png"
                    alt="1st Look Garments Logo"
                    className="w-10 h-10 object-contain rounded-full border border-neutral-200"
                  />
                  <div>
                    <span className="font-editorial text-sm font-bold text-dark block leading-none">
                      1ST LOOK GARMENTS
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-brand font-semibold block mt-0.5">
                      The Fixed Price Shop
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-dark hover:text-brand transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Search inside Drawer */}
              <div className="mb-5">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (onOpenSearch) onOpenSearch();
                    setMobileMenuOpen(false);
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Search shirts, blazers, trousers..."
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    onClick={() => {
                      if (onOpenSearch) onOpenSearch();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xs text-xs text-dark placeholder:text-neutral-400 focus:outline-none focus:border-dark"
                  />
                  <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </form>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-3.5" aria-label="Mobile Drawer Navigation">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Shop All Collections
                </Link>
                <Link
                  to="/new-arrivals"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  New Arrivals
                </Link>

                {/* Categories Sub-tree */}
                <div className="py-2 pl-3 border-l-2 border-brand/50 space-y-2">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                    Collections & Categories
                  </div>
                  {BUSINESS_CONFIG.categories.map((c) => (
                    <Link
                      key={c.id}
                      to={c.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-medium text-neutral-700 hover:text-brand"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/wholesale"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Wholesale & Bulk
                </Link>
                <Link
                  to="/visit-store"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Visit Ghanta Ghar Store
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  About The Brand
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  Contact & Directions
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-semibold text-dark hover:text-brand transition-colors"
                >
                  FAQ & Inquiries
                </Link>
              </nav>
            </div>

            {/* Bottom Contact Info in Drawer */}
            <div className="pt-5 mt-5 border-t border-neutral-100 space-y-2.5">
              <div className="text-[11px] text-neutral-500 mb-2 flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-brand shrink-0" />
                <span>Ramanuj Dayal Market, Ghanta Ghar</span>
              </div>
              
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xs text-xs uppercase tracking-widest font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                className="w-full flex items-center justify-center space-x-2 border border-neutral-300 py-2.5 rounded-xs text-xs uppercase tracking-widest font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
