
import React from 'react';
import { ExternalLink, Database, MessageSquare, Mail } from 'lucide-react';

const projects = [
  {
    title: "Financial Vision Agent",
    description: "Telegram-driven AI extraction for bookkeeping. Transforms messy receipts into structured data automatically.",
    stat: "4 mins → 5 seconds per entry",
    icon: Database,
    tags: ["n8n", "OpenAI", "Telegram API"]
  },
  {
    title: "Intelligent Email System",
    description: "Gmail classification and draft-reply agent for high-growth founders. Context-aware triage for high-volume inboxes.",
    stat: "25+ hours saved monthly",
    icon: Mail,
    tags: ["Zapier", "Claude 3.5", "Gmail API"]
  },
  {
    title: "CrystalCare Support",
    description: "RAG-based AI support and lead capture system. Uses Pinecone for long-term memory and brand-specific knowledge.",
    stat: "100% automated first response",
    icon: MessageSquare,
    tags: ["Pinecone", "Groq", "Airtable"]
  }
];

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Validated Systems.</h3>
          </div>
          <p className="text-slate-400 max-w-md font-medium">
            Deploying agentic workflows that replace manual labor with precision-engineered automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative flex flex-col p-8 bg-slate-900/40 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="p-3 w-fit bg-slate-950 rounded-lg border border-slate-800 mb-6 group-hover:border-cyan-500/30">
                <p.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{p.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>
              
              <div className="py-3 px-4 bg-cyan-500/5 border-l-2 border-cyan-500 mb-6">
                <span className="text-[10px] uppercase font-black text-cyan-400/80 block mb-1">Impact</span>
                <span className="text-sm font-bold text-slate-100">{p.stat}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-slate-950 text-slate-500 rounded border border-slate-800 uppercase tracking-wider font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-all">
                System Deep Dive <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
