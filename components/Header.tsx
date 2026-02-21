
import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

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

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update hash without jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const navItems = [
    { name: 'Store', id: 'store' },
    { name: 'Projects', id: 'projects' },
    { name: 'Tech', id: 'tech' },
    { name: 'About', id: 'about' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-1 bg-white rounded-lg border border-[#005A34]/20 group-hover:bg-[#005A34]/10 transition-all">
            <img src="https://drive.google.com/uc?id=1XG6r7PobZxOnPSOG9zJuXouwn0SJ9Lt9" alt="Crystal Klair Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="font-bold tracking-tighter text-xl uppercase text-[#005A34]">
            CRYSTAL<span className="text-[#D4AF37]">KLAIR</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold text-slate-600 hover:text-[#005A34] transition-colors uppercase tracking-widest"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#005A34] text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#004A24] transition-all"
          >
            Get a Quote
          </button>
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
            {navItems.map((item) => (
              <button 
                key={item.name} 
                className="text-left text-lg font-medium text-slate-100 uppercase tracking-widest"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
            <button 
              className="w-full text-center px-5 py-4 bg-cyan-500 text-slate-950 font-bold rounded-sm uppercase tracking-widest"
              onClick={() => scrollToSection('contact')}
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
