import React, { useState } from 'react';
import { Navigation, ShieldAlert, CheckCircle2, Sparkles, ArrowRight, Check, X } from 'lucide-react';
import { SOLUTION_HIGHLIGHTS, UNIQUE_COMPARISON } from '../data/projectData';
import { useScrollAnimation } from '../utils/gsapHelper';

export const SolutionSection: React.FC = () => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('nav-solution');
  const sectionRef = useScrollAnimation(0.1);

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-indigo-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-cyan-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="solution" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-3">
            02 • INNOVATIVE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            One Smart Wearable. Three Powerful Solutions.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A unified hardware-software ecosystem engineered for seamless daily independence.
          </p>
        </div>

        {/* 3 Solution Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SOLUTION_HIGHLIGHTS.map((solution) => {
            const isSelected = activeSolutionId === solution.id;
            return (
              <div
                key={solution.id}
                onClick={() => setActiveSolutionId(solution.id)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-50/80 to-slate-50 border-blue-500 shadow-2xl shadow-blue-500/15 scale-[1.02]'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-lg hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      {getSolutionIcon(solution.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono">
                      {solution.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{solution.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">{solution.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{solution.description}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  {solution.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* WHAT MAKES US UNIQUE COMPARISON TABLE (PDF Page 4) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                COMPETITIVE ADVANTAGE
              </span>
              <h3 className="text-2xl font-bold text-white">What Makes Us Unique?</h3>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-300 font-medium">Outcomes:</span>
              <span className="text-xs font-bold text-cyan-300">Independence • Safety • Transaction Security</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-mono text-slate-400 uppercase">
                  <th className="py-3 px-4">Feature Dimension</th>
                  <th className="py-3 px-4 text-slate-400">Existing Solutions</th>
                  <th className="py-3 px-4 text-cyan-400 font-bold">Our Smart Assistive Glasses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {UNIQUE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-200">{row.feature}</td>
                    <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{row.existing}</span>
                    </td>
                    <td className="py-4 px-4 text-cyan-300 font-semibold">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.ours}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
