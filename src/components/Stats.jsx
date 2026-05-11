import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "1,500+", label: "Healthcare Facilities", border: true },
  { value: "10,000+", label: "Daily Scans Reported", border: true },
  { value: "30 min", label: "Average Turnaround", subtext: "vs. 24-48 hrs industry avg", border: true },
  { value: "400+", label: "Expert Radiologists", border: false },
];

const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-surface">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={index} 
              className={`flex flex-col items-center md:items-start px-6 ${
                stat.border ? 'md:border-r border-brand-border/40' : ''
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-mono text-brand-dark mb-4 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-brand-muted font-light text-lg">{stat.label}</p>
              {stat.subtext && (
                <p className="text-xs font-medium text-brand-muted/70 mt-3 bg-white/50 px-3 py-1 rounded-full border border-brand-border/30">{stat.subtext}</p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-xs text-brand-muted/60 mt-8 font-light"
        >
          Source: 5C Network platform data, February 2026. AI accuracy validated in peer-reviewed research.
        </motion.p>
      </div>
    </section>
  );
};

export default Stats;
