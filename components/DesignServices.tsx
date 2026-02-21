
import React from 'react';
import { Palette, ExternalLink, Box, Layers, Camera, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignServices: React.FC = () => {
  return (
    <section id="design" className="py-32 px-6 relative overflow-hidden border-t border-slate-100 bg-white">
      {/* Structural Background Label */}
      <div className="absolute top-0 right-0 h-full pointer-events-none opacity-[0.02] select-none flex items-center">
        <div className="font-mono text-[15vw] font-black leading-none text-[#005A34] rotate-90 origin-center whitespace-nowrap">
          GLAMOUR
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Hub */}
        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005A34]/20 bg-[#005A34]/5 mb-8">
              <Palette className="w-3 h-3 text-[#005A34]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#005A34]">Design Excellence</span>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-[#121212]">
              The Art of <br/>
              <span className="text-[#005A34] italic">Material Selection.</span>
            </h3>
            
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
              A building is only as beautiful as the materials it's made of. We provide expert guidance in selecting finishes that elevate your architectural vision.
            </p>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20 border-y border-slate-100 py-10">
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-[#121212] font-bold uppercase text-xs tracking-[0.2em]">
                  <Box className="w-5 h-5 text-[#005A34]" />
                  Material Curation
                </div>
                <p className="text-slate-400 text-xs font-mono">Hand-picked premium finishes.</p>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-[#121212] font-bold uppercase text-xs tracking-[0.2em]">
                  <Layers className="w-5 h-5 text-[#005A34]" />
                  Spatial Harmony
                </div>
                <p className="text-slate-400 text-xs font-mono">Strategic material pairing.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Double-Vault Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Material Gallery Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/10] sm:aspect-square bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden p-10 flex flex-col justify-between hover:border-[#005A34]/50 transition-all shadow-lg"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://picsum.photos/seed/tiles/800/800" 
                alt="Material Gallery" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-4 bg-white/80 backdrop-blur-md w-fit rounded-2xl border border-slate-100 shadow-inner group-hover:border-[#005A34]/20 transition-colors">
                <Palette className="w-8 h-8 text-[#005A34]" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-2 group-hover:text-[#005A34] transition-colors tracking-tight text-[#121212]">Material Gallery</h4>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-[0.2em] mb-6">Premium Collection</p>
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase text-[#121212] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 group-hover:border-[#005A34]/30 transition-all">
                Explore Collection <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

          {/* Design Consultation Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/10] sm:aspect-square bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden p-10 flex flex-col justify-between hover:border-[#005A34]/50 transition-all shadow-lg"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://picsum.photos/seed/design/800/800" 
                alt="Design Consultation" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-4 bg-white/80 backdrop-blur-md w-fit rounded-2xl border border-slate-100 shadow-inner group-hover:border-[#005A34]/20 transition-colors">
                <Layers className="w-8 h-8 text-[#005A34]" />
              </div>
            </div>

            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-2 group-hover:text-[#005A34] transition-colors tracking-tight text-[#121212]">Design Consultation</h4>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-[0.2em] mb-6">Expert Guidance</p>
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase text-[#121212] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 group-hover:border-[#005A34]/30 transition-all">
                Book a Session <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;

