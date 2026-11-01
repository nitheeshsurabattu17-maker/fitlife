import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Gym Membership Packages',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Fitlife Gym Guntur!\nMy Name: ${formData.name || 'Member'}\nPhone: ${formData.phone || 'N/A'}\nTopic: ${formData.topic}\nMessage: ${formData.message || 'I would like to enquire about visiting the gym.'}`
    );
    window.open(`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-[#080c14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            Reach Out Directly
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Find Us in <span className="text-lime-400">Lakshmipuram, Guntur</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            Walk in during our morning or evening training shifts for an in-person walkthrough and equipment inspection.
          </p>
        </div>

        {/* Contact Information & Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Address */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white mb-2">Verified Address</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {GYM_INFO.address.line1}<br />
                {GYM_INFO.address.line2}<br />
                {GYM_INFO.address.line3}<br />
                {GYM_INFO.address.city}, {GYM_INFO.address.pincode}
              </p>
            </div>
            <a
              href={GYM_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white mb-2">Phone Inquiries</h3>
              <p className="text-xs text-slate-400 mb-3">Call our reception desk for live slot and package availability:</p>
              <div className="space-y-1">
                <a href={`tel:${GYM_INFO.phonePrimary}`} className="text-sm font-bold text-white hover:text-lime-400 block">
                  {GYM_INFO.phonePrimary}
                </a>
                <a href={`tel:${GYM_INFO.phoneSecondary}`} className="text-xs font-semibold text-slate-400 hover:text-lime-400 block">
                  {GYM_INFO.phoneSecondary}
                </a>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-slate-500">Available during active shifts</p>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white mb-2">WhatsApp Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Instant replies for membership questions, PT slots with Chakri &amp; Jani, and booking trial sessions.
              </p>
            </div>
            <a
              href={`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=Hi%20Fitlife%20Gym%20Guntur,%20I%20would%20like%20to%20enquire%20about%20gym%20timings%20and%20membership.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 4: Operating Shifts */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white mb-2">Training Shifts</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Mon – Sat Morning:</span>
                  <span className="text-lime-400 font-bold">{GYM_INFO.timings.weekdayMorning}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Mon – Sat Evening:</span>
                  <span className="text-lime-400 font-bold">{GYM_INFO.timings.weekdayEvening}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Sunday:</span>
                  <span className="text-amber-400 font-bold">{GYM_INFO.timings.sundayMorning}</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[10px] text-slate-500 italic">Sunday evening closed for sanitization</p>
          </div>

        </div>

        {/* Form and Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Send Us a Message Form */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Direct Inquiry
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1 mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center bg-slate-950 rounded-2xl border border-lime-400/40 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thanks, {formData.name}. We have received your query regarding <strong>{formData.topic}</strong>. A coach will contact you at {formData.phone}.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleWhatsAppSend}
                      className="py-2.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Also Open WhatsApp
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="block mx-auto mt-3 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
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
                        placeholder="+91 98480 12345"
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Topic of Enquiry
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-lime-400 transition-colors"
                    >
                      <option value="Gym Membership Packages">Gym Membership Packages</option>
                      <option value="1-on-1 Personal Training with Chakri/Jani">1-on-1 Personal Training with Chakri/Jani</option>
                      <option value="Fat Loss & Nutrition Planning">Fat Loss &amp; Nutrition Planning</option>
                      <option value="Zumba & Group Fitness Classes">Zumba &amp; Group Fitness Classes</option>
                      <option value="Schedule a Facility Walkthrough">Schedule a Facility Walkthrough</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Message / Query *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us what you are aiming for or ask any question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message Now'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="py-3 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Location Map & Landmark Info */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                    Location Map
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                    Find Us in Lakshmipuram
                  </h3>
                </div>
                <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                  Above Puma Showroom
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Situated prominently on Koritepadu Main Road right opposite the historic LVR Club and on the 3rd floor of Phoenix Padmavathi Building. Lift access is available directly to the gym floor.
              </p>

              {/* Map embed / Interactive Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-64 bg-slate-950">
                <iframe
                  title="Fitlife Gym Guntur Location Map"
                  src="https://maps.google.com/maps?q=16.3114,80.4365&hl=en&z=16&output=embed"
                  className="w-full h-full border-0 grayscale invert opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Landmarks */}
              <div className="mt-6 space-y-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Key Landmarks Nearby:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-lg">
                    Directly Opp. LVR Club
                  </span>
                  <span className="text-xs bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-lg">
                    Above Puma Showroom
                  </span>
                  <span className="text-xs bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-lg">
                    Koritepadu Main Road
                  </span>
                  <span className="text-xs bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-lg">
                    Near Lakshmipuram Junction
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={GYM_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-lime-400" />
                <span>Open in Google Maps App →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
