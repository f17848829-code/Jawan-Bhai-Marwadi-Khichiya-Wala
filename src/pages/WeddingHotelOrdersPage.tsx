import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Utensils, 
  Hotel, 
  PartyPopper, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface WeddingHotelOrdersPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const WeddingHotelOrdersPage: React.FC<WeddingHotelOrdersPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
          <span>Event & Hospitality Catering</span>
          <span aria-hidden="true">·</span>
          <span>Mumbai & Outstation</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
          Wedding Live Counters & Hotel Supplies
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Authentic Marwari khichiya is a celebrated centerpiece at Gujarati and Marwari weddings, Sangeet evenings, and community feasts. We supply high-grade raw discs for live roasting stalls and banquet dining.
        </p>
      </div>

      {/* Pricing Policy Disclaimer */}
      <div className="bg-amber-50/80 border border-amber-300/80 rounded-2xl p-6 text-stone-800 text-xs sm:text-sm space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wide">
          <AlertCircle className="w-5 h-5 text-[#881337]" />
          <span>Event & Hotel Supply Pricing Notice</span>
        </div>
        <p className="text-stone-700 leading-relaxed">
          Wedding and hotel supply rates vary based on event date, total kilograms, custom packaging requirements, and dispatch schedule. <strong>Prices are confirmed strictly by speaking directly with our business team.</strong> We do not provide fixed online packages to ensure every caterer receives tailored, fresh batches.
        </p>
      </div>

      {/* Two Focus Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Wedding Live Counters */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-5 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-[#881337]">
              <PartyPopper className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-stone-900">
              Wedding Live Khichiya Counters
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Elevate your wedding chaat street with a dedicated Marwari Khichiya counter. Discs are roasted live over gentle heat, coated with farm-fresh butter, and customized with spicy green chutney, fresh diced onions, tomatoes, and sev.
            </p>

            <div className="space-y-2 pt-2 border-t border-stone-100">
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">
                What We Provide Caterers:
              </span>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Uniformly shaped discs (Wheat-Corn, Mint-Coriander, Special Tikha)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Low-breakage transit packaging tested for high-volume caterers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Guidance on roasting technique and chutney preparation proportions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <button
              onClick={() =>
                onOpenEnquiry({
                  type: 'wedding_hotel',
                  notes: 'Wedding live counter supply enquiry (guest count / date to be shared)',
                })
              }
              className="w-full py-3 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire for Wedding Counter</span>
            </button>
          </div>
        </div>

        {/* Card 2: Hotels, Banquets & Thali Restaurants */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-5 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900">
              <Hotel className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-stone-900">
              Hotel & Thali Restaurant Supply
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We supply traditional Gujarati and Rajasthani thali dining halls, Mumbai club dining rooms, and heritage vegetarian restaurants with regular weekly or bi-weekly consignments of authentic khichiya.
            </p>

            <div className="space-y-2 pt-2 border-t border-stone-100">
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">
                Hospitality Benefits:
              </span>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Consistent disc thickness ensuring uniform roasting time for kitchen staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dependable weekly standing orders across Mumbai</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>High customer satisfaction from genuine 80-year heritage recipe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <button
              onClick={() =>
                onOpenEnquiry({
                  type: 'wedding_hotel',
                  notes: 'Hotel / Restaurant periodic standing order enquiry',
                })
              }
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire for Hotel / Restaurant Supply</span>
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Wedding Menu Pairing */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
        <h3 className="font-heading text-xl font-bold text-stone-900">
          How Caterers Feature Our Khichiya at Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-heading text-base">
              A. Pre-Wedding Welcome Snack
            </strong>
            <p className="leading-relaxed">
              Served warm alongside spiced masala chai or chilled buttermilk as guests arrive for Mehndi and Haldi celebrations.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-heading text-base">
              B. Sangeet Chaat Counter
            </strong>
            <p className="leading-relaxed">
              Featured as a live interactive station where guests customize their toppings with diced salad, raw mango (in season), and chutney.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-heading text-base">
              C. Traditional Wedding Thali
            </strong>
            <p className="leading-relaxed">
              Placed prominently alongside sweet delicacies, dal bati churma, or traditional Gujarati rasawala shaak as an authentic crisp accompaniment.
            </p>
          </div>
        </div>
      </div>

      {/* Call Direct Banner */}
      <div className="bg-stone-900 text-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-heading text-xl font-bold text-white mb-1">
            Speaking with a Catering Coordinator?
          </h4>
          <p className="text-xs sm:text-sm text-stone-400">
            Call our shop directly to discuss dates, kg quantities, and delivery schedules.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={BUSINESS_CONFIG.rawPhoneNumber ? `tel:${BUSINESS_CONFIG.rawPhoneNumber}` : '#'}
            onClick={(e) => {
              if (!BUSINESS_CONFIG.rawPhoneNumber) {
                e.preventDefault();
                onOpenEnquiry({ type: 'wedding_hotel' });
              }
            }}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs rounded-xl uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Discuss Event</span>
          </a>
        </div>
      </div>
    </div>
  );
};
