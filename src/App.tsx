import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { FreshMenuPage } from './pages/FreshMenuPage';
import { BulkOrdersPage } from './pages/BulkOrdersPage';
import { WeddingHotelOrdersPage } from './pages/WeddingHotelOrdersPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ContactPage } from './pages/ContactPage';
import { WhatsAppEnquiryParams } from './utils/whatsapp';

// Scrolls window to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryParams, setEnquiryParams] = useState<Partial<WhatsAppEnquiryParams>>({});

  const handleOpenEnquiry = (params?: Partial<WhatsAppEnquiryParams>) => {
    setEnquiryParams(params || { type: 'packaged' });
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#2C1810]">
        {/* Header following the 3-Zone contract */}
        <Header onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Multi-Page Routing */}
        <main className="flex-1">
          <Routes>
            {/* 1. Home: / */}
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* 2. All Products: /products */}
            <Route path="/products" element={<ProductsPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* 3, 4, 5. Product Detail Pages with distinct URLs */}
            <Route
              path="/products/wheat-corn-khichiya"
              element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/products/mint-coriander-khichiya"
              element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/products/special-tikha-khichiya"
              element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/products/:slug"
              element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />}
            />

            {/* 6. Fresh Khichiya Menu: /fresh-khichiya */}
            <Route
              path="/fresh-khichiya"
              element={<FreshMenuPage onOpenEnquiry={handleOpenEnquiry} />}
            />

            {/* 7. Wholesale and Bulk Orders: /bulk-orders */}
            <Route
              path="/bulk-orders"
              element={<BulkOrdersPage onOpenEnquiry={handleOpenEnquiry} />}
            />

            {/* 8. Wedding and Hotel Orders: /wedding-hotel-orders */}
            <Route
              path="/wedding-hotel-orders"
              element={<WeddingHotelOrdersPage onOpenEnquiry={handleOpenEnquiry} />}
            />

            {/* 9. Our Story: /our-story */}
            <Route
              path="/our-story"
              element={<OurStoryPage onOpenEnquiry={handleOpenEnquiry} />}
            />

            {/* 10. Contact and Location: /contact */}
            <Route
              path="/contact"
              element={<ContactPage onOpenEnquiry={handleOpenEnquiry} />}
            />

            {/* Catch-all fallback route */}
            <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          </Routes>
        </main>

        {/* Footer with verified details, local SEO, and multi-page links */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Mobile Quick-Action Floating Bar (under 15% mobile viewport cap) */}
        <MobileActionBar onOpenEnquiry={handleOpenEnquiry} />

        {/* WhatsApp & Call Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={handleCloseEnquiry}
          initialParams={enquiryParams}
        />
      </div>
    </BrowserRouter>
  );
}
