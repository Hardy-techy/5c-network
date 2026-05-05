import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="py-20 md:py-24 px-6 lg:px-12 bg-brand-dark relative z-20">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <h2 className="font-display font-bold text-5xl md:text-7xl max-w-3xl leading-[0.9] tracking-tighter uppercase">
            Meet your <br/>
            <span className="text-brand-accent italic">AI radiologist</span>
          </h2>
          <p className="max-w-sm text-sm text-brand-light/60 font-sans">
            Trained on 3 billion+ medical images. Reads CT, MRI, X-ray, and more. Validates every report. Always on, always learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/20 p-10 flex flex-col justify-between group hover:border-brand-accent/50 transition-colors"
          >
            <div>
              <h3 className="font-display text-3xl mb-4 group-hover:text-brand-accent transition-colors">AI that sees</h3>
              <p className="font-sans text-sm text-brand-light/70 leading-relaxed mb-12">
                Bionic Vision analyzes CT, MRI, X-ray, PET-CT, and ultrasound. Segments, measures, and flags critical findings — in 10-20 seconds per scan.
              </p>
            </div>
            <a href="#" className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Explore Bionic &rarr;
            </a>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0a0a] border border-white/20 p-10 flex flex-col justify-between group hover:border-brand-accent/50 transition-colors"
          >
            <div>
              <h3 className="font-display text-3xl mb-4 group-hover:text-brand-accent transition-colors">AI that reports</h3>
              <p className="font-sans text-sm text-brand-light/70 leading-relaxed mb-12">
                Dictate naturally, get structured reports. 400+ subspecialists backed by AI. Every scan read, every report signed. 30-minute turnaround.
              </p>
            </div>
            <a href="#" className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Learn more &rarr;
            </a>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/20 p-10 flex flex-col justify-between group hover:border-brand-accent/50 transition-colors"
          >
            <div>
              <h3 className="font-display text-3xl mb-4 group-hover:text-brand-accent transition-colors">AI that validates</h3>
              <p className="font-sans text-sm text-brand-light/70 leading-relaxed mb-12">
                Specialized QC agents check every report before sign-off. Catches contradictions, ensures completeness, and validates clinical accuracy automatically.
              </p>
            </div>
            <a href="#" className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              For hospitals &rarr;
            </a>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Features;
