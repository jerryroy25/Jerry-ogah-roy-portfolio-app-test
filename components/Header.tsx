
import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-bold tracking-tighter text-xl uppercase">
            JEROY<span className="text-cyan-400">.SOLUTIONS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Store', 'Projects', 'Tech', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-cyan-400 transition-all"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-b p-6 md:hidden">
          <div className="flex flex-col gap-6">
            {['Store', 'Projects', 'Tech', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full text-center px-5 py-4 bg-cyan-500 text-slate-950 font-bold rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              BOOK DISCOVERY CALL
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
