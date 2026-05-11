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

        <div className="relative max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
            <div className="md:w-5/12 order-2 md:order-1 flex md:justify-end">
              <div className="text-left md:text-right max-w-md pl-20 md:pl-0">
                <div className="flex items-center justify-start md:justify-end gap-4 mb-4">
                  <div className="hidden md:block h-px bg-brand-border/40 flex-1 max-w-[40px]"></div>
                  <span className="text-sm font-medium text-brand-primary/50 tracking-wider">01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4">Scan arrives</h3>
                <p className="text-lg text-brand-muted font-light leading-relaxed">
                  Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.
                </p>
              </div>
            </div>
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-brand-light/50 border border-brand-border/40 flex items-center justify-center p-4 md:p-6 group-hover:bg-brand-primary/5 transition-colors absolute md:relative left-0 md:left-auto top-0 md:top-auto z-10">
                <UploadCloud className="w-8 h-8 md:w-10 md:h-10 text-brand-primary/60" />
              </div>
              <div className="hidden md:block absolute top-[50%] bottom-[-128px] w-px bg-brand-border/40 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="md:w-5/12 order-3 hidden md:block"></div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
            <div className="md:w-5/12 hidden md:block"></div>
            <div className="md:w-2/12 flex justify-center relative">
              <div className="hidden md:block absolute top-[-128px] bottom-[50%] w-px bg-brand-border/40 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-brand-light/50 border border-brand-border/40 flex items-center justify-center p-4 md:p-6 group-hover:bg-indigo-500/5 transition-colors absolute md:relative left-0 md:left-auto top-0 md:top-auto z-10">
                <Cpu className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />
              </div>
              <div className="hidden md:block absolute top-[50%] bottom-[-128px] w-px bg-brand-border/40 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="md:w-5/12 flex justify-start">
              <div className="text-left max-w-md pl-20 md:pl-0">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="text-sm font-medium text-indigo-400/50 tracking-wider">02</span>
                  <div className="hidden md:block h-px bg-brand-border/40 flex-1 max-w-[40px]"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4">AI reads the scan</h3>
                <p className="text-lg text-brand-muted font-light leading-relaxed">
                  Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
             <div className="md:w-5/12 order-2 md:order-1 flex md:justify-end">
              <div className="text-left md:text-right max-w-md pl-20 md:pl-0">
                <div className="flex items-center justify-start md:justify-end gap-4 mb-4">
                  <div className="hidden md:block h-px bg-brand-border/40 flex-1 max-w-[40px]"></div>
                  <span className="text-sm font-medium text-emerald-400/50 tracking-wider">03</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4">Report delivered</h3>
                <p className="text-lg text-brand-muted font-light leading-relaxed">
                  Structured, AI-validated report back in your RIS/PACS. Average turnaround: 30 minutes.
                </p>
              </div>
            </div>
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative">
               <div className="hidden md:block absolute top-[-128px] bottom-[50%] w-px bg-brand-border/40 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-brand-light/50 border border-brand-border/40 flex items-center justify-center p-4 md:p-6 group-hover:bg-emerald-500/5 transition-colors absolute md:relative left-0 md:left-auto top-0 md:top-auto z-10">
                <FileCheck2 className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
              </div>
            </div>
            <div className="md:w-5/12 order-3 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
