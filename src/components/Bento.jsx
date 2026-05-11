import React from 'react';
import { motion } from 'framer-motion';

const Bento = () => {
  return (
    <section className="section-padding bg-brand-dark relative z-10" id="audiences">
      <div className="section-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Hospital Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="group relative border border-white/10 bg-brand-surface p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col justify-between hover:border-brand-accent/50 transition-colors duration-500"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity">
              <img src="/2.kYfC9R8h.jpg" alt="Hospital" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-brand-surface/80 to-brand-dark/90" />

            <div className="relative z-10">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">For Hospitals & Clinics</span>
              <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-6">
                Turn your scanner into a diagnostic powerhouse.
              </h2>
              <ul className="space-y-3 mb-8">
                {['Reports in 30 minutes, 24/7/365', '400+ subspecialist radiologists', 'Zero hardware required', 'Live in 72 hours'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-brand-light/80">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#contact" className="relative z-10 btn-secondary self-start w-full sm:w-auto border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark">
              View Hospital Pricing
            </a>
          </motion.div>

          {/* Radiologist Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px', delay: 0.1 }}
            className="group relative border border-white/10 bg-brand-surface p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col justify-between hover:border-white/40 transition-colors duration-500"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity">
              <img src="/4.v3oH1wGk.png" alt="Radiologist" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-brand-surface/80 to-brand-dark/90" />

            <div className="relative z-10">
              <span className="text-white font-bold uppercase tracking-widest text-xs mb-4 block">For Radiologists</span>
              <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-6">
                Read faster. Earn more. Work from anywhere.
              </h2>
              <ul className="space-y-3 mb-8">
                {['AI drafts the report, you validate', 'Guaranteed minimum earnings', 'Choose your hours and workload', 'Malpractice insurance included'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-brand-light/80">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#radiologists" className="relative z-10 btn-secondary self-start w-full sm:w-auto">
              Apply to join network
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Bento;
