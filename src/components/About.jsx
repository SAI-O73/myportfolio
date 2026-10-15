import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Smartphone, Sparkles, CheckCircle2, User } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
            <span className="text-cyan-400">//</span>
            <span>01. BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Final-year Computer Science student passionate about crafting digital experiences.
          </p>
        </motion.div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card Visual / Placeholder */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing Outline Backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-3xl blur-md opacity-30"></div>

              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl glass-panel p-6 sm:p-8 bg-navy-900/90 border border-navy-700 space-y-6">
                
                {/* Visual Avatar Placeholder Frame */}
                <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-navy-800 via-navy-850 to-navy-950 p-1 border-2 border-cyan-400/40 shadow-inner flex flex-col items-center justify-center text-center group">
                  <div className="w-full h-full rounded-xl bg-navy-950/80 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Tech Rings */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-heading text-3xl font-extrabold shadow-glow-cyan z-10">
                      {personalInfo.initials}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 mt-2 z-10">
                      D. Rama Venkata Sai
                    </span>
                  </div>

                  {/* Corner Accent Icons */}
                  <div className="absolute -top-2 -right-2 bg-navy-850 p-1.5 rounded-lg border border-cyan-400/40 text-cyan-400 shadow-md">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-navy-850 p-1.5 rounded-lg border border-indigo-400/40 text-indigo-400 shadow-md">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>

                {/* College Info Box */}
                <div className="space-y-3 pt-2 text-left">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-navy-700/80">
                    <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-200">
                        AANM & VVRSR Polytechnic College
                      </div>
                      <div className="text-slate-400 font-mono text-[11px]">
                        Diploma in Computer Science (Final Year)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-navy-700/80">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-200">Location</div>
                      <div className="text-slate-400 font-mono text-[11px]">
                        Gudlavalleru, Andhra Pradesh, India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2 pt-1 border-t border-navy-700/60">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Student & Learner
                  </span>
                  <span className="text-slate-400">Focus: React & Android</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Interests */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* College & Academic Story */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Areas of Interest */}
            <div className="pt-4 space-y-3">
              <h3 className="font-heading font-semibold text-base text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Primary Areas of Interest & Practice</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {personalInfo.interestsSummary.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-navy-700/70 hover:border-cyan-400/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200 font-sans">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on Authenticity */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs font-mono text-cyan-300 flex items-start gap-2.5">
              <div className="mt-0.5 text-cyan-400">ℹ</div>
              <div>
                Final-year polytechnic portfolio prepared for academic project evaluations, technical interviews, and upcoming internship applications.
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
