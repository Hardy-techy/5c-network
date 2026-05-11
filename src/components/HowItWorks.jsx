import React from 'react';
import { UploadCloud, Cpu, FileCheck2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-16 bg-white overflow-hidden" id="how-it-works">
      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="flex-1 lg:text-left z-10 relative">
            <span className="text-brand-primary font-medium tracking-widest text-xs mb-4 block uppercase">For Hospitals</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-brand-dark mb-6">
              How your AI radiologist <span className="font-medium italic text-brand-primary">works</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-muted font-light mb-12 leading-relaxed max-w-xl">
              From scan to signed report — AI runs the workflow, radiologists own the diagnosis.
            </p>
          </div>

          <div className="flex-1 w-full relative z-10">
            <div className="flex flex-col gap-6 md:pl-12">
              
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-3xl border border-brand-border/40 flex gap-6 items-start hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center shrink-0">
                  <UploadCloud className="w-6 h-6 text-brand-primary/80" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-brand-primary/40 tracking-wider">01</span>
                    <h4 className="text-xl font-normal text-brand-dark tracking-tight">Scan arrives</h4>
                  </div>
                  <p className="text-brand-muted font-light leading-relaxed">
                    Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl border border-brand-border/40 flex gap-6 items-start md:ml-8 hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-indigo-400/40 tracking-wider">02</span>
                    <h4 className="text-xl font-normal text-brand-dark tracking-tight">AI reads the scan</h4>
                  </div>
                  <p className="text-brand-muted font-light leading-relaxed">
                    Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl border border-brand-border/40 flex gap-6 items-start md:ml-16 hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center shrink-0 relative z-10">
                  <FileCheck2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-emerald-400/40 tracking-wider">03</span>
                    <h4 className="text-xl font-normal text-brand-dark tracking-tight">Report delivered</h4>
                  </div>
                  <p className="text-brand-muted font-light leading-relaxed">
                    Structured, AI-validated report back in your RIS/PACS. Average turnaround: 30 minutes.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
