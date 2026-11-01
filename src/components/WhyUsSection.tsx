import React from 'react';
import { Star, Shield, Wind, Dumbbell, Clock, Flame, Users, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const WhyUsSection: React.FC = () => {
  const highlights = [
    {
      icon: Star,
      title: "4.9★ Rated Destination",
      desc: "Backed by 1,420+ genuine Google reviews from locals and students in Lakshmipuram & Koritepadu.",
      color: "text-amber-400"
    },
    {
      icon: Users,
      title: "Attentive Coaching",
      desc: "Trainers Chakri & Jani stay active on the training floor every shift to correct postures and load.",
      color: "text-lime-400"
    },
    {
      icon: Wind,
      title: "3rd Floor Fresh Air",
      desc: "Elevated, airy, and high-ceilinged. No damp basement humidity, foul odors, or stuffy air.",
      color: "text-cyan-400"
    },
    {
      icon: Clock,
      title: "Dual Shift Flexibility",
      desc: "Work out in the fresh morning (5:30 AM) or after office hours (4:00 PM – 9:30 PM) seamlessly.",
      color: "text-lime-400"
    },
    {
      icon: Dumbbell,
      title: "Heavy Olympic Hardware",
      desc: "Competition barbells, bumper plates, power cages, and solid steel dumbbells exceeding 40+ kg.",
      color: "text-emerald-400"
    },
    {
      icon: Flame,
      title: "Therapeutic Sauna",
      desc: "A genuine thermal dry sauna to relax tight muscles, accelerate blood circulation, and recharge.",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            The Fitlife Difference
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Why Guntur Chooses <span className="text-lime-400">Fitlife</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            We built Fitlife Gym to be the fitness centre we always wanted to train at ourselves: uncompromising equipment, clean environment, zero intimidation, and authentic coaching.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl bg-slate-800/80 ${item.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1.5 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
