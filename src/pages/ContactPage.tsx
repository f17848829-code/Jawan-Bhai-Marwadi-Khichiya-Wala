import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ExternalLink, 
  AlertCircle, 
  Compass, 
  Train, 
  Store,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ContactPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
          <span>Location & Enquiries</span>
          <span aria-hidden="true">·</span>
          <span>Mumbai, Maharashtra</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
          Contact & Shop Location
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          We welcome you to visit our physical shop near Kaal Bhairav Mandir in the historic Mumbadevi precinct of South Mumbai. Connect with us via WhatsApp or telephone for orders and directions.
        </p>
      </div>

      {/* Main Location & Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Location & Contact Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Location Description */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#881337]">
                <MapPin className="w-4 h-4" />
                <span>Shop Address & Location</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {BUSINESS_CONFIG.locationDescription}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Situated in the sacred temple quarter of Mumbadevi and Bhuleshwar. Look for our traditional khichiya counter in the lane adjacent to the Kaal Bhairav Mandir.
              </p>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="pt-6 border-t border-stone-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                  Verified Contact Numbers for Orders
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Active for Call &amp; WhatsApp
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Number 1 */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1.5 text-stone-700 font-semibold">
                      <Phone className="w-4 h-4 text-[#881337]" />
                      Primary Contact
                    </span>
                  </div>
                  <div className="font-mono font-bold text-lg text-stone-900">
                    {BUSINESS_CONFIG.primaryPhone}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <a
                      href={`tel:${BUSINESS_CONFIG.rawPhoneNumber}`}
                      className="flex-1 py-1.5 px-2 bg-[#881337] hover:bg-[#700f2d] text-white rounded-lg text-xs font-semibold text-center transition-colors"
                    >
                      Call Now
                    </a>
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry({ type: 'general' })}
                      className="flex-1 py-1.5 px-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Number 2 */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1.5 text-stone-700 font-semibold">
                      <Phone className="w-4 h-4 text-[#881337]" />
                      Secondary Contact
                    </span>
                  </div>
                  <div className="font-mono font-bold text-lg text-stone-900">
                    {BUSINESS_CONFIG.secondaryPhone}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <a
                      href={`tel:${BUSINESS_CONFIG.rawSecondaryPhoneNumber}`}
                      className="flex-1 py-1.5 px-2 bg-[#881337] hover:bg-[#700f2d] text-white rounded-lg text-xs font-semibold text-center transition-colors"
                    >
                      Call Now
                    </a>
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry({ type: 'general' })}
                      className="flex-1 py-1.5 px-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Information */}
            <div className="pt-6 border-t border-stone-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Visiting & Opening Hours</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Operating in rhythm with the Mumbadevi temple precinct. Customers planning to visit for fresh khichiya or collect large packaged batches are encouraged to call ahead to verify immediate stock and timing.
              </p>
            </div>
          </div>

          {/* Transit & Landmark Guide */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h3 className="font-heading text-lg font-bold text-stone-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#881337]" />
              <span>How to Reach from Key Mumbai Points</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">From Mumbadevi Temple:</span>
                <p>A short 2-3 minute walk into the Kaal Bhairav Mandir street.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">From Zaveri Bazaar / Kalbadevi:</span>
                <p>Accessible directly via the Bhuleshwar market pedestrian lanes.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">Nearest Western Line Stations:</span>
                <p>Charni Road and Marine Lines (approx. 10–12 minutes by taxi).</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">Nearest Central Line Station:</span>
                <p>CSMT / Masjid Bunder (approx. 8–10 minutes by taxi).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps verified embed / link + Serving Policy Reminder */}
        <div className="lg:col-span-5 space-y-6">
          {/* Map Card */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#881337] font-semibold">
                Area Navigation
              </span>
              <span className="text-xs text-stone-500">Mumbadevi Ward</span>
            </div>

            <div className="aspect-4/3 rounded-xl overflow-hidden border border-stone-200 relative bg-amber-50 flex flex-col items-center justify-center p-6 text-center">
              <MapPin className="w-10 h-10 text-[#881337] mb-2" />
              <h4 className="font-heading font-bold text-stone-900 text-sm">
                Kaal Bhairav Mandir
              </h4>
              <p className="text-xs text-stone-600 mt-1 max-w-xs">
                Near Mumbadevi Temple, Kalbadevi / Bhuleshwar, Mumbai
              </p>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#881337] text-white rounded-lg text-xs font-semibold hover:bg-[#700f2d] transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11px] text-stone-500 italic">
              * The map points to the Kaal Bhairav Mandir landmark in the Mumbadevi precinct as specified. The exact shop pin will be updated when the owner verifies the digital location coordinate.
            </p>
          </div>

          {/* Quick Dining Reminder */}
          <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-6 space-y-2">
            <div className="flex items-center gap-2 text-rose-950 font-bold text-xs uppercase tracking-wider">
              <Store className="w-4 h-4 text-[#881337]" />
              <span>Fresh Menu Reminder</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Our freshly roasted Plain, Butter, and Masala Khichiya are exclusively served at the shop. Please visit us to eat them fresh. Packaged khichiya by weight may be delivered upon enquiry.
            </p>
          </div>

          {/* Verified Phone Numbers Notice */}
          <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5 space-y-2 text-xs text-stone-700">
            <div className="flex items-center gap-2 font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Official Ordering Contacts Connected</span>
            </div>
            <p className="leading-relaxed text-stone-600">
              Customer orders and wholesale enquiries are routed directly to <strong>{BUSINESS_CONFIG.primaryPhone}</strong> and <strong>{BUSINESS_CONFIG.secondaryPhone}</strong> via direct call or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
