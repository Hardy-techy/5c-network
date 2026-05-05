import React from 'react';
import { motion } from 'framer-motion';

const Bento = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="pt-12 md:pt-16 pb-20 md:pb-24 px-6 lg:px-12 bg-brand-dark relative z-20">
      <div className="container mx-auto">
        
        <div className="mb-24 flex justify-between items-end">
          <h2 className="font-display font-bold text-5xl md:text-7xl max-w-3xl leading-[0.9] tracking-tighter uppercase">
            How can we <br/>
            <span className="text-brand-accent italic">help you?</span>
          </h2>
        </div>

        {/* 3-Column Grid for Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hospital Card */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between hover:border-brand-accent transition-colors group overflow-hidden relative min-h-[400px]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop" alt="Hospital Facility" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
            <div className="relative z-10">
              <p className="font-sans text-xs text-brand-light/50 uppercase tracking-widest mb-4">For Hospitals</p>
              <h3 className="font-display text-3xl mb-4 group-hover:text-brand-accent transition-colors">I run a hospital or diagnostic center</h3>
              <p className="text-brand-light/70 text-sm leading-relaxed mb-8">
                Signed radiology reports in 30 minutes. 24/7 coverage. Pay-per-scan — no retainers. 1,500+ hospitals trust 5C.
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center gap-2 font-sans text-sm font-bold border-b border-brand-accent text-brand-accent pb-1 w-max mt-auto">
              See pricing & coverage <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </motion.a>

          {/* Enterprise Card */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-[#111] border border-white/10 p-10 relative overflow-hidden group hover:border-brand-accent transition-colors min-h-[400px] flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" alt="Enterprise" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
            <div className="relative z-10">
              <p className="font-sans text-xs text-brand-light/50 uppercase tracking-widest mb-4">Enterprise</p>
              <h3 className="font-display text-3xl mb-4 group-hover:text-brand-accent transition-colors">I manage a chain</h3>
              <p className="text-brand-light/70 text-sm leading-relaxed mb-8">
                Multi-site, enterprise, scale. Unify your radiology operations across all your centers with a single platform.
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center gap-2 font-sans text-sm font-bold border-b border-brand-accent text-brand-accent pb-1 w-max mt-auto">
              Contact Enterprise Sales <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </motion.a>

          {/* Radiologist Card */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between hover:border-brand-accent transition-colors group relative overflow-hidden min-h-[400px]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" alt="Radiologist" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
            <div className="relative z-10">
              <p className="font-sans text-xs text-brand-light/50 uppercase tracking-widest mb-4">For Radiologists</p>
              <h3 className="font-display text-3xl mb-4 group-hover:text-brand-accent transition-colors">I'm a radiologist</h3>
              <p className="text-brand-light/70 text-sm leading-relaxed mb-8">
                Report from home. Premium night rates (+20% for 1-5 AM). Sub-specialty cases daily. 400+ radiologists.
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center gap-2 font-sans text-sm font-bold border-b border-brand-accent text-brand-accent pb-1 w-max mt-auto">
              See what you'll earn <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </motion.a>

        </div>
      </div>
    </motion.section>
  );
};

export default Bento;
