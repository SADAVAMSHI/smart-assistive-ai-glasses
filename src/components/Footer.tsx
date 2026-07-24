import React from 'react';
import { Glasses, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            <Glasses className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-white block">
              Smart Assistive AI Glasses
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Final Year Engineering Presentation Platform © {new Date().getFullYear()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#hero" className="hover:text-white transition-colors">Overview</a>
          <a href="#problem" className="hover:text-white transition-colors">Problem</a>
          <a href="#solution" className="hover:text-white transition-colors">Solution</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#tech-stack" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
