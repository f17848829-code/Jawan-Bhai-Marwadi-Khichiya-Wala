import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Package, 
  Truck, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  HelpCircle,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface BulkOrdersPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const BulkOrdersPage: React.FC<BulkOrdersPageProps> = ({ onOpenEnquiry }) => {
  const [variety, setVariety] = useState('All / Assorted Varieties');
  const [quantityKg, setQuantityKg] = useState('50');
  const [businessType, setBusinessType] = useState('Retail Farsan Shop');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
          <span>Commercial Supply</span>
          <span aria-hidden="true">·</span>
          <span>By Weight (Kilograms)</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
          Wholesale & Bulk Khichiya Orders
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Supplying authentic Marwari sun-dried khichiya to retail snack merchants, farsan stores, and food distributors across Mumbai. Handcrafted using consistent recipes tested over ~80 years of family continuity.
        </p>
      </div>

      {/* Pricing Policy Disclaimer (Honest & Compliant) */}
      <div className="bg-amber-50/80 border border-amber-300/80 rounded-2xl p-6 text-stone-800 text-xs sm:text-sm space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wide">
          <Scale className="w-5 h-5 text-[#881337]" />
          <span>Transparent Bulk Pricing Policy</span>
        </div>
        <p className="text-stone-700 leading-relaxed">
          Wholesale and large bulk order pricing is <strong>confirmed exclusively by speaking with our family business</strong>. We do not publish automated quotes or artificial discounts online because commercial pricing depends on order volume (e.g. 25kg, 50kg, 100kg+), packaging format, and dispatch logistics. Contact us directly for an honest quotation.
        </p>
      </div>

      {/* Commercial Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-stone-900 text-lg">
            Retail Farsan & Grocery Stores
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Consistent quality dry discs that retail shopkeepers can sell under their own store displays or in convenient 500g / 1kg customer packs.
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 pt-2 border-t border-stone-100">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Moisture-resistant master cartons</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Standard per-kilogram batches</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-[#881337]">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-stone-900 text-lg">
            Mumbai Delivery & Transport
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Bulk orders can be picked up directly at our shop in the Mumbadevi precinct or scheduled for local commercial transport across greater Mumbai.
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 pt-2 border-t border-stone-100">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Flexible dispatch schedules</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Safe cushioning against transit breakage</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-900">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-stone-900 text-lg">
            Batch Purity & Long Shelf Life
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Our traditional sun-drying process yields a stable shelf-life of several months when stored in a cool, dry environment without artificial additives.
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 pt-2 border-t border-stone-100">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Zero chemical preservatives</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Crisp expansion upon roasting/frying</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Available Varieties in Bulk */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
        <h2 className="font-heading text-xl font-bold text-stone-900">
          Varieties Available for Bulk & Wholesale Order
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS_CONFIG.packagedProducts.map((p) => (
            <div key={p.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#881337]">
                Retail Benchmark: ₹{p.pricePerKg}/kg
              </span>
              <h4 className="font-heading font-bold text-stone-900 text-base">{p.name}</h4>
              <p className="text-xs text-stone-600">{p.description}</p>
              <div className="pt-2 text-xs font-medium text-stone-700">
                Bulk Packaging: 10kg, 25kg, 50kg master batches
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Bulk Inquiry Form & Direct WhatsApp */}
      <div className="bg-[#2C1810] text-amber-50 rounded-2xl p-6 sm:p-10 border border-[#881337] space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Request Commercial Quote
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Connect for Commercial Terms & Lead Times
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Fill in your estimated requirements below to generate an instant WhatsApp message or call our shop directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <div>
            <label className="text-xs font-semibold text-stone-300 block mb-1">
              Variety
            </label>
            <select
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className="w-full px-3 py-2.5 text-xs bg-stone-900 border border-stone-700 rounded-xl text-stone-100"
            >
              <option value="All / Assorted Varieties">All / Assorted Varieties</option>
              {BUSINESS_CONFIG.packagedProducts.map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-300 block mb-1">
              Estimated Volume
            </label>
            <select
              value={quantityKg}
              onChange={(e) => setQuantityKg(e.target.value)}
              className="w-full px-3 py-2.5 text-xs bg-stone-900 border border-stone-700 rounded-xl text-stone-100"
            >
              <option value="25">25 kg (Trial Commercial)</option>
              <option value="50">50 kg</option>
              <option value="100">100 kg</option>
              <option value="200+">200+ kg (Commercial)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-300 block mb-1">
              Business Type
            </label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-3 py-2.5 text-xs bg-stone-900 border border-stone-700 rounded-xl text-stone-100"
            >
              <option value="Retail Farsan / Sweet Shop">Retail Farsan / Sweet Shop</option>
              <option value="Catering & Banquet Business">Catering & Banquet Business</option>
              <option value="Hotel / Restaurant Kitchen">Hotel / Restaurant Kitchen</option>
              <option value="Snack Distributor / Wholesaler">Snack Distributor / Wholesaler</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() =>
              onOpenEnquiry({
                type: 'wholesale',
                productName: variety,
                quantityKg,
                notes: `Business type: ${businessType}. Requesting commercial wholesale rates.`,
              })
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Bulk Enquiry on WhatsApp</span>
          </button>

          <a
            href={BUSINESS_CONFIG.rawPhoneNumber ? `tel:${BUSINESS_CONFIG.rawPhoneNumber}` : '#'}
            onClick={(e) => {
              if (!BUSINESS_CONFIG.rawPhoneNumber) {
                e.preventDefault();
                onOpenEnquiry({
                  type: 'wholesale',
                  productName: variety,
                  quantityKg,
                  notes: `Wholesale call enquiry for ${businessType}`,
                });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Confirm Bulk Pricing</span>
          </a>
        </div>
      </div>
    </div>
  );
};
