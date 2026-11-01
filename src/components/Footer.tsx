import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock, MessageSquare, Heart } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FooterProps {
  onOpenJoinModal: (plan?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-extrabold tracking-wider text-white text-xl">
                FIT<span className="text-lime-400">LIFE</span>
                <span className="text-[10px] text-slate-400 border border-slate-800 rounded px-1.5 ml-2">GUNTUR</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Fitlife Gym is Guntur's premier fitness and strength training destination. Situated in Lakshmipuram above Puma Showroom, we provide world-class strength equipment, Olympic weights, custom diet coaching by Chakri &amp; Jani, and a luxury recovery sauna.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=Hi%20Fitlife%20Gym%20Guntur`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={GYM_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-lime-400 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-lime-400 transition-colors">Key Features</a></li>
              <li><a href="#about" className="hover:text-lime-400 transition-colors">About Fitlife</a></li>
              <li><a href="#facilities" className="hover:text-lime-400 transition-colors">Facilities &amp; Zones</a></li>
              <li><a href="#trainers" className="hover:text-lime-400 transition-colors">Verified Trainers</a></li>
              <li><a href="#membership" className="hover:text-lime-400 transition-colors">Membership Pricing</a></li>
              <li><a href="#gallery" className="hover:text-lime-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-lime-400 transition-colors">Location &amp; Hours</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Operating Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <p className="font-semibold text-slate-300">Monday – Saturday:</p>
                <p className="text-lime-400">Morning: {GYM_INFO.timings.weekdayMorning}</p>
                <p className="text-lime-400">Evening: {GYM_INFO.timings.weekdayEvening}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-300">Sunday:</p>
                <p className="text-amber-400">Morning: {GYM_INFO.timings.sundayMorning}</p>
                <p className="text-slate-500">Evening: Closed for deep cleaning</p>
              </div>
            </div>
          </div>

          {/* Verified Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Verified Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>3rd Floor, Phoenix Padmavathi Building, Koritepadu Main Road, Opp. LVR Club, Lakshmipuram, Guntur</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <a href={`tel:${GYM_INFO.phonePrimary}`} className="text-white hover:text-lime-400 font-semibold">
                  {GYM_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <a href={`mailto:${GYM_INFO.email}`} className="hover:text-lime-400">
                  {GYM_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenJoinModal('Annual Elite')}
                className="w-full py-2.5 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow"
              >
                Join Now (Starts ₹1,500)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Fitlife Gym Guntur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#membership" className="hover:text-slate-400">Terms of Membership</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-400">Directions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
