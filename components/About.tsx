import React from 'react';
import { ShieldCheck, Terminal, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 border-y border-slate-900 bg-slate-950 relative overflow-hidden">
      {/* Structural Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] select-none">
        <div className="font-mono text-[20vw] font-black leading-none text-cyan-400 absolute -top-10 -left-10 rotate-12">
          ARCHITECTURE
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side: The Engineer */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-12 bg-cyan-500/10 blur-[120px] rounded-full" />
            
            {/* Frame Housing - Optimized for Jerry's custom transparent portrait */}
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl p-[1px] bg-gradient-to-tr from-cyan-500 via-slate-800 to-cyan-400/20 shadow-2xl overflow-visible">
              <div className="absolute inset-0 bg-slate-950 rounded-3xl" />
              
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-slate-950 group bg-slate-900/40">
                {/* 
                   Dynamic Gradient Background for 'no bg' image 
                   This ensures the subject stands out against a depth-filled tech background.
                */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-950" />
                <div className="absolute inset-0 grid-pattern opacity-10" />

                <img 
                  src="jeroy pic edited no bg.png" 
                  alt="Jerry Ogah Roy" 
                  className="relative z-10 h-full w-full object-cover headshot-filter scale-110 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  onError={(e) => {
                    // Fallback to a high-quality placeholder if the file is missing
                    (e.target as HTMLImageElement).src = "https://res.cloudinary.com/dqpqndyvx/image/upload/v1771084461/Jeroy_profile_full_0.5x_zwrvgy.png";
                  }}
                />
                
                {/* HUD Overlay Elements */}
                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay pointer-events-none z-20" />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 rounded-full z-30">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400">Status: Architect</span>
                </div>

                {/* Vertical HUD markings */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-20 z-30">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`h-1 w-2 bg-cyan-400 ${i % 3 === 0 ? 'w-4' : ''}`} />
                  ))}
                </div>
              </div>

              {/* Identity Token */}
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-6 -right-6 p-5 glass rounded-2xl border border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.2)] z-40"
              >
                <ShieldCheck className="w-10 h-10 text-cyan-400" />
              </motion.div>

              {/* Technical Brackets */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl" />
            </div>
          </motion.div>

          {/* Context Side: The Philosophy */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.5em] mb-6 flex items-center gap-3">
                <Terminal className="w-4 h-4" />
                System Architect Profile
              </h2>
              
              <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1]">
                I don't just connect apps; <br/>I <span className="text-cyan-400 italic underline decoration-cyan-500/20">engineer</span> legacy systems.
              </h3>
            </motion.div>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                My name is <span className="text-slate-100 font-black tracking-tight">JERRY OGAH ROY</span>. 
                With an academic and professional foundation in <span className="text-slate-100 italic">Mechatronics and Mechanical Engineering</span>, I bridge the gap between industrial precision and digital agility.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                I view a business's digital infrastructure as a complex mechatronic assembly. If one sensor fails or a joint is loose, the whole line stops. I build <span className="text-cyan-400 font-bold uppercase tracking-wider">Self-Healing Architectures</span> that ensure your operations run with the same reliability as a Tier-1 automotive manufacturing plant.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 border-l-4 border-cyan-500 rounded-r-xl"
              >
                "The goal is not just automation. It is the absolute reclamation of <span className="text-slate-100 font-bold">human potential</span> from the burden of repetitive data entry."
              </motion.p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-900 pt-12">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800 group-hover:border-cyan-500/50 transition-all duration-300 shadow-inner">
                  <Cpu className="w-7 h-7 text-cyan-500 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <div className="text-xl font-black text-white leading-none">Mechatronics</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">Industrial Logic</div>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800 group-hover:border-cyan-500/50 transition-all duration-300 shadow-inner">
                  <Zap className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xl font-black text-white leading-none">40+ Hours</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">Weekly Time Reclaim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;