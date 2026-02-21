
import React from 'react';
import { ExternalLink, Database, MessageSquare, Mail, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "The Emerald Heights Estate",
    description: "Full supply of premium tiles, sanitary wares, and lighting for a 50-unit luxury estate in Lagos. Delivered 15% under budget.",
    stat: "15% Cost Savings",
    subStat: "Premium quality at wholesale rates",
    icon: Database,
    tags: ["Tiles", "Sanitary", "Lighting", "Lagos"],
    type: "Residential Project"
  },
  {
    title: "CrystalCare Integration",
    description: "Implemented a multi-channel AI support system that handles 90% of routine customer inquiries, allowing our sales team to focus on high-value quotes.",
    stat: "90% Automation Rate",
    subStat: "24/7 Customer Support",
    icon: Zap,
    tags: ["AI", "n8n", "Customer Experience"],
    type: "Internal Systems"
  },
  {
    title: "The Golden Plaza Commercial",
    description: "Supplied high-durability granite and glass facades for a 10-story commercial complex. Engineered for the Nigerian climate.",
    stat: "Zero Material Defects",
    subStat: "Engineered for Durability",
    icon: MessageSquare,
    tags: ["Granite", "Glass", "Commercial"],
    type: "Commercial Project"
  }
];

interface ProjectGalleryProps {
  onOpenDetails: (project: any) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenDetails }) => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-[#005A34] uppercase tracking-[0.4em] mb-4">Our Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 text-[#121212]">Proven Excellence.</h3>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              From luxury residential estates to massive commercial complexes, <span className="text-[#005A34]">Crystal Klair</span> delivers materials that stand the test of time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col p-10 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#005A34]/40 transition-all duration-500 shadow-sm"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-xl border border-slate-100 group-hover:border-[#005A34]/20 transition-all">
                  <p.icon className="w-7 h-7 text-slate-400 group-hover:text-[#005A34] transition-colors" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-2 py-1 border border-slate-100">
                  PROJECT_{i+1}
                </div>
              </div>
              
              <h4 className="text-2xl font-black mb-4 group-hover:text-[#005A34] transition-colors tracking-tight text-[#121212]">{p.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">{p.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="py-4 px-5 bg-[#005A34]/5 border-l-4 border-[#005A34]">
                  <span className="text-[10px] uppercase font-black text-[#005A34]/80 block mb-1">Impact Metric</span>
                  <span className="text-lg font-black text-[#121212] tracking-tight">{p.stat}</span>
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-5 italic">
                  → {p.subStat}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[9px] px-2 py-1 bg-white text-slate-500 rounded border border-slate-100 uppercase tracking-widest font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => onOpenDetails(p)}
                className="w-full flex items-center justify-between group/btn py-4 border-t border-slate-100 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#005A34] transition-all"
              >
                View Details
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
