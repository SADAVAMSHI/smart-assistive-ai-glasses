import React, { useEffect, useState } from 'react';
import { Glasses, Sparkles, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onLoaded, 600);
          }, 300);
          return 100;
        }
        // Simulate progressive loading
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Animated Icon Ring */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-3xl bg-slate-900/80 border border-slate-800 flex items-center justify-center shadow-2xl shadow-blue-500/20 backdrop-blur-xl">
            <Glasses className="w-12 h-12 text-blue-400 animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Smart Assistive AI Glasses
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-8 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400 inline" /> Initializing 3D Canvas & AI Neural Models
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/90 rounded-full h-2.5 p-0.5 border border-slate-800 overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-blue-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="w-full flex justify-between items-center text-xs text-slate-400 font-mono">
          <span>Loading Assets</span>
          <span className="text-cyan-400 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
