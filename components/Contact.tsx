
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
    const data = Object.fromEntries(formData.entries());
    
    try {
      // Sending to n8n webhook as well for lead tracking
      await fetch('https://n8n-self-host-render-nqm1.onrender.com/webhook/crystalklairai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'contact_form' })
      });

      // Standard form submission
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
      label: "WhatsApp Support",
      icon: MessageSquare,
      link: "https://wa.me/message/VPVSZIHWSULBL1",
      sub: "Direct Inquiry",
      color: "hover:text-emerald-600"
    },
    {
      label: "Material Catalog",
      icon: CreditCard,
      link: "#",
      sub: "Download PDF",
      color: "hover:text-[#005A34]"
    },
    {
      label: "Follow Our Projects",
      icon: Twitter,
      link: "#",
      sub: "@crystalklair",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#005A34] uppercase tracking-[0.3em] mb-4 text-center">Contact Us</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-center text-[#121212]">Ready to build?</h3>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Speed Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">PREMIUM BUILDING MATERIALS SUPPLIER</h4>
            {speedChannels.map((channel, i) => (
              <a 
                key={i}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg group transition-all ${channel.color} hover:border-current/30`}
              >
                <div className="p-3 bg-white rounded-lg border border-slate-100 group-hover:border-current/20">
                  <channel.icon className="w-5 h-5 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{channel.sub}</div>
                  <div className="text-sm font-black text-[#121212] group-hover:text-inherit transition-colors">{channel.label}</div>
                </div>
              </a>
            ))}

            <div className="pt-8 border-t border-slate-100 mt-8 space-y-4">
               <a href="mailto:info@crystalklair.com" className="flex items-center gap-3 text-slate-500 hover:text-[#005A34] transition-colors text-xs font-mono">
                <Mail className="w-4 h-4" />
                info@crystalklair.com
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-[#005A34] transition-colors text-xs font-mono">
                <Linkedin className="w-4 h-4" />
                Crystal Klair Glamour Touch
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Name</label>
                  <input 
                    name="name"
                    type="text" required
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:border-[#005A34] transition-colors"
                    placeholder="E.G. JOHN DOE"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Email</label>
                  <input 
                    name="email"
                    type="email" required
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:border-[#005A34] transition-colors"
                    placeholder="E.G. JOHN@DOMAIN.COM"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Subject / Material Request</label>
                <input 
                  name="subject"
                  type="text" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:border-[#005A34] transition-colors"
                  placeholder="E.G. PREMIUM TILES INQUIRY"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Inquiry Brief</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:border-[#005A34] transition-colors resize-none"
                  placeholder="DESCRIBE YOUR PROJECT REQUIREMENTS..."
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full group flex items-center justify-center gap-3 py-4 font-black uppercase tracking-[0.2em] text-sm rounded-sm transition-all ${
                  status === 'loading' ? 'bg-slate-200 text-slate-400' : 'bg-[#005A34] text-white hover:bg-[#D4AF37]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    SENDING...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : status === 'success' ? (
                  'MESSAGE SENT SUCCESSFULLY'
                ) : (
                  <>
                    GET A QUOTE
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-emerald-600 text-[10px] font-black uppercase text-center tracking-widest mt-2">
                  Thank you. Our team will contact you shortly.
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
