import React from 'react';
import { Link } from 'react-router-dom';
import { 
  History, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake, 
  ChefHat, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface OurStoryPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
          <span>Family History & Heritage</span>
          <span aria-hidden="true">·</span>
          <span>Since Three Generations</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
          Eighty Years of Marwari Craft in the Heart of Mumbai
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          The story of {BUSINESS_CONFIG.name} is rooted in deep family continuity, honest craftsmanship, and enduring customer trust near Kaal Bhairav Mandir in Mumbai.
        </p>
      </div>

      {/* Two Pillars of Generation Timeline (Accurate & Supported) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Generation 1: The Grandfather */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#881337] font-semibold">
              The Foundation
            </span>
            <span className="text-xs font-serif text-stone-500">First Generation</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-stone-900">
            Founded by the Grandfather
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            The business was begun approximately eight decades ago when our grandfather brought traditional Rajasthani khichiya techniques to the commercial streets near Mumbadevi and Kaal Bhairav Mandir. In an era before mechanized food factories, every khichiya disc was hand-kneaded from stone-ground grains, seasoned with carom seeds and cumin, and sun-dried under natural skies.
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            His guiding philosophy was simple: never cut corners on grain quality or papad khar, and treat every customer who stops by the shop as an honored guest of the family.
          </p>
        </div>

        {/* Generation 2: Continued & Expanded by the Father */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
              Growth & Dedication
            </span>
            <span className="text-xs font-serif text-stone-500">Second Generation (~40 Years)</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-stone-900">
            Expanded & Continued by the Father
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            For around 40 years, our father carried this family legacy forward, expanding the shop's reach across Mumbai while fiercely preserving the grandfather's original recipes. Under his care, the fresh counter—serving hot Plain, Butter, and Masala Khichiya—became a beloved stop for worshippers, market traders, and families visiting the Bhuleshwar-Mumbadevi precinct.
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            He also pioneered dependable bulk supply partnerships with community wedding caterers and retail farsan merchants who relied on our consistent per-kilogram batches.
          </p>
        </div>
      </div>

      {/* Honest Commitment to Principles */}
      <div className="bg-[#FAF3EA] border border-[#991b1b]/15 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#881337] font-semibold">
            Our Guiding Standards
          </span>
          <h3 className="font-heading text-2xl font-bold text-stone-900">
            Quality That Endures Across Generations
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            We believe in honest food. We do not invent claims, certifications, or modern shortcuts. What we promise is what we put on the plate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-heading font-bold text-base">
              <ChefHat className="w-5 h-5 text-[#881337]" />
              <span>Authentic Grain Craft</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              We use authentic wheat, corn, and traditional seasonings. Sun-dried to natural brittleness without relying on chemical artificial preservatives.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-heading font-bold text-base">
              <HeartHandshake className="w-5 h-5 text-[#881337]" />
              <span>Customer Loyalty</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Families who visited our shop with their grandparents forty years ago still return today to purchase their festive khichiya or enjoy a plate of hot Masala Khichiya.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-heading font-bold text-base">
              <MapPin className="w-5 h-5 text-[#881337]" />
              <span>Sacred Neighborhood</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Located near Kaal Bhairav Mandir, close to Mumbadevi, our presence is woven into the historic spiritual and trading fabric of Old Mumbai.
            </p>
          </div>
        </div>
      </div>

      {/* Invitation to Visit & Connect */}
      <div className="bg-[#24120D] text-amber-50 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-[#881337]">
        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-heading text-2xl font-bold text-white">
            Experience the Heritage in Person
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            Visit our physical shop near Kaal Bhairav Mandir to taste freshly roasted khichiya or enquire about packaged stock for your family or business.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            to="/contact"
            className="px-5 py-3 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Visit Our Shop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>View Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
