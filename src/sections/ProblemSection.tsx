import React from 'react';
import { Compass, EyeOff, Banknote, AlertTriangle } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/projectData';
import { useScrollAnimation } from '../utils/gsapHelper';

export const ProblemSection: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1);

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-600" />;
      case 'EyeOff':
        return <EyeOff className="w-6 h-6 text-indigo-600" />;
      case 'Banknote':
        return <Banknote className="w-6 h-6 text-cyan-600" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="problem" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-3">
            01 • REAL-WORLD CHALLENGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Problem — Real, Everyday Friction
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Current assistive tools miss critical indoor, monocular, and financial safety needs.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                    {getProblemIcon(card.icon)}
                  </div>
                  <span className="text-2xl font-extrabold text-slate-900 font-mono">
                    {card.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-xs font-semibold text-blue-600 mb-4">{card.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{card.description}</p>
              </div>

              {/* Point Bullet List */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {card.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout Box based on PDF Page 2 */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 text-white border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Market Gap in Current Assistive Tools</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Existing solutions (white canes, guide dogs, smartphone apps like Seeing AI) only address isolated portions of these needs, leaving a large unmet market gap for an all-in-one wearable.
              </p>
            </div>
          </div>
          <a
            href="#solution"
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold whitespace-nowrap shadow-lg shadow-blue-600/30 transition-all shrink-0"
          >
            See Our Solution
          </a>
        </div>
      </div>
    </section>
  );
};
