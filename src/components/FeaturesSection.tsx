import React from 'react';
import { Dumbbell, Bike, Flame, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface FeaturesSectionProps {
  onOpenJoinModal: (plan?: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenJoinModal }) => {
  const features = [
    {
      icon: Dumbbell,
      title: "FITNESS & GYM",
      subtitle: "Strength & Power",
      description: "State-of-the-art Olympic barbell stations, heavy-duty power cages, and cast dumbbells up to 40+ kg for peak hypertrophy and bone density.",
      badge: "Free Weights & Racks"
    },
    {
      icon: Bike,
      title: "CYCLING & CARDIO",
      subtitle: "Heart & Stamina",
      description: "High-incline commercial treadmills and magnetic resistance spin cycles overlooking Koritepadu Main Road for intense endurance training.",
      badge: "Commercial Grade"
    },
    {
      icon: Flame,
      title: "KETTLEBELL & CROSSFIT",
      subtitle: "Functional Torque",
      description: "Ballistic kettlebell swings, heavy double battle ropes, plyometric boxes, and medicine slam balls for explosive athletic conditioning.",
      badge: "High Intensity"
    },
    {
      icon: Award,
      title: "TRAINING CLASS",
      subtitle: "Expert Mentorship",
      description: "Guided group workouts, Zumba fitness, boxing bag combinations, and form-focused coaching designed to break through plateaus.",
      badge: "Coached by Chakri & Jani"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
              Core Training Advantages
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              The Features <br className="hidden sm:inline" />
              <span className="text-lime-400">We Offer For You</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-400 max-w-md">
            Whether your goal is shredding body fat, building dense muscle mass, or increasing functional mobility, our dedicated training zones deliver verified results.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-lime-400/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full">
                      {feat.badge}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-lime-400/80 mb-1">
                    {feat.subtitle}
                  </p>
                  <h3 className="text-xl font-black uppercase text-white mb-3 tracking-wide">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onOpenJoinModal(feat.title)}
                    className="text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-lime-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <CheckCircle2 className="w-4 h-4 text-slate-600 group-hover:text-lime-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
