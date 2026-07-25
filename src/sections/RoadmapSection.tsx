import React from 'react';
import { MapPin, QrCode, ShieldAlert, ShoppingBag, CheckCircle, Clock } from 'lucide-react';
import { ROADMAP_DATA } from '../data/projectData';
import { useScrollAnimation } from '../utils/gsapHelper';

export const RoadmapSection: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1);

  const getPhaseIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      case 'QrCode':
        return <QrCode className="w-6 h-6 text-cyan-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-indigo-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      default:
        return <MapPin className="w-6 h-6 text-blue-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
         
        );
      case 'In Development':
        return (
         
        );
      case 'Planned':
        return (
         
        );
      case 'Future Vision':
        return (
          
        );
      default:
        return null;
    }
  };
  
  return (
    <section id="roadmap" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-3">
            05 • STRATEGIC MILESTONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Product Development Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Layered development: core safety features first, then advanced convenience and personalization.
          </p>
        </div>

        {/* Roadmap Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ROADMAP_DATA.map((phase) => (
            <div
              key={phase.phase}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center font-extrabold text-blue-600 font-mono text-sm shadow-sm">
                    0{phase.phase}
                  </div>
                  {getStatusBadge(phase.status)}
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 inline-block mb-4">
                  {getPhaseIcon(phase.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{phase.title}</h3>
                <span className="text-xs font-mono font-semibold text-blue-600 block mb-3">
                  {phase.timeframe}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{phase.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Key Deliverables
                </span>
                {phase.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
