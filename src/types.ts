export interface Hotspot {
  id: string;
  name: string;
  category: string;
  position: [number, number, number]; // [x, y, z] for 3D anchor
  shortDesc: string;
  detailedDesc: string;
  specs: string[];
  icon: string;
  color: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  keyBenefits: string[];
  techHighlight: string;
}

export interface TechStackItem {
  name: string;
  category: 'Hardware' | 'AI & Vision' | 'Navigation' | 'Audio & Haptics' | 'Platform';
  description: string;
  icon: string;
  badge: string;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  timeframe: string;
  status: 'Completed' | 'In Development' | 'Planned' | 'Future Vision';
  description: string;
  features: string[];
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  avatar: string;
  contribution: string;
  linkedin?: string;
  github?: string;
}

export interface ProblemCardData {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  points: string[];
  icon: string;
  accentColor: string;
}

export interface SolutionCardData {
  id: string;
  title: string;
  subtitle: string;
  highlights: string[];
  description: string;
  icon: string;
  badge: string;
}
