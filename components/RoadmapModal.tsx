
import React, { useState } from 'react';
import { X, Download, ShieldCheck, FileText, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoadmapModal: React.FC<RoadmapModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', 'Roadmap Download');
    
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
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-slate-800" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 text-center">
              <div className="mx-auto w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 mb-8">
                <FileText className="w-10 h-10 text-cyan-400" />
              </div>
              
              <h3 className="text-3xl font-black text-white tracking-tighter mb-4 leading-tight">
                From Manual Chaos to Scalable Systems
              </h3>
              <p className="text-slate-400 mb-10 text-lg">
                Download <span className="text-cyan-400">The 90-Day AI Roadmap</span>. My $100M blueprint for architecting an autonomous workforce.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500 ml-1">Hero's Identity (Email)</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="E.G. ARCHITECT@DOMAIN.COM"
                    className="w-full bg-slate-950 border border-slate-800 p-5 rounded-xl focus:outline-none focus:border-cyan-500 transition-all font-mono text-sm"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center gap-3 py-5 font-black uppercase tracking-[0.2em] text-sm rounded-xl shadow-lg transition-all ${
                    status === 'loading' ? 'bg-slate-800 text-slate-500' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-cyan-500/20'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      INITIALIZING DOWNLOAD...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : status === 'success' ? (
                    'TRANSMISSION SUCCESSFUL'
                  ) : (
                    <>
                      DOWNLOAD THE BLUEPRINT
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {status === 'success' && (
                <p className="mt-4 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                  Blueprint dispatched to your terminal (inbox).
                </p>
              )}

              <div className="mt-8 flex items-center justify-center gap-4 text-[10px] uppercase font-bold text-slate-600 tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                No Spam. Just Infrastructure.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoadmapModal;
