import React from 'react';
import { Star, ArrowRight, ShieldCheck, Flame, Trophy, Users } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import heroAthleteImg from '../assets/images/hero_athlete_1793536416395.jpg';

interface HeroProps {
  onOpenJoinModal: (plan?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 px-4 md:px-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-[#080c14]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Stage */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-lime-400/30 text-xs font-semibold text-lime-400 shadow-lg">
            <Flame className="w-4 h-4 text-lime-400 animate-pulse" />
            <span>Lakshmipuram / Koritepadu, Guntur</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-white font-bold">{GYM_INFO.rating}★</span>
            <span className="text-slate-400">({GYM_INFO.reviewCount}+ Google Reviews)</span>
          </div>
        </div>

        {/* Centerpiece: Headline & Athlete with Orbital Ring */}
        <div className="relative flex flex-col items-center justify-center text-center">
          
          {/* Giant Layered Headline */}
          <div className="relative mb-6 select-none">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-slate-100">
              <span className="text-slate-400">Build</span> your
              <br />
              stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 neon-glow">self.</span>
            </h1>
          </div>

          {/* Athletic Center Showcase with Glowing Orbital Ring */}
          <div className="relative w-full max-w-2xl mx-auto my-2 group">
            {/* Orbital Arc Ring */}
            <div className="absolute inset-0 -m-4 md:-m-8 rounded-3xl border border-lime-400/25 bg-lime-400/[0.02] transform -rotate-2 scale-100 transition-transform group-hover:scale-105 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-500/20 via-emerald-500/10 to-transparent rounded-2xl blur-lg pointer-events-none" />

            {/* Athlete Hero Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900">
              <img
                src={heroAthleteImg}
                alt="Fitlife Gym Guntur Olympic Strength Training"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Floating Feature Tags on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl px-3.5 py-2">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-lime-400">Location</p>
                  <p className="text-xs font-semibold text-white">3rd Flr, Phoenix Padmavathi Bldg</p>
                </div>
                <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl px-3.5 py-2 text-right">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-lime-400">Head Coaches</p>
                  <p className="text-xs font-semibold text-white">Chakri &amp; Jani</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar: Copy, CTA & Proof */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Subtext and CTAs */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-sm md:text-base text-slate-300 max-w-md leading-relaxed font-normal">
              Train harder. Get stronger. Become the best version of yourself. Welcome to <span className="text-white font-semibold">Fitlife Gym Guntur</span>, where Olympic free weights, personalized coaching, and luxury sauna recovery turn sweat into permanent results.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenJoinModal('Annual Elite')}
                className="px-6 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-lime-400/25 hover:shadow-lime-400/40 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#facilities"
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>Explore Gym</span>
                <span className="text-lime-400">→</span>
              </a>
            </div>
          </div>

          {/* Social Proof and Avatars */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
            <div className="flex -space-x-2.5">
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center font-bold text-xs text-lime-400 shadow">
                P
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center font-bold text-xs text-lime-300 shadow">
                S
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-600 flex items-center justify-center font-bold text-xs text-emerald-400 shadow">
                K
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-lime-400 text-slate-950 flex items-center justify-center font-black text-xs shadow">
                +2k
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-base font-extrabold text-white">2,000+</span>
                <span className="text-xs text-lime-400 font-semibold">Active Members</span>
              </div>
              <span className="text-xs text-slate-400">Trained &amp; Transformed in Guntur</span>
            </div>
          </div>

        </div>

      </div>

      {/* Highlights Strip */}
      <div className="max-w-7xl mx-auto w-full mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/50">
          <p className="text-xl md:text-2xl font-black text-lime-400">40+ kg</p>
          <p className="text-xs text-slate-400 font-medium">Olympic Free Weights</p>
        </div>
        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/50">
          <p className="text-xl md:text-2xl font-black text-white">3rd Floor</p>
          <p className="text-xs text-slate-400 font-medium">Open-Air &amp; High AC Vent</p>
        </div>
        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/50">
          <p className="text-xl md:text-2xl font-black text-lime-400">Dual Shift</p>
          <p className="text-xs text-slate-400 font-medium">5:30 AM &amp; 4:00 PM Slots</p>
        </div>
        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/50">
          <p className="text-xl md:text-2xl font-black text-white">Thermal Sauna</p>
          <p className="text-xs text-slate-400 font-medium">Post-Lift Muscle Recovery</p>
        </div>
      </div>

    </section>
  );
};
