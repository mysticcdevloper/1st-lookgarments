import React from 'react';
import { ShopPage } from './ShopPage';

export const NewArrivalsPage: React.FC = () => {
  return (
    <ShopPage
      initialCategory="all"
      pageTitle="New Arrivals 2026"
      pageSubtitle="The latest arrivals in blazers, everyday shirts, tailored trousers, and festive ethnic wear freshly stocked at our Ghanta Ghar store."
    />
  );
};

export const ShirtsCollectionPage: React.FC = () => {
  return (
    <ShopPage
      initialCategory="shirts"
      pageTitle="Formal, Casual & Trending Shirts"
      pageSubtitle="Pure Egyptian cottons, linen textures, and modern prints. Designed for sharp office presences and refined weekend leisure."
    />
  );
};

export const BlazersCollectionPage: React.FC = () => {
  return (
    <ShopPage
      initialCategory="blazers"
      pageTitle="Blazers & Formal Wear"
      pageSubtitle="Handcrafted two-button blazers, tuxedo dinner jackets, and sharp evening formals with structured shoulder lines."
    />
  );
};

export const BottomwearCollectionPage: React.FC = () => {
  return (
    <ShopPage
      initialCategory="bottomwear"
      pageTitle="Jeans, Pants & Trousers"
      pageSubtitle="Italian-cut pleated formal trousers, vintage washed comfort-stretch denims, and flat-front cotton sateen chinos."
    />
  );
};

export const TShirtsCollectionPage: React.FC = () => {
  return (
    <ShopPage
      initialCategory="tshirts"
      pageTitle="T-Shirts & Polos"
      pageSubtitle="240 GSM heavyweight Supima cotton crewnecks and double-mercerized Egyptian cotton piqué polos."
    />
  );
};

export const EthnicWearCollectionPage: React.FC = () => {
  return (
    <ShopPage
      initialCategory="ethnic-wear"
      pageTitle="Kurtas & Ethnic Wear"
      pageSubtitle="Embroidered raw silk festive kurtas, authentic cotton pathani sets, and Lucknowi Chikankari short kurtas for celebrations."
    />
  );
};
