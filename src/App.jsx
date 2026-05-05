import React from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import NoiseOverlay from './components/NoiseOverlay';
import Hero from './components/Hero';
import Bento from './components/Bento';
import Features from './components/Features';
import Works from './components/Works';
import Flywheel from './components/Flywheel';
import Thinking from './components/Thinking';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden">
      <NoiseOverlay />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Bento />
        <Features />
        <Works />
        <Flywheel />
        <Thinking />
        <Trust />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
