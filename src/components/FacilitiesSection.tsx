import React, { useState } from 'react';
import { FACILITY_ZONES, GYM_INFO } from '../data/gymData';
import { Clock, CheckCircle2, Calendar, Sparkles, Flame, Shield, ArrowUpRight } from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenJoinModal: (zoneTitle?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenJoinModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'strength' | 'cardio' | 'functional' | 'recovery'>('all');

  const filteredZones = FACILITY_ZONES.filter((zone) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'strength') return zone.id === 'zone-strength' || zone.id === 'zone-coaching';
    if (activeTab === 'cardio') return zone.id === 'zone-cardio' || zone.id === 'zone-group';
    if (activeTab === 'functional') return zone.id === 'zone-functional' || zone.id === 'zone-group';
    if (activeTab === 'recovery') return zone.id === 'zone-recovery';
    return true;
  });

  return (
    <section id="facilities" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
              Engineered For Peak Performance
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Training &amp; Facilities <br className="hidden sm:inline" />
              <span className="text-lime-400">Verified Equipment Zones</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Zones' },
              { id: 'strength', label: 'Strength & Weights' },
              { id: 'cardio', label: 'Cardio Deck' },
              { id: 'functional', label: 'CrossFit & Functional' },
              { id: 'recovery', label: 'Sauna & Recovery' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-lime-400/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Zone Photo */}
                <div className="relative h-60 overflow-hidden bg-slate-950">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-full text-[11px] font-black text-lime-400">
                    ZONE {zone.number}
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    {zone.tag}
                  </div>
                </div>

                {/* Zone Details */}
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase text-white mb-2 tracking-wide group-hover:text-lime-400 transition-colors">
                    {zone.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {zone.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Key Zone Equipment:
                    </p>
                    {zone.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenJoinModal(zone.title)}
                  className="w-full py-2.5 bg-slate-800 hover:bg-lime-400 text-slate-200 hover:text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire for {zone.tag.split('&')[0].trim()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Training Schedule Box */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0c1324] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Operating Slots</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Daily Training Schedule
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              We operate dual shifts to ensure comfortable floor capacity, excellent air flow, and dedicated personal coach availability on the floor.
            </p>
          </div>

          {/* Schedule Table / Grid */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Morning Shift</th>
                  <th className="py-3 px-4">Evening Shift</th>
                  <th className="py-3 px-4">Trainer Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">Monday – Friday</td>
                  <td className="py-4 px-4 font-semibold text-lime-400">5:30 AM – 12:00 PM</td>
                  <td className="py-4 px-4 font-semibold text-lime-400">4:00 PM – 9:30 PM</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Coaches on Floor
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">Saturday</td>
                  <td className="py-4 px-4 font-semibold text-lime-400">5:30 AM – 12:00 PM</td>
                  <td className="py-4 px-4 font-semibold text-lime-400">4:00 PM – 9:30 PM</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Coaches on Floor
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">Sunday</td>
                  <td className="py-4 px-4 font-semibold text-amber-400">6:00 AM – 11:00 AM</td>
                  <td className="py-4 px-4 text-slate-400 italic">Closed (Maintenance &amp; Deep Clean)</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold">
                      Open Floor Access
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              * Locker rooms and shower recovery are open during both shifts.
            </p>
            <button
              onClick={() => onOpenJoinModal('Schedule Tour')}
              className="px-6 py-2.5 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
            >
              Book a Floor Visit
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
