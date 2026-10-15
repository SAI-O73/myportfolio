import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { developmentInterests } from '../data/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Interests() {
  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-royal-100/30 rounded-full blur-3xl pointer-events-none" />

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
            <span>05. ASPIRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight">
            Development <span className="text-blue-600">Interests</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            The core domains driving my daily coding sessions and exploratory projects.
          </p>
        </motion.div>

        {/* Two Attractive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {developmentInterests.map((interest, index) => {
            const isFirst = index === 0;
            const Icon = isFirst ? Globe : Smartphone;

            return (
              <motion.div
                key={interest.title}
                variants={isFirst ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="relative group rounded-3xl bg-gradient-to-b from-blue-50/70 via-white to-white p-8 border border-blue-200 hover:border-blue-400 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative z-10 space-y-6 text-left">
                  {/* Card Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Focus Domain</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-navy-900">
                    {interest.title}
                  </h3>

                  {/* Exact Quote */}
                  <div className="relative pl-4 border-l-2 border-blue-500">
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans italic">
                      "{interest.quote}"
                    </p>
                  </div>

                  {/* Associated Focus Concepts */}
                  <div className="pt-2 space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                      Key Topics of Exploration
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {interest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white text-blue-800 border border-blue-200 hover:border-blue-400 transition-colors shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="relative z-10 mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="font-medium">Active Learning</span>
                  <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ongoing Practice
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
