# 1ST LOOK GARMENTS — OFFICIAL DIGITAL STOREFRONT
### High-End Fashion & Wholesale Clothing Experience | Ghanta Ghar, Ghaziabad, India

> **Official Store Motto:**  
> “DON'T COMPARE THE PRICE, COMPARE THE QUALITY”  
> **Secondary Tagline:**  
> “THE FIXED PRICE SHOP”

---

## 1. Verified Business Details

- **Brand:** 1st Look Garments
- **Store Address:** 87/2 Ramanuj Dayal Market, Near Ramte Ram Road, Ghanta Ghar, Ghaziabad, Uttar Pradesh, India 201001
- **Business Phone:** +91 98915 17860
- **WhatsApp Support:** +91 98915 17860 (`919891517860`)
- **Instagram:** [https://www.instagram.com/1stlookgarments/](https://www.instagram.com/1stlookgarments/)
- **Google Maps:** [https://maps.app.goo.gl/b2dFdxeBJKYg9pyaA](https://maps.app.goo.gl/b2dFdxeBJKYg9pyaA)
- **Business Model:** Clothing Retail & Wholesale

---

## 2. Technical Architecture & Design System

The application is built with a modern, high-performance stack:
- **Framework:** React 18 + TypeScript + Vite 6
- **Routing:** React Router v6 (with `ScrollToTop` restoration and direct-refresh routing support via `vercel.json`)
- **Styling:** Tailwind CSS with custom editorial design tokens (Editorial Serifs: Playfair Display / Cormorant Garamond, Clean Sans: Inter, Accent Script: Caveat)
- **Icons:** Lucide React
- **Asset Handling:** Official circular logo badge embedded in `public/assets/logo.png`, high-resolution curated garment photography
- **SEO & Discovery:** Semantic HTML5, Schema.org `LocalBusiness` / `ClothingStore` JSON-LD structured data, `robots.txt`, and `sitemap.xml`

---

## 3. All Implemented Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Full editorial campaign hero, slogan section, category showcase, new arrivals, magazine spread ("Your Next Favourite Look"), physical store invitation, Instagram gallery, footer |
| `/shop` | **Shop All** | Live search, multi-category filter, size filter, color filter, price sorting, empty states, and catalog grid |
| `/new-arrivals` | **New Arrivals 2026** | Fresh seasonal drops curated for retail & wholesale |
| `/collections/shirts` | **Shirts Collection** | Formal, casual, and trending printed shirts |
| `/collections/blazers` | **Blazers & Formal Wear** | Tailored blazers, tuxedo jackets, and occasion eveningwear |
| `/collections/bottomwear` | **Jeans & Trousers** | Italian-cut pleated trousers, selvedge denim, and cotton chinos |
| `/collections/tshirts` | **T-Shirts & Polos** | 240 GSM Supima crewnecks and double-mercerized pique polos |
| `/collections/ethnic-wear` | **Kurtas & Ethnic Wear** | Raw silk embroidered kurtas and classic cotton pathani sets |
| `/product/:slug` | **Product Detail** | Image gallery, variant selectors (size & color), fabric/fit specifications, and dynamic WhatsApp inquiry generator |
| `/about` | **About The Brand** | Brand story, Ghanta Ghar heritage, fixed price shop philosophy, and quality commitment |
| `/visit-store` | **Visit Store & Booking** | Interactive visit scheduling form, landmark directions, and WhatsApp visit confirmation |
| `/wholesale` | **Wholesale B2B Desk** | Wholesale trade introduction, category checklist, volume tier inquiries, and WhatsApp dispatch |
| `/contact` | **Contact & Directions** | Click-to-call `tel:`, Google Maps link, WhatsApp chat, and physical address card |
| `/faq` | **Frequently Asked Questions** | Categorized accordion addressing pricing, store visits, sizes, and wholesale |
| `/privacy-policy` | **Privacy Policy** | Customer data and WhatsApp communication terms |
| `/terms` | **Terms & Conditions** | Verified business terms, catalog accuracy, and store policies |
| `/cart` | **Cart & Orders** | Transparent notice explaining direct WhatsApp and in-store purchase workflow |
| `*` | **404 Not Found** | Custom editorial error page with navigation back to shopping |

---

## 4. WhatsApp Conversion Channel

All customer inquiries, appointment requests, and wholesale trade queries are powered by `src/utils/whatsapp.ts`:
- **Product Inquiries:** Includes exact garment name, selected size, chosen color, and price.
- **Store Visit Requests:** Includes customer name, phone, date, time slot, and visit purpose. Marked clearly as *pending store confirmation*.
- **Wholesale Inquiries:** Includes contact person, store name, selected garment categories, and estimated order quantity.
- **Floating Button:** Available on all pages with an accessible tooltip pill.

---

## 5. How to Add Real Inventory or Replace Photographs

### A. Updating Central Business Info
All core business details (phone, WhatsApp number, Instagram link, Google Maps link, address, and announcements) are centralized in:
```typescript
src/config/business.ts
```

### B. Adding Real Products
To add or modify garments, edit:
```typescript
src/data/products.ts
```
Each product conforms to the `Product` TypeScript interface:
```typescript
{
  id: 'unique-id',
  slug: 'unique-url-slug',
  name: 'Product Name',
  category: 'blazers' | 'shirts' | 'bottomwear' | 'tshirts' | 'ethnic-wear',
  categoryLabel: 'Category Display Name',
  description: 'Detailed description...',
  price: 1999, // In INR, or omit for "Ask for Price"
  originalPrice: 2499,
  images: ['/assets/your-image.jpg', '...'],
  sizes: ['38', '40', '42'],
  colors: [{ name: 'Navy', hex: '#1B263B' }],
  fabric: '100% Cotton',
  isAvailable: true,
  isFeatured: true,
  isNewArrival: true,
}
```

### C. Replacing Sample Photographs
1. Save photographs into `public/assets/products/`.
2. Reference them in `src/data/products.ts` as `/assets/products/filename.jpg`.
3. To replace the official logo, overwrite `public/assets/logo.png`.

---

## 6. Development & Deployment Commands

### Run Development Server
```bash
npm run dev
```

### Create Production Build
```bash
npm run build
```

### Preview Production Build Locally
```bash
npm run preview
```

---

## 7. Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. The included `vercel.json` will ensure that all direct routes (`/shop`, `/visit-store`, `/product/:slug`) refresh seamlessly without 404 errors.
