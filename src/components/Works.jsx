import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="py-20 md:py-24 px-6 lg:px-12 bg-[#050505] relative z-20">
      <div className="container mx-auto">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight">
            How your AI radiologist works
          </h2>
          <p className="font-sans text-brand-light/60 text-lg">
            From scan to signed report — AI runs the workflow, radiologists own the diagnosis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[1px] bg-white/10 -z-10"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center font-display font-bold text-3xl text-brand-dark mb-8">
              1
            </div>
            <h3 className="font-display text-3xl mb-4">Scan arrives</h3>
            <p className="font-sans text-sm text-brand-light/60 leading-relaxed max-w-xs">
              Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center font-display font-bold text-3xl text-brand-dark mb-8">
              2
            </div>
            <h3 className="font-display text-3xl mb-4">AI reads the scan</h3>
            <p className="font-sans text-sm text-brand-light/60 leading-relaxed max-w-xs">
              Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center font-display font-bold text-3xl text-brand-dark mb-8">
              3
            </div>
            <h3 className="font-display text-3xl mb-4">Report delivered</h3>
            <p className="font-sans text-sm text-brand-light/60 leading-relaxed max-w-xs">
              Structured, AI-validated report back in your RIS/PACS. Average turnaround: 30 minutes.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Works;
