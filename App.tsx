
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofBar from './components/ProofBar';
import Store from './components/Store';
import ProjectGallery from './components/ProjectGallery';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <ProofBar />
        <Store />
        <ProjectGallery />
        <TechStack />
        <About />
        <Contact />
      </main>
      
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-slate-200 uppercase tracking-tighter">
              JEROY<span className="text-cyan-400">.SOLUTIONS</span>
            </p>
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Jerry Ogah Roy. Built for systems that never sleep.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#store" className="hover:text-cyan-400 transition-colors">Store</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#tech" className="hover:text-cyan-400 transition-colors">Stack</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
