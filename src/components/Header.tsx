import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeaderProps {
  onOpenEnquiry: (params?: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Fresh Menu', path: '/fresh-khichiya' },
    { label: 'Bulk Orders', path: '/bulk-orders' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Contact', path: '/contact' },
  ];

  const allPages = [
    { label: 'Home', path: '/' },
    { label: 'All Packaged Khichiya', path: '/products' },
    { label: '— Wheat-Corn Khichiya', path: '/products/wheat-corn-khichiya' },
    { label: '— Mint-Coriander Khichiya', path: '/products/mint-coriander-khichiya' },
    { label: '— Special Tikha Khichiya', path: '/products/special-tikha-khichiya' },
    { label: 'Fresh Khichiya (Shop Only)', path: '/fresh-khichiya' },
    { label: 'Wholesale & Bulk Orders', path: '/bulk-orders' },
    { label: 'Wedding & Hotel Orders', path: '/wedding-hotel-orders' },
    { label: 'Our 80-Year Story', path: '/our-story' },
    { label: 'Contact & Location', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#991b1b]/15 transition-all">
      {/* Top Bar: Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext in DOM) */}
        <Link 
          to="/" 
          className="text-lg sm:text-xl font-heading font-bold text-[#881337] hover:text-[#991b1b] tracking-wide whitespace-nowrap shrink-0 transition-colors"
        >
          {BUSINESS_CONFIG.name}
        </Link>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive
                    ? 'text-[#881337] font-semibold border-b-2 border-[#881337]'
                    : 'hover:text-[#881337]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenEnquiry({ type: 'packaged' })}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#881337] hover:bg-[#700f2d] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Order on WhatsApp
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-[#881337] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#991b1b]/15 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="text-xs uppercase tracking-wider text-[#881337] font-semibold px-2 mb-2">
            Navigation Pages
          </div>
          <div className="grid grid-cols-1 gap-1">
            {allPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === page.path
                    ? 'bg-[#881337]/10 text-[#881337] font-semibold'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-[#881337]'
                }`}
              >
                {page.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry({ type: 'packaged' });
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              Order on WhatsApp
            </button>
            <a
              href={BUSINESS_CONFIG.rawPhoneNumber ? `tel:${BUSINESS_CONFIG.rawPhoneNumber}` : '#'}
              onClick={(e) => {
                if (!BUSINESS_CONFIG.rawPhoneNumber) {
                  e.preventDefault();
                  alert(`Phone number pending owner verification: ${BUSINESS_CONFIG.phonePlaceholder}`);
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#881337] text-white rounded-lg text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              Call To Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
