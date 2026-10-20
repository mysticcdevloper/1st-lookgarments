import { Product } from '../types';

/**
 * Editorial Garment Catalog for 1st Look Garments
 * Curated sample catalog designed for Ghanta Ghar, Ghaziabad.
 * Real inventory and prices can be updated directly in this file or loaded via an API.
 */
export const PRODUCTS: Product[] = [
  // --- BLAZERS & FORMAL WEAR ---
  {
    id: 'blazer-01',
    slug: 'imperial-navy-wool-blend-blazer',
    name: 'Imperial Navy Tailored Blazer',
    category: 'blazers',
    categoryLabel: 'Blazers & Formal Wear',
    subCategory: 'Formal Blazers',
    editorialTagline: 'Precision tailoring with a structured modern silhouette.',
    description: 'A signature two-button notch-lapel blazer woven from high-twist wool blend. Designed for all-day comfort with subtle natural stretch, pick-stitch lapels, and double back vents for modern formal and celebratory occasions.',
    price: 4999,
    originalPrice: 6499,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44', '46'],
    colors: [
      { name: 'Navy Blue', hex: '#1B263B' },
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Steel Grey', hex: '#4A5568' }
    ],
    fabric: 'Fine Wool & Poly Stretch Blend',
    fit: 'Slim Tailored Fit',
    careInstructions: ['Dry clean only', 'Store on structured wooden hanger', 'Steam gently'],
    features: ['Double-vented back', 'Internal satin pocket', 'Four-button kissing cuffs'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: true,
    badge: 'Trending Now'
  },
  {
    id: 'blazer-02',
    slug: 'champagne-tuxedo-evening-jacket',
    name: 'Champagne Satin-Shawl Tuxedo',
    category: 'blazers',
    categoryLabel: 'Blazers & Formal Wear',
    subCategory: 'Evening & Party Wear',
    editorialTagline: 'Uncompromising evening glamour for weddings and galas.',
    description: 'Statement evening jacket tailored with contrast black satin shawl lapels and silk-covered buttons. Perfect for cocktail receptions, reception nights, and red-carpet gatherings.',
    price: 5499,
    originalPrice: 7299,
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Champagne Gold', hex: '#E2D4B7' },
      { name: 'Ivory White', hex: '#F9F7F1' }
    ],
    fabric: 'Jacquard Silk-Blend Finish',
    fit: 'Modern Regular Fit',
    careInstructions: ['Dry clean only', 'Keep in garment bag'],
    features: ['Satin shawl collar', 'Satin-covered buttons', 'Welt chest pocket'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: false,
    badge: 'Occasion Wear'
  },
  {
    id: 'blazer-03',
    slug: 'classic-charcoal-houndstooth-blazer',
    name: 'Charcoal Houndstooth Smart Blazer',
    category: 'blazers',
    categoryLabel: 'Blazers & Formal Wear',
    subCategory: 'Casual Blazers',
    editorialTagline: 'Micro-pattern heritage cloth redefined for the boardroom.',
    description: 'Soft-tailored unstructured blazer with patch pockets and lightweight half-lining. Easily paired with denim or formal trousers for effortless smart-casual sophistication.',
    price: 4299,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Charcoal Houndstooth', hex: '#374151' }
    ],
    fabric: 'Textured Cotton-Linen Poly Weave',
    fit: 'Contemporary Slim Fit',
    careInstructions: ['Dry clean recommended', 'Cool iron on reverse'],
    features: ['Patch front pockets', 'Dual vents', 'Half-lined for lightness'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: true,
  },

  // --- SHIRTS (FORMAL, CASUAL, TRENDING) ---
  {
    id: 'shirt-01',
    slug: 'pure-white-royal-oxford-formal-shirt',
    name: 'Pure White Royal Oxford Shirt',
    category: 'shirts',
    categoryLabel: 'Shirts',
    subCategory: 'Formal Shirts',
    editorialTagline: 'Crisp, dense, and impeccably finished for executive presence.',
    description: 'Crafted from 100% two-ply Giza long-staple cotton with a classic semi-cutaway collar and mother-of-pearl finish buttons. Wrinkle-resistant finish keeps you sharp from 9 to 9.',
    price: 1399,
    originalPrice: 1799,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '39', '40', '42', '44'],
    colors: [
      { name: 'Crisp White', hex: '#FFFFFF' },
      { name: 'Sky Blue', hex: '#D0E1F9' },
      { name: 'Blush Pink', hex: '#FAD2E1' }
    ],
    fabric: '100% 2-Ply Long-Staple Cotton',
    fit: 'Tailored Slim Fit',
    careInstructions: ['Machine wash cold', 'Warm iron', 'Do not bleach'],
    features: ['Removable collar stays', 'Chiseled cuffs', 'Anti-curl collar'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: false,
    badge: 'Bestseller'
  },
  {
    id: 'shirt-02',
    slug: 'emerald-textured-linen-casual-shirt',
    name: 'Emerald Washed Linen Casual Shirt',
    category: 'shirts',
    categoryLabel: 'Shirts',
    subCategory: 'Casual Shirts',
    editorialTagline: 'Breathable linen comfort with natural drape and rich tone.',
    description: 'Pure French linen garment-dyed in deep jewel tones. Soft-washed for instant comfort with a band collar and curved hem designed to be worn untucked.',
    price: 1599,
    originalPrice: 2099,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Emerald Green', hex: '#1B4D3E' },
      { name: 'Rust Sienna', hex: '#A44200' },
      { name: 'Sand Khaki', hex: '#C2B280' }
    ],
    fabric: '100% European Linen',
    fit: 'Relaxed Casual Fit',
    careInstructions: ['Hand wash or delicate machine wash', 'Line dry in shade'],
    features: ['Mandarin/Band collar', 'Chest patch pocket', 'Wood-effect buttons'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: true,
    badge: 'Summer Essential'
  },
  {
    id: 'shirt-03',
    slug: 'monochrome-micro-cube-print-shirt',
    name: 'Monochrome Micro-Geo Printed Shirt',
    category: 'shirts',
    categoryLabel: 'Shirts',
    subCategory: 'Trending Shirts',
    editorialTagline: 'Subtle geometric cadence for effortless weekend style.',
    description: 'Modern smart-casual shirt with fine geometric micro-motifs. Made with soft satin-finish cotton that catches just the right amount of light for evening dinners and gatherings.',
    price: 1299,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Navy & White', hex: '#1E293B' },
      { name: 'Black & Grey', hex: '#262626' }
    ],
    fabric: 'Satin Cotton Weave',
    fit: 'Slim Fit',
    careInstructions: ['Machine wash warm', 'Tumble dry low'],
    features: ['Button-down collar', 'Curved hemline'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: true,
  },
  {
    id: 'shirt-04',
    slug: 'indigo-herringbone-spread-collar-shirt',
    name: 'Indigo Herringbone Twill Shirt',
    category: 'shirts',
    categoryLabel: 'Shirts',
    subCategory: 'Formal Shirts',
    editorialTagline: 'Rich diagonal texture woven for timeless wardrobe endurance.',
    description: 'Heavyweight twill weave in deep indigo with an English spread collar. Pairs harmoniously with blazers, ties, or standalone trousers.',
    price: 1449,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['39', '40', '42', '44'],
    colors: [
      { name: 'Indigo Blue', hex: '#2C3E50' },
      { name: 'Slate Grey', hex: '#7F8C8D' }
    ],
    fabric: '100% Combed Cotton Twill',
    fit: 'Regular Fit',
    careInstructions: ['Machine wash', 'Steam press'],
    features: ['Double-layer yoke', 'Reinforced side gussets'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: false,
  },

  // --- BOTTOMWEAR (JEANS, PANTS & TROUSERS) ---
  {
    id: 'bottom-01',
    slug: 'italian-stretch-pleated-formal-trouser',
    name: 'Italian-Cut Pleated Formal Trouser',
    category: 'bottomwear',
    categoryLabel: 'Jeans & Trousers',
    subCategory: 'Formal Trousers',
    editorialTagline: 'Classic single pleats with adjustable side adjusters.',
    description: 'Refined tailored trousers featuring extended waistband tab, side buckle cinch adjusters, and a clean tapered hem. Engineered with mechanical stretch for crease-free wear through long travel and office days.',
    price: 1899,
    originalPrice: 2499,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Charcoal Grey', hex: '#374151' },
      { name: 'Walnut Brown', hex: '#4B382A' },
      { name: 'Deep Olive', hex: '#3B443B' }
    ],
    fabric: 'Poly-Viscose Spandex Stretch Weave',
    fit: 'Tailored Tapered Fit',
    careInstructions: ['Dry clean or gentle cold wash', 'Medium iron'],
    features: ['Waistband side adjusters', 'Front single pleat', 'French fly closure'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: true,
    badge: 'Staff Pick'
  },
  {
    id: 'bottom-02',
    slug: 'vintage-washed-selvedge-look-denim',
    name: 'Vintage Wash Comfort-Stretch Denim',
    category: 'bottomwear',
    categoryLabel: 'Jeans & Trousers',
    subCategory: 'Denim & Jeans',
    editorialTagline: 'Authentic stone wash character with all-day flexibility.',
    description: '12.5 oz ring-spun denim with hand-whiskering and authentic 3D crinkle effects. Crafted with 2% elastane for seamless mobility whether commuting or traveling.',
    price: 1799,
    originalPrice: 2299,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Mid Indigo Wash', hex: '#2B4C7E' },
      { name: 'Raw Dark Wash', hex: '#1A2B4C' },
      { name: 'Washed Black', hex: '#2E2E2E' }
    ],
    fabric: '98% Cotton, 2% Elastane (12.5 oz)',
    fit: 'Slim Straight Fit',
    careInstructions: ['Wash inside out with similar colors', 'Do not tumble dry'],
    features: ['Copper rivets', 'Heavy-duty YKK zip fly', 'Reinforced belt loops'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: false,
  },
  {
    id: 'bottom-03',
    slug: 'urban-cotton-sateen-chinos',
    name: 'Urban Cotton-Sateen Flat-Front Chinos',
    category: 'bottomwear',
    categoryLabel: 'Jeans & Trousers',
    subCategory: 'Casual Chinos',
    editorialTagline: 'Buttery soft sateen touch with clean architectural lines.',
    description: 'The versatile foundation piece for every discerning wardrobe. Flat front construction with welt coin pocket and piped inner seams for clean rolled cuff styling.',
    price: 1599,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Beige Khaki', hex: '#D2B48C' },
      { name: 'Classic Navy', hex: '#1C2833' },
      { name: 'Sage Green', hex: '#77815C' }
    ],
    fabric: '97% Peached Cotton Sateen, 3% Elastane',
    fit: 'Modern Slim Fit',
    careInstructions: ['Machine wash gentle', 'Do not tumble dry'],
    features: ['Coin welt pocket', 'Chambray internal lining'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: true,
  },

  // --- T-SHIRTS & POLOS ---
  {
    id: 'tshirt-01',
    slug: 'supima-heavyweight-crewneck-tee',
    name: '240 GSM Supima Crewneck T-Shirt',
    category: 'tshirts',
    categoryLabel: 'T-Shirts & Polos',
    subCategory: 'Crewneck T-Shirts',
    editorialTagline: 'Dense, substantial drape that retains structure wash after wash.',
    description: 'Constructed from combed 240 GSM Supima cotton yarn. Designed with a ribbed reinforced collar that does not sag, drop-shoulder silhouette, and premium pre-shrunk finish.',
    price: 799,
    originalPrice: 1099,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Off White', hex: '#F4F1EA' },
      { name: 'Washed Charcoal', hex: '#262626' },
      { name: 'Forest Pine', hex: '#22382D' }
    ],
    fabric: '100% Extra-Long Staple Supima Cotton (240 GSM)',
    fit: 'Relaxed Drop-Shoulder Fit',
    careInstructions: ['Cold machine wash', 'Dry flat', 'Do not bleach'],
    features: ['High-density rib collar', 'Blind stitch hem', 'Pre-shrunk fabric'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: true,
    badge: 'Heavyweight'
  },
  {
    id: 'tshirt-02',
    slug: 'mercerized-cotton-pique-polo',
    name: 'Mercerized Cotton Piqué Polo',
    category: 'tshirts',
    categoryLabel: 'T-Shirts & Polos',
    subCategory: 'Polo Shirts',
    editorialTagline: 'Lustrous sheen and collar structure for elevated leisure.',
    description: 'Double-mercerized Egyptian cotton piqué gives this polo an understated natural silk-like lustre and crisp collar roll that stays upright beneath blazers.',
    price: 1199,
    originalPrice: 1599,
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Burgundy Wine', hex: '#581845' },
      { name: 'Navy Blue', hex: '#1A365D' },
      { name: 'Pure Black', hex: '#0F0F0F' }
    ],
    fabric: '100% Double-Mercerized Cotton Piqué',
    fit: 'Regular Tailored Fit',
    careInstructions: ['Gentle cycle', 'Line dry in shade'],
    features: ['Trocas shell buttons', 'Knit rib collar with tipping', 'Side step-hem with vents'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: true,
    badge: 'Premium Touch'
  },
  {
    id: 'tshirt-03',
    slug: 'minimalist-striped-waffle-knit-tee',
    name: 'Textured Waffle-Knit Raglan Tee',
    category: 'tshirts',
    categoryLabel: 'T-Shirts & Polos',
    subCategory: 'Textured Tees',
    editorialTagline: 'Thermal honeycomb weave with breathable dimension.',
    description: 'Honeycomb micro-waffle texture engineered for transitional seasons. Offers subtle thermal insulation while allowing airflow, finished with raglan sleeves for athletic mobility.',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#DCD4C7' },
      { name: 'Charcoal Black', hex: '#2B2B2B' }
    ],
    fabric: 'Cotton-Modal Honeycomb Waffle',
    fit: 'Standard Fit',
    careInstructions: ['Cold wash', 'Do not wring'],
    features: ['Raglan sleeves', 'Contrast neck tape'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: false,
  },

  // --- KURTAS & ETHNIC WEAR ---
  {
    id: 'ethnic-01',
    slug: 'embroidered-raw-silk-festive-kurta',
    name: 'Raw Silk Embroidered Festive Kurta',
    category: 'ethnic-wear',
    categoryLabel: 'Kurtas & Ethnic Wear',
    subCategory: 'Festive Kurtas',
    editorialTagline: 'Intricate tonal threadwork crafted for weddings and Diwali.',
    description: 'An artisanal raw silk-blend knee-length kurta featuring delicate needle-loom ari embroidery along the placket and mandarin collar. Pair with churidar or tailored trousers.',
    price: 2499,
    originalPrice: 3499,
    images: [
      'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Imperial Maroon', hex: '#661122' },
      { name: 'Royal Mustard', hex: '#C29B38' },
      { name: 'Antique Ivory', hex: '#F5F2EB' }
    ],
    fabric: 'Slub Raw Silk and Cotton Blend',
    fit: 'Straight Tailored Kurta Fit',
    careInstructions: ['Dry clean recommended', 'Steam iron only'],
    features: ['Hand-finished metallic buttons', 'Dual side seam pockets', 'Mandarin collar'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: true,
    badge: 'Festive Pick'
  },
  {
    id: 'ethnic-02',
    slug: 'classic-cotton-pathani-suit-set',
    name: 'Classic Cotton Pathani Suit Set',
    category: 'ethnic-wear',
    categoryLabel: 'Kurtas & Ethnic Wear',
    subCategory: 'Pathani Sets',
    editorialTagline: 'Commanding traditional silhouette with epaulettes and flap pockets.',
    description: 'Traditional two-piece pathani suit set including curved-hem long kurta with shoulder epaulettes, chest flap pockets, and pleated salwar bottom. Woven in breathable high-count cotton.',
    price: 2899,
    originalPrice: 3899,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44', '46'],
    colors: [
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Olive Khaki', hex: '#555D50' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    fabric: '100% Breathable Khadi-Style Cotton',
    fit: 'Traditional Pathani Cut',
    careInstructions: ['Hand wash cold or gentle machine wash', 'Starch if desired'],
    features: ['Includes coordinating salwar', 'Dual chest flap pockets', 'Buttoned shoulder straps'],
    isAvailable: true,
    isFeatured: true,
    isNewArrival: false,
  },
  {
    id: 'ethnic-03',
    slug: 'lucknowi-chikankari-short-kurta',
    name: 'Lucknowi Chikankari Short Kurta',
    category: 'ethnic-wear',
    categoryLabel: 'Kurtas & Ethnic Wear',
    subCategory: 'Short Kurtas',
    editorialTagline: 'Intricate tonal threadcraft for effortless fusion styling.',
    description: 'A contemporary short kurta with all-over geometric and floral Chikankari motifs on lightweight mulmul cotton. Styled with denim or chinos for casual festive brunches and poojas.',
    price: 1699,
    images: [
      'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Powder Blue', hex: '#B0E0E6' },
      { name: 'Pale Mint', hex: '#98FF98' },
      { name: 'Pristine White', hex: '#FFFFFF' }
    ],
    fabric: '100% Mulmul Cotton with Cotton Threadwork',
    fit: 'Contemporary Short Length',
    careInstructions: ['Gentle hand wash only', 'Dry flat in shade'],
    features: ['All-over Chikankari embroidery', 'Mandarin collar', 'Side slits'],
    isAvailable: true,
    isFeatured: false,
    isNewArrival: true,
  }
];

export const ALL_SIZES = ['30', '32', '34', '36', '38', '39', '40', '42', '44', '46', 'M', 'L', 'XL', 'XXL'];

export const ALL_COLORS = [
  { name: 'Navy Blue', hex: '#1B263B' },
  { name: 'Black', hex: '#111111' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Grey', hex: '#4A5568' },
  { name: 'Blue', hex: '#2B4C7E' },
  { name: 'Green', hex: '#1B4D3E' },
  { name: 'Beige / Ivory', hex: '#E2D4B7' },
  { name: 'Maroon', hex: '#661122' }
];
