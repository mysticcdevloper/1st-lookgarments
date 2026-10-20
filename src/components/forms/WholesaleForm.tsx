import React, { useState } from 'react';
import { Building2, User, Phone, CheckSquare, Layers, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { WholesaleInquiry } from '../../types';
import { getWholesaleInquiryUrl } from '../../utils/whatsapp';

export const WholesaleForm: React.FC = () => {
  const [formData, setFormData] = useState<WholesaleInquiry>({
    contactPerson: '',
    businessName: '',
    phoneNumber: '',
    categories: ['Shirts & Formals', 'Blazers & Formal Wear'],
    estimatedQuantity: '50 - 100 pieces',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPendingReview, setIsPendingReview] = useState(false);

  const availableCategories = [
    'Blazers & Formal Wear',
    'Shirts (Formal & Casual)',
    'Jeans & Denim',
    'Trousers & Pants',
    'T-Shirts & Polos',
    'Kurtas & Ethnic Wear',
  ];

  const toggleCategory = (cat: string) => {
    if (formData.categories.includes(cat)) {
      setFormData({
        ...formData,
        categories: formData.categories.filter((c) => c !== cat),
      });
    } else {
      setFormData({
        ...formData,
        categories: [...formData.categories, cat],
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Please enter your name.';
    }

    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    if (formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one garment category.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPendingReview(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    const url = getWholesaleInquiryUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white border border-borderSoft p-6 sm:p-10 rounded-xs shadow-subtle">
      {!isPendingReview ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
              B2B & Bulk Partnership
            </span>
            <h3 className="font-editorial text-2xl font-bold text-dark mb-1">
              Wholesale Trade Inquiry
            </h3>
            <p className="text-xs text-neutral-500">
              Connect directly with our wholesale desk in Ghanta Ghar, Ghaziabad. We support retail boutiques and volume stockists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Contact Person */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
                Contact Person <span className="text-brand">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Amit Agarwal"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors ${
                    errors.contactPerson ? 'border-brand' : 'border-neutral-200'
                  }`}
                />
              </div>
              {errors.contactPerson && (
                <p className="text-[11px] text-brand mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.contactPerson}
                </p>
              )}
            </div>

            {/* Business / Shop Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
                Business / Store Name (Optional)
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Agarwal Cloth House"
                  value={formData.businessName || ''}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Phone Number (WhatsApp) <span className="text-brand">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="e.g. 9891517860"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors ${
                  errors.phoneNumber ? 'border-brand' : 'border-neutral-200'
                }`}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-[11px] text-brand mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Categories of Interest */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-2">
              Garment Categories of Interest <span className="text-brand">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableCategories.map((category) => {
                const isSelected = formData.categories.includes(category);
                return (
                  <button
                    type="button"
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`flex items-center space-x-2.5 p-2.5 text-xs rounded-xs border text-left transition-colors ${
                      isSelected
                        ? 'border-brand bg-brand/5 text-brand font-semibold'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-2xs border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-brand bg-brand text-white' : 'border-neutral-300 bg-white'
                    }`}>
                      {isSelected && <span className="text-[10px]">✓</span>}
                    </div>
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
            {errors.categories && (
              <p className="text-[11px] text-brand mt-1.5 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.categories}
              </p>
            )}
          </div>

          {/* Estimated Quantity */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Estimated Order Quantity (Optional)
            </label>
            <div className="relative">
              <Layers className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={formData.estimatedQuantity || '50 - 100 pieces'}
                onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors cursor-pointer"
              >
                <option value="Sample lot (20 - 50 pieces)">Sample lot (20 - 50 pieces)</option>
                <option value="50 - 100 pieces">50 - 100 pieces</option>
                <option value="100 - 300 pieces">100 - 300 pieces</option>
                <option value="300+ pieces (Bulk Lot)">300+ pieces (Bulk Lot)</option>
                <option value="Regular recurring requirement">Regular recurring requirement</option>
              </select>
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Specific Requirements or Questions (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
              <textarea
                rows={3}
                placeholder="Mention specific fabric requirements, size ratio, target price band, or delivery city..."
                value={formData.requirements || ''}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-dark hover:bg-brand text-white py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2"
          >
            <span>Review Inquiry & Send on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-neutral-400 text-center">
            * Wholesale lots, fabric samples, and lot-rate cards are finalized directly via WhatsApp and in-person store visits.
          </p>
        </form>
      ) : (
        /* Review State */
        <div className="space-y-6 animate-fadeIn">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-neutral-100">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold block">
                Ready to Dispatch
              </span>
              <h3 className="font-editorial text-xl font-bold text-dark">
                Review Wholesale Trade Inquiry
              </h3>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xs border border-neutral-200 space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Contact Person:</span>
              <span className="text-dark font-semibold">{formData.contactPerson}</span>
            </div>
            {formData.businessName && (
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Business / Shop:</span>
                <span className="text-dark font-semibold">{formData.businessName}</span>
              </div>
            )}
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Phone:</span>
              <span className="text-dark font-semibold">{formData.phoneNumber}</span>
            </div>
            <div className="py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium block mb-1">Categories:</span>
              <div className="flex flex-wrap gap-1">
                {formData.categories.map((c) => (
                  <span key={c} className="bg-white border border-neutral-200 px-2 py-0.5 rounded-2xs text-[11px] font-medium text-dark">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {formData.estimatedQuantity && (
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Estimated Quantity:</span>
                <span className="text-dark font-semibold">{formData.estimatedQuantity}</span>
              </div>
            )}
            {formData.requirements && (
              <div className="py-1">
                <span className="text-neutral-500 font-medium block mb-1">Notes:</span>
                <span className="text-dark italic">{formData.requirements}</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xs text-xs text-emerald-800 leading-relaxed">
            Click below to open WhatsApp with your wholesale inquiry. The store wholesale desk will respond with catalogues and sample policies.
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSendViaWhatsApp}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPendingReview(false)}
              className="border border-neutral-300 hover:border-dark text-neutral-700 py-3.5 px-5 text-xs font-medium uppercase tracking-widest rounded-xs transition-colors"
            >
              Edit Details
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
