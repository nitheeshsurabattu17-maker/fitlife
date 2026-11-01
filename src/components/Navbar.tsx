import React, { useState } from 'react';
import { Dumbbell, Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenJoinModal: (plan?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Pricing', href: '#membership' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Capsule Header */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-full py-2.5 px-4 md:px-6 shadow-2xl flex items-center justify-between transition-all">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-white text-lg leading-tight flex items-center gap-1">
                FIT<span className="text-lime-400">LIFE</span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-400 border border-slate-700 rounded px-1 ml-1 hidden sm:inline-block">GUNTUR</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase hidden md:inline">Strength &amp; Conditioning</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    isActive
                      ? 'text-lime-400 bg-lime-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Join Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=Hi%20Fitlife%20Gym%20Guntur,%20I%20am%20interested%20in%20gym%20membership`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenJoinModal('Annual Elite')}
              className="bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-lg shadow-lime-400/20 hover:shadow-lime-400/40 transition-all transform active:scale-95 cursor-pointer"
            >
              Join Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-950 border-l border-slate-800 p-6 z-50 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="font-extrabold tracking-wider text-white text-base">
                FIT<span className="text-lime-400">LIFE</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-lime-400 opacity-60">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="space-y-3 pt-6 border-t border-slate-800">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJoinModal('Annual Elite');
            }}
            className="w-full py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-colors text-center"
          >
            Join Fitlife Today
          </button>

          <a
            href={`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=Hi%20Fitlife%20Gym%20Guntur,%20I%20am%20interested%20in%20gym%20membership`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Inquiry
          </a>

          <a
            href={`tel:${GYM_INFO.phonePrimary}`}
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-lime-400" />
            Call: {GYM_INFO.phonePrimary}
          </a>

          <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-lime-400 shrink-0" />
            <span>3rd Flr, Phoenix Padmavathi Bldg, Lakshmipuram</span>
          </div>
        </div>
      </aside>
    </>
  );
};
