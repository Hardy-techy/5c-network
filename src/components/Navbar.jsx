import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ label, items, alignRight = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-brand-accent transition-colors font-sans text-sm font-medium tracking-wide uppercase py-2">
        {label}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full ${alignRight ? 'right-0' : 'left-0'} mt-2 w-48 bg-[#0a0a0a] border border-white/10 p-2 z-50`}
          >
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-brand-light/70 hover:text-brand-accent hover:bg-white/5 transition-colors font-sans tracking-wide"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 p-6 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 text-white flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="/prodigi.DoGieTEj.svg" alt="5C Logo" className="h-6" />
        <span className="font-display font-bold text-xl tracking-tighter uppercase hidden sm:block"><span className="inline-block -translate-y-[2px]">5</span>C Network</span>
      </div>
      
      <div className="hidden lg:flex gap-8 items-center">
        <Dropdown 
          label="For Hospitals" 
          items={['For Hospitals', 'For Enterprises', 'Radiology at Scale', 'Case Studies']} 
        />
        <Dropdown 
          label="For Radiologists" 
          items={['Overview', 'Apply', 'Earnings', 'Technology', 'Subspecialties', 'Fresh Graduates', 'FAQ']} 
        />
        <a href="#about" className="hover:text-brand-accent transition-colors font-sans text-sm font-medium tracking-wide uppercase">About</a>
        <a href="#contact" className="hover:text-brand-accent transition-colors font-sans text-sm font-medium tracking-wide uppercase">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block hover:text-brand-accent transition-colors font-sans text-sm font-medium tracking-wide uppercase">
          Sign In
        </button>
        <button className="bg-white text-black px-6 py-2 font-bold hover:bg-brand-accent transition-colors font-sans text-sm tracking-widest uppercase">
          Engage
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
