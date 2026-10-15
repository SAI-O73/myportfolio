import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  Mail,
  Download,
  Sparkles,
  Terminal,
  Code2,
  Smartphone,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { fadeInUp, staggerContainer, floatMotion, floatReverseMotion } from '../utils/animations';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white bg-grid-royal"
    >
      {/* Ambient Royal Blue Backlights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-royal-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Staggered Reveal */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-50 border border-blue-200 text-blue-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                <span>Diploma in Computer Science (Final Year)</span>
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading text-navy-900 leading-[1.1]">
                <span className="block text-navy-900">D. Rama Venkata</span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Sai
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-slate-700 flex flex-wrap items-center gap-2 pt-1">
                <span className="text-blue-600">Aspiring Web Developer</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-700">Android Programming Enthusiast</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Quick College Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 pt-1"
            >
              <div className="flex items-center gap-1.5 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-lg text-blue-900 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>AANM & VVRSR Polytechnic College</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg font-medium">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>Gudlavalleru, AP</span>
              </div>
            </motion.div>

            {/* 3 Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              {/* Button 2: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-navy-900 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Contact Me</span>
              </a>

              {/* Button 3: Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="D_Rama_Venkata_Sai_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-heading font-semibold text-sm text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
                aria-label="Download D. Rama Venkata Sai Resume"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Code Window & Floating Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Subtle Shadow Backdrop */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-xl -z-10" />

            {/* Code Window Container */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-premium overflow-hidden text-left relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>SaiProfile.jsx</span>
                </div>
                <div className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                  React + Vite
                </div>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-left space-y-1 bg-white">
                <div className="text-slate-400">// Personal developer manifesto</div>
                <div>
                  <span className="text-blue-600 font-bold">const</span>{' '}
                  <span className="text-navy-900 font-semibold">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">name:</span>{' '}
                  <span className="text-emerald-600 font-medium">"D. Rama Venkata Sai"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">college:</span>{' '}
                  <span className="text-emerald-600 font-medium">"AANM & VVRSR Polytechnic"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">education:</span>{' '}
                  <span className="text-emerald-600 font-medium">"Diploma in CS (Final Year)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">interests:</span> [
                  <span className="text-blue-600 font-semibold">"React.js"</span>,{' '}
                  <span className="text-blue-600 font-semibold">"JavaScript"</span>,{' '}
                  <span className="text-indigo-600 font-semibold">"Android Dev"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">featuredProject:</span>{' '}
                  <span className="text-amber-600 font-medium">"AI Gym Fitness"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">status:</span>{' '}
                  <span className="text-emerald-600 font-medium">"Building & Learning"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600">openForInternships:</span>{' '}
                  <span className="text-blue-600 font-bold">true</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-slate-400">// Ready to collaborate</div>
                <div>
                  <span className="text-blue-600 font-bold">export default</span>{' '}
                  <span className="text-navy-900 font-semibold">developer</span>;
                </div>
              </div>

              {/* Code Window Footer */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1.5 text-blue-700 font-medium">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend Architect</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Android Curious</span>
                </div>
              </div>
            </div>

            {/* Floating Mini Tech Badge 1: College Project */}
            <motion.div
              variants={floatMotion}
              animate="animate"
              className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white border border-blue-200 shadow-premium backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold font-heading text-navy-900">Featured College Project</div>
                <div className="text-[11px] font-mono text-blue-600 font-medium">AI Gym Fitness Live</div>
              </div>
            </motion.div>

            {/* Floating Mini Tech Badge 2: Open for Opportunities */}
            <motion.div
              variants={floatReverseMotion}
              animate="animate"
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 shadow-md text-[11px] font-mono text-emerald-700 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Internships</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-2"
            aria-label="Scroll to About Section"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 group-hover:text-blue-600">
              Explore More
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-blue-600 flex justify-center pt-1 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2 rounded-full bg-blue-600"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
