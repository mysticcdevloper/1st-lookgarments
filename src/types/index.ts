export type ProductCategory = 
  | 'blazers'
  | 'shirts'
  | 'bottomwear'
  | 'tshirts'
  | 'ethnic-wear'
  | 'accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  subCategory?: string;
  description: string;
  editorialTagline?: string;
  price?: number; // Verified price in INR, if undefined -> "Ask for Price"
  originalPrice?: number; // Optional genuine comparison price
  images: string[];
  sizes: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  fabric?: string;
  fit?: string;
  careInstructions?: string[];
  features?: string[];
  isAvailable: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  badge?: string;
}

export interface StoreAppointment {
  fullName: string;
  mobileNumber: string;
  visitDate: string;
  preferredTime: string;
  visitPurpose: 'shopping' | 'styling' | 'wholesale' | 'other';
  message?: string;
}

export interface WholesaleInquiry {
  contactPerson: string;
  businessName?: string;
  phoneNumber: string;
  categories: string[];
  estimatedQuantity?: string;
  requirements?: string;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}
