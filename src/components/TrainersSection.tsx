import React from 'react';
import { TRAINERS } from '../data/gymData';

interface TrainersSectionProps {
  onOpenJoinModal: (trainer?: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="trainers" className="py-24 px-4 md:px-8 bg-[#080c14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            Certified Mentorship
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Guided by <span className="text-lime-400">Chakri &amp; Jani</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            Celebrated in hundreds of member reviews, our coaches provide daily floor accountability, form supervision, and culturally tailored nutrition blueprints that turn goals into reality.
          </p>
        </div>

        {/* Trainers Grid */}
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
                    <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                      {trainer.name}
                    </h3>
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
    </section>
  );
};
