
import React from 'react';
import { Settings } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 border-y border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="relative aspect-square max-w-md mx-auto bg-slate-900 rounded-lg border border-slate-800 overflow-hidden group">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Settings className="w-32 h-32 text-cyan-500/20 animate-[spin_20s_linear_infinite]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                <div className="text-xs font-mono text-cyan-400 mb-2">ENGINEER_PROFILE_01</div>
                <div className="font-bold text-xl uppercase tracking-tighter">Jeroy Solutions / Jerry Ogah Roy</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-6">Identity</h2>
            <h3 className="text-4xl font-black mb-8 tracking-tight leading-tight">Mechatronics Mindset. <br/>AI Implementation.</h3>
            
            <div className="space-y-6 text-slate-400 leading-relaxed font-medium">
              <p>
                As the founder of <span className="text-slate-100">Jeroy Solutions</span>, my background in Mechatronics Engineering informs every system I build. I don't just connect tools—I engineer workflows.
              </p>
              <p>
                My background in <span className="text-slate-100">Mechatronics and Mechanical Engineering</span> wasn't just about robots—it was about <span className="text-cyan-400">Systems Thinking</span>. I view business processes exactly like industrial production lines: any friction is a failure point, and any manual task is a bottleneck.
              </p>
              <p>
                Today, I apply that same engineering rigor to digital operations. I design autonomous agents that act as a decentralized workforce for founders who are ready to scale without increasing headcount.
              </p>
            </div>

            <div className="mt-12 flex gap-12 border-t border-slate-900 pt-12">
              <div>
                <div className="text-2xl font-black text-white">5+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Years Eng experience</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">30+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Workflows Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
