import React from 'react';
import { motion } from 'framer-motion';

const Flywheel = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="bg-brand-accent text-brand-dark py-20 md:py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Column - Sticky Heading */}
          <div className="relative">
            <div className="md:sticky md:top-32 pr-8">
              <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter leading-[0.85] mb-8 break-words">
                THE<br/>CLINICAL<br/>FLYWHEEL.
              </h2>
              <p className="font-sans font-medium max-w-sm">
                Every scan makes the AI smarter. A self-reinforcing cycle that compounds daily. 
                10,000+ expert corrections per day.
              </p>
            </div>
          </div>

          {/* Right Column - Scrolling Steps */}
          <div className="flex flex-col gap-32">
            
            <div className="relative hover-target group">
              <div className="font-sans text-9xl font-extrabold opacity-10 absolute -top-16 -left-8 pointer-events-none group-hover:text-white transition-colors duration-500">1</div>
              <h3 className="font-display text-4xl font-bold mb-4">AI reads</h3>
              <p className="font-sans font-medium text-lg leading-relaxed">
                Analyzes the scan in 10 to 20 seconds. Detects, segments, and drafts a structured report.
              </p>
            </div>

            <div className="relative hover-target group">
              <div className="font-sans text-9xl font-extrabold opacity-10 absolute -top-16 -left-8 pointer-events-none group-hover:text-white transition-colors duration-500">2</div>
              <h3 className="font-display text-4xl font-bold mb-4">Radiologist validates</h3>
              <p className="font-sans font-medium text-lg leading-relaxed">
                400+ subspecialists review, correct, and sign off. Every report, every scan.
              </p>
            </div>

            <div className="relative hover-target group">
              <div className="font-sans text-9xl font-extrabold opacity-10 absolute -top-16 -left-8 pointer-events-none group-hover:text-white transition-colors duration-500">3</div>
              <h3 className="font-display text-4xl font-bold mb-4">AI improves</h3>
              <p className="font-sans font-medium text-lg leading-relaxed">
                Every correction feeds back into the model. The next scan gets a better AI.
              </p>
            </div>

          </div>

        </div>
      </div>
      
      {/* Moving Marquee */}
      <div className="mt-32 w-full overflow-hidden flex whitespace-nowrap border-y border-brand-dark/20 py-4">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="font-display text-5xl font-bold uppercase tracking-widest flex gap-12 text-brand-dark/40"
        >
          <span>ISO 27001 Certified</span>
          <span>•</span>
          <span>ISO 13485 Certified</span>
          <span>•</span>
          <span>ISO 9001 Certified</span>
          <span>•</span>
          <span>ISO 27701 Certified</span>
          <span>•</span>
          <span>ISO 27001 Certified</span>
          <span>•</span>
          <span>ISO 13485 Certified</span>
          <span>•</span>
          <span>ISO 9001 Certified</span>
          <span>•</span>
          <span>ISO 27701 Certified</span>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default Flywheel;
