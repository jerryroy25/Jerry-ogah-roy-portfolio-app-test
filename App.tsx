
import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HormoziValueBar from './components/HormoziValueBar';
import Marketplace from './components/Marketplace';
import ProjectGallery from './components/ProjectGallery';
import BrandEngineer from './components/BrandEngineer';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import DesignServices from './components/DesignServices';
import Footer from './components/Footer';
import SystemModal from './components/SystemModal';
import RoadmapModal from './components/RoadmapModal';
import { LucideIcon } from 'lucide-react';

export interface Agent {
  id: string;
  name: string;
  type: string;
  price: string;
  status: string;
  roi: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  workflow?: string[];
  icon: LucideIcon;
  metrics: Record<string, string>;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  workflow?: string[];
  stat: string;
  subStat: string;
  icon: LucideIcon;
  tags: string[];
  type: string;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Agent | Project | null>(null);
  const [modalType, setModalType] = useState<'agent' | 'project'>('agent');
  const [inquirySubject, setInquirySubject] = useState('');
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  const openModal = (data: Agent | Project, type: 'agent' | 'project') => {
    setModalData(data);
    setModalType(type);
    setModalOpen(true);
  };

  const handleStoreInitialize = (agent: Agent) => {
    setInquirySubject(`Inquiry: Initialization of ${agent.name}`);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      
      <Header />
      
      <main>
        <Hero onOpenRoadmap={() => setRoadmapOpen(true)} />
        
        <HormoziValueBar />

        <section id="store">
          <Marketplace 
            onOpenDetails={(data: Agent) => openModal(data, 'agent')} 
            onInitialize={handleStoreInitialize} 
          />
        </section>

        <ProjectGallery onOpenDetails={(data: Project) => openModal(data, 'project')} />
        <BrandEngineer />
        <DesignServices />
        <TechStack />
        <About />
        <Contact prefilledSubject={inquirySubject} />
      </main>

      <Footer />

      <SystemModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        data={modalData} 
        type={modalType} 
      />

      <RoadmapModal 
        isOpen={roadmapOpen}
        onClose={() => setRoadmapOpen(false)}
      />
    </div>
  );
}

export default App;
