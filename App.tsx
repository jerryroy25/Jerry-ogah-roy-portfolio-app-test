
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HormoziValueBar from './components/HormoziValueBar';
import Store from './components/Store';
import ProjectGallery from './components/ProjectGallery';
import BrandEngineer from './components/BrandEngineer';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import DesignServices from './components/DesignServices';
import SystemModal from './components/SystemModal';
import RoadmapModal from './components/RoadmapModal';
import { Github, Linkedin, Palette, Instagram, Facebook, Twitter, Terminal as TerminalIcon, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Agent {
  id: string;
  name: string;
  type: string;
  price: string;
  status: string;
  description: string;
  icon: LucideIcon;
  metrics: Record<string, string>;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  stat: string;
  subStat: string;
  icon: LucideIcon;
  tags: string[];
  type: string;
}

const App: React.FC = () => {
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

  const socialLinks = [
    { icon: Github, link: "https://github.com/jerryroy25", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com/in/jerryogahroy", label: "LinkedIn" },
    { icon: Palette, link: "https://www.behance.net/jerryogahroy", label: "Behance" },
    { icon: Instagram, link: "https://www.instagram.com/jerry_ogah_roy", label: "Instagram" },
    { icon: Facebook, link: "https://www.facebook.com/share/1FBFVmXzJF/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Twitter, link: "https://x.com/jerryroy25", label: "X" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      
      <Header />
      
      <main className="relative z-10">
        <Hero onOpenRoadmap={() => setRoadmapOpen(true)} />
        <HormoziValueBar />
        <Store onOpenDetails={(data: Agent) => openModal(data, 'agent')} onInitialize={handleStoreInitialize} />
        <ProjectGallery onOpenDetails={(data: Project) => openModal(data, 'project')} />
        <BrandEngineer />
        <DesignServices />
        <TechStack />
        <About />
        <Contact prefilledSubject={inquirySubject} />
      </main>
      
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.02]">
          <span className="font-mono text-[10vw] font-black leading-none text-cyan-400">CONNECT_PROTOCOL</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 group mb-2">
                <p className="font-black text-2xl text-slate-200 uppercase tracking-tighter">
                  JEROY<span className="text-cyan-400">.SOLUTIONS</span>
                </p>
              </div>
              <a 
                href="https://github.com/jerryroy25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-sm text-[10px] uppercase font-bold tracking-widest text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group"
              >
                <TerminalIcon className="w-3 h-3" />
                The Source Code
              </a>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                show: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-wrap justify-center gap-4 md:gap-8"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="p-4 bg-slate-900/50 border border-slate-800 rounded-full text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-900 transition-all shadow-inner"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            <div className="pt-8 border-t border-slate-900/50 w-full flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
                © {new Date().getFullYear()} JERRY OGAH ROY // ALL SYSTEMS OPERATIONAL
              </p>
              <div className="flex gap-6 text-[10px] uppercase font-black tracking-widest text-slate-500">
                <a href="#store" className="hover:text-cyan-400 transition-colors">Marketplace</a>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Case Studies</a>
                <a href="#tech" className="hover:text-cyan-400 transition-colors">Engine Room</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
};

export default App;
