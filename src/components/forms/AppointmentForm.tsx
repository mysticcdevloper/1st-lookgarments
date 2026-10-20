import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { StoreAppointment } from '../../types';
import { getStoreVisitAppointmentUrl } from '../../utils/whatsapp';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<StoreAppointment>({
    fullName: '',
    mobileNumber: '',
    visitDate: '',
    preferredTime: 'Morning (11:00 AM - 2:00 PM)',
    visitPurpose: 'shopping',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPendingConfirmation, setIsPendingConfirmation] = useState(false);

  // Tomorrow's date as min date
  const today = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.visitDate) {
      newErrors.visitDate = 'Please select your preferred visit date.';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPendingConfirmation(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    const url = getStoreVisitAppointmentUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white border border-borderSoft p-6 sm:p-10 rounded-xs shadow-subtle">
      {!isPendingConfirmation ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          <div>
            <h3 className="font-editorial text-2xl font-bold text-dark mb-1">
              Store Visit Request
            </h3>
            <p className="text-xs text-neutral-500">
              Submit your preferred date and time. We will prepare garment racks matching your interest.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Full Name <span className="text-brand">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors ${
                  errors.fullName ? 'border-brand' : 'border-neutral-200'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-[11px] text-brand mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Mobile Phone */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Mobile Number (WhatsApp) <span className="text-brand">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="e.g. 9891517860"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors ${
                  errors.mobileNumber ? 'border-brand' : 'border-neutral-200'
                }`}
              />
            </div>
            {errors.mobileNumber && (
              <p className="text-[11px] text-brand mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.mobileNumber}
              </p>
            )}
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Visit Date */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
                Preferred Date <span className="text-brand">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  min={today}
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors ${
                    errors.visitDate ? 'border-brand' : 'border-neutral-200'
                  }`}
                />
              </div>
              {errors.visitDate && (
                <p className="text-[11px] text-brand mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.visitDate}
                </p>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
                Preferred Time Slot <span className="text-brand">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors cursor-pointer"
                >
                  <option value="Morning (11:00 AM - 2:00 PM)">Morning (11:00 AM - 2:00 PM)</option>
                  <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                </select>
              </div>
            </div>

          </div>

          {/* Purpose of Visit */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Purpose of Visit
            </label>
            <select
              value={formData.visitPurpose}
              onChange={(e) => setFormData({ ...formData, visitPurpose: e.target.value as StoreAppointment['visitPurpose'] })}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors cursor-pointer"
            >
              <option value="shopping">In-Store Garment Shopping</option>
              <option value="styling">Garment Selection & Styling Assistance</option>
              <option value="wholesale">Wholesale & Bulk Clothing Enquiry</option>
              <option value="other">General Visit / Exploration</option>
            </select>
          </div>

          {/* Optional Message / Requirements */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-dark mb-1.5">
              Specific Garments or Sizes in Mind (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
              <textarea
                rows={3}
                placeholder="e.g. Looking for a size 40 navy blazer and two formal white shirts for an upcoming wedding."
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 text-xs text-dark rounded-xs focus:outline-none focus:border-dark transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-dark hover:bg-brand text-white py-3.5 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2"
          >
            <span>Review Request & Send via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-neutral-400 text-center">
            * Note: This request is sent directly to the store manager. Visit slots are subject to store confirmation.
          </p>
        </form>
      ) : (
        /* Review & Confirmation State Before WhatsApp Action */
        <div className="space-y-6 animate-fadeIn">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-neutral-100">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold block">
                Pending Store Confirmation
              </span>
              <h3 className="font-editorial text-xl font-bold text-dark">
                Review Your Visit Details
              </h3>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xs border border-neutral-200 space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Customer:</span>
              <span className="text-dark font-semibold">{formData.fullName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Phone:</span>
              <span className="text-dark font-semibold">{formData.mobileNumber}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Date:</span>
              <span className="text-dark font-semibold">{formData.visitDate}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Time Slot:</span>
              <span className="text-dark font-semibold">{formData.preferredTime}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500 font-medium">Purpose:</span>
              <span className="text-dark font-semibold capitalize">{formData.visitPurpose}</span>
            </div>
            {formData.message && (
              <div className="py-1">
                <span className="text-neutral-500 font-medium block mb-1">Notes:</span>
                <span className="text-dark italic">{formData.message}</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xs text-xs text-emerald-800 leading-relaxed">
            Click below to open WhatsApp with your pre-formatted appointment request. The store will reply to confirm your slot.
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSendViaWhatsApp}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Send Request on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPendingConfirmation(false)}
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
