
import React from 'react';
import { X, Cpu, Zap, Shield, Code, ArrowRight } from 'lucide-react';
import { Agent, Project } from '../App';

interface SystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Agent | Project | null;
  type: 'agent' | 'project';
}

const SystemModal: React.FC<SystemModalProps> = ({ isOpen, onClose, data, type }) => {
  if (!isOpen || !data) return null;

  // Type Guards
  const isAgent = (d: Agent | Project): d is Agent => type === 'agent';
  const name = isAgent(data) ? data.name : data.title;
  const tags = isAgent(data) ? data.tags : data.tags;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-slate-900 border border-slate-800 rounded-lg shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              {type === 'agent' ? <Cpu className="w-6 h-6 text-cyan-400" /> : <Code className="w-6 h-6 text-cyan-400" />}
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">{name}</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">{isAgent(data) ? data.type : 'Case Study'}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">Architecture Overview</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {data.description}
                </p>
                {type === 'project' && (
                  <p className="mt-4 text-slate-400">
                    This system was engineered to solve high-friction bottlenecks in operational workflows, utilizing agentic reasoning to bridge disparate data silos.
                  </p>
                )}
              </section>

              <section>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">Technical Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag: string) => (
                    <span key={tag} className="px-4 py-2 bg-slate-950 border border-slate-800 rounded font-mono text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <section className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-white">Expected Performance</h4>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {isAgent(data) && data.metrics ? Object.entries(data.metrics).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] uppercase font-bold text-slate-600 mb-1">{k.replace('_', ' ')}</div>
                      <div className="text-xl font-bold text-slate-100">{v}</div>
                    </div>
                  )) : !isAgent(data) && (
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-600 mb-1">Impact</div>
                      <div className="text-xl font-bold text-slate-100">{data.stat}</div>
                    </div>
                  )}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Ready for Deployment</h4>
                <p className="text-sm text-slate-400 mb-6">
                  {type === 'agent' 
                    ? "This agent architecture is vetted and can be integrated into your stack within 72 hours."
                    : "Similar architectures can be custom-engineered to your specific business requirements."}
                </p>
                <a 
                  href="#contact" 
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 text-slate-950 font-bold uppercase tracking-widest text-[10px] hover:bg-cyan-400 transition-all"
                >
                  {type === 'agent' ? 'Order Initialization' : 'Request Similar Build'}
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="p-6 bg-slate-800/30 border border-slate-800 rounded-lg">
                <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">Implementation Requirements</h4>
                <ul className="space-y-3">
                  {['API Key Access', 'Data Source Auth', 'Webhook Endpoint'].map(req => (
                    <li key={req} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-slate-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center px-8">
          <span className="text-[10px] font-mono text-slate-600 uppercase">SYSTEM_ID: {isAgent(data) ? data.id : 'CS-99'}</span>
          <span className="text-[10px] font-mono text-cyan-800 uppercase animate-pulse">Connection Secured</span>
        </div>
      </div>
    </div>
  );
};

export default SystemModal;
