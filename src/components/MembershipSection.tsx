import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, FAQS, GYM_INFO, MembershipPlan } from '../data/gymData';
import { Check, ChevronDown, ChevronUp, Sparkles, MessageSquare, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

interface MembershipSectionProps {
  onOpenJoinModal: (planName?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenJoinModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Quick Enquiry Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: 'Quarterly Progress',
    timing: 'Morning (5:30 AM - 12:00 PM)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Fitlife Gym Guntur! My name is ${formData.name || 'Member'}. I would like to join/enquire about the ${formData.plan} plan (${formData.timing}). ${formData.message}`
    );
    window.open(`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="membership" className="py-24 px-4 md:px-8 bg-[#0a0f1d] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Pricing • No Hidden Costs
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Choose Your <span className="text-lime-400">Fitness Plan</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            No locked contracts or surprise maintenance charges. Straightforward access starting at ₹1,500 alongside dedicated multi-month packages with sauna recovery access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-slate-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 md:-translate-y-2'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-lime-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black uppercase text-white tracking-wide">
                    {plan.name}
                  </h3>
                  {plan.savings && (
                    <span className="text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-2.5 py-0.5 rounded-full">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mb-6">
                  {plan.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-medium">/{plan.period.replace('per ', '').replace('for ', '')}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </p>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenJoinModal(plan.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-lime-400 hover:bg-lime-300 text-slate-950 shadow-lg shadow-lime-400/25 active:scale-95'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Dedicated 1-on-1 Personal Training Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-lime-400/30 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Specialized 1-on-1 Mentorship
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                Looking for Dedicated Personal Training?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Train 1-on-1 alongside renowned coaches Chakri or Jani. Includes personalized daily form monitoring, goal-oriented progressive weight schemes, and tailored nutrition charts suited for Indian vegetarian and non-vegetarian diets.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenJoinModal('Personal Training 1-on-1')}
                className="w-full py-3.5 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all text-center cursor-pointer"
              >
                Enquire for Personal Training
              </button>
              <a
                href={`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=Hi%20Fitlife%20Gym,%20I%20am%20interested%20in%201-on-1%20Personal%20Training%20with%20Chakri%20or%20Jani`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Chat with Trainer on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Membership Enquiry Form & FAQs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          
          {/* Quick Enquiry Form */}
          <div className="lg:col-span-6 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Instant Online Booking
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Membership Enquiry Form
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Submit your details below and our team will confirm your slot and welcome you for a walk-in tour.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-slate-950 rounded-2xl border border-lime-400/40 space-y-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Thank You, {formData.name}!</h4>
                <p className="text-xs text-slate-300">
                  Your enquiry for the <strong>{formData.plan}</strong> has been received. Our floor manager will call you shortly at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open WhatsApp for Faster Reply
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Select Plan
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-lime-400 transition-colors"
                    >
                      <option value="Monthly Starter">Monthly Starter (₹1,500)</option>
                      <option value="Quarterly Progress">Quarterly Progress (₹3,999)</option>
                      <option value="Annual Elite">Annual Elite (₹11,999)</option>
                      <option value="Personal Training 1-on-1">1-on-1 Personal Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Training Shift
                    </label>
                    <select
                      value={formData.timing}
                      onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-lime-400 transition-colors"
                    >
                      <option value="Morning (5:30 AM - 12:00 PM)">Morning (5:30 AM – 12:00 PM)</option>
                      <option value="Evening (4:00 PM - 9:30 PM)">Evening (4:00 PM – 9:30 PM)</option>
                      <option value="Flexible Shift">Flexible / Either Shift</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Fitness Goal / Query
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Weight loss, muscle building, or visiting for a trial."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="py-3 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Got Questions?
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-lime-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
