import React from 'react';
import { UploadCloud, Cpu, FileCheck2, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-brand-surface" id="how-it-works">
      <div className="section-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-xs mb-4 block uppercase bg-brand-primary/10 w-fit mx-auto px-3 py-1 rounded-full">Automated Workflow</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-6">
            How your AI radiologist works
          </h2>
          <p className="text-lg text-brand-muted font-medium leading-relaxed">
            From scan to signed report in 30 minutes. AI runs the heavy lifting, radiologists finalize the diagnosis.
          </p>
        </div>

        {/* Workflow Diagram style layout */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-1 bg-brand-border z-0 rounded-full">
             <div className="h-full bg-brand-primary/20 w-full animate-pulse blur-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            {/* Process 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border-2 border-brand-primary/20 flex flex-col items-center justify-center mb-6 shadow-sm relative group hover:border-brand-primary transition-colors">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm border-4 border-brand-surface">1</div>
                <UploadCloud className="w-8 h-8 text-brand-dark mb-1 group-hover:text-brand-primary transition-colors" />
                <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">DICOM</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Scan Arrives</h3>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">
                Your PACS securely pushes the study to 5C via DICOM. Zero on-premise hardware required.
              </p>
            </div>

            {/* Process 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border-2 border-indigo-400/20 flex flex-col items-center justify-center mb-6 shadow-sm relative group hover:border-indigo-500 transition-colors">
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-brand-surface">2</div>
                <Cpu className="w-8 h-8 text-brand-dark mb-1 group-hover:text-indigo-600 transition-colors" />
                <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">Analysis</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">AI Processes</h3>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">
                Bionic Vision detects anomalies and drafts a structured report in seconds. A specialist reviews it.
              </p>
            </div>

            {/* Process 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border-2 border-emerald-400/20 flex flex-col items-center justify-center mb-6 shadow-sm relative group hover:border-emerald-500 transition-colors">
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm border-4 border-brand-surface">3</div>
                <FileCheck2 className="w-8 h-8 text-brand-dark mb-1 group-hover:text-emerald-600 transition-colors" />
               <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">RIS/PACS</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Report Delivered</h3>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">
                The finalized, signed report is pushed directly back into your hospital systems automatically.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
