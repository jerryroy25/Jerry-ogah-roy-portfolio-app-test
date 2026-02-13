
import React from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'Manual Entry Reduction', value: '95%', icon: Zap },
  { label: 'Founders Hours Reclaimed', value: '25+', icon: Clock },
  { label: 'Projected ROI for Clients', value: '>500%', icon: TrendingUp },
];

const ProofBar: React.FC = () => {
  return (
    <section className="relative z-20 border-y border-slate-900 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                <m.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-3xl font-black text-white tracking-tight">{m.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
