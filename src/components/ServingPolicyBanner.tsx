import React from 'react';
import { Store, PackageCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServingPolicyBanner: React.FC = () => {
  return (
    <div className="bg-[#FFFDF9] rounded-2xl border border-[#991b1b]/20 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337] mb-3">
        <AlertCircle className="w-4 h-4" />
        <span>Important Ordering & Serving Guidelines</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Packaged policy */}
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
          <div className="flex items-center gap-2 mb-1.5">
            <PackageCheck className="w-5 h-5 text-amber-800" />
            <h4 className="font-heading font-bold text-stone-900 text-sm">
              Packaged Khichiya (By Weight)
            </h4>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
            Sun-dried khichiya sold by the kilogram (₹250 – ₹350/kg) for retail, bulk, hotel supplies, and wedding counters. May be eligible for delivery across Mumbai upon enquiry or in-shop pickup.
          </p>
          <Link
            to="/products"
            className="text-xs font-semibold text-[#881337] hover:underline"
          >
            Explore Packaged Varieties →
          </Link>
        </div>

        {/* Fresh shop policy */}
        <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/60">
          <div className="flex items-center gap-2 mb-1.5">
            <Store className="w-5 h-5 text-[#881337]" />
            <h4 className="font-heading font-bold text-stone-900 text-sm">
              Fresh Khichiya (Eat at Shop Only)
            </h4>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
            Freshly roasted Plain, Butter, and Masala Khichiya (₹25 – ₹60) are prepared hot and served strictly at our physical shop near Kaal Bhairav Mandir. Not available for home delivery. Call ahead welcome.
          </p>
          <Link
            to="/fresh-khichiya"
            className="text-xs font-semibold text-[#881337] hover:underline"
          >
            View Fresh Shop Menu →
          </Link>
        </div>
      </div>
    </div>
  );
};
