import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, ShieldCheck, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Tech Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 uppercase tracking-widest">
            <Zap size={14} className="animate-pulse" /> AI Automation Ecosystem v2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Visual Edge
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I build autonomous digital employees and intelligent systems that reclaim your time and scale your brand—driven by the <span className="text-white font-semibold">JEROY.SOLUTIONS</span> framework.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-sm flex items-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              DEPLOY AN AGENT <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-sm border border-slate-800 hover:border-cyan-500/50 transition-all">
              VIEW STACK
            </button>
          </div>
        </motion.div>

        {/* Feature Cards Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm mt-8">
              <BarChart3 className="text-cyan-400 mb-4" size={32} />
              <div className="text-2xl font-bold text-white">+843%</div>
              <div className="text-xs text-slate-500 font-mono uppercase">Avg. Project ROI</div>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm">
              <ShieldCheck className="text-blue-400 mb-4" size={32} />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-slate-500 font-mono uppercase">Autonomous</div>
            </div>
          </div>
          {/* Decorative Code Snippet Float */}
          <div className="absolute -bottom-10 -left-10 p-4 bg-slate-950 border border-cyan-500/30 rounded-lg shadow-2xl font-mono text-[10px] text-cyan-300/70">
            <div>const agent = new JeroyAgent();</div>
            <div className="pl-4 text-slate-500">agent.maximize(Efficiency);</div>
            <div className="pl-4 text-slate-500">agent.deploy();</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
