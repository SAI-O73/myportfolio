import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { educationHistory } from '../data/portfolio';
import { fadeInUp } from '../utils/animations';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/60">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

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
            <span>04. ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight">
            Education <span className="text-blue-600">Timeline</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Formal diploma coursework and academic milestones in computer science.
          </p>
        </motion.div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative pl-7 sm:pl-9 border-l-2 border-blue-300 ml-3 sm:ml-6 group"
            >
              {/* Timeline Marker Beacon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 transition-transform group-hover:scale-110">
                <GraduationCap className="w-4 h-4 text-blue-600" />
              </div>

              {/* Main Timeline Card */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-premium hover:shadow-premium-hover hover:border-blue-300 transition-all duration-300 space-y-5 text-left">
                
                {/* Header Row: Course & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-900">
                      {edu.course}
                    </h3>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="space-y-1.5 text-sm text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-slate-800">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  {edu.description}
                </p>

                {/* Key Coursework Highlights */}
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                    Academic Highlights & Practice
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
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
