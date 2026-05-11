import React from 'react';
import { UploadCloud, Cpu, FileCheck2, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-white" id="how-it-works">
      <div className="section-container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-brand-primary font-medium tracking-widest text-xs mb-4 block uppercase">For Hospitals</span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-brand-dark mb-6">
            How your AI radiologist <span className="font-medium italic text-brand-primary">works</span>
          </h2>
          <p className="text-brand-muted text-lg md:text-xl font-light max-w-2xl">
            From scan to signed report — AI runs the workflow, radiologists own the diagnosis
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-[2px] bg-brand-border/60 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-20 h-20 rounded-full bg-white border border-brand-border flex items-center justify-center mb-8 shadow-sm group-hover:border-brand-primary/50 group-hover:shadow-md transition-all">
                <UploadCloud className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-medium text-brand-primary/50">01</span>
                <h3 className="text-2xl font-normal text-brand-dark">Scan arrives</h3>
              </div>
              <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed">
                Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-20 h-20 rounded-full bg-white border border-brand-border flex items-center justify-center mb-8 shadow-sm group-hover:border-indigo-400/50 group-hover:shadow-md transition-all">
                <Cpu className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-medium text-indigo-400/40">02</span>
                <h3 className="text-2xl font-normal text-brand-dark">AI reads the scan</h3>
              </div>
              <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed">
                Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-20 h-20 rounded-full bg-white border border-brand-border flex items-center justify-center mb-8 shadow-sm group-hover:border-emerald-400/50 group-hover:shadow-md transition-all">
                <FileCheck2 className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-medium text-emerald-400/40">03</span>
                <h3 className="text-2xl font-normal text-brand-dark">Report delivered</h3>
              </div>
              <p className="text-base md:text-lg text-brand-muted font-light leading-relaxed">
                Structured, AI-validated report back in your RIS/PACS. Average turnaround: 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
