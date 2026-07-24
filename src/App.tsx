import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TechStackSection } from './sections/TechStackSection';
import { RoadmapSection } from './sections/RoadmapSection';
import { TeamContactSection } from './sections/TeamContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'features', 'tech-stack', 'roadmap', 'team-contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Initial Loading Screen */}
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          {/* Top Sticky Navigation */}
          <Navbar activeSection={activeSection} />

          {/* Main Presentation Sections */}
          <main>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <TechStackSection />
            <RoadmapSection />
            <TeamContactSection />
          </main>

          {/* Site Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
