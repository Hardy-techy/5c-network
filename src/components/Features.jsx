import React from 'react';
import { Eye, FileText, CheckCircle2, Scan, Activity, Shield, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { SpotlightCard } from './SpotlightCard';

const Features = () => {
  const { openModal } = useModal();

  return (
    <section className="section-padding bg-brand-surface">
      <div className="section-container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight mb-6">Meet your <span className="text-brand-primary font-medium italic">AI radiologist</span></h2>
          <p className="text-lg md:text-xl text-brand-muted font-light">
            Trained on 3 billion+ medical images. Reads CT, MRI, X-ray, and more. Validates every report. Always on, always learning.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          <SpotlightCard className="md:col-span-8 bg-white border border-brand-border/60 shadow-sm rounded-3xl p-0 overflow-hidden flex flex-col md:flex-row shadow-card hover:shadow-card-hover transition-shadow">
            <div className="p-10 md:p-12 flex flex-col flex-grow md:w-1/2 justify-center relative z-20">
              <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center mb-8 text-brand-primary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-normal tracking-tight mb-4">AI that sees</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow">
                Bionic Vision analyzes CT, MRI, X-ray, PET-CT, and ultrasound. Segments, measures, and flags critical findings — in <span className="font-mono text-brand-dark px-1">10-20s</span> per scan.
              </p>
              <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-brand-primary/30 text-brand-primary font-medium hover:border-brand-primary transition-colors text-sm w-fit group">
                Explore Bionic <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="h-64 md:h-auto md:w-1/2 bg-blue-50 relative overflow-hidden border-l border-brand-border/60 hidden md:block">
               {/* Abstract placeholder for UI/graphic */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563EB 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
               <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] rounded-tl-full bg-gradient-to-tr from-brand-primary/10 to-transparent"></div>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(147, 51, 234, 0.15)" className="md:col-span-4 bg-white border border-brand-border/60 shadow-sm rounded-3xl p-0 overflow-hidden flex flex-col shadow-card hover:shadow-card-hover transition-shadow">
            <div className="p-10 flex flex-col flex-grow relative z-20">
              <div className="w-14 h-14 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-center mb-8 text-purple-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-normal tracking-tight mb-4">AI that reports</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow">
                Dictate naturally, get structured reports. <span className="font-mono text-brand-dark">400+</span> subspecialists backed by AI. Every scan read, every report signed. 30-minute turnaround.
              </p>
              <button onClick={openModal} className="inline-flex items-center pb-2 border-b border-purple-600/30 text-purple-600 font-medium hover:border-purple-600 transition-colors text-sm w-fit mt-auto group">
                Learn more <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.15)" className="md:col-span-12 bg-white border border-brand-border/60 shadow-sm rounded-3xl p-0 overflow-hidden flex flex-col md:flex-row shadow-card hover:shadow-card-hover transition-shadow">
            <div className="p-10 md:p-12 lg:p-16 flex flex-col flex-grow justify-center md:w-1/2 relative z-20">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-center mb-8 text-emerald-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-normal tracking-tight text-brand-dark mb-6">AI that validates</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow text-lg max-w-lg">
                Specialized QC agents check every report before sign-off. Catches contradictions, ensures completeness, and validates clinical accuracy automatically.
              </p>
              {/* No button per text file */}
            </div>
             <div className="h-64 md:h-auto md:w-1/2 bg-emerald-50/50 relative overflow-hidden border-l border-brand-border/60 hidden md:block">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10B981 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
               <div className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[120%] rounded-tr-full bg-gradient-to-tl from-emerald-500/5 to-transparent"></div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
