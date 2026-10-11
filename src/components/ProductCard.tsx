import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ImageOff } from 'lucide-react';
import { PackagedProduct } from '../config/business';

interface ProductCardProps {
  product: PackagedProduct;
  onEnquire: (product: PackagedProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200/90 hover:border-[#881337]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Product Image Slot with zero-broken-image fallback */}
      <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-50 to-stone-100 text-stone-500">
            <ImageOff className="w-8 h-8 text-[#881337]/40 mb-2" />
            <span className="text-xs font-medium text-stone-600 text-center">{product.name}</span>
            <span className="text-[11px] text-stone-400 mt-1">Artisanal Sun-Dried Khichiya</span>
          </div>
        )}

        {/* Quiet unboxed label */}
        <div className="absolute top-3 left-3 bg-[#FFFDF9]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-medium text-stone-800 shadow-xs">
          Sold by Weight
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Clean unboxed with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span>Marwari Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Handcrafted Discs</span>
          </div>

          {/* Product Name */}
          <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#881337] transition-colors">
            {product.name}
          </h3>
          {product.marwadiName && (
            <p className="text-xs text-[#881337] font-medium mt-0.5 font-serif">
              {product.marwadiName}
            </p>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-5 pt-4 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-xs text-stone-500 block">Retail Rate</span>
              <span className="font-sans-clean font-bold text-xl sm:text-2xl text-stone-900 tabular-nums">
                ₹{product.pricePerKg}
              </span>
              <span className="text-xs text-stone-500 ml-1">/ kg</span>
            </div>
            <span className="text-xs text-[#881337] font-medium bg-[#881337]/5 px-2 py-0.5 rounded">
              Retail & Wholesale
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors whitespace-nowrap"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => onEnquire(product)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
