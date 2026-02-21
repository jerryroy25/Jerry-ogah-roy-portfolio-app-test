
import React from 'react';
import { X, Cpu, Zap, Shield, Code, ArrowRight, CheckCircle2, Terminal, Layers } from 'lucide-react';
import { Agent, Project } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

interface SystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Agent | Project | null;
  type: 'agent' | 'project';
}

const SystemModal: React.FC<SystemModalProps> = ({ isOpen, onClose, data, type }) => {
  if (!isOpen || !data) return null;

  const isAgent = (d: Agent | Project): d is Agent => type === 'agent';
  const name = isAgent(data) ? data.name : data.title;
  const tags = isAgent(data) ? data.tags : data.tags;
  const buildId = isAgent(data) ? data.id : 'CS-99';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-slate-900 border border-cyan-500/30 rounded-lg shadow-[0_0_50px_rgba(0,245,255,0.1)] flex flex-col md:flex-row"
          >
            {/* Left Sidebar: Technical Specs */}
            <div className="w-full md:w-80 bg-slate-950 border-r border-slate-800 p-8 flex flex-col">
              <div className="mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20 w-fit mb-6">
                  {type === 'agent' ? <Cpu className="w-8 h-8 text-cyan-400" /> : <Code className="w-8 h-8 text-cyan-400" />}
                </div>
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em] mb-2">Build Identifier</div>
                <div className="text-xl font-black text-white font-mono tracking-tighter">{buildId}</div>
              </div>

              <div className="space-y-8 flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-4 h-4 text-slate-500" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-slate-500" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Primary Function</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {isAgent(data) ? data.type : data.type}
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Security Status</h4>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Vetted & Secure</span>
                  </div>
                </div>
              </div>

              <button onClick={onClose} className="mt-8 md:hidden w-full py-3 border border-slate-800 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                Close Details
              </button>
            </div>

            {/* Right Side: Business Value */}
            <div className="flex-grow flex flex-col h-full overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-slate-800 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">{name}</h3>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{isAgent(data) ? data.roi : data.stat} Performance</span>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-white hidden md:block">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-grow overflow-y-auto p-8 custom-scrollbar space-y-12">
                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">The Problem</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {data.problem || "Operational inefficiencies and manual bottlenecks hindering scalability and growth."}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">The Solution</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {data.solution || data.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <section>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Core Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(data.features || ['Autonomous Reasoning', 'API Integration', 'Real-time Processing', 'Self-Healing Logic']).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-950/50 border border-slate-800 rounded-lg group hover:border-cyan-500/30 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs text-slate-300 font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Workflow */}
                {data.workflow && (
                  <section>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Operational Workflow</h4>
                    <div className="space-y-4">
                      {data.workflow.map((step, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-black text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                              {i + 1}
                            </div>
                            {i < (data.workflow?.length || 0) - 1 && (
                              <div className="w-[1px] h-full bg-slate-800 my-2" />
                            )}
                          </div>
                          <div className="pt-1.5">
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* ROI Metrics */}
                <section className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Zap className="w-32 h-32 text-cyan-400" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-8">Business Impact & ROI</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
                    {isAgent(data) && data.metrics ? Object.entries(data.metrics).map(([k, v]) => (
                      <div key={k}>
                        <div className="text-[9px] uppercase font-black text-slate-500 mb-2 tracking-widest">{k.replace('_', ' ')}</div>
                        <div className="text-2xl font-black text-white tracking-tighter">{v}</div>
                      </div>
                    )) : !isAgent(data) ? (
                      <div>
                        <div className="text-[9px] uppercase font-black text-slate-500 mb-2 tracking-widest">Impact</div>
                        <div className="text-2xl font-black text-white tracking-tighter">{data.stat}</div>
                      </div>
                    ) : null}
                  </div>
                </section>
              </div>

              {/* Footer CTA */}
              <div className="p-8 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-white uppercase tracking-widest">Secure Implementation</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest">Deployment Ready: 72 Hours</div>
                  </div>
                </div>
                <a 
                  href="https://wa.me/message/VPVSZIHWSULBL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-slate-950 font-black uppercase tracking-widest text-xs rounded-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  Request Implementation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SystemModal;
