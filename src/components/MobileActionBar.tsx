import React from 'react';
import { Phone, MessageSquare, MapPin, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';

interface MobileActionBarProps {
  onOpenEnquiry: (params?: any) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#991b1b]/20 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* WhatsApp Order */}
        <button
          onClick={() => onOpenEnquiry({ type: 'packaged' })}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-emerald-700 active:bg-emerald-800 text-white rounded-lg text-[11px] font-medium leading-tight shadow-xs"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </button>

        {/* Call to Order */}
        <a
          href={BUSINESS_CONFIG.rawPhoneNumber ? `tel:${BUSINESS_CONFIG.rawPhoneNumber}` : '#'}
          onClick={(e) => {
            if (!BUSINESS_CONFIG.rawPhoneNumber) {
              e.preventDefault();
              onOpenEnquiry({ type: 'general' });
            }
          }}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#881337] active:bg-[#700f2d] text-white rounded-lg text-[11px] font-medium leading-tight shadow-xs"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Shop</span>
        </a>

        {/* Directions */}
        <a
          href={BUSINESS_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-stone-100 active:bg-stone-200 text-stone-800 border border-stone-300 rounded-lg text-[11px] font-medium leading-tight"
        >
          <MapPin className="w-4 h-4 text-[#881337] mb-0.5" />
          <span>Directions</span>
        </a>

        {/* Fresh Menu */}
        <Link
          to="/fresh-khichiya"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-amber-50 active:bg-amber-100 text-amber-900 border border-amber-200 rounded-lg text-[11px] font-medium leading-tight"
        >
          <UtensilsCrossed className="w-4 h-4 text-amber-800 mb-0.5" />
          <span>Fresh Menu</span>
        </Link>
      </div>
    </div>
  );
};
