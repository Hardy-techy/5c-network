import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 300]);
  const scaleImage = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yImage, scale: scaleImage }}
      >
        <img 
          src="https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=2000&auto=format&fit=crop" 
          alt="Medical Teleradiology" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center mt-20"
        style={{ opacity: opacityText }}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-brand-accent tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-bold"
        >
          India's #1 Teleradiology Network
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.17, 1] }}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-2"
          >
            WHERE AI AND RADIOLOGISTS
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.17, 1], delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-brand-accent"
          >
            WORK AS ONE.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col items-center justify-center gap-8"
        >
          <div className="text-center max-w-2xl px-4">
            <p className="font-sans text-base md:text-lg text-brand-light/80 leading-relaxed">
              From scan to signed report in 30 minutes. AI runs the workflow. 
              Radiologists own the diagnosis. 10,000+ reads daily.
            </p>
          </div>
          <a href="#contact" className="hover-target bg-brand-accent text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors rounded-sm">
            Ask about 5C...
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
