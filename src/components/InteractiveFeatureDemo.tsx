import React, { useState } from 'react';
import { Compass, ShieldAlert, Banknote, Eye, LifeBuoy, Play, CheckCircle2, Volume2, Radio, Activity } from 'lucide-react';
import { FEATURES_DATA } from '../data/projectData';
import { FeatureItem } from '../types';

export const InteractiveFeatureDemo: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('indoor-nav');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLog, setSimLog] = useState<string[]>([]);
  const [simState, setSimState] = useState<string>('Ready for simulation');

  const selectedFeature = FEATURES_DATA.find((f) => f.id === activeFeatureId) || FEATURES_DATA[0];

  const handleRunSimulation = (featureId: string) => {
    setIsSimulating(true);
    setSimLog([]);

    if (featureId === 'indoor-nav') {
      setSimState('Scanning indoor BLE & VIO markers...');
      setTimeout(() => {
        setSimLog((prev) => [...prev, '📍 Position Acquired: Hospital Main Atrium (Floor 1)']);
        setSimState('Calculating optimal obstacle-free route to Pharmacy...');
      }, 600);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '🗣️ Voice Guidance: "In 15 meters, turn slight right past the elevator bank."']);
        setSimState('Navigation active');
      }, 1400);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '✅ Arrived at Pharmacy Counter #2.']);
        setIsSimulating(false);
      }, 2400);
    } else if (featureId === 'obstacle-detection') {
      setSimState('Processing 1080p RGB-D stream at 60 FPS...');
      setTimeout(() => {
        setSimLog((prev) => [...prev, '⚠️ Hazard Detected: Low-hanging hallway sign (2.1m height, 1.4m ahead)']);
        setSimState('Triggering bone-conduction audio cue...');
      }, 600);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '🔊 Audio Alert: "Caution: Low sign overhead on left."']);
        setSimState('Monitoring clearance...');
      }, 1400);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '✅ Hazard cleared safely. Path unobstructed.']);
        setIsSimulating(false);
      }, 2400);
    } else if (featureId === 'currency-recognition') {
      setSimState('Framing banknote in front camera view...');
      setTimeout(() => {
        setSimLog((prev) => [...prev, '💵 Banknote Classification Model: Confidence 99.4%']);
        setSimState('Validating security features...');
      }, 600);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '🗣️ Voice Readout: "$20 US Dollars verified."']);
        setSimState('Transaction confirmed');
      }, 1400);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '✅ Audio validation complete. Zero transaction fraud.']);
        setIsSimulating(false);
      }, 2400);
    } else if (featureId === 'second-eye') {
      setSimState('Monitoring rear-left blind angle (Detachable Camera)...');
      setTimeout(() => {
        setSimLog((prev) => [...prev, '🚨 Blind-side Proximity Event: Person approaching rapidly from left rear']);
        setSimState('Activating left temple vibration motor...');
      }, 600);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '📳 Haptic Pulse: 2 Short Pulses on Left Temple (2.0 Hz)']);
        setSimState('Safety buffer maintained');
      }, 1400);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '✅ Object passed safely. Haptic alert disarmed.']);
        setIsSimulating(false);
      }, 2400);
    } else if (featureId === 'emergency-sos') {
      setSimState('Analyzing 3-Axis Accelerometer & Gyro metrics...');
      setTimeout(() => {
        setSimLog((prev) => [...prev, '🚨 Impact Event Detected: Rapid acceleration change & floor contact']);
        setSimState('Initiating 10-second cancel countdown...');
      }, 600);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '📱 Emergency SMS Broadcasted: "Fall detected at St. Jude Hospital, 2nd Floor Room 204."']);
        setSimState('Caregiver notified');
      }, 1400);

      setTimeout(() => {
        setSimLog((prev) => [...prev, '✅ Emergency Beacon Active. Indoor location pinned.']);
        setIsSimulating(false);
      }, 2400);
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-indigo-600" />;
      case 'Banknote':
        return <Banknote className="w-5 h-5 text-cyan-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-amber-600" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-5 h-5 text-rose-600" />;
      default:
        return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 items-stretch relative z-10">
        {/* Left Column: Feature Selector Buttons */}
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold mb-2 uppercase tracking-widest">
              <Radio className="w-4 h-4 animate-pulse" /> Interactive Simulation Sandbox
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Test System Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Select a core feature to run an interactive operational diagnostic pass.
            </p>
          </div>

          <div className="space-y-2.5">
            {FEATURES_DATA.map((item) => {
              const isSelected = activeFeatureId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveFeatureId(item.id);
                    setSimLog([]);
                    setSimState('Ready for simulation');
                  }}
                  className={`w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold ring-1 ring-blue-400'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-950/80">
                      {getFeatureIcon(item.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{item.title}</span>
                      <span className="text-[11px] opacity-75">{item.badge}</span>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-300' : 'bg-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Feature Simulation Output Screen */}
        <div className="lg:w-2/3 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-cyan-300 border border-blue-500/30 text-xs font-mono font-semibold">
                  {selectedFeature.techHighlight}
                </span>
              </div>
              <button
                onClick={() => handleRunSimulation(selectedFeature.id)}
                disabled={isSimulating}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50"
              >
                <Play className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>{isSimulating ? 'Running Simulation...' : 'Run Real-Time Simulation'}</span>
              </button>
            </div>

            <h4 className="text-lg font-bold text-white mb-1">{selectedFeature.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">{selectedFeature.description}</p>

            <div className="mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Key Benefits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedFeature.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 p-2 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Console Output Screen */}
          <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-xs mt-4">
            <div className="flex items-center justify-between text-slate-500 mb-2 border-b border-slate-800/80 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <Activity className="w-3.5 h-3.5" /> SYSTEM LOGS & VOICE PROMPTS
              </span>
              <span className="text-[10px]">{simState}</span>
            </div>

            <div className="space-y-1.5 min-h-[90px] flex flex-col justify-end">
              {simLog.length === 0 ? (
                <div className="text-slate-500 italic py-4 text-center">
                  Click "Run Real-Time Simulation" above to test spatial voice prompts and sensor metrics.
                </div>
              ) : (
                simLog.map((log, index) => (
                  <div key={index} className="text-slate-200 animate-fadeIn flex items-center gap-2">
                    <Volume2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{log}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
