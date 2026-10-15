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
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/60">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-royal-100/40 rounded-full blur-3xl pointer-events-none" />

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
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight">
            Skills & <span className="text-blue-600">Tooling</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Technologies and tools I practice with during diploma coursework and project development.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const HeaderIcon = iconMap[category.iconName] || Globe;

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: catIdx * 0.12 }}
                className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 hover:border-blue-300 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <HeaderIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-navy-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Items List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-1">
                    {category.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-150 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200 group/skill"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover/skill:text-blue-600 group-hover/skill:border-blue-200 transition-colors shadow-2xs">
                              <SkillIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700 group-hover/skill:text-navy-900">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-blue-700 border border-blue-200 font-medium">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    Practical Knowledge
                  </span>
                  <span className="font-medium">{category.skills.length} skills listed</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
