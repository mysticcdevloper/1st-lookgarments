import { BUSINESS_CONFIG } from '../config/business';
import { StoreAppointment, WholesaleInquiry, Product } from '../types';

const BASE_URL = 'https://wa.me';

/**
 * Builds a direct, safely URL-encoded WhatsApp link for the verified business number.
 */
export const buildWhatsAppUrl = (message: string): string => {
  const encodedText = encodeURIComponent(message.trim());
  return `${BASE_URL}/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodedText}`;
};

/**
 * Generates an enquiry link for a specific garment product with selected variant options.
 */
export const getProductEnquiryUrl = (
  product: Product,
  selectedSize?: string,
  selectedColor?: string
): string => {
  const parts: string[] = [
    `Hello 1st Look Garments,`,
    ``,
    `I am interested in: *${product.name}* (Category: ${product.categoryLabel})`,
  ];

  if (selectedSize) {
    parts.push(`• Selected Size: ${selectedSize}`);
  }
  if (selectedColor) {
    parts.push(`• Selected Color: ${selectedColor}`);
  }
  if (product.price) {
    parts.push(`• Listed Price: ₹${product.price.toLocaleString('en-IN')}`);
  }

  parts.push(
    ``,
    `Please share the current price, available sizes, colors, and availability at your Ghanta Ghar store.`
  );

  return buildWhatsAppUrl(parts.join('\n'));
};

/**
 * Generates an appointment request link for visiting the Ghanta Ghar store.
 */
export const getStoreVisitAppointmentUrl = (appointment: StoreAppointment): string => {
  const purposeMap: Record<StoreAppointment['visitPurpose'], string> = {
    shopping: 'In-store Garment Shopping',
    styling: 'Garment Selection & Styling Assistance',
    wholesale: 'Wholesale & Bulk Garment Enquiry',
    other: 'General Store Visit',
  };

  const lines = [
    `*STORE VISIT REQUEST — 1ST LOOK GARMENTS*`,
    `---------------------------------------`,
    `Customer Name: ${appointment.fullName}`,
    `Phone: ${appointment.mobileNumber}`,
    `Requested Date: ${appointment.visitDate}`,
    `Preferred Time: ${appointment.preferredTime}`,
    `Purpose: ${purposeMap[appointment.visitPurpose] || appointment.visitPurpose}`,
  ];

  if (appointment.message && appointment.message.trim().length > 0) {
    lines.push(`Notes: ${appointment.message.trim()}`);
  }

  lines.push(
    ``,
    `Please confirm the appointment slot and visit details. Thank you!`
  );

  return buildWhatsAppUrl(lines.join('\n'));
};

/**
 * Generates a structured wholesale trade enquiry link.
 */
export const getWholesaleInquiryUrl = (inquiry: WholesaleInquiry): string => {
  const lines = [
    `*WHOLESALE ENQUIRY — 1ST LOOK GARMENTS*`,
    `---------------------------------------`,
    `Contact Person: ${inquiry.contactPerson}`,
    inquiry.businessName ? `Business Name: ${inquiry.businessName}` : null,
    `Phone Number: ${inquiry.phoneNumber}`,
    `Categories of Interest: ${inquiry.categories.length > 0 ? inquiry.categories.join(', ') : 'All Garments'}`,
    inquiry.estimatedQuantity ? `Estimated Quantity: ${inquiry.estimatedQuantity}` : null,
    inquiry.requirements ? `Requirements: ${inquiry.requirements}` : null,
    ``,
    `Hello 1st Look Garments, I would like to explore wholesale partnership and bulk purchasing for our store/resale. Please share wholesale terms and product catalogues.`,
  ].filter(Boolean) as string[];

  return buildWhatsAppUrl(lines.join('\n'));
};

/**
 * General floating button enquiry.
 */
export const getGeneralEnquiryUrl = (): string => {
  const message = `Hello 1st Look Garments,\n\nI am browsing your collection on the website and would like to inquire about available garments, new arrivals, and store timings at Ghanta Ghar, Ghaziabad.`;
  return buildWhatsAppUrl(message);
};
