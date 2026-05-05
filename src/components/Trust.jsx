import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="pt-12 md:pt-16 pb-20 md:pb-24 px-6 lg:px-12 bg-[#0a0a0a] relative z-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <h2 className="font-display font-bold text-4xl mb-4">Built for clinical-grade trust</h2>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-brand-light/60">3B+ training images</p>
              <p className="font-sans text-brand-light/60">11M+ scans reported</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 max-w-lg">
            {['ISO 27001', 'ISO 13485', 'ISO 9001', 'ISO 27701'].map((iso) => (
              <div key={iso} className="px-4 py-2 border border-white/20 text-xs font-sans tracking-widest uppercase">
                {iso}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16">
          <p className="font-sans text-xs uppercase tracking-widest text-brand-light/40 mb-8">Backed by $12.1M from leading healthcare and technology investors</p>
          <div className="flex flex-wrap items-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            <img src="/celesta.Cjr9mJlW.svg" alt="Celesta Capital" className="h-8 md:h-12 object-contain" />
            <img src="/capria.n2tjRCIn.svg" alt="Capria Ventures" className="h-8 md:h-12 object-contain" />
            <img src="/tata1mg.BJuOajck.svg" alt="Tata 1mg" className="h-8 md:h-12 object-contain" />
            <img src="/iima.dys3zUJw.png" alt="IIMA Ventures" className="h-8 md:h-12 object-contain" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Trust;
