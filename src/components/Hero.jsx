import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderGit2, Mail, Download, Sparkles, Terminal, Code2, Smartphone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { fadeInUp, staggerContainer } from '../utils/animations';

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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-navy-850 border border-navy-700 text-cyan-400 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Diploma in Computer Science (Final Year)</span>
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-mono text-sm sm:text-base text-slate-400 flex items-center gap-2">
                <span>Hello, World! I am</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 font-heading">
                <span className="block text-slate-100">D. Rama Venkata</span>
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Sai
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 font-heading flex flex-wrap items-center gap-2 pt-1">
                <span className="text-cyan-400">Aspiring Web Developer</span>
                <span className="text-slate-600">|</span>
                <span className="text-indigo-400">Android Programming Enthusiast</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Quick Highlights / College Badge */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1"
            >
              <div className="flex items-center gap-1.5 bg-navy-850/80 border border-navy-700/80 px-3 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>AANM & VVRSR Polytechnic College</span>
              </div>
              <div className="flex items-center gap-1.5 bg-navy-850/80 border border-navy-700/80 px-3 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-navy-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              {/* Button 2: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-slate-100 bg-navy-850 hover:bg-navy-800 border border-navy-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Button 3: Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="D_Rama_Venkata_Sai_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm text-slate-300 hover:text-cyan-400 bg-navy-900/60 hover:bg-navy-850 border border-navy-700 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Download D. Rama Venkata Sai Resume"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Creative Developer-Themed Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl opacity-75 -z-10"></div>

            {/* Floating Code Editor Window */}
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-navy-700 bg-navy-950/90 relative">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-navy-900/90 border-b border-navy-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SaiProfile.jsx</span>
                </div>
                <div className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                  React + Vite
                </div>
              </div>

              {/* Editor Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-left space-y-1">
                <div className="text-slate-500">// Personal developer manifesto</div>
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"D. Rama Venkata Sai"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">college:</span>{' '}
                  <span className="text-emerald-300">"AANM & VVRSR Polytechnic"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">"Diploma in Computer Science"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">interests:</span> [
                  <span className="text-cyan-300">"React.js"</span>,{' '}
                  <span className="text-cyan-300">"JavaScript"</span>,{' '}
                  <span className="text-indigo-300">"Android Dev"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">featuredProject:</span>{' '}
                  <span className="text-amber-300">"AI Gym Fitness"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">"Building & Learning"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">readyForInternship:</span>{' '}
                  <span className="text-cyan-400">true</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-slate-500">// Ready to collaborate</div>
                <div>
                  <span className="text-indigo-400">export default</span>{' '}
                  <span className="text-cyan-300">developer</span>;
                </div>
              </div>

              {/* Floating Tech Badges on Editor */}
              <div className="p-3 bg-navy-900/60 border-t border-navy-700/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend Architect</span>
                </div>
                <div className="flex items-center gap-1.5 text-indigo-400">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android Curious</span>
                </div>
              </div>
            </div>

            {/* Floating Mini Decorative Card 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-navy-900/95 border border-cyan-500/30 shadow-xl backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-slate-200">College Project</div>
                <div className="text-[11px] font-mono text-cyan-400">AI Gym Fitness Live</div>
              </div>
            </motion.div>

            {/* Floating Mini Decorative Card 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900/95 border border-indigo-500/30 shadow-xl backdrop-blur-md text-[11px] font-mono text-indigo-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Opportunities</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator at Bottom */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-2"
            aria-label="Scroll to About Section"
          >
            <span className="text-xs font-mono uppercase tracking-widest group-hover:text-cyan-400">
              Scroll Down
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex justify-center pt-1 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-cyan-400"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
