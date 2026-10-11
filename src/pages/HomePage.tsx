import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  UtensilsCrossed, 
  Package, 
  Store,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_CONFIG, PackagedProduct } from '../config/business';
import { ProductCard } from '../components/ProductCard';
import { ServingPolicyBanner } from '../components/ServingPolicyBanner';

interface HomePageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION: Traditional Rajasthani/Marwari food brand aesthetic */}
      <section className="relative bg-[#200F0A] text-amber-50 overflow-hidden border-b-4 border-[#881337]">
        {/* Subtle background ambient glow */}
        <div className="absolute inset-0 bg-radial from-[#881337]/30 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headline and Story */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 tracking-wider uppercase">
                <span>Authentic Marwari Heritage</span>
                <span aria-hidden="true">·</span>
                <span>Near Kaal Bhairav Mandir, Mumbadevi</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
                Handcrafted Marwari Khichiya, Rooted in 80 Years of Tradition.
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Founded by our grandfather and nurtured by our father for over 40 years. Experience the authentic crunch of sun-dried grain khichiya, roasted street-style masala snacks, and dependable wholesale supplies in the heart of Mumbai.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenEnquiry({ type: 'packaged' })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-amber-100 border border-white/20 rounded-xl text-sm font-semibold transition-colors"
                >
                  <span>Explore Packaged Khichiya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/fresh-khichiya"
                  className="inline-flex items-center gap-2 px-4 py-3 text-amber-300 hover:text-white text-sm font-medium transition-colors"
                >
                  <span>Fresh Shop Menu (₹25–₹60)</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-300">
                <div>
                  <span className="block font-bold text-base text-amber-300 font-heading">~80 Years</span>
                  <span>Family Heritage</span>
                </div>
                <div>
                  <span className="block font-bold text-base text-amber-300 font-heading">₹250 - ₹350</span>
                  <span>Per-Kg Packaged Rates</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block font-bold text-base text-amber-300 font-heading">Kaal Bhairav</span>
                  <span>Near Mumbadevi, Mumbai</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/30 shadow-2xl bg-black/40 aspect-4/3">
                {!heroImgError ? (
                  <img
                    src="/src/assets/images/hero_marwadi_khichiya_1791632824607.jpg"
                    alt="Authentic fresh roasted Marwari Khichiya topped with butter, sev, and chutney on antique brassware"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-900 text-stone-300">
                    <UtensilsCrossed className="w-10 h-10 text-amber-400 mb-3" />
                    <span className="font-heading font-bold text-lg text-amber-200">Jawan Bhai Marwadi Khichiya</span>
                    <p className="text-xs text-stone-400 mt-2">Authentic traditional Marwari khichiya crafted near Kaal Bhairav Mandir</p>
                  </div>
                )}
                
                {/* Visual caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-xs text-amber-100">
                  <span className="font-semibold block text-amber-200">Fresh Masala Khichiya Serving</span>
                  <span>Prepared hot on direct flame at our shop near Kaal Bhairav Mandir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE PILLARS CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Packaged Khichiya */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs hover:border-[#881337]/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 mb-5">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold">Category A</span>
              <h3 className="font-heading text-xl font-bold text-stone-900 mt-1 mb-2 group-hover:text-[#881337] transition-colors">
                Packaged Khichiya
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Handcrafted sun-dried discs sold by weight (₹250 – ₹350/kg). Perfect for household stocking, roasting over gas flames, or deep frying at home.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-900 tabular-nums">From ₹250/kg</span>
              <Link
                to="/products"
                className="text-xs font-semibold text-[#881337] hover:underline inline-flex items-center gap-1"
              >
                <span>View Products</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Fresh Shop Menu */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs hover:border-[#881337]/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-[#881337] mb-5">
                <Store className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#881337] font-semibold">Category B · Shop Only</span>
              <h3 className="font-heading text-xl font-bold text-stone-900 mt-1 mb-2 group-hover:text-[#881337] transition-colors">
                Fresh Khichiya Menu
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hot roasted Plain, Butter, and Masala Khichiya served with cucumber, tomato, onion, namkeen, and signature chutneys. Available exclusively at our physical shop.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-900 tabular-nums">₹25 – ₹60</span>
              <Link
                to="/fresh-khichiya"
                className="text-xs font-semibold text-[#881337] hover:underline inline-flex items-center gap-1"
              >
                <span>View Menu</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Wholesale & Bulk Orders */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs hover:border-[#881337]/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-900 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold">B2B & Catering</span>
              <h3 className="font-heading text-xl font-bold text-stone-900 mt-1 mb-2 group-hover:text-[#881337] transition-colors">
                Bulk & Wedding Orders
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Wholesale cartons for retailers, live counters for weddings, and regular supply for hotels and caterers across Mumbai. Pricing confirmed directly with our team.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-600">Custom Quantities</span>
              <Link
                to="/bulk-orders"
                className="text-xs font-semibold text-[#881337] hover:underline inline-flex items-center gap-1"
              >
                <span>Wholesale Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (PACKAGED KHICHIYA BY WEIGHT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337] mb-1">
              <span>Category A</span>
              <span aria-hidden="true">·</span>
              <span>Sold by Weight</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
              Our Signature Packaged Khichiya
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Stone-ground, sun-dried, and ready for home roasting or frying. Retail & wholesale rates.
            </p>
          </div>
          <Link
            to="/products"
            className="text-xs font-semibold text-[#881337] hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View All Varieties & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_CONFIG.packagedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={(p) => onOpenEnquiry({ type: 'packaged', productName: p.name })}
            />
          ))}
        </div>
      </section>

      {/* 4. SERVING POLICY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServingPolicyBanner />
      </section>

      {/* 5. 80-YEAR FAMILY HERITAGE SECTION */}
      <section className="bg-gradient-to-br from-[#FAF3EA] to-[#F5ECE0] border-y border-[#991b1b]/15 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#881337] font-semibold">
              Authentic Family Continuity
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900">
              Three Generations of Marwari Snack Heritage
            </h2>
            <div className="w-16 h-0.5 bg-[#881337] mx-auto" />
            
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {BUSINESS_CONFIG.name} stands on approximately 80 years of genuine family history near the sacred Kaal Bhairav Mandir, close to the Mumbadevi precinct. The shop was originally established by the grandfather with traditional Rajasthani stone-grinding and sun-drying recipes. It was later expanded and diligently maintained by the father for around 40 years.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We uphold this long heritage through authentic ingredients, time-honored preparation methods, and deep customer trust across Mumbai's families, community caterers, and wholesale buyers.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#881337] hover:bg-[#700f2d] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors"
              >
                <span>Find Us Near Kaal Bhairav Mandir</span>
                <MapPin className="w-3.5 h-3.5 text-[#881337]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION / ENQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#881337] text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
              Ready to Order or Enquire?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Retail, Wholesale, or Event Orders — Connect Directly
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
              We process orders and enquiries directly over WhatsApp and telephone calls. Message us with your required khichiya variety and quantity in kilograms.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenEnquiry({ type: 'packaged' })}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#881337] hover:bg-amber-50 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Message on WhatsApp</span>
              </button>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>Get Shop Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
