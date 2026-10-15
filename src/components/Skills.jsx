import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Wrench,
  Code2,
  Palette,
  Braces,
  Atom,
  Zap,
  Layout,
  FileCode,
  Layers,
  Component,
  Cpu,
  Terminal,
  GitBranch,
  Github,
  Cloud,
  Database,
  CheckCircle,
} from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Icon resolver for dynamic rendering
const iconMap = {
  Globe,
  Smartphone,
  Wrench,
  Code2,
  Palette,
  Braces,
  Atom,
  Zap,
  Layout,
  FileCode,
  Layers,
  Component,
  Cpu,
  Terminal,
  GitBranch,
  Github,
  Cloud,
  Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-950/80">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tooling</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Technologies and tools I practice with during diploma coursework and project development.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const HeaderIcon = iconMap[category.iconName] || Globe;
            const isCyanAccent = catIdx === 0;
            const isIndigoAccent = catIdx === 1;

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: catIdx * 0.15 }}
                className="group relative rounded-2xl glass-panel p-6 sm:p-7 bg-navy-900/80 border border-navy-700 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between shadow-card hover:shadow-card-hover"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-navy-700/80">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isCyanAccent
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20'
                          : isIndigoAccent
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20'
                          : 'bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500/20'
                      }`}
                    >
                      <HeaderIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Items List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-navy-950/60 border border-navy-700/60 hover:border-navy-600 hover:bg-navy-850/80 transition-all duration-200 group/skill"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-navy-900 flex items-center justify-center text-slate-300 group-hover/skill:text-cyan-400 transition-colors">
                              <SkillIcon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-slate-200 group-hover/skill:text-slate-100">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-navy-900 text-slate-400 border border-navy-700 group-hover/skill:border-cyan-400/30 group-hover/skill:text-cyan-300 transition-colors">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-6 pt-3 border-t border-navy-700/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400/90">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Practical Knowledge
                  </span>
                  <span>{category.skills.length} skills listed</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
