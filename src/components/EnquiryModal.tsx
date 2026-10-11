import React, { useState } from 'react';
import { X, Send, Phone, Copy, Check, MessageSquare, PhoneCall, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppEnquiryParams, generateWhatsAppMessage } from '../utils/whatsapp';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialParams?: Partial<WhatsAppEnquiryParams>;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialParams,
}) => {
  const [product, setProduct] = useState(initialParams?.productName || 'Wheat-Corn Khichiya');
  const [quantity, setQuantity] = useState<string>(initialParams?.quantityKg ? String(initialParams?.quantityKg) : '2');
  const [type, setType] = useState<WhatsAppEnquiryParams['type']>(initialParams?.type || 'packaged');
  const [notes, setNotes] = useState(initialParams?.notes || '');
  const [selectedContact, setSelectedContact] = useState<'primary' | 'secondary'>('primary');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const enquiryParams: WhatsAppEnquiryParams = {
    type,
    productName: product,
    quantityKg: quantity,
    notes,
  };

  const messageText = generateWhatsAppMessage(enquiryParams);
  const targetRawWhatsApp = selectedContact === 'primary' 
    ? BUSINESS_CONFIG.rawPhoneNumber 
    : BUSINESS_CONFIG.rawSecondaryPhoneNumber;

  const targetRawPhone = selectedContact === 'primary'
    ? BUSINESS_CONFIG.rawPhoneNumber
    : BUSINESS_CONFIG.rawSecondaryPhoneNumber;

  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(messageText);
    const url = `https://wa.me/${targetRawWhatsApp}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl border border-[#991b1b]/20 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
      >
        {/* Header */}
        <div className="bg-[#881337] text-amber-50 px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Direct Order & Enquiry</span>
            <h2 id="enquiry-modal-title" className="text-xl font-heading font-bold text-white mt-0.5">
              WhatsApp & Phone Order
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-amber-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Verified Contact Badges */}
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Verified Ordering Contacts:</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSelectedContact('primary')}
                className={`p-2 rounded-lg border text-left transition-all ${
                  selectedContact === 'primary'
                    ? 'bg-white border-emerald-600 shadow-xs ring-1 ring-emerald-600'
                    : 'bg-emerald-50/50 border-emerald-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] uppercase font-semibold text-stone-500 block">Primary Contact</span>
                <span className="font-mono font-bold text-stone-900">{BUSINESS_CONFIG.primaryPhone}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedContact('secondary')}
                className={`p-2 rounded-lg border text-left transition-all ${
                  selectedContact === 'secondary'
                    ? 'bg-white border-emerald-600 shadow-xs ring-1 ring-emerald-600'
                    : 'bg-emerald-50/50 border-emerald-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] uppercase font-semibold text-stone-500 block">Secondary Contact</span>
                <span className="font-mono font-bold text-stone-900">{BUSINESS_CONFIG.secondaryPhone}</span>
              </button>
            </div>
          </div>

          {/* Form controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="enquiry-type-select" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Order Category
              </label>
              <select
                id="enquiry-type-select"
                value={type}
                onChange={(e) => setType(e.target.value as WhatsAppEnquiryParams['type'])}
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#881337]"
              >
                <option value="packaged">Packaged Khichiya (By Weight)</option>
                <option value="wholesale">Wholesale & Bulk Order</option>
                <option value="wedding_hotel">Wedding / Hotel Supply</option>
                <option value="fresh_call_ahead">Shop Visit / Call Ahead</option>
                <option value="general">General Store Enquiry</option>
              </select>
            </div>

            {type === 'packaged' && (
              <div>
                <label htmlFor="product-select" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Khichiya Variety
                </label>
                <select
                  id="product-select"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#881337]"
                >
                  {BUSINESS_CONFIG.packagedProducts.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} (₹{p.pricePerKg}/kg)
                    </option>
                  ))}
                  <option value="Mixed / Assorted Packaged Khichiya">Mixed / Assorted</option>
                </select>
              </div>
            )}
          </div>

          {(type === 'packaged' || type === 'wholesale') && (
            <div>
              <label htmlFor="quantity-input" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Estimated Quantity (in Kilograms)
              </label>
              <div className="flex gap-2">
                <input
                  id="quantity-input"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 1 kg, 5 kg, 25 kg..."
                  className="flex-1 px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#881337]"
                />
                <div className="flex gap-1">
                  {['1', '2', '5', '10', '25'].map((quick) => (
                    <button
                      key={quick}
                      type="button"
                      onClick={() => setQuantity(quick)}
                      className="px-2.5 py-1 text-xs border border-stone-300 rounded-lg hover:border-[#881337] hover:bg-[#881337]/5 text-stone-700"
                    >
                      {quick}kg
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="delivery-notes-input" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Delivery Location / Event Details / Notes
            </label>
            <input
              id="delivery-notes-input"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Delivery location in Mumbai, or live counter requirement..."
              className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#881337]"
            />
          </div>

          {/* Message Preview */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                Pre-Filled WhatsApp Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-[#881337] hover:underline flex items-center gap-1 font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy text'}
              </button>
            </div>
            <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200 text-xs font-mono text-stone-800 whitespace-pre-line leading-relaxed">
              {messageText}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-medium text-sm transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send to {selectedContact === 'primary' ? '98928 29283' : '91720 62761'}</span>
          </button>
          
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-stone-300 hover:border-stone-400 text-stone-700 rounded-xl font-medium text-sm transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>

          <a
            href={`tel:${targetRawPhone}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#881337] hover:bg-[#700f2d] text-white rounded-xl font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};
