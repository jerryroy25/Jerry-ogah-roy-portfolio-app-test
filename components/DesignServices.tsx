
import React from 'react';
import { Palette, ExternalLink, Box, Layers, Camera, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignServices: React.FC = () => {
  return (
    <section id="design" className="py-32 px-6 relative overflow-hidden border-t border-slate-900 bg-slate-950">
      {/* Structural Background Label */}
      <div className="absolute top-0 right-0 h-full pointer-events-none opacity-[0.02] select-none flex items-center">
        <div className="font-mono text-[15vw] font-black leading-none text-cyan-400 rotate-90 origin-center whitespace-nowrap">
          IDENTITY
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Hub - Centered for better dimension fitting */}
        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8">
              <Palette className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400">Brand Engineer</span>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Engineering the <br/>
              <span className="text-cyan-400 italic">Visual Edge.</span>
            </h3>
            
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
              An automation system is only as powerful as the brand it represents. I bridge the gap between technical efficiency and high-converting visual identity.
            </p>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20 border-y border-slate-900/50 py-10">
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-slate-200 font-bold uppercase text-xs tracking-[0.2em]">
                  <Box className="w-5 h-5 text-cyan-500" />
                  UI Synthesis
                </div>
                <p className="text-slate-500 text-xs font-mono">Precision-crafted digital interfaces.</p>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-slate-200 font-bold uppercase text-xs tracking-[0.2em]">
                  <Layers className="w-5 h-5 text-cyan-500" />
                  Visual Logic
                </div>
                <p className="text-slate-500 text-xs font-mono">Strategic brand architectures.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Double-Vault Card Layout - Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Brand Gallery Card */}
          <motion.a 
            href="https://pin.it/6OKd1MaY2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/10] sm:aspect-square bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-10 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://res.cloudinary.com/dqpqndyvx/image/upload/socials_kvzsgj.png" 
                alt="Brand Gallery Backdrop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 saturate-0 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-4 bg-slate-950/80 backdrop-blur-md w-fit rounded-2xl border border-slate-800 shadow-inner group-hover:border-cyan-500/20 transition-colors">
                <Palette className="w-8 h-8 text-cyan-400" />
              </div>
              <Camera className="w-8 h-8 text-slate-700 group-hover:text-cyan-400/20 transition-colors" />
            </div>
            
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">Brand Gallery</h4>
              <p className="text-slate-500 text-xs uppercase font-bold tracking-[0.2em] mb-6">Pinterest Collection</p>
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase text-slate-200 bg-slate-950/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800 group-hover:border-cyan-500/30 transition-all">
                Explore Vault <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.a>

          {/* Design Studies Card */}
          <motion.a 
            href="https://www.behance.net/jerryogahroy"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/10] sm:aspect-square bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-10 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://res.cloudinary.com/dqpqndyvx/image/upload/v1771090133/Geometric_logo_blueprint_design_x37k6r.png" 
                alt="Design Studies Backdrop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 saturate-0 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-4 bg-slate-950/80 backdrop-blur-md w-fit rounded-2xl border border-slate-800 shadow-inner group-hover:border-cyan-500/20 transition-colors">
                <Layers className="w-8 h-8 text-cyan-400" />
              </div>
              <PenTool className="w-8 h-8 text-slate-700 group-hover:text-cyan-400/20 transition-colors" />
            </div>

            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">Design Studies</h4>
              <p className="text-slate-500 text-xs uppercase font-bold tracking-[0.2em] mb-6">Behance Case Studies</p>
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase text-slate-200 bg-slate-950/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800 group-hover:border-cyan-500/30 transition-all">
                Inspect Portfolio <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;

