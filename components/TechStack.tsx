
import React from 'react';
import { Brain, Cpu, Database, Globe } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Orchestration",
      icon: Cpu,
      tools: ["n8n", "Zapier", "Make", "Python"],
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Brains",
      icon: Brain,
      tools: ["OpenAI", "Groq", "Anthropic", "Llama 3"],
      className: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Memory",
      icon: Database,
      tools: ["Pinecone", "Airtable", "PostgreSQL", "Supabase"],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Infrastructure",
      icon: Globe,
      tools: ["REST APIs", "Webhooks", "Vercel", "Docker"],
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="tech" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">The Engine Room</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">The Stack.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`p-8 bg-slate-900/20 border border-slate-800 rounded-lg group hover:bg-slate-900/40 transition-all ${cat.className}`}>
              <div className="flex items-center gap-4 mb-6">
                <cat.icon className="w-5 h-5 text-cyan-500" />
                <h4 className="font-bold text-lg uppercase tracking-widest text-slate-200">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.tools.map(tool => (
                  <div key={tool} className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-400 text-xs font-medium rounded-sm group-hover:border-slate-700 transition-colors">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
