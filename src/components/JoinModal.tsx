import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Dumbbell, ShieldCheck, Phone } from 'lucide-react';
import { GYM_INFO, MEMBERSHIP_PLANS } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: defaultPlan || 'Quarterly Progress',
    shift: 'Morning Shift (5:30 AM – 12:00 PM)',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultPlan) {
      setFormData((prev) => ({ ...prev, plan: defaultPlan }));
    }
  }, [defaultPlan]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppInstant = () => {
    const message = encodeURIComponent(
      `Hi Fitlife Gym Guntur!\nI am ready to join.\nName: ${formData.name || 'Member'}\nPhone: ${formData.phone || 'N/A'}\nPlan: ${formData.plan}\nPreferred Timing: ${formData.shift}\nGoal: ${formData.goals || 'General Fitness'}`
    );
    window.open(`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              Membership Request Received!
            </h3>
            <p className="text-sm text-slate-300">
              Welcome to the Fitlife family, <strong>{formData.name}</strong>! We have noted your interest in the <strong>{formData.plan}</strong>.
            </p>
            <p className="text-xs text-slate-400">
              Our front desk will reach out to <strong>{formData.phone}</strong> to confirm your welcome orientation and locker setup.
            </p>

            <div className="pt-4 space-y-3">
              <button
                onClick={handleWhatsAppInstant}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Connect on WhatsApp Immediately
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl cursor-pointer"
              >
                Done / Return to Page
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400">
                  Fitlife Fitness Centre • Guntur
                </span>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">
                  Join Fitlife Gym Today
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Fill in your details below to lock in the current package rates. Zero joining fees, no hidden contracts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nitheesh Surabattu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 85200 32793"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Membership Package
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-lime-400 transition-colors"
                  >
                    <option value="Annual Elite">Annual Elite (₹11,999/yr)</option>
                    <option value="Quarterly Progress">Quarterly Progress (₹3,999/3mo)</option>
                    <option value="Monthly Starter">Monthly Starter (₹1,500/mo)</option>
                    <option value="Personal Training with Chakri">Personal Training with Chakri</option>
                    <option value="Personal Training with Jani">Personal Training with Jani</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Shift
                  </label>
                  <select
                    value={formData.shift}
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-lime-400 transition-colors"
                  >
                    <option value="Morning Shift (5:30 AM – 12:00 PM)">Morning Shift (5:30 AM – 12:00 PM)</option>
                    <option value="Evening Shift (4:00 PM – 9:30 PM)">Evening Shift (4:00 PM – 9:30 PM)</option>
                    <option value="Flexible Shift">Flexible / Either Shift</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary Fitness Objective
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Fat loss, Olympic lifting, strength building, general fitness"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-lime-400/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>{loading ? 'Processing...' : 'Confirm & Join Fitlife'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                <span>Your information is private and strictly kept at Fitlife Guntur.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
