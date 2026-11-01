import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TrainersSection } from './components/TrainersSection';
import { MembershipSection } from './components/MembershipSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('Annual Elite');
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenJoinModal = (plan?: string) => {
    if (plan) {
      setSelectedPlanForModal(plan);
    }
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  // ScrollSpy to highlight navigation active state
  useEffect(() => {
    const sectionIds = ['home', 'features', 'about', 'facilities', 'trainers', 'membership', 'gallery', 'why-us', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-lime-400 selection:text-slate-950">
      {/* Floating Capsule Header */}
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        activeSection={activeSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onOpenJoinModal={handleOpenJoinModal} />
        <FeaturesSection onOpenJoinModal={handleOpenJoinModal} />
        <AboutSection onOpenJoinModal={handleOpenJoinModal} />
        <FacilitiesSection onOpenJoinModal={handleOpenJoinModal} />
        <TrainersSection onOpenJoinModal={handleOpenJoinModal} />
        <MembershipSection onOpenJoinModal={handleOpenJoinModal} />
        <GallerySection />
        <WhyUsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenJoinModal={handleOpenJoinModal} />

      {/* Global Interactive Join / Membership Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        defaultPlan={selectedPlanForModal}
      />
    </div>
  );
};

export default App;
