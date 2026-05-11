import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'bg-white/60 backdrop-blur-2xl border-b border-black/5 py-1' : 'bg-transparent border-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img 
              src="/prodigi.DoGieTEj.svg" 
              alt="5C Logo" 
              className="h-6 md:h-7 object-contain" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
              }} 
            />
            <span className="font-heading font-medium text-lg md:text-xl text-brand-dark tracking-tight">5C Network</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#audiences" className="text-brand-dark/60 hover:text-brand-dark font-light text-sm transition-colors">About</a>
            <a href="#ai-features" className="text-brand-dark/60 hover:text-brand-dark font-light text-sm transition-colors">Our AI</a>
            <a href="#how-it-works" className="text-brand-dark/60 hover:text-brand-dark font-light text-sm transition-colors">For Hospitals</a>
            <a href="#audiences" className="text-brand-dark/60 hover:text-brand-dark font-light text-sm transition-colors">For Radiologists</a>
            <span className="w-px h-4 bg-brand-border/60 mx-1"></span>
            <button onClick={() => window.open('https://5cnetwork.com', '_blank')} className="text-brand-dark/60 hover:text-brand-dark font-light text-sm transition-colors">Sign In</button>
            <button onClick={openModal} className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white rounded-full py-2 px-5 text-sm font-medium transition-all duration-300 tracking-wide">Request a Demo</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={openModal} className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white rounded-full py-1.5 px-4 text-xs font-medium transition-all duration-300 tracking-wide">Demo</button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark/70 hover:text-brand-dark transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-brand-border/40 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#audiences" className="block px-3 py-3 text-brand-dark font-light hover:bg-brand-surface rounded-md text-sm">About</a>
            <a href="#ai-features" className="block px-3 py-3 text-brand-dark font-light hover:bg-brand-surface rounded-md text-sm">Our AI</a>
            <a href="#how-it-works" className="block px-3 py-3 text-brand-dark font-light hover:bg-brand-surface rounded-md text-sm">For Hospitals</a>
            <a href="#audiences" className="block px-3 py-3 text-brand-dark font-light hover:bg-brand-surface rounded-md text-sm">For Radiologists</a>
            <div className="pt-4 border-t border-brand-border/40 mt-2 flex flex-col gap-3 px-3">
              <button onClick={() => window.open('https://5cnetwork.com', '_blank')} className="text-brand-dark font-light text-left py-2 text-sm">Sign In</button>
              <button onClick={() => { openModal(); setIsOpen(false); }} className="bg-brand-dark text-white rounded-full w-full text-center py-2.5 text-sm font-medium">Request a Demo</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
