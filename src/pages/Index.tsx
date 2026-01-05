import { useState, useCallback } from 'react';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <StarBackground />
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
      
      <main className="relative z-10">
        <HeroSection onNavigate={scrollToSection} />
        <ProjectsSection />
        <AboutSection />
        <ResumeSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
