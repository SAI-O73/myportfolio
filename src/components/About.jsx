import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Smartphone, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <span>//</span>
            <span>01. BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Final-year Computer Science student passionate about crafting digital experiences.
          </p>
        </motion.div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl blur-md opacity-60"></div>

              {/* Main Profile Card */}
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-premium p-6 sm:p-8 space-y-6 text-left">
                
                {/* Visual Avatar Placeholder Frame */}
                <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 p-2 border-2 border-blue-200 flex flex-col items-center justify-center text-center group">
                  <div className="w-full h-full rounded-xl bg-white border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-heading text-4xl font-extrabold shadow-md shadow-blue-500/25 z-10 group-hover:scale-105 transition-transform duration-300">
                      {personalInfo.initials}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 mt-2 font-medium z-10">
                      D. Rama Venkata Sai
                    </span>
                  </div>

                  {/* Corner Accent Badges */}
                  <div className="absolute -top-2.5 -right-2.5 bg-white p-2 rounded-xl border border-blue-200 text-blue-600 shadow-sm">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-2.5 -left-2.5 bg-white p-2 rounded-xl border border-blue-200 text-blue-600 shadow-sm">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>

                {/* College Info Box */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-navy-900 font-heading">
                        AANM & VVRSR Polytechnic College
                      </div>
                      <div className="text-slate-600 font-mono text-[11px] mt-0.5">
                        Diploma in Computer Science (Final Year)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <MapPin className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-navy-900 font-heading">Location</div>
                      <div className="text-slate-600 font-mono text-[11px] mt-0.5">
                        Gudlavalleru, Andhra Pradesh, India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1 pt-1 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Student & Learner
                  </span>
                  <span className="text-slate-600 font-medium">Focus: React & Android</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Interests */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* College & Academic Story */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg font-sans">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Areas of Interest */}
            <div className="pt-3 space-y-3">
              <h3 className="font-heading font-bold text-base text-navy-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Primary Areas of Interest & Practice</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {personalInfo.interestsSummary.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 font-sans">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Notice Banner */}
            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs font-mono text-blue-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                Final-year polytechnic portfolio prepared for academic project evaluations, technical reviews, and upcoming internship applications.
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
