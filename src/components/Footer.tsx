import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { LocalBusinessSchema } from './LocalBusinessSchema';

interface FooterProps {
  onOpenEnquiry: (params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#24120D] text-[#EDE0D4] pt-16 pb-24 md:pb-12 border-t-4 border-[#881337]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Heritage & Identity */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-amber-200 tracking-wide">
              {BUSINESS_CONFIG.name}
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Carrying forward an authentic Marwari culinary tradition with approximately 80 years of family history. Started by the grandfather and expanded by the father for ~40 years.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Pure traditional recipes with uncompromised quality
              </span>
            </div>
          </div>

          {/* Col 2: Packaged Khichiya & Fresh Menu */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm uppercase tracking-wider text-amber-300 font-semibold">
              Our Khichiya Offerings
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link to="/products" className="hover:text-amber-200 transition-colors">
                  All Packaged Products (By Weight)
                </Link>
              </li>
              <li>
                <Link to="/products/wheat-corn-khichiya" className="hover:text-amber-200 transition-colors">
                  Wheat-Corn Khichiya (₹250/kg)
                </Link>
              </li>
              <li>
                <Link to="/products/mint-coriander-khichiya" className="hover:text-amber-200 transition-colors">
                  Mint-Coriander Khichiya (₹350/kg)
                </Link>
              </li>
              <li>
                <Link to="/products/special-tikha-khichiya" className="hover:text-amber-200 transition-colors">
                  Special Tikha Khichiya (₹350/kg)
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to="/fresh-khichiya" className="text-amber-200 font-medium hover:underline flex items-center justify-between">
                  <span>Fresh Menu (Shop Only)</span>
                  <span className="text-xs text-amber-400 font-mono">₹25 - ₹60</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Bulk & Multi-page Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm uppercase tracking-wider text-amber-300 font-semibold">
              Wholesale & Information
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link to="/bulk-orders" className="hover:text-amber-200 transition-colors">
                  Wholesale & Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/wedding-hotel-orders" className="hover:text-amber-200 transition-colors">
                  Wedding & Hotel Supplies
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-amber-200 transition-colors">
                  Our 80-Year Family History
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-200 transition-colors">
                  Contact & Shop Location
                </Link>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenEnquiry({ type: 'wholesale' })}
                  className="text-xs text-amber-300 hover:text-white underline font-medium text-left"
                >
                  Direct Wholesale Price Enquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm uppercase tracking-wider text-amber-300 font-semibold">
              Location & Hours
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-stone-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span>{BUSINESS_CONFIG.locationDescription}</span>
            </div>
            <div className="space-y-1.5 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.rawPhoneNumber}`} className="hover:text-amber-200 font-mono">
                  {BUSINESS_CONFIG.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 pl-5">
                <a href={`tel:${BUSINESS_CONFIG.rawSecondaryPhoneNumber}`} className="hover:text-amber-200 font-mono">
                  {BUSINESS_CONFIG.secondaryPhone}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-100 underline font-medium"
              >
                <span>View Area Map (Kaal Bhairav Mandir)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Local SEO & Transparency Notice */}
        <div className="py-6 border-b border-white/10 text-xs text-stone-400 space-y-2 leading-relaxed">
          <p>
            <strong className="text-stone-300">Serving Local Mumbai:</strong> Marwadi Khichiya near Mumbadevi Mumbai · Khichiya in Mumbai · Marwadi Khichiya wholesale Mumbai · Khichiya for weddings and bulk orders Mumbai · Fresh Butter & Masala Khichiya near Kaal Bhairav Mandir.
          </p>
          <p className="text-stone-400 text-[11px]">
            * Note on Photography: High-resolution food images displayed on this site are respectful visual representations of our handcrafted Marwari products until direct shop photos are added. Freshly prepared menu items are strictly available for eating at our physical shop.
          </p>
        </div>

        {/* Schema.org LocalBusiness Structured Data markup */}
        <LocalBusinessSchema />

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/our-story" className="hover:text-stone-200">Our Heritage</Link>
            <Link to="/fresh-khichiya" className="hover:text-stone-200">Shop Menu</Link>
            <Link to="/contact" className="hover:text-stone-200">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
