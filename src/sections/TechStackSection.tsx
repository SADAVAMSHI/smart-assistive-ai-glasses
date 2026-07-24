import React, { useState } from 'react';
import { Camera, Cpu, Brain, Layers, Volume2, Activity, Code2, Wifi, CheckCircle2 } from 'lucide-react';
import { TECH_STACK_DATA } from '../data/projectData';
import { useScrollAnimation } from '../utils/gsapHelper';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const sectionRef = useScrollAnimation(0.1);

  const categories = ['All', 'Hardware', 'AI & Vision', 'Navigation', 'Audio & Haptics', 'Platform'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((item) => item.category === selectedCategory);

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-emerald-600" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-amber-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-rose-600" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-violet-600" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-sky-600" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="tech-stack" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-3">
            04 • HARDWARE & SOFTWARE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Technology Stack & Hardware Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Powered by low-latency edge AI, visual SLAM, and spatial audio synthesis.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredTech.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    {getTechIcon(tech.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{tech.description}</p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 pt-3 border-t border-slate-200/60">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Edge Processing Architecture Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              LOCAL EDGE INFERENCE
            </span>
            <h3 className="text-2xl font-bold mb-2">100% Offline Real-Time Voice & Vision AI</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No cellular connection or cloud subscription required for core safety functions. The on-device neural edge processor guarantees sub-100ms response times inside hospital elevators, underground transit, and remote areas.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 shrink-0">
            <div className="text-center px-3 border-r border-slate-700">
              <span className="text-2xl font-extrabold text-cyan-400 font-mono block">&lt;100ms</span>
              <span className="text-[10px] text-slate-400 uppercase font-mono">Latency</span>
            </div>
            <div className="text-center px-3 border-r border-slate-700">
              <span className="text-2xl font-extrabold text-emerald-400 font-mono block">60 FPS</span>
              <span className="text-[10px] text-slate-400 uppercase font-mono">Depth Scan</span>
            </div>
            <div className="text-center px-3">
              <span className="text-2xl font-extrabold text-blue-400 font-mono block">55g</span>
              <span className="text-[10px] text-slate-400 uppercase font-mono">Weight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
