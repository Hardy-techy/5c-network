import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#e5e5e5] pt-16 md:pt-24 pb-12 px-6 lg:px-12 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 hover-target inline-block">
              YOUR AI RADIOLOGIST <br/>
              <span className="text-brand-accent">IS READY.</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-md">
              1,500+ facilities. 11 million+ scans reported. Go live in 72 hours — no hardware, no hiring. Try 10 cases free.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#" className="hover-target bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors">
                Request a Demo
              </a>
              <a href="#" className="hover-target border border-white/20 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Calculate Your ROI
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 font-sans text-sm tracking-wide md:col-span-2 lg:col-span-1">
            <div>
              <p className="text-white/40 mb-6 uppercase text-xs font-bold">Company</p>
              <img src="/prodigi.DoGieTEj.svg" alt="5C Network Logo" className="h-8 mb-4" />
              <p className="text-brand-light/60 text-xs leading-relaxed mb-6 max-w-[200px] normal-case tracking-normal font-sans">
                Make radiology accurate, actionable and accessible for everyone using multimodal, autonomous imaging and reporting.
              </p>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">Platform</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">News</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 mb-6 uppercase text-xs font-bold">Explore 5C</p>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">What is GM AI?</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">Hybrid Intelligence</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">The Clinical Flywheel</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 mb-6 uppercase text-xs font-bold">Services</p>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">Bionic AI Suite</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">Teleradiology</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">MRI/CT Reporting</a></li>
                <li><a href="#" className="hover-target hover:text-brand-accent transition-colors">Enterprise Solutions</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 mb-6 uppercase text-xs font-bold">Locations</p>
              <ul className="flex flex-col gap-4 text-brand-light/60">
                <li>Bangalore</li>
                <li>Mumbai</li>
                <li>Delhi NCR</li>
                <li>Chennai</li>
                <li>Hyderabad</li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 mb-6 uppercase text-xs font-bold">Contact Info</p>
              <ul className="flex flex-col gap-4">
                <li className="text-white">helpline@5cnetwork.com</li>
                <li className="text-white/60">5C Towers<br/>#246, 6th Main Rd,<br/>Mico Layout, BTM 2nd Stage,<br/>Bengaluru, Karnataka</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-sans text-white/40 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} 5C Network. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover-target hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover-target hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
