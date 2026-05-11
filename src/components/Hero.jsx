import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-white">
      {/* Subtle medical cross/plus background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#2563EB 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl relative"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-surface text-brand-primary font-medium text-xs mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              India's #1 Teleradiology Network
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-normal text-brand-dark leading-[1.1] mb-8 tracking-tight"
            >
              Where AI and radiologists <span className="text-brand-primary font-medium italic">work as one.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-muted leading-relaxed font-light mb-10 max-w-2xl"
            >
              From scan to signed report in 30 minutes. AI runs the workflow. Radiologists own the diagnosis.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button onClick={openModal} className="flex items-center justify-center bg-brand-dark text-white px-6 py-3 rounded-full font-medium hover:bg-brand-primary transition-colors text-sm shadow-sm tracking-wide group hover:scale-[1.02] active:scale-95 duration-200">
                Try 10 Cases Free <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={openModal} className="flex items-center justify-center text-brand-dark px-6 py-3 rounded-full font-medium hover:bg-brand-surface transition-colors text-sm group hover:scale-[1.02] active:scale-95 duration-200">
                <div className="w-8 h-8 rounded-full bg-brand-surface group-hover:bg-white flex items-center justify-center mr-3 transition-colors border border-brand-border">
                  <Play className="w-3 h-3 fill-brand-dark" />
                </div>
                Request a Demo
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-brand-border shadow-2xl shadow-brand-primary/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop" 
              alt="Radiologist using modern AI tech" 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for a more premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            
            {/* Floating Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/40 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium mb-0.5">Scan processed</p>
                <p className="text-sm font-bold text-brand-dark">Report ready in 18 min</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
