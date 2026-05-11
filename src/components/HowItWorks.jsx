import React from 'react';
import { UploadCloud, Cpu, FileCheck2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-16 bg-white" id="how-it-works">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Heading (Sticky for varied composition) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-brand-primary font-medium tracking-widest text-xs mb-4 block uppercase">For Hospitals</span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-brand-dark mb-6 leading-tight">
                How your AI radiologist <span className="font-medium italic text-brand-primary">works</span>
              </h2>
              <p className="text-brand-muted text-lg font-light leading-relaxed">
                From scan to signed report — AI runs the workflow, radiologists own the diagnosis.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Steps without decorative lines */}
          <div className="lg:w-2/3 flex flex-col gap-12 md:gap-16">
            
            {/* Step 1 */}
            <div className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-light/50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                <UploadCloud className="w-8 h-8 text-brand-primary/80" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-medium text-brand-primary/40 tracking-wider">01</span>
                  <h3 className="text-2xl md:text-3xl font-normal text-brand-dark">Scan arrives</h3>
                </div>
                <p className="text-lg text-brand-muted font-light leading-relaxed max-w-xl">
                  Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-light/50 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                <Cpu className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-medium text-indigo-400/40 tracking-wider">02</span>
                  <h3 className="text-2xl md:text-3xl font-normal text-brand-dark">AI reads the scan</h3>
                </div>
                <p className="text-lg text-brand-muted font-light leading-relaxed max-w-xl">
                  Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-light/50 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <FileCheck2 className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-medium text-emerald-400/40 tracking-wider">03</span>
                  <h3 className="text-2xl md:text-3xl font-normal text-brand-dark">Report delivered</h3>
                </div>
                <p className="text-lg text-brand-muted font-light leading-relaxed max-w-xl">
                  Structured, AI-validated report back in your RIS/PACS. Average turnaround: 30 minutes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
