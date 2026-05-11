import React from 'react';

const SocialProof = () => {
  return (
    <section className="py-8 bg-brand-light border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-widest text-brand-muted uppercase mb-6">
          Backed by leading healthcare and technology investors
        </p>
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-500">
          <div className="text-xl font-bold font-sans text-brand-dark">Celesta Capital</div>
          <div className="text-xl font-bold font-sans text-brand-dark">Capria Ventures</div>
          <div className="text-xl font-bold font-sans text-brand-dark">Tata 1mg</div>
          <div className="text-xl font-bold font-sans text-brand-dark">IIMA Ventures</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;