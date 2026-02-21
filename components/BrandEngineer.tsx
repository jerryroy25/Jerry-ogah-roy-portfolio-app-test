import React from 'react';
import { motion } from 'framer-motion';
import { Palette, ExternalLink, Layout } from 'lucide-react';

const BrandEngineer: React.FC = () => {
  return (
    <section id="brand-engineer" className="py-24 px-6 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.02] select-none">
        <div className="font-mono text-[15vw] font-black leading-none text-cyan-400 absolute -bottom-10 -right-10 -rotate-12">
          VISUAL_EDGE
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.5em] mb-6 flex items-center gap-3">
              <Palette className="w-4 h-4" />
              The Brand Engineer
            </h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
              Engineering the <span className="text-cyan-400">Visual Edge</span>.
            </h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              An automated system is only as powerful as the brand it represents. 
              I bridge the gap between technical efficiency and high-converting visual identity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pinterest Card */}
          <motion.a 
            href="https://pin.it/6OKd1MaY2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layout className="w-32 h-32 text-cyan-400" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-slate-800 rounded-xl mb-6 group-hover:border-cyan-500/30 transition-all">
                <Palette className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-2xl font-black text-white mb-2">Brand Gallery</h4>
              <p className="text-slate-500 text-sm mb-8 font-mono uppercase tracking-widest">Pinterest Collection</p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-black uppercase tracking-widest text-xs rounded-sm group-hover:bg-cyan-400 transition-all">
                Explore Vault
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.a>

          {/* Behance Card */}
          <motion.a 
            href="https://www.behance.net/jerryogahroy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Palette className="w-32 h-32 text-cyan-400" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-slate-800 rounded-xl mb-6 group-hover:border-cyan-500/30 transition-all">
                <Layout className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-2xl font-black text-white mb-2">Design Studies</h4>
              <p className="text-slate-500 text-sm mb-8 font-mono uppercase tracking-widest">Behance Portfolio</p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-950 font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all">
                Inspect Portfolio
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BrandEngineer;
