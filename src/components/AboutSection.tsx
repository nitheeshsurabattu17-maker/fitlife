import React from 'react';
import { Wind, Shield, Users, CheckCircle, Sparkles, Flame, Trophy } from 'lucide-react';
import { TRAINERS, GYM_INFO } from '../data/gymData';

interface AboutSectionProps {
  onOpenJoinModal: (trainer?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenJoinModal }) => {
  const pillars = [
    {
      title: "Discipline Over Motivation",
      desc: "Motivation fades, but disciplined habits endure. We provide the structure, accountability, and dual shifts that ensure you train consistently week after week."
    },
    {
      title: "Form Before Load",
      desc: "Lifting heavy without proper biomechanics leads to injuries, not muscle. Our coaches supervise your execution so every rep yields maximum growth safely."
    },
    {
      title: "Respectful Community",
      desc: "A zero-ego atmosphere where first-time beginners and advanced competitive lifters train side by side with mutual encouragement and respect."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-[#0a0f1d] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Story & 3rd Floor Advantage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                alt="Fitlife Gym 3rd Floor Arena"
                className="w-full h-96 sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-lime-400 text-slate-950 flex items-center justify-center font-bold">
                    3F
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">The 3rd Floor Advantage</h4>
                    <p className="text-xs text-lime-400">Phoenix Padmavathi Building, Koritepadu</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike subterranean basement gyms plagued by trapped humidity and damp air, our elevated 3rd-floor layout offers cross-ventilation, panoramic city views, and fresh air conditioning.
                </p>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-4 -right-4 bg-slate-900 border border-lime-400/40 p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
              <Trophy className="w-6 h-6 text-lime-400" />
              <div>
                <p className="text-xs font-bold text-white">4.9/5 Rating</p>
                <p className="text-[10px] text-slate-400">1,420+ Verified Members</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider">
              About Fitlife Gym Guntur
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              More than a gym.<br />
              <span className="text-lime-400">It's a lifestyle.</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Founded to raise the benchmark of strength training in Guntur, Fitlife Gym is engineered for lifters, working professionals, athletes, and beginners who demand clean equipment, verified coaching, and genuine progress.
            </p>

            {/* Three Pillars */}
            <div className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={pillar.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-lime-400/20 text-lime-400 text-xs font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 pl-9 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#facilities"
                className="px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Explore Training Zones
              </a>
              <a
                href={`https://wa.me/${GYM_INFO.phonePrimaryRaw}?text=Hi%20Fitlife%20Gym%20Guntur,%20I%20would%20like%20to%20visit%20the%20gym`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
              >
                Schedule Free Visit
              </a>
            </div>
          </div>

        </div>

        {/* Trainers Showcase Section: Guided by Chakri & Jani */}
        <div id="trainers" className="pt-16 border-t border-slate-900">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
              Certified Mentorship
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Guided by <span className="text-lime-400">Chakri &amp; Jani</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base mt-3">
              Celebrated in hundreds of member reviews, our coaches provide daily floor accountability, form supervision, and culturally tailored nutrition blueprints that turn goals into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-slate-900/80 border border-slate-800 hover:border-lime-400/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-800">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-4 right-4 bg-slate-950/90 border border-slate-700 px-3 py-1 rounded-full text-[11px] font-bold text-lime-400">
                      {trainer.experience}
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h4 className="text-2xl font-black uppercase text-white tracking-tight">
                        {trainer.name}
                      </h4>
                      <p className="text-xs font-semibold text-lime-400 uppercase tracking-wider">
                        {trainer.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <blockquote className="text-xs md:text-sm text-slate-300 italic border-l-2 border-lime-400 pl-3 leading-relaxed">
                      "{trainer.quote}"
                    </blockquote>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Coaching Specialties:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {trainer.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="text-xs bg-slate-800 text-slate-200 border border-slate-700/60 px-2.5 py-1 rounded-lg"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenJoinModal(`Personal Training with ${trainer.name}`)}
                    className="w-full py-3 bg-slate-800 hover:bg-lime-400 text-slate-200 hover:text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Train with {trainer.name}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
