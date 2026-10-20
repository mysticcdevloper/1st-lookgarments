export const BUSINESS_CONFIG = {
  brandName: '1st Look Garments',
  officialSlogan: "DON'T COMPARE THE PRICE, COMPARE THE QUALITY",
  secondaryTagline: 'THE FIXED PRICE SHOP',
  businessModel: 'Clothing Retail & Wholesale',
  
  contact: {
    phoneDisplay: '+91 98915 17860',
    phoneTel: '+919891517860',
    whatsappNumber: '919891517860',
    instagramUrl: 'https://www.instagram.com/1stlookgarments/',
    googleMapsUrl: 'https://maps.app.goo.gl/b2dFdxeBJKYg9pyaA',
    address: {
      line1: '87/2 Ramanuj Dayal Market',
      line2: 'Near Ramte Ram Road, Ghanta Ghar',
      city: 'Ghaziabad',
      state: 'Uttar Pradesh',
      country: 'India',
      postalCode: '201001',
      fullAddress: '87/2 Ramanuj Dayal Market, Near Ramte Ram Road, Ghanta Ghar, Ghaziabad, Uttar Pradesh, India 201001',
    },
  },

  announcements: [
    '1ST LOOK GARMENTS — RETAIL & WHOLESALE AVAILABLE',
    'THE FIXED PRICE SHOP — PREMIUM QUALITY YOU CAN TRUST',
    'VISIT OUR STORE AT GHANTA GHAR, GHAZIABAD',
  ],

  categories: [
    {
      id: 'blazers',
      name: 'Blazers & Formal Wear',
      shortName: 'Blazers',
      slug: 'blazers',
      path: '/collections/blazers',
      description: 'Handcrafted tailored blazers, tuxedo jackets, and sharp evening formals.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'shirts',
      name: 'Shirts & Formals',
      shortName: 'Shirts',
      slug: 'shirts',
      path: '/collections/shirts',
      description: 'Premium Egyptian cotton, linen checks, textured weaves, and tailored everyday shirts.',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'bottomwear',
      name: 'Jeans & Trousers',
      shortName: 'Bottomwear',
      slug: 'bottomwear',
      path: '/collections/bottomwear',
      description: 'Comfort-stretch denims, pleat-front formal trousers, and smart casual chinos.',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'tshirts',
      name: 'T-Shirts & Polos',
      shortName: 'T-Shirts',
      slug: 'tshirts',
      path: '/collections/tshirts',
      description: 'Heavyweight Supima cotton tees, pique knit polos, and breathable street basics.',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'ethnic-wear',
      name: 'Kurtas & Ethnic Wear',
      shortName: 'Ethnic Wear',
      slug: 'ethnic-wear',
      path: '/collections/ethnic-wear',
      description: 'Classic pathani suits, embroidered festive kurtas, and silk-blend traditional silhouettes.',
      image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=1200&auto=format&fit=crop',
    },
  ],

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Shop All', path: '/shop' },
    { label: 'New Arrivals', path: '/new-arrivals' },
    { 
      label: 'Collections', 
      path: '/shop',
      children: [
        { label: 'Blazers & Formal Wear', path: '/collections/blazers' },
        { label: 'Formal & Casual Shirts', path: '/collections/shirts' },
        { label: 'Jeans & Trousers', path: '/collections/bottomwear' },
        { label: 'T-Shirts & Polos', path: '/collections/tshirts' },
        { label: 'Kurtas & Ethnic Wear', path: '/collections/ethnic-wear' },
      ]
    },
    { label: 'Wholesale', path: '/wholesale' },
    { label: 'Visit Store', path: '/visit-store' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};
