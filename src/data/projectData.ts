import { Hotspot, FeatureItem, TechStackItem, RoadmapPhase, TeamMember, ProblemCardData, SolutionCardData } from '../types';

export const HOTSPOTS_DATA: Hotspot[] = [
  {
    id: 'front-camera',
    name: 'Front Camera Module',
    category: 'Computer Vision',
    position: [-1.45, 0.05, 1.25], // Front frame left lens rim
    shortDesc: '1080p Wide-Angle RGB & Spatial Depth Camera',
    detailedDesc: 'Mounted on the front rim for continuous path analysis, real-time obstacle detection, and banknote framing for currency validation.',
    specs: [
      '1080p @ 60 FPS Low-Light Sensor',
      '120° Ultra-Wide Field of View',
      'Integrated ToF Depth Sensing',
      'Anti-glare Sapphire Glass Lens'
    ],
    icon: 'Camera',
    color: '#2563eb'
  },
  {
    id: 'ai-processor',
    name: 'On-Device AI Processor',
    category: 'Neural Engine',
    position: [1.8, 0.15, -0.2], // Right temple arm
    shortDesc: 'Ultra-low Latency Neural Edge Computing Unit',
    detailedDesc: 'Executes lightweight computer vision and indoor navigation models locally with sub-100ms response times without requiring active internet connectivity.',
    specs: [
      'Quad-Core Edge Neural Processor',
      'Sub-100ms Inference Speed',
      'Offline AI Model Execution',
      'Ultra-low Power Efficiency'
    ],
    icon: 'Cpu',
    color: '#0891b2'
  },
  {
    id: 'audio-mic',
    name: 'Speaker & Microphone System',
    category: 'Spatial Audio & Voice',
    position: [1.2, -0.4, 0.4], // Right lower frame rim
    shortDesc: 'Bone-Conduction Audio Transducers & Dual Mics',
    detailedDesc: 'Delivers clear voice prompts and 3D spatial acoustic alerts without blocking ambient environmental sounds, backed by noise-cancelling mics for voice input.',
    specs: [
      'Open-Ear Bone Conduction',
      'Dual Beamforming Noise-Cancelling Microphones',
      'Directional Spatial Sound Cueing',
      'Whisper-Quiet Ambient Leakage'
    ],
    icon: 'Volume2',
    color: '#4f46e5'
  },
  {
    id: 'rear-camera',
    name: 'Detachable Rear Camera (Second Eye)',
    category: 'Monocular Assist',
    position: [-2.1, 0.25, -2.1], // Magnetic rear camera unit behind right arm
    shortDesc: 'Magnetic Mount Camera for Backside Awareness',
    detailedDesc: 'Eliminates blind spots for monocular vision users. Snap onto the rear glasses band, helmet, jacket, or backpack to receive 360-degree hazard alerts.',
    specs: [
      'Instant Magnetic Snap Connection',
      '140° Backside Blind-Spot Monitoring',
      'Universal Mount (Helmet, Bag, Clothes, Bike)',
      'Direct Wireless Haptic Alert Coupling'
    ],
    icon: 'Eye',
    color: '#d97706'
  }
];

export const PROBLEM_CARDS: ProblemCardData[] = [
  {
    id: 'indoor-nav',
    title: 'Indoor Navigation',
    subtitle: 'GPS Dead Zones & Complex Building Layouts',
    metricLabel: 'GPS Signal Indoors',
    description: 'Standard GPS fails inside multi-story structures like hospitals, shopping malls, and airport terminals where blind individuals face confusing corridor layouts.',
    points: [
      'No indoor satellite GPS connectivity',
      'Complex multi-level building layouts',
      'High spatial anxiety and disorientation risk'
    ],
    icon: 'Compass',
    accentColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'monocular-vision',
    title: 'Monocular Vision Friction',
    subtitle: 'Reduced Field of View & Blind-Side Collisions',
    metricLabel: 'Unseen Danger Sector',
    description: 'Individuals with monocular vision suffer from severe blind spots, impaired depth perception, and frequent collisions with unexpected obstacles on their affected side.',
    points: [
      'Severe blind-side collision exposure',
      'Impaired spatial depth judgement',
      'Increased fall & mobility safety risks'
    ],
    icon: 'EyeOff',
    accentColor: 'from-indigo-600 to-blue-500'
  },
  {
    id: 'cash-fraud',
    title: 'Cash & Transaction Fraud',
    subtitle: 'Vulnerability During Physical Money Exchanges',
    metricLabel: 'Visually Impaired Affected',
    description: 'Paper currency lacks tactile identifiers in many regions, making visually impaired individuals vulnerable to receiving incorrect change or counterfeit notes.',
    points: [
      'Inability to quickly verify banknote denominations',
      'High exposure to transaction fraud at counters',
      'Loss of financial autonomy in daily purchases'
    ],
    icon: 'Banknote',
    accentColor: 'from-cyan-600 to-teal-500'
  }
];

export const SOLUTION_HIGHLIGHTS: SolutionCardData[] = [
  {
    id: 'nav-solution',
    title: 'GPS-Free Indoor Navigation',
    subtitle: 'Step-by-Step Voice Guidance',
    highlights: ['Visual-Inertial Odometry', 'Turn-By-Turn Prompts', 'Context-Aware Maps'],
    description: 'Our proprietary spatial positioning engine fuses camera odometry with inertial sensors to deliver precise indoor routing inside hospitals, malls, and transit hubs.',
    icon: 'Navigation',
    badge: 'Core Engine'
  },
  {
    id: 'second-eye-solution',
    title: 'Wide-Angle Second Eye',
    subtitle: 'Blind-Side Obstacle Detection',
    highlights: ['Detachable Magnetic Unit', '360° Surround Sensing', 'Haptic Vibration Alerts'],
    description: 'A magnetic rear camera unit extends coverage to the user’s blind sector, issuing gentle directional haptic pulses whenever objects approach from behind or the side.',
    icon: 'ShieldAlert',
    badge: 'Patent Feature'
  },
  {
    id: 'currency-solution',
    title: 'AI Currency Verification',
    subtitle: 'Instant Real-Time Note Validation',
    highlights: ['Sub-Second Recognition', 'Audio Confirmation', 'Offline Classification'],
    description: 'Leveraging custom edge AI models, the front camera instantly scans bills held in hand and announces exact denomination values via private bone-conduction audio.',
    icon: 'CheckCircle2',
    badge: 'High Accuracy'
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'indoor-nav',
    title: 'Indoor Navigation',
    subtitle: 'GPS-Free Indoor Positioning',
    description: 'Precise indoor route tracking using visual-inertial odometry. Provides clear turn-by-turn voice directions inside multi-floor venues without relying on external satellite signals.',
    iconName: 'Compass',
    badge: 'Navigation',
    keyBenefits: [
      'Sub-meter indoor positioning accuracy',
      'Automatic floor & elevator detection',
      'Turn-by-turn spatial voice guidance'
    ],
    techHighlight: 'Visual-Inertial Odometry + BLE Mesh Fusion'
  },
  {
    id: 'obstacle-detection',
    title: 'Obstacle Detection',
    subtitle: '3D Spatial Depth Hazard Alerts',
    description: 'Continuous front depth mapping identifies static and moving hazards—such as low-hanging signs, stairs, open doors, and pedestrians—alerting the user in real time.',
    iconName: 'ShieldAlert',
    badge: 'Safety',
    keyBenefits: [
      'Detects head-height hazards and ground steps',
      'Predictive movement collision warnings',
      'Adaptive voice & haptic alert intensity'
    ],
    techHighlight: 'YOLOv8-Nano Depth Engine @ 60 FPS'
  },
  {
    id: 'currency-recognition',
    title: 'Currency Recognition',
    subtitle: 'Instant Paper Money Validation',
    description: 'Point paper currency at the front camera to receive immediate spoken verification of bill values, preventing transaction fraud during daily commerce.',
    iconName: 'Banknote',
    badge: 'Autonomy',
    keyBenefits: [
      'Multi-currency banknote support',
      'Handles creased, folded, or low-light cash',
      'Private bone-conduction voice readouts'
    ],
    techHighlight: 'Edge-optimized CNN Classification Model'
  },
  {
    id: 'second-eye',
    title: 'Second-Eye Assistance',
    subtitle: 'Magnetic Rear Camera Coverage',
    description: 'Specially engineered for monocular vision users. The magnetic camera snaps onto glasses, helmets, or backpacks to cover blind angles and issue haptic vibration warnings.',
    iconName: 'Eye',
    badge: 'Monocular Assist',
    keyBenefits: [
      'Removes blind-side collision risks completely',
      'Universal magnetic snap attachment',
      'Directional left/right haptic feedback'
    ],
    techHighlight: 'Magnetic Pogo Coupling + Directional Haptics'
  },
  {
    id: 'emergency-sos',
    title: 'Emergency SOS',
    subtitle: 'Automated Fall & Danger Response',
    description: 'Integrated IMU sensors detect sudden falls or severe impacts, automatically contacting pre-configured caregivers with exact indoor coordinates and live location feeds.',
    iconName: 'LifeBuoy',
    badge: 'Security',
    keyBenefits: [
      'Automated impact and fall detection',
      '10-second cancel countdown via voice',
      'SMS & voice call broadcasting to emergency contacts'
    ],
    techHighlight: '3-Axis Gyro/Accelerometer Sensor Fusion'
  }
];

export const TECH_STACK_DATA: TechStackItem[] = [
  {
    name: 'Dual RGB-D Camera Module',
    category: 'Hardware',
    description: '1080p ultra-wide camera with time-of-flight depth sensing for front spatial mapping.',
    icon: 'Camera',
    badge: 'Hardware'
  },
  {
    name: 'Neural Edge Processor',
    category: 'Hardware',
    description: 'Dedicated low-power NPU running computer vision models locally on-device.',
    icon: 'Cpu',
    badge: 'Hardware'
  },
  {
    name: 'YOLOv8-Nano & Custom CNNs',
    category: 'AI & Vision',
    description: 'Ultra-lightweight neural network models tuned for sub-100ms object & currency recognition.',
    icon: 'Brain',
    badge: 'AI & Vision'
  },
  {
    name: 'Visual-Inertial Odometry',
    category: 'Navigation',
    description: 'SLAM algorithm fusing camera frames and 6-axis IMU data for GPS-free indoor tracking.',
    icon: 'Layers',
    badge: 'Navigation'
  },
  {
    name: 'Bone-Conduction Spatial Audio',
    category: 'Audio & Haptics',
    description: 'Open-ear acoustic transducers delivering 3D sound directions without blocking ambient noise.',
    icon: 'Volume2',
    badge: 'Audio & Haptics'
  },
  {
    name: 'Dual LRM Haptic Motors',
    category: 'Audio & Haptics',
    description: 'Precision linear resonant actuators on left/right temples for directional vibration alerts.',
    icon: 'Activity',
    badge: 'Audio & Haptics'
  },
  {
    name: 'React 19 + Three.js Platform',
    category: 'Platform',
    description: 'Modern WebGL dashboard interface for presentation, configuration, and diagnostics.',
    icon: 'Code2',
    badge: 'Software'
  },
  {
    name: 'BLE 5.2 Mesh & Cloud Sync',
    category: 'Platform',
    description: 'Low-energy Bluetooth for phone companion sync and indoor beacon triangulation.',
    icon: 'Wifi',
    badge: 'Connectivity'
  }
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: 1,
    title: 'Indoor Mapping & Route Graph',
    timeframe: 'Q1 - Q2 2026',
    status: 'Completed',
    description: 'Core visual-inertial odometry system development and accurate indoor venue graph generation.',
    features: [
      'Sub-meter indoor positioning pipeline',
      'Venue mapping authoring tool',
      'Turn-by-turn voice audio engine'
    ],
    icon: 'MapPin'
  },
  {
    phase: 2,
    title: 'QR & Signage Recognition',
    timeframe: 'Q3 2026',
    status: 'In Development',
    description: 'Integrating automated text OCR and indoor signage reading for door numbers and room labels.',
    features: [
      'Real-time door plaque & sign OCR',
      'QR beacon scanning for instant calibration',
      'Multi-language audio translation'
    ],
    icon: 'QrCode'
  },
  {
    phase: 3,
    title: 'Emergency SOS & Fall Alerts',
    timeframe: 'Q4 2026',
    status: 'Planned',
    description: 'Advanced safety features including fall detection algorithms and immediate emergency broadcasting.',
    features: [
      '3-Axis IMU impact classification',
      'Caregiver SMS alert with indoor pin',
      'Acoustic beacon panic siren'
    ],
    icon: 'ShieldAlert'
  },
  {
    phase: 4,
    title: 'Shopping & AI Personal Assistant',
    timeframe: 'Q1 2027',
    status: 'Future Vision',
    description: 'Generative AI assistant helping users identify shelf items, read nutrition tags, and shop independently.',
    features: [
      'Product barcode & label reader',
      'Conversational AI shopping guide',
      'Personalized route preferences'
    ],
    icon: 'ShoppingBag'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Engineering Lead',
    role: 'Embedded Systems & AI Specialist',
    department: 'Final Year Engineering Project',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    contribution: 'Designed the dual-camera hardware architecture, magnetic pogo coupling, and neural inference pipeline.'
  },
  {
    name: 'Computer Vision Engineer',
    role: 'Navigation & SLAM Architect',
    department: 'Final Year Engineering Project',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    contribution: 'Developed the Visual-Inertial Odometry positioning engine and real-time banknote classifier.'
  },
  {
    name: 'UI/UX & Web Developer',
    role: 'Full Stack & 3D Web Visualizer',
    department: 'Final Year Engineering Project',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
    contribution: 'Created the interactive 3D WebGL presentation platform, GSAP scroll animations, and user dashboard.'
  }
];

export const UNIQUE_COMPARISON = [
  { feature: 'Navigation Domain', existing: 'Outdoor GPS only', ours: 'Indoor AI Navigation (No GPS required)' },
  { feature: 'Hardware Form Factor', existing: 'Multiple separate bulky devices', ours: 'All-in-One Ergonomic Wearable' },
  { feature: 'Blind-Side Safety', existing: 'No monocular-side protection', ours: 'Wide-Angle Detachable Rear Second-Eye' },
  { feature: 'Financial Autonomy', existing: 'Manual cash apps or handheld scanners', ours: 'Real-Time Spoken AI Currency Verification' },
  { feature: 'Connectivity Needs', existing: 'Requires constant cloud internet', ours: 'On-Device Edge AI (Works 100% Offline)' }
];
