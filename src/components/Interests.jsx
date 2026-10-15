import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Sparkles, Compass, ArrowRight } from 'lucide-react';
import { developmentInterests } from '../data/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Interests() {
  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>05. ASPIRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
            Development <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Interests</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
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
                viewport={{ once: true, margin: '-50px' }}
                className={`relative group rounded-3xl glass-panel p-8 bg-navy-900/80 border ${interest.borderColor} hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between shadow-card hover:shadow-card-hover`}
              >
                {/* Background Card Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${interest.color} rounded-3xl opacity-40 pointer-events-none`}
                />

                <div className="relative z-10 space-y-6 text-left">
                  {/* Card Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                        isFirst
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-glow-cyan'
                          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-glow-indigo'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Sparkles className={`w-3.5 h-3.5 ${interest.accentColor}`} />
                      <span>Specialization</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-slate-100">
                    {interest.title}
                  </h3>

                  {/* Exact Quote */}
                  <div className="relative pl-4 border-l-2 border-slate-700">
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans italic">
                      "{interest.quote}"
                    </p>
                  </div>

                  {/* Associated Focus Concepts */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Topics of Exploration
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {interest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-navy-950/80 text-slate-300 border border-navy-700 hover:border-cyan-400/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="relative z-10 mt-8 pt-4 border-t border-navy-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-400">Active Learning</span>
                  <span className={`font-semibold ${interest.accentColor} flex items-center gap-1`}>
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
