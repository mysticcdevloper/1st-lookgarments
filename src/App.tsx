import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { SearchModal } from './components/common/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { 
  NewArrivalsPage, 
  ShirtsCollectionPage, 
  BlazersCollectionPage, 
  BottomwearCollectionPage, 
  TShirtsCollectionPage, 
  EthnicWearCollectionPage 
} from './pages/CollectionsPages';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { VisitStorePage } from './pages/VisitStorePage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-dark">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Header Navigation */}
        <Header onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Main Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            
            {/* Category Collections */}
            <Route path="/collections/shirts" element={<ShirtsCollectionPage />} />
            <Route path="/collections/blazers" element={<BlazersCollectionPage />} />
            <Route path="/collections/bottomwear" element={<BottomwearCollectionPage />} />
            <Route path="/collections/tshirts" element={<TShirtsCollectionPage />} />
            <Route path="/collections/ethnic-wear" element={<EthnicWearCollectionPage />} />

            {/* Product Detail Route */}
            <Route path="/product/:slug" element={<ProductDetailPage />} />

            {/* Brand, Appointments & Wholesale */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/visit-store" element={<VisitStorePage />} />
            <Route path="/wholesale" element={<WholesalePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />

            {/* Legal & Cart */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Custom 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action */}
        <WhatsAppButton />

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
