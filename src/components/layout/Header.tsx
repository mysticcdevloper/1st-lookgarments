import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  ArrowUpRight,
  MessageCircle,
  MapPin
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
          : 'bg-white border-b border-borderSoft py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[52px] sm:min-h-[60px] gap-2 lg:gap-4 xl:gap-8">
          
          {/* Left Brand Identity: Official Logo + "1ST LOOK GARMENTS" */}
          <Link 
            to="/" 
            className="flex items-center group transition-transform hover:opacity-95 shrink-0 mr-2 xl:mr-4"
            aria-label="1st Look Garments Homepage"
          >
            {/* Official Circular Logo */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-neutral-200/90 shadow-2xs shrink-0 bg-white flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="1st Look Garments Official Logo"
                className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Shop Name in Elegant Editorial Typography */}
            <div className="ml-2.5 sm:ml-3 flex flex-col justify-center">
              <span className="font-editorial text-sm sm:text-base md:text-lg xl:text-xl font-bold tracking-tight text-dark leading-none group-hover:text-brand transition-colors whitespace-nowrap">
                1ST LOOK GARMENTS
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-neutral-400 font-medium leading-tight mt-0.5 whitespace-nowrap">
                Ghanta Ghar • Ghaziabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (lg+) */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-7 shrink-0" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 whitespace-nowrap ${
                  isActive ? 'text-brand after:w-full' : 'text-neutral-700'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 whitespace-nowrap ${
                  isActive ? 'text-brand after:w-full' : 'text-neutral-700'
                }`
              }
            >
              Shop All
            </NavLink>

            <NavLink
              to="/new-arrivals"
              className={({ isActive }) =>
                `nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 whitespace-nowrap ${
                  isActive ? 'text-brand after:w-full' : 'text-neutral-700'
                }`
              }
            >
              New Arrivals
            </NavLink>

            {/* Dropdown for Categories */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 text-neutral-700 flex items-center space-x-1 whitespace-nowrap"
                aria-expanded={categoryDropdownOpen}
              >
                <span>Collections</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${categoryDropdownOpen ? 'rotate-180 text-brand' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {categoryDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-white border border-borderSoft shadow-editorial py-2.5 rounded-xs z-50 transition-all duration-200 transform origin-top animate-fadeIn">
                  <div className="px-4 py-1.5 border-b border-neutral-100 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                    Garment Categories
                  </div>
                  {BUSINESS_CONFIG.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={cat.path}
                      className="block px-4 py-2 text-xs text-neutral-700 hover:text-brand hover:bg-neutral-50 transition-colors group"
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
                `nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 whitespace-nowrap ${
                  isActive ? 'text-brand after:w-full' : 'text-neutral-700'
                }`
              }
            >
              Wholesale
            </NavLink>

            <NavLink
              to="/visit-store"
              className={({ isActive }) =>
                `nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 whitespace-nowrap ${
                  isActive ? 'text-brand after:w-full' : 'text-neutral-700'
                }`
              }
            >
              Visit Store
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-hover text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold transition-colors hover:text-brand pb-1 whitespace-nowrap ${
                  isActive ? 'text-brand after:w-full' : 'text-neutral-700'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Desktop Right Action Icons (lg+) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
            {/* Search Icon */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-neutral-700 hover:text-brand transition-colors rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand shrink-0"
              aria-label="Search garments"
              title="Search catalog"
            >
              <Search className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
            </button>

            {/* Direct Call Link with single-line phone number */}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
              className="inline-flex items-center space-x-1.5 text-xs text-neutral-700 hover:text-brand font-medium transition-colors p-1.5 xl:p-2 shrink-0 whitespace-nowrap"
              title="Call 1st Look Garments"
            >
              <Phone className="w-3.5 h-3.5 text-brand shrink-0" />
              <span className="hidden xl:inline whitespace-nowrap font-medium text-xs text-neutral-800">
                {BUSINESS_CONFIG.contact.phoneDisplay}
              </span>
            </a>

            {/* WhatsApp Header CTA Button */}
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 bg-brand hover:bg-brand-dark text-white px-3.5 py-1.5 xl:px-4 xl:py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider xl:tracking-widest rounded-xs shadow-xs hover:shadow-md transition-all duration-300 shrink-0 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: [Search] [Menu] */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 lg:hidden shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              className="w-10 h-10 flex items-center justify-center text-neutral-700 hover:text-brand rounded-xs transition-colors"
              aria-label="Search garments"
              title="Search catalog"
            >
              <Search className="w-5 h-5 text-neutral-700" />
            </button>

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
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
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
                  className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-dark hover:bg-neutral-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1 mb-6" aria-label="Mobile Navigation Links">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-neutral-100 text-brand' : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </NavLink>

                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-neutral-100 text-brand' : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Shop All Garments</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </NavLink>

                <NavLink
                  to="/new-arrivals"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-neutral-100 text-brand' : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>New Arrivals</span>
                  <span className="text-[9px] font-bold text-brand bg-brand/10 px-1.5 py-0.5 rounded-xs">NEW</span>
                </NavLink>

                {/* Categories Submenu in Mobile */}
                <div className="pt-2 pb-1">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                    Collections
                  </div>
                  <div className="space-y-0.5 pl-2">
                    {BUSINESS_CONFIG.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={cat.path}
                        className="flex items-center justify-between px-3 py-2 text-xs text-neutral-600 hover:text-brand hover:bg-neutral-50 rounded-xs transition-colors"
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-neutral-400">View</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <NavLink
                  to="/wholesale"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-neutral-100 text-brand' : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Wholesale Enquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </NavLink>

                <NavLink
                  to="/visit-store"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-neutral-100 text-brand' : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Visit Store</span>
                  <MapPin className="w-3.5 h-3.5 text-brand" />
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? 'bg-neutral-100 text-brand' : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>About Our Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </NavLink>
              </nav>

            </div>

            {/* Drawer Bottom Actions: Phone & WhatsApp */}
            <div className="pt-4 border-t border-neutral-100 space-y-2.5">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xs text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                className="w-full border border-neutral-300 hover:border-dark text-dark py-2.5 px-4 rounded-xs text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand" />
                <span>Call: {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>

              <p className="text-[10px] text-neutral-400 text-center pt-1">
                87/2 Ramanuj Dayal Market, Ghanta Ghar, Ghaziabad
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
