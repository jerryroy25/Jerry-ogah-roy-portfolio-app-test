
import React from 'react';
import { Brain, Cpu, Database, Globe } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Finishing",
      icon: Cpu,
      tools: ["Premium Tiles", "Granite", "Marble", "Wall Panels"],
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Sanitary",
      icon: Brain,
      tools: ["Luxury Faucets", "Smart Toilets", "Bathtubs", "Sinks"],
      className: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Structural",
      icon: Database,
      tools: ["Steel Rods", "Cement", "Roofing", "Waterproofing"],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Electrical",
      icon: Globe,
      tools: ["Smart Lighting", "Wiring", "Switches", "Solar Panels"],
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="tech" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-[#005A34] uppercase tracking-[0.3em] mb-4">Our Inventory</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#121212]">The Materials.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`p-8 bg-slate-50 border border-slate-200 rounded-lg group hover:bg-white transition-all shadow-sm hover:shadow-md ${cat.className}`}>
              <div className="flex items-center gap-4 mb-6">
                <cat.icon className="w-5 h-5 text-[#005A34]" />
                <h4 className="font-bold text-lg uppercase tracking-widest text-[#121212]">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.tools.map(tool => (
                  <div key={tool} className="px-4 py-2 bg-white border border-slate-100 text-slate-600 text-xs font-medium rounded-sm group-hover:border-[#005A34]/30 transition-colors shadow-sm">
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
