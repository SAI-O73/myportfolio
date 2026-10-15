import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import BackgroundElements from './components/BackgroundElements';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-600 font-sans selection:bg-blue-600 selection:text-white">
      {/* Subtle Desktop Mouse Glow */}
      <CursorGlow />

      {/* Lightweight Ambient Blue Backlights */}
      <BackgroundElements />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
