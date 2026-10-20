import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/business';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="pt-4 pb-12">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            Legal & Customer Trust
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-dark tracking-tight mb-6">
            PRIVACY POLICY
          </h1>

          <div className="space-y-6 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            <p>
              Last Updated: October 2026. At <strong>1st Look Garments</strong>, we value the trust of our customers and visitors. This Privacy Policy outlines our transparent approach to data privacy when you browse our website, submit appointment requests, or contact us through WhatsApp or phone.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              1. Information We Collect
            </h3>
            <p>
              When you submit a store visit appointment or wholesale trade inquiry on this website, you provide details such as your full name, mobile number, requested visit date/time, business name (if applicable), and specific garment requirements. We do not store financial payment information or credit/debit card numbers on this website.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              2. How Your Information Is Used
            </h3>
            <p>
              Your contact details are used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Coordinate and confirm store visit appointments at our Ghanta Ghar, Ghaziabad shop.</li>
              <li>Respond to garment inquiries, size availability, and wholesale rate requests.</li>
              <li>Provide direct customer service via phone or WhatsApp.</li>
            </ul>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              3. WhatsApp Communications
            </h3>
            <p>
              When you choose to enquire or book via WhatsApp, your message is transferred directly to our verified business number (+91 98915 17860) under WhatsApp’s end-to-end encrypted messaging infrastructure. We never sell, rent, or share your contact numbers with third-party telemarketers.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              4. Contact for Privacy Inquiries
            </h3>
            <p>
              If you have any questions about this Privacy Policy or wish to update your contact details, please contact us at:
            </p>
            <address className="not-italic bg-neutral-50 p-4 border border-neutral-200 rounded-xs mt-2">
              <strong>1st Look Garments</strong><br />
              {BUSINESS_CONFIG.contact.address.fullAddress}<br />
              Phone: {BUSINESS_CONFIG.contact.phoneDisplay}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="pt-4 pb-12">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-2">
            Store Policies & Terms
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-dark tracking-tight mb-6">
            TERMS & CONDITIONS
          </h1>

          <div className="space-y-6 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            <p>
              Welcome to the official website of <strong>1st Look Garments</strong>. By browsing this website, scheduling visits, or enquiring about our garments, you acknowledge the terms outlined below.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              1. Store Identity & Slogan
            </h3>
            <p>
              1st Look Garments operates as a retail and wholesale clothing store located at 87/2 Ramanuj Dayal Market, Near Ramte Ram Road, Ghanta Ghar, Ghaziabad, Uttar Pradesh, India 201001. Our business motto is <em>“DON'T COMPARE THE PRICE, COMPARE THE QUALITY”</em> and we operate under the registered identity <em>“THE FIXED PRICE SHOP”</em>.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              2. Catalog Presentation & Pricing Policy
            </h3>
            <p>
              Our website serves as a digital showroom and catalogue. While we strive to maintain accurate representations of fabric, cuts, and prices, actual in-store inventory and physical garment colors may have slight natural variations due to lighting, photography, and textile dye batches. Prices are fixed and standardized in accordance with our store policy.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              3. Store Visit Appointments & Enquiries
            </h3>
            <p>
              Submitting an appointment request or product enquiry via the website or WhatsApp initiates a consultation with our store desk. Visit slots and product reservations are confirmed manually by our team based on live store availability.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              4. Wholesale Trade Conditions
            </h3>
            <p>
              Wholesale inquiries are subject to trade terms discussed directly between the buyer and 1st Look Garments management. Minimum lot quantities, assortment ratios, GST invoicing, and dispatch logistics are agreed upon in writing prior to order dispatch.
            </p>

            <h3 className="font-editorial text-lg font-bold text-dark pt-2">
              5. Governing Law
            </h3>
            <p>
              Any disputes or transactions arising from store operations shall be subject to the exclusive jurisdiction of the competent courts in Ghaziabad, Uttar Pradesh, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
