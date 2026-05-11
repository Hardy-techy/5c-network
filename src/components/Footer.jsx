import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-border/20">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="/prodigi.DoGieTEj.svg" 
                alt="5C Connect Logo" 
                className="h-8 brightness-0 invert" 
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                }} 
              />
              <span className="text-xl font-medium tracking-tight">5C Network</span>
            </div>
            <p className="text-brand-muted leading-relaxed mb-8 pr-8">
              Make radiology accurate, actionable and accessible for everyone using multimodal, autonomous imaging and reporting.
            </p>
            <div className="text-brand-muted text-sm space-y-2">
              <p>helpline@5cnetwork.com</p>
              <p>5C Towers, #246, 6th Main Rd,</p>
              <p>Mico Layout, BTM 2nd Stage,</p>
              <p>BTM Layout, Bengaluru, Karnataka</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Platform</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Clinical Evidence</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">News</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Radiology AI</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Teleradiology</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">MRI Reporting</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">CT Scan Reporting</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Nighthawk Radiology</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>

          {/* For Radiologists */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Radiologists</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Apply</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Earnings</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Subspecialties</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Fresh Graduates</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Explore</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-primary transition-colors">What is GM AI?</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Hybrid Intelligence</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Clinical Flywheel</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Compare 5C</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>
        </div>

        {/* Locations Row */}
        <div className="pt-8 pb-8 border-t border-brand-border/20">
          <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-brand-muted">Locations</h4>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-brand-muted text-sm">
            <span className="hover:text-white transition-colors cursor-pointer">Bangalore</span>
            <span className="hover:text-white transition-colors cursor-pointer">Mumbai</span>
            <span className="hover:text-white transition-colors cursor-pointer">Delhi NCR</span>
            <span className="hover:text-white transition-colors cursor-pointer">Chennai</span>
            <span className="hover:text-white transition-colors cursor-pointer">Hyderabad</span>
            <span className="hover:text-white transition-colors cursor-pointer">All Locations</span>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-muted text-sm">
          <p>&copy; {new Date().getFullYear()} 5C Network. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

