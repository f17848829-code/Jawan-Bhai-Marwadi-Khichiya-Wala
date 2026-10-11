import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Phone, 
  MapPin, 
  UtensilsCrossed, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  ExternalLink,
  ChefHat,
  ImageOff
} from 'lucide-react';
import { BUSINESS_CONFIG, FreshMenuItem, freshMasalaKhichiyaShop } from '../config/business';

interface FreshMenuPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const FreshMenuPage: React.FC<FreshMenuPageProps> = ({ onOpenEnquiry }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
          <span>Product Category B</span>
          <span aria-hidden="true">·</span>
          <span>Prepared Fresh at Physical Shop</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
          Fresh Khichiya Menu (Prepared at the Shop)
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Roasted hot to order over an open flame, brushed with yellow butter, generously garnished with garden-fresh vegetables, crunchy namkeen, and accompanied by our signature mint-coriander chutney.
        </p>
      </div>

      {/* STRICT SERVING POLICY CALLOUT */}
      <div className="bg-rose-50 border-2 border-rose-300/80 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-950 uppercase tracking-wide">
              <AlertTriangle className="w-5 h-5 text-[#881337] shrink-0" />
              <span>Important Serving & Dining Policy</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
              Freshly prepared menu items are <strong>available for eating at the physical shop only</strong>. Customers must visit the shop to eat them fresh off the flame. We do not provide home delivery for these freshly served items to guarantee crispness and warmth. You are welcome to <strong>call ahead</strong> before visiting to confirm shop rush or place an advance notification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() =>
                onOpenEnquiry({
                  type: 'fresh_call_ahead',
                  notes: 'Visiting shop for fresh Masala / Butter Khichiya',
                })
              }
              className="px-4 py-2.5 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs text-center"
            >
              Call Ahead / Notify Shop
            </button>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white border border-rose-300 hover:bg-rose-100/50 text-stone-800 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#881337]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Visual Feature Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 shadow-sm border border-stone-200">
          {!imgError ? (
            <img
              src={freshMasalaKhichiyaShop}
              alt="Freshly prepared street-style Masala Khichiya topped with yellow butter, coriander, diced vegetables, and crunchy sev"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-stone-400 bg-stone-50">
              <ChefHat className="w-10 h-10 text-[#881337]/50 mb-2" />
              <span className="text-xs font-semibold text-stone-600">Fresh Masala Khichiya</span>
            </div>
          )}
          <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] text-amber-200 font-medium">
            Prepared Hot at Kaal Bhairav Mandir
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#881337] font-semibold">
            The Traditional Mumbai Experience
          </span>
          <h2 className="font-heading text-2xl font-bold text-stone-900">
            Cracking, Hot, and Loaded with Fresh Marwari Spices
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Unlike pre-packed snacks, our shop-counter khichiya is roasted seconds before it reaches your plate. We brush hot melted butter across blistering grain discs, layer crunchy diced salad (cucumber, ripe tomato, sharp red onions), and dust our family's special chaat spice formulation before pouring fresh green chutney.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-700">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#881337]" />
              Pure Vegetarian
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              Fresh Chutneys Prepared Daily
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              In-Shop Dining Experience
            </span>
          </div>
        </div>
      </div>

      {/* Complete Menu Cards (All 6 exact items) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
            Fresh Shop Menu & Exact Prices
          </h2>
          <span className="text-xs text-stone-500 font-medium">All 6 items served hot at shop</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CONFIG.freshMenu.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between hover:border-[#881337]/30 transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-[#881337] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-sans-clean font-bold text-xl text-[#881337] tabular-nums shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Toppings / components */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                    Preparation / Inclusions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.toppings.map((top, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md"
                      >
                        {top}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Serving Note & Action */}
              <div className="mt-6 pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[11px] text-stone-500 block italic">
                  {item.servingNote}
                </span>

                <button
                  onClick={() =>
                    onOpenEnquiry({
                      type: 'fresh_call_ahead',
                      notes: `Interested in ordering ${item.name} (₹${item.price}) during shop visit.`,
                    })
                  }
                  className="w-full py-2 bg-stone-100 hover:bg-[#881337] hover:text-white text-stone-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Ahead for {item.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location guidance */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <Store className="w-4 h-4" />
          <span>Shop Location & Visiting Instructions</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
          Where to Find {BUSINESS_CONFIG.name}
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
          Located {BUSINESS_CONFIG.locationDescription}. Easily accessible on foot from Mumbadevi Temple, Bhuleshwar textile market, and Kalbadevi. When arriving in the Kaal Bhairav Mandir lane, look for our traditional snack counter.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Open Directions in Google Maps</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-white/20"
          >
            <span>Detailed Transit & Landmark Guide</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
