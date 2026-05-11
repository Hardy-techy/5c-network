import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { SpotlightCard } from './SpotlightCard';

const HowWeHelp = () => {
  const { openModal } = useModal();

  return (
    <section className="section-padding bg-brand-dark relative z-10" id="audiences">
      <div className="section-container">
        
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            How can we <span className="text-brand-primary font-medium italic">help you?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 relative z-20">
          
          {/* Hospital Card - Large Horizontal (or Vertical on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-8 group hover:bg-white/[0.05] transition-colors duration-500 rounded-3xl h-full"
          >
            <SpotlightCard className="flex flex-col md:flex-row bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden h-full" spotlightColor="rgba(255,255,255,0.05)">
              <div className="h-64 md:h-auto md:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 to-transparent z-10 hidden md:block pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop" alt="Hospital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2 relative z-20">
                <span className="text-brand-primary font-medium uppercase tracking-widest text-xs mb-4 block">For Hospitals</span>
                <h2 className="text-2xl md:text-4xl font-normal text-white mb-6">
                  I run a hospital
                </h2>
                <p className="text-brand-light/60 text-base md:text-lg leading-relaxed mb-10 font-light max-w-sm">
                  Signed radiology reports in 30 minutes. 24/7 coverage. Pay-per-scan — no retainers. 1,500+ hospitals trust 5C.
                </p>
              
                <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-brand-primary/30 text-white font-medium group-hover:border-brand-primary transition-colors mt-auto w-fit text-sm">
                  See pricing & coverage <ArrowRight className="ml-2 w-4 h-4 text-brand-primary transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Enterprise Card - Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px', delay: 0.1 }}
            className="md:col-span-4 group hover:bg-white/[0.05] transition-colors duration-500 rounded-3xl h-full"
          >
            <SpotlightCard className="flex flex-col bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden h-full" spotlightColor="rgba(255,255,255,0.05)">
              <div className="h-48 md:h-56 w-full relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Enterprise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <span className="text-white/50 font-medium uppercase tracking-widest text-xs mb-3 block">Enterprise</span>
                <h2 className="text-2xl font-normal text-white mb-4">
                  I manage a chain
                </h2>
                <p className="text-brand-light/60 text-base leading-relaxed mb-8 font-light flex-grow">
                  Multi-site, enterprise, scale
                </p>

                <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-white/20 text-white font-medium group-hover:border-white transition-colors mt-auto w-fit text-sm">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 text-white/50 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Radiologist Card - Full Width Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px', delay: 0.2 }}
            className="md:col-span-12 group hover:border-emerald-500/30 transition-colors duration-500 rounded-3xl h-full"
          >
            <SpotlightCard className="flex flex-col md:flex-row-reverse bg-gradient-to-r from-emerald-900/10 to-transparent border border-emerald-500/10 rounded-3xl overflow-hidden h-full" spotlightColor="rgba(16, 185, 129, 0.1)">
              <div className="h-64 md:h-auto md:w-5/12 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/50 to-transparent z-10 hidden md:block pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" alt="Radiologist" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
              </div>

              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center md:w-7/12 relative z-20">
                <span className="text-emerald-400 font-medium uppercase tracking-widest text-xs mb-4 block">For Radiologists</span>
                <h2 className="text-3xl md:text-5xl font-normal text-white mb-6">
                  I'm a radiologist
                </h2>
                <p className="text-brand-light/70 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-lg">
                  Report from home. Premium night rates (+20% for 1-5 AM). Sub-specialty cases daily. 400+ radiologists.
                </p>

                <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-emerald-400/30 text-white font-medium group-hover:border-emerald-400 transition-colors mt-auto w-fit text-sm">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
