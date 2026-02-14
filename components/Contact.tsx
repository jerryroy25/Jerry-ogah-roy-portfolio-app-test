
import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Send, Loader2, MessageSquare, CreditCard, Twitter } from 'lucide-react';

interface ContactProps {
  prefilledSubject?: string;
}

const Contact: React.FC<ContactProps> = ({ prefilledSubject }) => {
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(prefilledSubject);
    }
  }, [prefilledSubject]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mwvnoler', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        setSubject('');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const speedChannels = [
    {
      label: "Chat with the Engineer",
      icon: MessageSquare,
      link: "https://wa.me/message/VPVSZIHWSULBL1",
      sub: "WhatsApp Direct",
      color: "hover:text-emerald-400"
    },
    {
      label: "Booking & Payments",
      icon: CreditCard,
      link: "https://mainstack.me/jeroybrand",
      sub: "Mainstack Hub",
      color: "hover:text-cyan-400"
    },
    {
      label: "Follow the Build",
      icon: Twitter,
      link: "https://x.com/jerryroy25",
      sub: "@jerryroy25",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4 text-center">Transmission</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-center">Ready to automate?</h3>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Speed Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">AI AUTOMATION ENGINEER | SYSTEMS DESIGNER</h4>
            {speedChannels.map((channel, i) => (
              <a 
                key={i}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 bg-slate-900/40 border border-slate-800 rounded-lg group transition-all ${channel.color} hover:border-current/30`}
              >
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-current/20">
                  <channel.icon className="w-5 h-5 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{channel.sub}</div>
                  <div className="text-sm font-black text-slate-200 group-hover:text-inherit transition-colors">{channel.label}</div>
                </div>
              </a>
            ))}

            <div className="pt-8 border-t border-slate-900 mt-8 space-y-4">
               <a href="mailto:jerryogahroy@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-mono">
                <Mail className="w-4 h-4" />
                jerryogahroy@gmail.com
              </a>
              <a href="https://linkedin.com/in/jerryogahroy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-mono">
                <Linkedin className="w-4 h-4" />
                /in/jerryogahroy
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Name</label>
                  <input 
                    name="name"
                    type="text" required
                    className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="E.G. JOHN DOE"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Email</label>
                  <input 
                    name="email"
                    type="email" required
                    className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="E.G. JOHN@DOMAIN.COM"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Subject / System Request</label>
                <input 
                  name="subject"
                  type="text" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="E.G. CUSTOM WORKFLOW AUTOMATION"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-500">Inquiry Brief</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 p-4 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="DESCRIBE THE WORKFLOW BOTTLE-NECK..."
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full group flex items-center justify-center gap-3 py-4 font-black uppercase tracking-[0.2em] text-sm rounded-sm transition-all ${
                  status === 'loading' ? 'bg-slate-800 text-slate-500' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    TRANSMITTING...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : status === 'success' ? (
                  'TRANSMISSION SUCCESSFUL'
                ) : (
                  <>
                    INITIALIZE CONTACT
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-emerald-500 text-[10px] font-black uppercase text-center tracking-widest mt-2">
                  System message received. Connection established.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
