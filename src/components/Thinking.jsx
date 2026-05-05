import React from 'react';
import { motion } from 'framer-motion';

const Thinking = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="pt-20 md:pt-24 pb-12 md:pb-16 px-6 lg:px-12 bg-brand-dark relative z-20">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-4">
            OUR <span className="text-brand-accent italic">THINKING.</span>
          </h2>
          <p className="font-sans text-brand-light/60 max-w-lg">
            The frameworks behind the platform.
          </p>
        </div>

        {/* Option 1: Open Columns (Editorial Style) */}
        <div className="border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            <motion.a 
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between py-12 md:py-16 md:px-10 lg:px-12 group hover:bg-white/[0.02] transition-colors first:pl-0 last:pr-0"
            >
              <div>
                <p className="font-sans text-xs text-brand-accent font-bold uppercase tracking-widest mb-8">Framework 01</p>
                <h3 className="font-display text-4xl mb-6 group-hover:text-brand-accent transition-colors duration-300">Generalised Medical AI</h3>
                <p className="font-sans text-sm text-brand-light/70 leading-relaxed max-w-sm">
                  Why radiology AI needs to go beyond single-task detection. A framework for full-workflow AI systems.
                </p>
              </div>
              <div className="mt-16 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 w-max group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
                Read more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.a>

            <motion.a 
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-between py-12 md:py-16 md:px-10 lg:px-12 group hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <p className="font-sans text-xs text-brand-accent font-bold uppercase tracking-widest mb-8">Framework 02</p>
                <h3 className="font-display text-4xl mb-6 group-hover:text-brand-accent transition-colors duration-300">Hybrid Intelligence</h3>
                <p className="font-sans text-sm text-brand-light/70 leading-relaxed max-w-sm">
                  Neither AI alone nor humans alone. The operational model where AI and radiologists work as one.
                </p>
              </div>
              <div className="mt-16 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 w-max group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
                Read more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.a>

            <motion.a 
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between py-12 md:py-16 md:px-10 lg:px-12 group hover:bg-white/[0.02] transition-colors last:pr-0"
            >
              <div>
                <p className="font-sans text-xs text-brand-accent font-bold uppercase tracking-widest mb-8">Research Paper</p>
                <h3 className="font-display text-4xl mb-6 group-hover:text-brand-accent transition-colors duration-300">From Slices to Reports</h3>
                <p className="font-sans text-sm text-brand-light/70 leading-relaxed max-w-sm">
                  A survey of 20+ AI models for CT/MRI. Three critical gaps and a path toward the first AI radiologist.
                </p>
              </div>
              <div className="mt-16 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 w-max group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
                Read the paper <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.a>

          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Thinking;
