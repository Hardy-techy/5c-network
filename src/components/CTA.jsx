import React from 'react';
import { useModal } from '../context/ModalContext';

const CTA = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primaryDark to-brand-primary opacity-90"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Your AI radiologist is ready
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-medium">
            1,500+ facilities. 11 million+ scans reported. Go live in 72 hours — no hardware, no hiring. Try 10 cases free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <button onClick={openModal} className="bg-white text-brand-primary font-bold px-10 py-5 rounded-xl text-xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
              Try 10 Cases Free
            </button>
            <button className="bg-transparent border-2 border-blue-200/40 text-white font-bold px-10 py-5 rounded-xl text-xl hover:bg-white/10 transition-all w-full sm:w-auto">
              Calculate Your ROI
            </button>
          </div>
        </div>

        {/* User's Professional 3D Mascot Illustration */}
        <div className="w-72 md:w-[400px] shrink-0 relative mt-12 md:mt-0 lg:-mr-12 animate-[float_6s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full"></div>
          <img src="/mascot.png" alt="5C Network AI Radiologist Mascot" className="w-full h-auto object-contain relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
