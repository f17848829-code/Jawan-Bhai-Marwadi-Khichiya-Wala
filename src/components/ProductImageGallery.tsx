import React, { useState } from 'react';
import { 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ImageOff, 
  Info, 
  Sparkles 
} from 'lucide-react';
import { ProductGalleryImage } from '../config/business';

interface ProductImageGalleryProps {
  gallery: ProductGalleryImage[];
  productName: string;
  pricePerKg: number;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  gallery,
  productName,
  pricePerKg,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeImage = gallery[activeIndex] || gallery[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-4">
      {/* 1. Main Display Image Container */}
      <div 
        className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-md aspect-4/3 bg-stone-100 group cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        {!failedImages[activeImage.id] ? (
          <img
            src={activeImage.url}
            alt={activeImage.alt}
            referrerPolicy="no-referrer"
            onError={() => handleImageError(activeImage.id)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-amber-50/60 text-stone-500">
            <ImageOff className="w-10 h-10 text-[#881337]/40 mb-2" />
            <span className="text-sm font-semibold text-stone-700">{activeImage.title}</span>
            <span className="text-xs text-stone-500 mt-1">{productName}</span>
          </div>
        )}

        {/* Top Floating Tags */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-[#FFFDF9]/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-stone-800 shadow-xs">
            Sold by Weight · ₹{pricePerKg}/kg
          </span>
          <span className="bg-[#881337]/90 text-amber-100 px-2.5 py-1 rounded-md text-[11px] font-medium shadow-xs">
            Photo {activeIndex + 1} of {gallery.length}
          </span>
        </div>

        {/* Fullscreen Expansion Trigger Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxOpen(true);
          }}
          aria-label="Open image in full view"
          className="absolute top-3 right-3 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Previous / Next Arrow Controls */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
          <div className="font-heading font-semibold text-sm text-amber-200">
            {activeImage.title}
          </div>
          <p className="text-xs text-stone-200 line-clamp-1 mt-0.5">
            {activeImage.caption}
          </p>
        </div>
      </div>

      {/* 2. Clickable Thumbnail Strip */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {gallery.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all group ${
                isActive
                  ? 'border-[#881337] ring-2 ring-[#881337]/20 shadow-xs scale-102'
                  : 'border-stone-200 hover:border-stone-400 opacity-75 hover:opacity-100'
              }`}
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(img.id)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-1 left-1 right-1 px-1 bg-black/60 rounded text-[9px] text-white truncate text-center">
                {img.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Honest Temporary Image Notice for Business Owner / Visitors */}
      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-2 text-xs text-amber-900 leading-relaxed">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-amber-950 block">Gallery Transparency Notice</span>
          High-resolution food photographs displayed above are representative illustrations showcasing the product, texture, and serving methods. They are clearly tagged for replacement with genuine shop and counter photos once provided by the owner.
        </div>
      </div>

      {/* 4. Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1A0E0B] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="p-4 px-6 flex items-center justify-between border-b border-white/10 text-white">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  {productName} Gallery
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  {activeImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close full view"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative aspect-16/10 bg-black/80 flex items-center justify-center">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer Caption */}
            <div className="p-4 px-6 bg-[#24140F] border-t border-white/10 text-xs text-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="max-w-xl text-stone-200">
                {activeImage.caption}
              </p>
              <span className="text-[11px] text-amber-300 shrink-0 font-medium">
                Photo {activeIndex + 1} of {gallery.length} (Representative Image)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
