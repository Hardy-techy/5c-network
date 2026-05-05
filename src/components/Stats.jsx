import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} 
      className="py-8 md:py-12 px-6 lg:px-12 bg-brand-dark relative z-20"
    >
      <div className="container mx-auto">
        <div className="border border-white/10 bg-[#0a0a0a] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Stat 1 */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
            <h3 className="font-display font-bold text-4xl text-white mb-2 group-hover:text-brand-accent transition-colors duration-500">1,500+</h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-light/60">Healthcare Facilities</p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
            <h3 className="font-display font-bold text-4xl text-white mb-2 group-hover:text-brand-accent transition-colors duration-500">10,000+</h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-light/60">Daily Scans Reported</p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
            <h3 className="font-display font-bold text-4xl text-brand-accent mb-2 group-hover:scale-105 transition-transform duration-500">30 min</h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-light/60 mb-1">Average Turnaround</p>
            <p className="font-sans text-[9px] text-brand-light/40 italic">vs. 24-48 hrs avg</p>
          </div>

          {/* Stat 4 */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
            <h3 className="font-display font-bold text-4xl text-white mb-2 group-hover:text-brand-accent transition-colors duration-500">400+</h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-light/60">Expert Radiologists</p>
          </div>

        </div>

        <div className="mt-6 text-center">
          <p className="font-sans text-[9px] text-brand-light/30 uppercase tracking-widest">
            Source: 5C Network platform data, February 2026. AI accuracy validated in peer-reviewed research.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
