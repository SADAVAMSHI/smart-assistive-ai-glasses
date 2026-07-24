import React from 'react';
import { X, CheckCircle, Camera, Cpu, Volume2, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import { Hotspot } from '../../types';

interface HotspotOverlayProps {
  hotspot: Hotspot | null;
  onClose: () => void;
  onNavigateToFeatures: () => void;
}

export const HotspotOverlay: React.FC<HotspotOverlayProps> = ({
  hotspot,
  onClose,
  onNavigateToFeatures,
}) => {
  if (!hotspot) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-500" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-indigo-500" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-amber-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="glass-panel-dark text-white rounded-3xl p-6 shadow-2xl border border-slate-700/80 max-w-md w-full animate-float transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            {renderIcon(hotspot.icon)}
          </div>
          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
              {hotspot.category}
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">{hotspot.name}</h3>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <p className="text-sm text-slate-300 mb-4 leading-relaxed font-normal">
        {hotspot.detailedDesc}
      </p>

      {/* Hardware / Tech Specs List */}
      <div className="space-y-2 mb-5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
          Key Technical Specifications
        </span>
        {hotspot.specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{spec}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-400">PDF Document Reference Verified</span>
        <button
          onClick={onNavigateToFeatures}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg shadow-blue-600/30"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
