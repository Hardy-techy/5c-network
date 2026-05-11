import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Flywheel from './components/Flywheel';
import Thinking from './components/Thinking';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HowWeHelp from './components/HowWeHelp';
import LeadModal from './components/LeadModal';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-brand-light text-brand-dark selection:bg-brand-primary/20">
      <Navbar />
      <LeadModal />
      
      <main>
        <Hero />

        <Stats />
        <HowWeHelp />
        <Features />
        <HowItWorks />
        <Flywheel />
        <Thinking />
        <Trust />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
