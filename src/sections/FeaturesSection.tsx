import React from 'react';
import { Compass, ShieldAlert, Banknote, Eye, LifeBuoy, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURES_DATA } from '../data/projectData';
import { InteractiveFeatureDemo } from '../components/InteractiveFeatureDemo';
import { useScrollAnimation } from '../utils/gsapHelper';

export const FeaturesSection: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-indigo-600" />;
      case 'Banknote':
        return <Banknote className="w-6 h-6 text-cyan-600" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-amber-600" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-rose-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="features" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-3">
            03 • CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Five Pillars of Assistive Intelligence
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Engineered specifically to solve high-frequency daily mobility and transaction obstacles.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm">
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">{feature.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{feature.description}</p>
              </div>

              <div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-mono mb-4">
                  <span className="text-blue-600 font-bold block mb-0.5">ENGINE SPEC:</span>
                  {feature.techHighlight}
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {feature.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Feature Simulation Sandbox Component */}
        <InteractiveFeatureDemo />
      </div>
    </section>
  );
};
