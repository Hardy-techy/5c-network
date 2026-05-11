import React from 'react';

const HowItWorks = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white" id="how-it-works">
      <div className="section-container">
        
        <div className="mb-20 md:mb-32">
          <span className="text-brand-primary font-medium tracking-widest text-xs mb-4 block uppercase">For Hospitals</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-brand-dark mb-6 max-w-3xl">
            How your AI radiologist <span className="font-medium italic text-brand-primary">works</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed max-w-2xl">
            From scan to signed report — AI runs the workflow, radiologists own the diagnosis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="text-[120px] leading-none font-bold text-brand-light/60 transition-colors group-hover:text-brand-primary/10 absolute -top-12 -left-4 md:-top-16 md:-left-8 z-0">1</div>
            <div className="relative z-10 pt-8">
              <h3 className="text-2xl md:text-3xl font-normal text-brand-dark mb-4 tracking-tight group-hover:text-brand-primary transition-colors">Scan arrives</h3>
              <p className="text-lg text-brand-muted font-light leading-relaxed">
                Your PACS sends studies to 5C via DICOM. No hardware needed. Live in 72 hours.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="text-[120px] leading-none font-bold text-brand-light/60 transition-colors group-hover:text-indigo-500/10 absolute -top-12 -left-4 md:-top-16 md:-left-8 z-0">2</div>
            <div className="relative z-10 pt-8">
              <h3 className="text-2xl md:text-3xl font-normal text-brand-dark mb-4 tracking-tight group-hover:text-indigo-500 transition-colors">AI reads the scan</h3>
              <p className="text-lg text-brand-muted font-light leading-relaxed">
                Bionic Vision analyzes in 10-20 seconds. Detects, segments, measures. An expert radiologist reviews and signs off.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="text-[120px] leading-none font-bold text-brand-light/60 transition-colors group-hover:text-emerald-500/10 absolute -top-12 -left-4 md:-top-16 md:-left-8 z-0">3</div>
            <div className="relative z-10 pt-8">
              <h3 className="text-2xl md:text-3xl font-normal text-brand-dark mb-4 tracking-tight group-hover:text-emerald-500 transition-colors">Report delivered</h3>
              <p className="text-lg text-brand-muted font-light leading-relaxed">
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
