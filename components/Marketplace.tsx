
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Mail, 
  FileSearch, 
  Briefcase, 
  TrendingUp, 
  LineChart, 
  Receipt, 
  BarChart3, 
  Rss, 
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

const projects = [
  { 
    id: 1, 
    category: 'Business', 
    title: 'CEO PA Multi-Agent Bot', 
    roi: '33hrs/mo', 
    tech: 'Telegram/n8n',
    description: 'Telegram command hub for founders. Tasks, Research, & Scheduling.',
    problem: 'Founders are overwhelmed by context-switching between 10+ apps for basic tasks like scheduling, research, and task management.',
    solution: 'A centralized Telegram-based command center that uses multiple specialized agents to handle operations via simple natural language commands.',
    features: [
      'Natural Language Task Delegation',
      'Automated Calendar Management',
      'Real-time Web Research Agents',
      'Multi-app Integration (Notion, Slack, Google)'
    ],
    workflow: [
      'Input: Founder sends voice or text command to Telegram.',
      'Routing: Master agent identifies the intent and assigns a sub-agent.',
      'Execution: Sub-agent interacts with external APIs (Notion, Google).',
      'Confirmation: System returns a summary of the completed action.'
    ],
    icon: Bot,
    price: '$899',
    status: 'Ready',
    tags: ['Telegram', 'n8n', 'Automation', 'Multi-Agent'],
    metrics: { 'Time Saved': '33h/mo', 'Context Switching': '-90%' }
  },
  { 
    id: 2, 
    category: 'Business', 
    title: 'Gmail Intelligence System', 
    roi: '25hrs/mo', 
    tech: 'OpenAI/n8n',
    description: 'Automated classification, summarization, and auto-replies.',
    problem: 'Founders spend 2+ hours daily triaging emails, leading to delayed responses and missed opportunities.',
    solution: 'An AI-driven inbox architect that automatically classifies incoming mail, generates summaries, and drafts context-aware replies.',
    features: [
      'Automated Labeling & Triage',
      'Daily "Executive Summary" Reports',
      'Brand-Voice Consistent Drafts',
      'Spam & Low-Value Filter Engine'
    ],
    workflow: [
      'Trigger: New email arrives in Gmail.',
      'Analysis: LLM analyzes sentiment, urgency, and category.',
      'Action: System applies labels and generates a draft reply.',
      'Reporting: Summary is sent to Slack/Telegram for quick review.'
    ],
    icon: Mail,
    price: '$599',
    status: 'Ready',
    tags: ['OpenAI', 'n8n', 'Gmail API', 'NLP'],
    metrics: { 'Time Saved': '25h/mo', 'Accuracy': '98%' }
  },
  { 
    id: 3, 
    category: 'Business', 
    title: 'AI Resume Screener', 
    roi: '95% Speed', 
    tech: 'HR-Tech',
    description: 'Evaluates 50+ resumes in 60s. Zero-bias ranking engine.',
    problem: 'Manual resume screening is slow, prone to bias, and often misses top-tier talent in high-volume hiring.',
    solution: 'A high-speed ranking engine that evaluates candidates against specific job requirements with mathematical precision and zero bias.',
    features: [
      'Bulk PDF/Docx Processing',
      'Requirement Matching Logic',
      'Zero-Bias Scoring Algorithm',
      'Automated Rejection/Interview Emails'
    ],
    workflow: [
      'Upload: Resumes are dropped into a shared folder or portal.',
      'Parsing: System extracts skills, experience, and education.',
      'Scoring: AI ranks candidates based on job-specific criteria.',
      'Export: Top 5% are highlighted for immediate human review.'
    ],
    icon: FileSearch,
    price: '$749',
    status: 'Ready',
    tags: ['HR-Tech', 'AI Ranking', 'Recruitment', 'Python'],
    metrics: { 'Processing Speed': '95% faster', 'Bias Reduction': '100%' }
  },
  { 
    id: 4, 
    category: 'Business', 
    title: 'FeedHunt AI Job Tracker', 
    roi: 'Automated', 
    tech: 'Scraping/AI',
    description: 'Automated tracking and outreach for high-volume opportunities.',
    problem: 'Job seekers and agencies waste hours manually searching boards and tracking applications in spreadsheets.',
    solution: 'A proactive scraping and tracking agent that identifies high-value opportunities and automates the initial outreach phase.',
    features: [
      'Multi-Board Web Scraping',
      'Automated Application Tracking',
      'AI-Personalized Outreach Drafts',
      'Status Change Notifications'
    ],
    workflow: [
      'Scrape: System monitors LinkedIn, Indeed, and niche boards.',
      'Filter: AI identifies jobs matching the user profile.',
      'Track: Opportunities are added to a centralized CRM.',
      'Outreach: Personalized cover letters are generated automatically.'
    ],
    icon: Briefcase,
    price: '$499',
    status: 'Ready',
    tags: ['Web Scraping', 'Job Tracking', 'Outreach', 'AI'],
    metrics: { 'Tracking': 'Automated', 'Outreach': 'Instant' }
  },
  { 
    id: 5, 
    category: 'Finance', 
    title: 'CoinPulse AI Crypto', 
    roi: 'Real-time', 
    tech: 'Market-Data',
    description: 'Crypto Price & Volatility tracker with sentiment analysis.',
    problem: 'Traders struggle to monitor 24/7 market volatility and social sentiment across thousands of tokens.',
    solution: 'A real-time monitoring engine that combines price action with social sentiment to identify potential breakouts before they happen.',
    features: [
      'Real-time Volatility Alerts',
      'Social Sentiment Aggregation',
      'Whale Wallet Tracking',
      'Multi-Exchange Data Feed'
    ],
    workflow: [
      'Ingest: Connects to Binance/Coinbase & Twitter APIs.',
      'Analyze: Correlates price spikes with social volume.',
      'Alert: Sends high-conviction signals to Telegram.',
      'Log: Records all signals for performance auditing.'
    ],
    icon: TrendingUp,
    price: '$699',
    status: 'Ready',
    tags: ['Crypto', 'Sentiment Analysis', 'Market Data', 'Real-time'],
    metrics: { 'Latency': 'Low', 'Data Points': '10k+/day' }
  },
  { 
    id: 6, 
    category: 'Finance', 
    title: 'Steve Tech Analysis Bot', 
    roi: 'Signals', 
    tech: 'TradingView',
    description: 'Advanced charting and signal generation agent.',
    problem: 'Technical analysis is time-consuming and prone to human emotional bias during high-volatility periods.',
    solution: 'STEVE is a high-frequency technical analysis engine that identifies high-probability setups using momentum and volume profile analysis.',
    features: [
      'Multi-Timeframe Confluence Checking',
      'Real-time Volume Profile Analysis',
      'Automated Fibonacci & Pivot Mapping',
      'Sentiment Overlay from News Feeds'
    ],
    workflow: [
      'Data Ingestion: Connects to TradingView Webhooks.',
      'Pattern Recognition: Scans for 15+ proprietary setups.',
      'Validation: Cross-references with volume data.',
      'Signal Dispatch: Sends alerts via Telegram or API.'
    ],
    icon: LineChart,
    price: '$999',
    status: 'Ready',
    tags: ['TradingView', 'Technical Analysis', 'Signals', 'Webhooks'],
    metrics: { 'Signal Accuracy': '82%', 'Execution': 'Instant' }
  },
  { 
    id: 7, 
    category: 'Finance', 
    title: 'Financial Vision Agent', 
    roi: '5s Entry', 
    tech: 'OCR/Vision',
    description: 'Receipt-to-Sheet automation. 4 mins -> 5 seconds per entry.',
    problem: 'Manual bookkeeping is the #1 administrative bottleneck for small businesses, leading to tax errors and lost deductions.',
    solution: 'A vision-based extraction engine that digitizes physical financial documents and reconciles them with your ledger in seconds.',
    features: [
      'Handwritten Receipt Recognition',
      'Automated Tax Categorization',
      'Duplicate & Fraud Detection',
      'Direct Accounting Sync'
    ],
    workflow: [
      'Capture: User uploads image via mobile or email.',
      'Extraction: Vision model identifies all data points.',
      'Validation: Logic engine checks for consistency.',
      'Sync: Data is pushed to QuickBooks/Xero.'
    ],
    icon: Receipt,
    price: '$649',
    status: 'Ready',
    tags: ['OCR', 'Computer Vision', 'Airtable', 'Financials'],
    metrics: { 'Entry Speed': '5 seconds', 'Manual Reduction': '95%' }
  },
  { 
    id: 8, 
    category: 'Marketing', 
    title: 'BrandPulse AI Monitor', 
    roi: 'Sentiment', 
    tech: 'Social API',
    description: 'Real-time social mention and sentiment tracking engine.',
    problem: 'Brands often miss critical customer feedback or PR crises because they can\'t monitor every social platform in real-time.',
    solution: 'A 24/7 brand sentinel that tracks mentions across the web and analyzes sentiment to alert you to critical changes immediately.',
    features: [
      'Real-time Mention Tracking',
      'Sentiment Trend Analysis',
      'Competitor Benchmarking',
      'Automated Crisis Alerts'
    ],
    workflow: [
      'Monitor: Scans Twitter, Reddit, and News APIs.',
      'Analyze: LLM determines sentiment and urgency.',
      'Notify: Critical mentions are sent to Slack.',
      'Respond: System suggests AI-generated response drafts.'
    ],
    icon: BarChart3,
    price: '$799',
    status: 'Ready',
    tags: ['Social Listening', 'Sentiment Analysis', 'Brand Monitoring', 'API'],
    metrics: { 'Monitoring': '24/7', 'Sentiment Accuracy': '92%' }
  },
  { 
    id: 9, 
    category: 'Marketing', 
    title: 'AI RSS Content Gen', 
    roi: 'Auto-Post', 
    tech: 'Automation',
    description: 'Multi-platform automated content factory for social media.',
    problem: 'Consistent content creation is expensive and time-consuming, often leading to ghost-town social profiles.',
    solution: 'An automated content factory that turns RSS feeds and news into platform-specific social media posts automatically.',
    features: [
      'RSS to Social Transformation',
      'Platform-Specific Formatting',
      'Automated Scheduling & Posting',
      'Image Generation Integration'
    ],
    workflow: [
      'Ingest: System reads new articles from RSS feeds.',
      'Rewrite: AI transforms articles into social posts.',
      'Review: (Optional) User approves drafts in dashboard.',
      'Deploy: Posts are scheduled across LinkedIn/X/FB.'
    ],
    icon: Rss,
    price: '$549',
    status: 'Ready',
    tags: ['RSS', 'Content Generation', 'Social Media', 'Automation'],
    metrics: { 'Post Frequency': 'Daily', 'Manual Effort': '-95%' }
  },
  { 
    id: 10, 
    category: 'Support', 
    title: 'Crystal Klair AI Chatbot', 
    roi: '843% ROI', 
    tech: 'RAG/Knowledge',
    description: 'RAG-based 24/7 retail support agent. Proven 843% ROI.',
    problem: 'Human support teams are expensive, slow to respond after hours, and often provide inconsistent information.',
    solution: 'A production-grade RAG support architecture that provides 24/7 context-aware assistance based on your specific knowledge base.',
    features: [
      'Multi-Channel Deployment',
      'Context-Aware RAG Memory',
      'Automated Ticket Escalation',
      'Multi-Language Support'
    ],
    workflow: [
      'Query: Customer asks a question on the website.',
      'Retrieve: System searches the vector database.',
      'Generate: AI constructs a response using retrieved data.',
      'Feedback: System logs interaction for continuous learning.'
    ],
    icon: MessageSquare,
    price: '$1,299',
    status: 'Ready',
    tags: ['RAG', 'Vector DB', 'Customer Support', 'Pinecone'],
    metrics: { 'ROI': '843%', 'Availability': '24/7' }
  },
];

interface StoreProps {
  onOpenDetails: (agent: any) => void;
  onInitialize: (agent: any) => void;
}

const Store: React.FC<StoreProps> = ({ onOpenDetails, onInitialize }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Business', 'Finance', 'Marketing', 'Support'];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="store" className="bg-slate-950 py-24 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400">Verified Agents</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white font-mono tracking-tighter">
              AGENT_<span className="text-cyan-400">MARKETPLACE</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl font-medium">
              Elite digital employees engineered by <span className="text-cyan-400">Jeroy Solutions</span>. 
              Proven architectures ready to be integrated into your existing infrastructure.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-sm border font-mono text-[10px] uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-cyan-500 text-slate-950 border-cyan-500' : 'text-slate-500 border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-6 rounded-sm bg-slate-900/20 border border-slate-800/50 hover:border-cyan-400/50 transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-cyan-500/20 transition-all">
                    <project.icon className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter mb-1">AGENT-{project.id.toString().padStart(3, '0')}</div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                      <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] uppercase font-bold text-emerald-400">{project.status}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 cursor-pointer" onClick={() => onOpenDetails(project)}>
                  <div className="text-[10px] font-mono text-cyan-500 mb-2 uppercase tracking-widest">{project.category}</div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center py-3 border-y border-slate-800/50">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase font-bold text-slate-600">Performance</span>
                      <span className="text-xs text-slate-200 font-mono">ROI: {project.roi}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] uppercase font-bold text-slate-600">Stack</span>
                      <span className="text-[10px] bg-slate-800 text-cyan-400 px-2 py-0.5 rounded tracking-tighter">{project.tech}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-mono text-lg font-bold text-white tracking-tighter">
                      {project.price}
                    </div>
                    <button 
                      onClick={() => onInitialize(project)}
                      className="group/btn flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-950 font-black text-[10px] uppercase tracking-widest hover:bg-cyan-500 transition-all"
                    >
                      Initialize
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
            SESSION_ID: JEROY_S_ {Math.random().toString(36).substring(7).toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Store;
