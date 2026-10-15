import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle, Award } from 'lucide-react';
import { educationHistory } from '../data/portfolio';
import { fadeInUp } from '../utils/animations';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-950/70">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>04. ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Formal diploma coursework and academic milestones in computer science.
          </p>
        </motion.div>

        {/* Education Timeline / Card Container */}
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 ml-3 sm:ml-6 group"
            >
              {/* Timeline Marker Beacon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-navy-950 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan transition-transform group-hover:scale-110">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Main Timeline Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 bg-navy-900/85 border border-navy-700/80 shadow-card hover:border-cyan-400/40 transition-all duration-300 space-y-5 text-left">
                
                {/* Header row: Course & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100">
                      {edu.course}
                    </h3>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="space-y-1.5 text-sm text-slate-300">
                  <div className="flex items-center gap-2 font-medium text-slate-200">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Coursework Highlights */}
                <div className="pt-2 border-t border-navy-700/60 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Academic Highlights & Practice
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
