import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { RotateCw, ZoomIn, ZoomOut, RefreshCw, Sparkles, Layers } from 'lucide-react';
import { GlassesModel } from './GlassesModel';
import { HOTSPOTS_DATA } from '../../data/projectData';
import { Hotspot } from '../../types';

interface GlassesCanvasProps {
  selectedHotspot: Hotspot | null;
  onSelectHotspot: (hotspot: Hotspot | null) => void;
}

export const GlassesCanvas: React.FC<GlassesCanvasProps> = ({
  selectedHotspot,
  onSelectHotspot,
}) => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(1.2);
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(1.2);
      controlsRef.current.update();
    }
  };

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      setAutoRotate(true);
      onSelectHotspot(null);
    }
  };

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] rounded-3xl overflow-hidden glass-panel border border-slate-200/80 shadow-2xl shadow-blue-500/10">
      {/* Canvas Header / Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs font-semibold text-white border border-slate-700/80 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive 3D Assistive Glasses</span>
        </div>

        {/* Control Buttons Toolbar */}
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-md pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
              autoRotate
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
            <span className="hidden sm:inline">Rotate</span>
          </button>

          <button
            onClick={handleZoomIn}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleZoomOut}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={handleResetCamera}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all"
            title="Reset View"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hotspots Direct Quick Selector Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto max-w-full">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 hidden md:inline">
            Hotspots:
          </span>
          {HOTSPOTS_DATA.map((h) => {
            const isSelected = selectedHotspot?.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => {
                  onSelectHotspot(h);
                  setAutoRotate(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: h.color }} />
                <span>{h.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* THREE.JS CANVAS */}
      <Canvas className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
        <PerspectiveCamera makeDefault position={[0, 0, 6.5]} fov={45} />
        
        {/* Smooth Studio Lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={0.8} color="#38bdf8" />
        <pointLight position={[0, 4, 3]} intensity={2.0} color="#38bdf8" />
        <pointLight position={[0, -4, -3]} intensity={1.2} color="#0284c7" />

        {/* 3D Model & Hotspots */}
        <GlassesModel
          autoRotate={autoRotate}
          selectedHotspot={selectedHotspot}
          onSelectHotspot={(h) => {
            onSelectHotspot(h);
            setAutoRotate(false);
          }}
          hoveredHotspotId={hoveredHotspotId}
          setHoveredHotspotId={setHoveredHotspotId}
        />

        {/* Orbit Controls */}
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          minDistance={3.5}
          maxDistance={10}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};
