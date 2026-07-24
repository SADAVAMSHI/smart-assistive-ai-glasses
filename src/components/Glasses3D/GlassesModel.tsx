import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { HOTSPOTS_DATA } from '../../data/projectData';
import { Hotspot } from '../../types';

interface GlassesModelProps {
  autoRotate: boolean;
  selectedHotspot: Hotspot | null;
  onSelectHotspot: (hotspot: Hotspot) => void;
  hoveredHotspotId: string | null;
  setHoveredHotspotId: (id: string | null) => void;
}

export const GlassesModel: React.FC<GlassesModelProps> = ({
  autoRotate,
  selectedHotspot,
  onSelectHotspot,
  hoveredHotspotId,
  setHoveredHotspotId,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const glowRingRef = useRef<THREE.Mesh>(null);

  // Slow float & rotation in 3D scene
  useFrame((state, delta) => {
    if (groupRef.current && autoRotate && !selectedHotspot) {
      groupRef.current.rotation.y += delta * 0.25;
    }
    if (glowRingRef.current) {
      glowRingRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Floating Sparkles & Particles */}
      <Sparkles count={60} scale={8} size={3} speed={0.4} opacity={0.6} color="#38bdf8" />

      {/* Holographic Aura Ring */}
      <mesh ref={glowRingRef} rotation={[Math.PI / 2.5, 0, 0]} position={[0, -0.1, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#0284c7" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Main Glasses Frame Group */}
      <group scale={[0.85, 0.85, 0.85]}>
        {/* ==================== LEFT EYE RIM & LENS ==================== */}
        <group position={[-1.3, 0, 0]}>
          {/* Outer Lens Frame (Rim) */}
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[0.95, 0.12, 16, 32]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Beveled Top Eyebrow Bar */}
          <mesh position={[0, 0.8, 0]} rotation={[0, 0, -0.05]}>
            <boxGeometry args={[1.8, 0.18, 0.25]} />
            <meshStandardMaterial color="#1e293b" roughness={0.25} metalness={0.85} />
          </mesh>
          {/* Blue Polarized Lens */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.9, 0.9, 0.04, 32]} />
            <meshPhysicalMaterial
              color="#0284c7"
              transparent
              opacity={0.65}
              roughness={0.05}
              metalness={0.1}
              transmission={0.6}
              reflectivity={0.9}
            />
          </mesh>
        </group>

        {/* ==================== RIGHT EYE RIM & LENS ==================== */}
        <group position={[1.3, 0, 0]}>
          {/* Outer Lens Frame (Rim) */}
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[0.95, 0.12, 16, 32]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Beveled Top Eyebrow Bar */}
          <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.05]}>
            <boxGeometry args={[1.8, 0.18, 0.25]} />
            <meshStandardMaterial color="#1e293b" roughness={0.25} metalness={0.85} />
          </mesh>
          {/* Blue Polarized Lens */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.9, 0.9, 0.04, 32]} />
            <meshPhysicalMaterial
              color="#0284c7"
              transparent
              opacity={0.65}
              roughness={0.05}
              metalness={0.1}
              transmission={0.6}
              reflectivity={0.9}
            />
          </mesh>
        </group>

        {/* ==================== NOSE BRIDGE & PADS ==================== */}
        {/* Center Bridge */}
        <mesh position={[0, 0.45, 0.02]}>
          <boxGeometry args={[0.8, 0.12, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Left Nose Pad Mount */}
        <mesh position={[-0.38, -0.2, 0.1]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#64748b" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Right Nose Pad Mount */}
        <mesh position={[0.38, -0.2, 0.1]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#64748b" roughness={0.1} metalness={0.9} />
        </mesh>

        {/* ==================== LEFT TEMPLE & ARM ==================== */}
        <group position={[-2.2, 0.3, -1.1]} rotation={[0, -0.15, 0]}>
          {/* Hinge Joint */}
          <mesh position={[0, 0, 1.1]}>
            <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Temple Arm */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.18, 0.28, 2.2]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Ear Curve Tip */}
          <mesh position={[0, -0.25, -1.2]} rotation={[0.4, 0, 0]}>
            <boxGeometry args={[0.16, 0.22, 0.8]} />
            <meshStandardMaterial color="#1e293b" roughness={0.5} />
          </mesh>
        </group>

        {/* ==================== RIGHT TEMPLE & ARM ==================== */}
        <group position={[2.2, 0.3, -1.1]} rotation={[0, 0.15, 0]}>
          {/* Hinge Joint */}
          <mesh position={[0, 0, 1.1]}>
            <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Temple Arm Body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.22, 0.32, 2.2]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* AI Processor Housing Block */}
          <mesh position={[0.05, 0, 0.2]}>
            <boxGeometry args={[0.18, 0.34, 0.9]} />
            <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Orange/Blue LED Light Strip on Right Arm */}
          <mesh position={[0.15, 0.02, 0.2]}>
            <boxGeometry args={[0.02, 0.08, 0.7]} />
            <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2.5} />
          </mesh>
          {/* Ear Curve Tip */}
          <mesh position={[0, -0.25, -1.2]} rotation={[0.4, 0, 0]}>
            <boxGeometry args={[0.16, 0.22, 0.8]} />
            <meshStandardMaterial color="#1e293b" roughness={0.5} />
          </mesh>
        </group>

        {/* ==================== FRONT CAMERA MODULE ==================== */}
        <group position={[-1.75, 0.4, 0.2]}>
          {/* Camera Housing Box */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.35]} />
            <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Camera Outer Lens Ring */}
          <mesh position={[0, 0, 0.19]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.11, 0.11, 0.05, 24]} />
            <meshStandardMaterial color="#0284c7" roughness={0.1} metalness={0.95} />
          </mesh>
          {/* Camera Optical Lens Center */}
          <mesh position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.07, 0.07, 0.02, 24]} />
            <meshStandardMaterial color="#0369a1" emissive="#0284c7" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* ==================== SPEAKER & MICROPHONE MESH ==================== */}
        <group position={[1.4, -0.45, 0.1]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 0.2]} />
            <meshStandardMaterial color="#334155" roughness={0.3} wireframe />
          </mesh>
          {/* Micro Acoustic Grille dots */}
          <mesh position={[0, -0.06, 0]}>
            <boxGeometry args={[0.4, 0.02, 0.15]} />
            <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* ==================== DETACHABLE REAR CAMERA (SECOND EYE) ==================== */}
        <group position={[-2.4, 0.3, -2.4]}>
          {/* Magnetic Base Mount */}
          <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.25, 0.1, 24]} />
            <meshStandardMaterial color="#d97706" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Camera Body Capsule */}
          <mesh position={[0, 0, -0.1]}>
            <boxGeometry args={[0.42, 0.42, 0.65]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.85} />
          </mesh>
          {/* Rear Camera Lens */}
          <mesh position={[0, 0, -0.45]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.08, 24]} />
            <meshStandardMaterial color="#2563eb" emissive="#3b82f6" emissiveIntensity={1.2} />
          </mesh>
          {/* Magnetic Wireless Energy Arc to Glasses Arm */}
          <mesh position={[0.2, 0, 0.8]} rotation={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 0.8, 8]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
          </mesh>
        </group>

        {/* BRAND LOGO TEXT "VISIONX AI" ON RIGHT TEMPLE */}
        <mesh position={[2.32, 0.3, -0.8]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.6, 0.15]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* ==================== CLICKABLE 3D HOTSPOTS ==================== */}
      {HOTSPOTS_DATA.map((hotspot) => {
        const isSelected = selectedHotspot?.id === hotspot.id;
        const isHovered = hoveredHotspotId === hotspot.id;

        return (
          <group key={hotspot.id} position={hotspot.position}>
            {/* 3D Pulsing Ring Mesh */}
            <mesh>
              <sphereGeometry args={[isSelected ? 0.18 : isHovered ? 0.15 : 0.12, 16, 16]} />
              <meshBasicMaterial
                color={hotspot.color}
                transparent
                opacity={isSelected ? 0.9 : isHovered ? 0.8 : 0.6}
              />
            </mesh>

            {/* HTML Marker Tag */}
            <Html distanceFactor={8} position={[0, 0, 0]}>
              <div
                className="relative group cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectHotspot(hotspot);
                }}
                onMouseEnter={() => setHoveredHotspotId(hotspot.id)}
                onMouseLeave={() => setHoveredHotspotId(null)}
              >
                {/* Glowing Outer Ripple */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                    isSelected
                      ? 'bg-blue-600 text-white ring-4 ring-blue-400/50 scale-125'
                      : isHovered
                      ? 'bg-blue-500 text-white ring-2 ring-cyan-300 scale-110'
                      : 'bg-slate-900/90 text-blue-400 border border-blue-400/40 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping absolute" />
                  <span className="w-2 h-2 rounded-full bg-white relative z-10" />
                </div>

                {/* Floating Hotspot Tag Label */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-10 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-semibold shadow-xl border transition-all duration-300 pointer-events-none ${
                    isSelected || isHovered
                      ? 'bg-slate-900 text-white border-blue-400/60 opacity-100 translate-y-0 scale-100'
                      : 'bg-slate-900/80 text-slate-200 border-slate-700/80 opacity-90 scale-95'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{hotspot.name}</span>
                  </div>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};
