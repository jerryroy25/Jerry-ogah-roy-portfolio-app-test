
import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Transmission</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter">Ready to automate?</h3>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div className="p-6 rounded-lg bg-slate-900/30 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Direct Link</h4>
              <a href="mailto:hello@jor.systems" className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm">hello@jor.systems</span>
              </a>
            </div>
            
            <div className="p-6 rounded-lg bg-slate-900/30 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Network</h4>
              <a href="#" className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="font-mono text-sm">/in/jerryogahroy</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="E.G. JOHN DOE"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="E.G. JOHN@DOMAIN.COM"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Inquiry Brief</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="DESCRIBE THE WORKFLOW BOTTLE-NECK..."
                />
              </div>
              <button 
                type="submit"
                className="w-full group flex items-center justify-center gap-3 py-4 bg-cyan-500 text-slate-950 font-bold uppercase tracking-[0.2em] text-sm hover:bg-cyan-400 transition-all rounded-sm"
              >
                INITIALIZE CONTACT
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
