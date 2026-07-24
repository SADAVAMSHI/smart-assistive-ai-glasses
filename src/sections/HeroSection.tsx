import React, { useState } from 'react';
import { Sparkles, Glasses, ArrowRight, ShieldCheck, Compass, Eye, Play } from 'lucide-react';
import { GlassesCanvas } from '../components/Glasses3D/GlassesCanvas';
import { HotspotOverlay } from '../components/Glasses3D/HotspotOverlay';
import { Hotspot } from '../types';
import { useScrollAnimation } from '../utils/gsapHelper';

export const HeroSection: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const sectionRef = useScrollAnimation(0.1);

  const handleNavigateToFeatures = () => {
    const featuresElem = document.querySelector('#features');
    if (featuresElem) {
      featuresElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Final Year Engineering Project • AI Assistive Wearable</span>
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            AI-Powered Smart <br />
            <span className="gradient-text">Assistive Glasses</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Making indoor spaces accessible for everyone. Helping blind and monocular vision users navigate indoors, verify cash, and receive real-time safety assistance.
          </p>

          {/* Key Stat Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-sm">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>GPS-Free Indoor Navigation</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-sm">
              <Eye className="w-4 h-4 text-cyan-600" />
              <span>Wide-Angle Second Eye</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-sm">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Real-Time Cash Verification</span>
            </div>
          </div>
        </div>

        {/* MAIN ATTRACTION: INTERACTIVE 3D GLASSES MODEL CANVAS */}
        <div className="relative max-w-5xl mx-auto">
          <GlassesCanvas
            selectedHotspot={selectedHotspot}
            onSelectHotspot={setSelectedHotspot}
          />

          {/* Floating Information Panel on Hotspot Select */}
          {selectedHotspot && (
            <div className="absolute top-6 right-6 z-30 max-w-sm w-full">
              <HotspotOverlay
                hotspot={selectedHotspot}
                onClose={() => setSelectedHotspot(null)}
                onNavigateToFeatures={handleNavigateToFeatures}
              />
            </div>
          )}
        </div>

        {/* Hero Section CTA Footer */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href="#problem"
            className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Explore Project Deck</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200/80 shadow-md flex items-center gap-2 transition-all hover:border-slate-300"
          >
            <Play className="w-4 h-4 text-blue-600" />
            <span>Interactive Feature Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
};
