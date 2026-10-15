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

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-cyan-400 selection:text-navy-950">
      {/* Subtle Desktop Mouse Glow */}
      <CursorGlow />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
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
