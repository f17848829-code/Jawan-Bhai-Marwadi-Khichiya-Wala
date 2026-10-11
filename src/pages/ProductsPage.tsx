import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShieldCheck, Truck, Scale, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, PackagedProduct } from '../config/business';
import { ProductCard } from '../components/ProductCard';

interface ProductsPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
          <span>Product Category A</span>
          <span aria-hidden="true">·</span>
          <span>Packaged by Weight</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
          Packaged Marwari Khichiya (By Weight)
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Artisanal, sun-dried khichiya discs prepared using traditional stone-ground grains, carom seeds, cumin, and authentic papad khar. Sold by the kilogram for retail consumption, wholesale stocking, and wedding events.
        </p>
      </div>

      {/* Distinction & Delivery Policy Alert */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-bold text-sm text-stone-900">
            <Scale className="w-4 h-4 text-[#881337]" />
            <span>Per-Kilogram Pricing & Delivery Availability</span>
          </div>
          <p className="text-stone-700">
            Prices shown are strictly per-kilogram rates. Packaged products may be eligible for home delivery across Mumbai; minimum orders, delivery coverage, and charges are confirmed upon WhatsApp enquiry.
          </p>
        </div>
        <Link
          to="/fresh-khichiya"
          className="shrink-0 px-4 py-2 bg-white border border-amber-300 text-[#881337] rounded-xl font-semibold hover:bg-amber-100/50 transition-colors text-xs text-center"
        >
          Looking for Hot Fresh Khichiya? →
        </Link>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {BUSINESS_CONFIG.packagedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEnquire={(p) => onOpenEnquiry({ type: 'packaged', productName: p.name, quantityKg: '2' })}
          />
        ))}
      </div>

      {/* Information strip: Roasting & Preparation at Home */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
        <h2 className="font-heading text-xl font-bold text-stone-900">
          How to Enjoy Handcrafted Packaged Khichiya at Home
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
          <div className="space-y-2">
            <span className="font-bold text-stone-900 block font-heading text-base">
              01. Direct Flame Roasting
            </span>
            <p className="leading-relaxed text-stone-600">
              Hold the dry khichiya disc over a low gas flame using stainless steel tongs. Rotate continuously for 15-20 seconds until it puffs up evenly with golden blisters.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-stone-900 block font-heading text-base">
              02. Deep Frying in Groundnut Oil
            </span>
            <p className="leading-relaxed text-stone-600">
              Immerse in moderately hot oil for 4–5 seconds. The khichiya expands into an airy, brittle crunch. Drain excess oil on absorbent paper and enjoy hot.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-stone-900 block font-heading text-base">
              03. Homemade Street Masala Style
            </span>
            <p className="leading-relaxed text-stone-600">
              Brush roasted khichiya with melted butter, spread green coriander chutney, and top with diced onions, tomatoes, cucumber, sev namkeen, and chaat masala.
            </p>
          </div>
        </div>
      </div>

      {/* Wholesale & Event callout */}
      <div className="bg-stone-900 text-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Merchant & Event Inquiries
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Need Wholesale Quantities (25kg+) or Wedding Supplies?
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
            We supply hotels, caterers, and farsan shops across Mumbai. Pricing and lead times for bulk quantities are confirmed directly by phone or WhatsApp.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            to="/bulk-orders"
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs rounded-xl transition-colors"
          >
            Wholesale Details
          </Link>
          <button
            onClick={() => onOpenEnquiry({ type: 'wholesale' })}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
          >
            Enquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};
