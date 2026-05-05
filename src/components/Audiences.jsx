import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, ArrowRight, Network } from 'lucide-react';

const Audiences = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">How can we help you?</h2>
          <p className="text-gray-400">Tailored solutions for your specific needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Hospital Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">I run a hospital or diagnostic center</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Signed radiology reports in 30 minutes. 24/7 coverage. Pay-per-scan — no retainers. 1,500+ hospitals trust 5C.
            </p>
            <div className="flex items-center text-brand-accent font-medium text-sm gap-2 group-hover:gap-3 transition-all">
              See pricing & coverage <ArrowRight size={16} />
            </div>
          </motion.div>

          {/* Radiologist Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
              <Stethoscope size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">I'm a radiologist</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Report from home. Premium night rates (+20% for 1-5 AM). Sub-specialty cases daily. 400+ radiologists.
            </p>
            <div className="flex items-center text-brand-purple font-medium text-sm gap-2 group-hover:gap-3 transition-all">
              See what you'll earn <ArrowRight size={16} />
            </div>
          </motion.div>

          {/* Chain Manager Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Network size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">I manage a chain</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Multi-site, enterprise, scale solutions. Unified reporting and streamlined workflows across all your locations.
            </p>
            <div className="flex items-center text-emerald-400 font-medium text-sm gap-2 group-hover:gap-3 transition-all">
              Explore enterprise options <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Audiences;
