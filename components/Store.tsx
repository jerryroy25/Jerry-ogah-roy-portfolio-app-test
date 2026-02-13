
import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, ShieldCheck, Zap, UserCheck, Search, Database, MessageCircle } from 'lucide-react';

const agents = [
  {
    id: "agent-001",
    name: "The Researcher",
    type: "Market Intelligence",
    price: "$599",
    status: "Ready for Deploy",
    description: "Autonomously scrapes web data, synthesizes competitor reports, and monitors industry trends 24/7.",
    icon: Search,
    metrics: { efficiency: "+88%", latency: "Low" },
    tags: ["Market Research", "Data Mining"]
  },
  {
    id: "agent-002",
    name: "The Closer",
    type: "Sales Automation",
    price: "$749",
    status: "High Demand",
    description: "Handles initial outreach, objection handling, and appointment setting via LinkedIn and Email.",
    icon: UserCheck,
    metrics: { conversion: "+40%", volume: "High" },
    tags: ["Lead Gen", "Appointment Setting"]
  },
  {
    id: "agent-003",
    name: "The Assistant",
    type: "Operations",
    price: "$499",
    status: "Stable",
    description: "Synchronizes meetings, manages project boards, and automates status reporting across your stack.",
    icon: Zap,
    metrics: { time_saved: "20h/wk", sync: "Real-time" },
    tags: ["Operations", "Productivity"]
  },
  {
    id: "agent-004",
    name: "The Analyst",
    type: "Financial Vision",
    price: "$649",
    status: "Ready for Deploy",
    description: "Extracts line-item data from financial documents and reconciles accounts with 99.9% accuracy.",
    icon: Database,
    metrics: { accuracy: "99.9%", processing: "Instant" },
    tags: ["Bookkeeping", "Finance"]
  }
];

const Store: React.FC = () => {
  const [filter, setFilter] = useState("All Agents");

  return (
    <section id="store" className="py-24 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Store Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400">Verified Agents</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The Agent Marketplace.</h2>
            <p className="text-slate-400 font-medium">
              Elite digital employees engineered by <span className="text-cyan-400">Jeroy Solutions</span>. 
              Proven architectures ready to be integrated into your existing infrastructure.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="flex bg-slate-900/50 border border-slate-800 p-1 rounded-md">
                {["All Agents", "Sales", "Ops", "Data"].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                      filter === cat ? 'bg-cyan-500 text-slate-950' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest font-bold">
               Refining Infrastructure...
             </p>
          </div>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent) => (
            <div key={agent.id} className="group relative flex flex-col bg-slate-900/20 border border-slate-800/50 hover:border-cyan-500/50 transition-all p-6 rounded-sm overflow-hidden">
              {/* Card Status Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-cyan-500/20 transition-all">
                  <agent.icon className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter mb-1">{agent.id}</div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                    <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] uppercase font-bold text-emerald-400">{agent.status}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">{agent.name}</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4">{agent.type}</p>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{agent.description}</p>
              </div>

              <div className="flex-grow flex flex-col justify-end space-y-6 pt-6">
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(agent.metrics).map(([key, val]) => (
                    <div key={key} className="bg-slate-950/50 border border-slate-800/50 p-2 rounded-sm">
                      <div className="text-[8px] uppercase font-bold text-slate-600 mb-1">{key.replace('_', ' ')}</div>
                      <div className="text-xs font-bold text-slate-200">{val}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="font-mono text-lg font-bold text-white tracking-tighter">
                    {agent.price}
                  </div>
                  <button className="group/btn flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-950 font-black text-[10px] uppercase tracking-widest hover:bg-cyan-500 transition-all">
                    Initialize
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-900 pt-8">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Encrypted Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Instant Deployment</span>
            </div>
          </div>
          <p className="text-[10px] font-mono text-slate-600">
            SESSION_ID: {Math.random().toString(36).substring(7).toUpperCase()} // AGENT_VER: 2.4.0
          </p>
        </div>
      </div>
    </section>
  );
};

export default Store;
