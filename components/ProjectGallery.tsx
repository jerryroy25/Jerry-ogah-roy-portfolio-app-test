
import React from 'react';
import { ExternalLink, Database, MessageSquare, Mail, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "The Financial Vision Accountant",
    description: "Autonomous bookkeeping engine that transforms messy receipts into structured financial data. Eliminates manual human entry errors entirely.",
    problem: "Manual bookkeeping is the #1 administrative bottleneck for small businesses, leading to tax errors and lost deductions.",
    solution: "A vision-based extraction engine that digitizes physical financial documents and reconciles them with your ledger in seconds.",
    features: [
      "Handwritten Receipt Recognition",
      "Automated Tax Categorization",
      "Duplicate & Fraud Detection",
      "Direct Accounting Sync"
    ],
    workflow: [
      "Capture: User uploads image via mobile or email.",
      "Extraction: Vision model identifies all data points.",
      "Validation: Logic engine checks for consistency.",
      "Sync: Data is pushed to QuickBooks/Xero."
    ],
    stat: "95% Reduction in Manual Entry",
    subStat: "4 mins → 5 seconds per receipt",
    icon: Database,
    tags: ["OCR", "n8n", "GPT-4o", "Accounting API"],
    type: "Financial Automation"
  },
  {
    title: "The Intelligent Inbox Architect",
    description: "The founders' secret weapon for Inbox Zero. A multi-agent system that classifies, triages, and drafts context-aware replies based on brand voice.",
    problem: "Founders spend 2+ hours daily triaging emails, leading to delayed responses and missed opportunities.",
    solution: "An AI-driven inbox architect that automatically classifies incoming mail, generates summaries, and drafts context-aware replies.",
    features: [
      "Automated Labeling & Triage",
      "Daily 'Executive Summary' Reports",
      "Brand-Voice Consistent Drafts",
      "Spam & Low-Value Filter Engine"
    ],
    workflow: [
      "Trigger: New email arrives in Gmail.",
      "Analysis: LLM analyzes sentiment, urgency, and category.",
      "Action: System applies labels and generates a draft reply.",
      "Reporting: Summary is sent to Slack/Telegram for quick review."
    ],
    stat: "25+ Hours Reclaimed Monthly",
    subStat: "Instant Sentiment Triage",
    icon: Mail,
    tags: ["Claude 3.5", "Gmail API", "Vector Memory"],
    type: "Inbox Engineering"
  },
  {
    title: "CrystalCare Support Agent",
    description: "Production-grade RAG support architecture. Handles complex customer queries across 5+ channels with multi-turn reasoning capabilities.",
    problem: "Human support teams are expensive, slow to respond after hours, and often provide inconsistent information.",
    solution: "A production-grade RAG support architecture that provides 24/7 context-aware assistance based on your specific knowledge base.",
    features: [
      "Multi-Channel Deployment",
      "Context-Aware RAG Memory",
      "Automated Ticket Escalation",
      "Multi-Language Support"
    ],
    workflow: [
      "Query: Customer asks a question on the website.",
      "Retrieve: System searches the vector database.",
      "Generate: AI constructs a response using retrieved data.",
      "Feedback: System logs interaction for continuous learning."
    ],
    stat: "843% Measured ROI",
    subStat: "24/7 Multi-channel support",
    icon: MessageSquare,
    tags: ["Pinecone", "Groq", "Airtable", "Webhooks"],
    type: "Customer Experience"
  }
];

interface ProjectGalleryProps {
  onOpenDetails: (project: any) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenDetails }) => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.4em] mb-4">Engineering Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">ROI Systems.</h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Every system is measured by two metrics: <span className="text-slate-100">Time Saved</span> and <span className="text-slate-100">Capital ROI</span>. No fluff, just production-grade infrastructure.
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
              className="group relative flex flex-col p-10 bg-slate-900/40 border border-slate-800/60 rounded-xl hover:border-cyan-500/40 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-cyan-500/20 transition-all">
                  <p.icon className="w-7 h-7 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-slate-950 px-2 py-1 border border-slate-800">
                  BUILD_PROTO_{i+1}
                </div>
              </div>
              
              <h4 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors tracking-tight">{p.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">{p.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="py-4 px-5 bg-cyan-500/5 border-l-4 border-cyan-500">
                  <span className="text-[10px] uppercase font-black text-cyan-400/80 block mb-1">Impact Metric</span>
                  <span className="text-lg font-black text-slate-100 tracking-tight">{p.stat}</span>
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-5 italic">
                  → {p.subStat}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[9px] px-2 py-1 bg-slate-950 text-slate-500 rounded border border-slate-800 uppercase tracking-widest font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => onOpenDetails(p)}
                className="w-full flex items-center justify-between group/btn py-4 border-t border-slate-800 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-400 transition-all"
              >
                Inspect Architecture
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
