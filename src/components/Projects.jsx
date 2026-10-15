import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Dumbbell,
  Calculator,
  Bot,
  ShieldCheck,
  LayoutDashboard,
  Apple,
  Sparkles,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { featuredProject } from '../data/portfolio';
import { fadeInUp } from '../utils/animations';

const featureIcons = [
  Apple,          // Fitness and diet planning
  Flame,          // Protein calculator
  Calculator,     // BMI calculator
  Bot,            // AI fitness assistant
  ShieldCheck,    // User Authentication
  LayoutDashboard // User Dashboard
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-royal-100/30 rounded-full blur-3xl pointer-events-none" />

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
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight">
            Featured <span className="text-blue-600">College Project</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            A comprehensive web application combining workout planning, health calculators, and AI assistance.
          </p>
        </motion.div>

        {/* Featured Project Showcase Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-premium hover:shadow-premium-hover hover:border-blue-300 transition-all duration-300"
        >
          {/* Royal Blue Top Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600" />

          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            
            {/* Top Row: Title, Tagline & Action Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>{featuredProject.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy-900">
                  {featuredProject.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* Action Buttons: Live URL & GitHub Repo */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Website</span>
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 active:scale-[0.98] transition-all duration-200 shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>

            {/* Showcase Visual & UI Mockup Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Browser Mockup Frame with Hover Zoom */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group">
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-slate-300 max-w-xs truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>fitness-073.vercel.app</span>
                    </div>

                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors p-1"
                      aria-label="Open AI Gym Fitness in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* UI Showcase Inside Mockup with subtle zoom on card hover */}
                  <div className="p-6 bg-gradient-to-b from-slate-900 to-slate-950 text-left space-y-6 transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    {/* Brand Banner */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                          <Dumbbell className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-bold text-white text-sm tracking-wide">
                          AI GYM FITNESS
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Vercel Production Deployment
                      </span>
                    </div>

                    {/* Feature Cards Grid Inside Mockup */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Card 1: BMI & Protein */}
                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span className="font-semibold flex items-center gap-1.5">
                            <Calculator className="w-3.5 h-3.5 text-blue-400" />
                            Fitness Tools
                          </span>
                          <span className="text-[10px] text-blue-400 font-mono">Calculators</span>
                        </div>
                        <div className="text-sm font-bold text-white font-heading">
                          BMI & Daily Protein Calculation
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Quick personalized health metrics calculation for workout and diet guidance.
                        </p>
                      </div>

                      {/* Card 2: AI Assistant */}
                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span className="font-semibold flex items-center gap-1.5">
                            <Bot className="w-3.5 h-3.5 text-indigo-400" />
                            Smart Assistant
                          </span>
                          <span className="text-[10px] text-indigo-400 font-mono">AI Support</span>
                        </div>
                        <div className="text-sm font-bold text-white font-heading">
                          Interactive Workout Advisor
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Get workout splits, nutrition suggestions, and exercise techniques.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status Banner */}
                    <div className="p-3.5 rounded-xl bg-slate-800/60 border border-blue-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-mono text-slate-200">
                          Integrated College Project Review Ready
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400 font-semibold">v1.0 Live</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Overview & Features List */}
              <div className="lg:col-span-5 space-y-6 text-left">
                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-base text-navy-900">
                    Project Overview
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    {featuredProject.description}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans">
                    {featuredProject.overview}
                  </p>
                </div>

                {/* Implemented Features */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="font-heading font-semibold text-xs font-mono text-blue-700 uppercase tracking-wider">
                    Highlighted Working Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {featuredProject.features.map((feature, fIdx) => {
                      const FeatureIcon = featureIcons[fIdx] || CheckCircle2;
                      return (
                        <div
                          key={feature.title}
                          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-2xs">
                            <FeatureIcon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-navy-900 font-heading">
                              {feature.title}
                            </div>
                            <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                              {feature.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-500 mb-2 font-medium">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
