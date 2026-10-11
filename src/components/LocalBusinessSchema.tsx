import React, { useState } from 'react';
import { Code2, Check, Copy, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export function getLocalBusinessSchema() {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://jawanbhaimarwadikhichiya.com';

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "@id": `${currentOrigin}/#localbusiness`,
    "name": BUSINESS_CONFIG.name,
    "alternateName": BUSINESS_CONFIG.shortName,
    "description": "Authentic traditional Marwari khichiya and snacks business near Kaal Bhairav Mandir, close to the Mumbadevi area, Mumbai, Maharashtra, India. Handcrafted packaged khichiya sold by weight (₹250-₹350/kg), freshly prepared shop khichiya, and wholesale/wedding orders. Rooted in approximately 80 years of family history: founded by the grandfather and expanded by the father for ~40 years.",
    "url": currentOrigin,
    "telephone": [BUSINESS_CONFIG.primaryPhone, BUSINESS_CONFIG.secondaryPhone],
    "priceRange": "₹25 - ₹350",
    "servesCuisine": [
      "Marwari",
      "Rajasthani",
      "Indian Traditional Snacks"
    ],
    "hasMenu": `${currentOrigin}/fresh-khichiya`,
    "hasMap": BUSINESS_CONFIG.googleMapsUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.locationDescription,
      "addressLocality": BUSINESS_CONFIG.city,
      "addressRegion": BUSINESS_CONFIG.state,
      "postalCode": "400002 [Placeholder: Pending Owner Pin Verification]",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "description": "Kaal Bhairav Mandir, Mumbadevi precinct, Mumbai [Latitude/Longitude coordinates placeholder pending exact shop pin verification]"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00",
        "description": "[Placeholder: Standard market/temple timings. Exact opening hours to be confirmed by shop owner]"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Wheat-Corn Khichiya (Packaged by Weight)",
          "description": "Stone-ground wheat and corn handcrafted sun-dried khichiya discs.",
          "offers": {
            "@type": "Offer",
            "price": "250",
            "priceCurrency": "INR",
            "unitCode": "KGM"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Mint-Coriander Khichiya (Packaged by Weight)",
          "description": "Artisanal herbal khichiya infused with fresh mint and coriander leaves.",
          "offers": {
            "@type": "Offer",
            "price": "350",
            "priceCurrency": "INR",
            "unitCode": "KGM"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Special Tikha Khichiya (Packaged by Weight)",
          "description": "Boldly spiced Rajasthani tikha khichiya with red chili and carom seeds.",
          "offers": {
            "@type": "Offer",
            "price": "350",
            "priceCurrency": "INR",
            "unitCode": "KGM"
          }
        }
      }
    ]
  };
}

export const LocalBusinessSchema: React.FC = () => {
  const schemaData = getLocalBusinessSchema();
  const jsonLdString = JSON.stringify(schemaData, null, 2);
  const [showInspector, setShowInspector] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonLdString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* 1. DOM injection: Valid Schema.org application/ld+json script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      {/* 2. Structured Data Transparency & Verification Inspector in Footer */}
      <div className="pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Schema.org <code>LocalBusiness</code> structured data active with verified identity & placeholders
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowInspector(!showInspector)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-stone-300 hover:text-white transition-colors text-[11px] font-mono shrink-0"
            aria-expanded={showInspector}
            aria-label="Inspect Schema.org JSON-LD markup"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-300" />
            <span>{showInspector ? 'Hide Schema.org JSON-LD' : 'View Schema.org JSON-LD'}</span>
            {showInspector ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Collapsible Inspector */}
        {showInspector && (
          <div className="mt-3 p-4 bg-black/60 rounded-xl border border-white/15 animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-amber-300">
                JSON-LD Markup (Ready for Google Rich Results Test)
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[11px] text-stone-200 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono text-emerald-400/90 overflow-x-auto p-3 bg-black/80 rounded-lg max-h-60 overflow-y-auto whitespace-pre leading-relaxed">
              {jsonLdString}
            </pre>
            <p className="text-[10px] text-stone-400 mt-2">
              Includes Schema.org <code>LocalBusiness</code> &amp; <code>FoodEstablishment</code> types, verified location description near Kaal Bhairav Mandir, Mumbadevi, per-kg product offers, and placeholder tags for pending phone, postal code, and opening hours.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
