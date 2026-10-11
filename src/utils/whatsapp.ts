import { BUSINESS_CONFIG } from '../config/business';

export interface WhatsAppEnquiryParams {
  type: 'packaged' | 'wholesale' | 'wedding_hotel' | 'fresh_call_ahead' | 'general';
  productName?: string;
  quantityKg?: number | string;
  customerName?: string;
  notes?: string;
}

export function generateWhatsAppMessage(params: WhatsAppEnquiryParams): string {
  const greeting = `Namaste Jawan Bhai Marwadi Khichiya Wala,`;
  
  switch (params.type) {
    case 'packaged':
      return `${greeting} I would like to enquire about purchasing packaged khichiya:
• Product: ${params.productName || 'Packaged Khichiya'}
• Quantity: ${params.quantityKg ? `${params.quantityKg} kg` : '1-2 kg'}
${params.notes ? `• Details/Location: ${params.notes}` : '• Please let me know the availability and pickup / delivery options.'}`;

    case 'wholesale':
      return `${greeting} I am inquiring about Wholesale & Bulk Khichiya supply:
• Product / Varieties: ${params.productName || 'Assorted Packaged Khichiya'}
• Estimated Requirement: ${params.quantityKg ? `${params.quantityKg} kg` : 'Bulk requirement (25kg+)'}
${params.notes ? `• Requirement Details: ${params.notes}` : '• Please share wholesale rates, lead times, and terms.'}`;

    case 'wedding_hotel':
      return `${greeting} I would like to enquire about Khichiya supply for an Event / Wedding / Hotel:
• Requirement Type: Wedding Live Counter / Catering / Hotel Supply
${params.notes ? `• Details: ${params.notes}` : '• Please provide details on bulk quantity supply and counter preparation guidance.'}`;

    case 'fresh_call_ahead':
      return `${greeting} I am planning to visit your shop near Kaal Bhairav Mandir (Mumbadevi area) and would like to check fresh menu availability:
${params.notes ? `• Items of interest: ${params.notes}` : '• Planning to arrive shortly for fresh Masala / Butter Khichiya.'}`;

    case 'general':
    default:
      return `${greeting} I would like to enquire about your Marwari khichiya products and shop location near Kaal Bhairav Mandir, Mumbadevi.`;
  }
}

export function getWhatsAppUrl(params: WhatsAppEnquiryParams): string {
  const text = encodeURIComponent(generateWhatsAppMessage(params));
  if (BUSINESS_CONFIG.rawWhatsAppNumber) {
    return `https://wa.me/${BUSINESS_CONFIG.rawWhatsAppNumber}?text=${text}`;
  }
  // Generic WhatsApp web/api link ready to populate once number is configured
  return `https://api.whatsapp.com/send?text=${text}`;
}

export function getTelUrl(): string {
  if (BUSINESS_CONFIG.rawPhoneNumber) {
    return `tel:${BUSINESS_CONFIG.rawPhoneNumber}`;
  }
  return '#phone-placeholder';
}
