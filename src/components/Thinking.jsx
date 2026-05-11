import React from 'react';
import { Network, Users, Database, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';

const Thinking = () => {
  const { openModal } = useModal();
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-brand-dark mb-6">Our <span className="font-medium italic text-brand-primary">Thinking</span></h2>
          <p className="text-lg md:text-xl text-brand-muted font-light">
            The frameworks behind the platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 border border-brand-border/40 rounded-3xl hover:border-brand-primary/40 transition-all duration-300 group flex flex-col overflow-hidden bg-white shadow-sm hover:shadow-md"
          >
            <div className="p-10 flex flex-col flex-grow">
              <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 text-brand-primary group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-normal tracking-tight mb-4">Generalised Medical AI</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow">
                Why radiology AI needs to go beyond single-task detection. A framework for full-workflow AI systems.
              </p>
              <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-brand-primary/30 text-brand-primary font-light group-hover:border-brand-primary transition-colors text-sm w-fit mt-auto">
                Read more <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 border border-brand-border/40 rounded-3xl hover:border-indigo-400/40 transition-all duration-300 group flex flex-col overflow-hidden bg-white shadow-sm hover:shadow-md"
          >
            <div className="p-10 flex flex-col flex-grow">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-8 text-indigo-500 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-normal tracking-tight mb-4">Hybrid Intelligence</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow">
                Neither AI alone nor humans alone. The operational model where AI and radiologists work as one.
              </p>
              <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-indigo-400/30 text-indigo-500 font-light group-hover:border-indigo-400 transition-colors text-sm w-fit mt-auto">
                Read more <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 border border-brand-border/40 rounded-3xl hover:border-emerald-400/40 transition-all duration-300 group flex flex-col overflow-hidden bg-white shadow-sm hover:shadow-md"
          >
            <div className="p-10 flex flex-col flex-grow">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50/50 flex items-center justify-center mb-8 text-emerald-500 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-normal tracking-tight mb-4">From Slices to Reports</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow">
                A survey of 20+ AI models for CT/MRI. Three critical gaps and a path toward the first AI radiologist.
              </p>
              <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-emerald-400/30 text-emerald-500 font-light group-hover:border-emerald-400 transition-colors text-sm w-fit mt-auto">
                Read the paper <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Thinking;
