import React from 'react';
import { motion } from 'framer-motion';
import { Eye, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Features = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-24 bg-brand-surface" id="ai-features">
      <div className="section-container">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column: Sticky Context */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-5/12"
          >
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-brand-dark mb-6">Meet your <span className="text-brand-primary font-medium italic">AI radiologist</span></h2>
              <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed mb-10">
                Trained on 3 billion+ medical images. Reads CT, MRI, X-ray, and more. Validates every report. Always on, always learning.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Feature List */}
          <div className="lg:w-7/12 flex flex-col gap-12 md:gap-16 lg:mt-8">
            
            {/* 1. Sees */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50/50 border border-blue-100/50 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-brand-dark mb-3">AI that sees</h3>
                <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed mb-4">
                  Bionic Vision analyzes CT, MRI, X-ray, PET-CT, and ultrasound. Segments, measures, and flags critical findings in <span className="font-medium text-brand-dark">10-20 seconds</span> per scan.
                </p>
                <button onClick={openModal} className="inline-flex items-center text-brand-primary font-medium hover:opacity-80 transition-opacity text-sm group/btn">
                  Explore Bionic <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* 2. Reports */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-50/50 border border-purple-100/50 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-brand-dark mb-3">AI that reports</h3>
                <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed mb-4">
                  Dictate naturally, get structured reports. Empowered by <span className="font-medium text-brand-dark">400+</span> subspecialists backed by AI. Every scan read, every report signed. 30-minute turnaround.
                </p>
                <button onClick={openModal} className="inline-flex items-center text-purple-600 font-medium hover:opacity-80 transition-opacity text-sm group/btn">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* 3. Validates */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-brand-dark mb-3">AI that validates</h3>
                <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed">
                  Specialized QC agents check every report before sign-off. Catches contradictions, ensures completeness, and validates clinical accuracy automatically.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
