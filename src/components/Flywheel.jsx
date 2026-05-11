import React from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';

const Flywheel = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-surface overflow-hidden">
      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 lg:text-left z-10 relative">
            <span className="text-brand-primary font-medium tracking-widest text-xs mb-4 block uppercase">The Clinical Flywheel</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 text-brand-dark leading-[1.1] tracking-tight">
              Every scan makes the AI <span className="font-medium italic text-brand-primary">smarter.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-muted font-light mb-12 leading-relaxed max-w-xl">
              A self-reinforcing cycle that compounds daily. 10,000+ expert corrections per day. The AI that reads your scan tomorrow is better than the one that reads it today.
            </p>
            <button className="flex items-center justify-center bg-brand-dark text-white px-6 py-3 rounded-full font-medium hover:bg-brand-dark/90 transition-colors text-sm w-fit">
              Learn how the flywheel works <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 w-full relative z-10">
            <div className="flex flex-col gap-6 md:pl-12">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-brand-border/40 flex gap-6 items-start hover:border-brand-primary/30 transition-colors shadow-sm">
                <div className="text-brand-primary/40 font-medium text-xl shrink-0 mt-1">01</div>
                <div>
                  <h4 className="text-xl font-normal mb-2 text-brand-dark tracking-tight">AI reads</h4>
                  <p className="text-brand-muted font-light leading-relaxed">Analyzes the scan in 10 to 20 seconds. Detects, segments, and drafts a structured report.</p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-brand-border/40 flex gap-6 items-start md:ml-8 hover:border-brand-primary/30 transition-colors shadow-sm">
                <div className="text-indigo-400/40 font-medium text-xl shrink-0 mt-1">02</div>
                <div>
                  <h4 className="text-xl font-normal mb-2 text-brand-dark tracking-tight">Radiologist validates</h4>
                  <p className="text-brand-muted font-light leading-relaxed">400+ subspecialists review, correct, and sign off. Every report, every scan.</p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-brand-border/40 flex gap-6 items-start md:ml-16 relative overflow-hidden shadow-sm hover:border-brand-primary/30 transition-colors group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                <div className="text-brand-primary/40 font-medium text-xl shrink-0 mt-1 relative z-10">03</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-normal mb-2 text-brand-dark tracking-tight">AI improves</h4>
                  <p className="text-brand-muted font-light leading-relaxed">Every correction feeds back into the model. The next scan gets a better AI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flywheel;
