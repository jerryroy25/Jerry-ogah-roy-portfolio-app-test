
import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import TerminalText from './TerminalText';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenRoadmap: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenRoadmap }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Graphic - Matching Screenshot Aesthetic */}
      <div className="absolute top-10 left-0 w-full opacity-[0.05] select-none pointer-events-none whitespace-nowrap overflow-hidden">
        <div className="font-black text-[12vw] leading-none text-slate-400 tracking-tighter">
          Reclaim 40+ Hours
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 max-w-5xl"
        >
          Stop Wasting 40+ Hours Every Month. Scale <br className="hidden md:block" /> Without Hiring.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mb-12"
        >
          <div className="flex gap-2 items-start mb-4">
            <Terminal className="w-5 h-5 text-slate-500 mt-1 shrink-0" />
            <div className="text-lg md:text-xl text-slate-400 font-mono leading-relaxed">
              <TerminalText 
                text="I build production-grade AI agents and agentic workflows that replace manual chaos with engineering-grade systems. You focus on strategy; my systems handle the rest." 
                delay={20}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="https://agents.autonoms.ai/store/68fba70c6955b5eb6534fd1b" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-cyan-500 text-slate-950 font-black uppercase tracking-wider text-sm hover:bg-cyan-400 transition-all rounded-sm shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            View My ROI Systems
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={onOpenRoadmap}
            className="group flex items-center justify-center gap-3 px-8 py-5 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900 transition-all rounded-sm uppercase tracking-wider text-sm font-black"
          >
            Download My AI Roadmap
            <Download className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.02] select-none pointer-events-none">
        <div className="font-mono text-[20vw] font-black leading-none text-cyan-400 tracking-tighter vertical-text rotate-180">
          ROI_DRIVEN
        </div>
      </div>
    </section>
  );
};

export default Hero;
