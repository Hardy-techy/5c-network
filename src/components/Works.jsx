import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Scan arrives',
    description: 'Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI reads the scan',
    description: 'Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Report delivered',
    description: 'Structured, AI-validated report back in your RIS/PACS. Average turnaround: 30 minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Works = () => {
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="section-container border-b border-brand-border/40 pb-24 md:pb-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="text-brand-primary font-medium tracking-widest text-xs mb-4 block uppercase">For Hospitals</span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-brand-dark mb-6">
            How your AI radiologist <span className="font-medium italic text-brand-primary">works</span>
          </h2>
          <p className="text-brand-muted text-lg md:text-xl font-light max-w-2xl">
            From scan to signed report — AI runs the workflow, radiologists own the diagnosis
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-px bg-brand-border/40 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Step number circle */}
              <div className="w-20 h-20 rounded-full bg-white border border-brand-border flex items-center justify-center mb-8 shadow-sm group-hover:border-brand-primary/50 group-hover:shadow-md transition-all">
                <div className="text-brand-primary group-hover:scale-110 transition-transform">{step.icon}</div>
              </div>

              {/* Content */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-medium text-brand-primary/50">{step.number}</span>
                <h3 className="text-2xl font-normal text-brand-dark">{step.title}</h3>
              </div>
              <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 md:mt-24 pt-12 border-t border-brand-border/40 flex justify-center md:justify-start"
        >
          <a href="#contact" className="flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark/90 transition-colors text-sm" id="works-cta">
            Go live in 72 hours
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
