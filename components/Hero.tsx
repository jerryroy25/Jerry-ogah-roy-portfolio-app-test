
import React from 'react';
import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';
import TerminalText from './TerminalText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400">Systems Online</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 max-w-4xl">
          I build digital <span className="text-cyan-400">employees</span> that never sleep.
        </h1>

        <div className="max-w-2xl mb-12">
          <div className="flex gap-2 items-start mb-4">
            <Terminal className="w-5 h-5 text-slate-500 mt-1 shrink-0" />
            <div className="text-lg md:text-xl text-slate-400 font-mono leading-relaxed">
              <TerminalText 
                text="AI Automation & Workflow Engineer. Systems Designer. I help businesses scale operations and reclaim thousands of hours using agentic workflows." 
                delay={25}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-all rounded-sm"
          >
            View My Systems
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="group flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900 transition-all rounded-sm uppercase tracking-wider text-sm font-bold"
          >
            Book a Discovery Call
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-10 select-none">
        <div className="font-mono text-[20vw] font-black leading-none text-cyan-400 tracking-tighter vertical-text rotate-180">
          AUTOMATE
        </div>
      </div>
    </section>
  );
};

export default Hero;
