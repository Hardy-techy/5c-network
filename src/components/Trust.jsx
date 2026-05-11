import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  return (
    <section className="py-16 md:py-20 bg-brand-dark text-white text-center">
      <div className="section-container max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex justify-center items-center mb-6"
        >
          <img src="/prodigi.DoGieTEj.svg" alt="5C Shield" className="h-10 brightness-0 invert opacity-80" onError={(e) => e.target.style.display='none'} />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-normal tracking-tight mb-10 text-white"
        >Built for clinical-grade trust</motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-brand-light/70 font-light text-lg"
        >
          <span>ISO 27001</span>
          <span className="hidden md:inline">|</span>
          <span>ISO 13485</span>
          <span className="hidden md:inline">|</span>
          <span>ISO 9001</span>
          <span className="hidden md:inline">|</span>
          <span>ISO 27701</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12 border-y border-white/10 py-10"
        >
          <div>
            <div className="text-4xl md:text-5xl font-normal text-white mb-2">3B+</div>
            <div className="text-brand-light/60 text-lg font-light">training images</div>
          </div>
          <div className="md:border-l border-white/10">
            <div className="text-4xl md:text-5xl font-normal text-white mb-2">11M+</div>
            <div className="text-brand-light/60 text-lg font-light">scans reported</div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-light/50 mb-8 tracking-wide font-light text-sm">Backed by leading healthcare and technology investors</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/celesta.Cjr9mJlW.svg" alt="Celesta Capital" className="h-8 md:h-12 object-contain" />
            <img src="/capria.n2tjRCIn.svg" alt="Capria Ventures" className="h-8 md:h-12 object-contain" />
            <img src="/tata1mg.BJuOajck.svg" alt="Tata 1mg" className="h-8 md:h-12 object-contain" />
            <img src="/iima.dys3zUJw.png" alt="IIMA Ventures" className="h-10 md:h-14 object-contain grayscale invert brightness-200" />
          </div>
          <p className="text-brand-muted/50 mt-10 text-sm">$12.1M raised to date</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
