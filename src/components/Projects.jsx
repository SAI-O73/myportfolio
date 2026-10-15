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
  TrendingUp,
} from 'lucide-react';
import { featuredProject } from '../data/portfolio';
import { fadeInUp, staggerContainer } from '../utils/animations';

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
    <section id="projects" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">College Project</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A comprehensive web application combining workout planning, health calculators, and AI assistance.
          </p>
        </motion.div>

        {/* Featured Project Showcase Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative rounded-3xl glass-panel bg-navy-900/90 border border-navy-700/80 overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-400/40"
        >
          {/* Subtle gradient strip at top of card */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            
            {/* Top Row: Project Title, Tagline & Action Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-navy-700/60">
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>{featuredProject.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-100">
                  {featuredProject.name}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base font-medium">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* Action Buttons: Live URL & GitHub Repo */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-navy-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Website</span>
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-slate-200 bg-navy-850 hover:bg-navy-800 border border-navy-700 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>

            {/* Showcase Visual & Browser Mockup Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Interactive App Preview Frame */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-navy-700 bg-navy-950 shadow-2xl group">
                  {/* Browser Mockup Chrome Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-navy-900 border-b border-navy-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-navy-950/80 border border-navy-800 text-[11px] font-mono text-slate-400 max-w-xs truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>fitness-073.vercel.app</span>
                    </div>

                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                      aria-label="Open AI Gym Fitness in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* High Fidelity UI Showcase Mockup */}
                  <div className="p-6 bg-gradient-to-b from-navy-950 to-navy-900/90 text-left space-y-6">
                    {/* Simulated Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-navy-800/80">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                          <Dumbbell className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-bold text-slate-100 text-sm">
                          AI GYM FITNESS
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Vercel Production Deployment
                      </span>
                    </div>

                    {/* Simulated Hero Banner & Calculators Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Metric Card 1: BMI & Protein */}
                      <div className="p-4 rounded-xl bg-navy-900 border border-navy-700/80 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                            Fitness Tools
                          </span>
                          <span className="text-[10px] text-cyan-400 font-mono">Calculators</span>
                        </div>
                        <div className="text-sm font-bold text-slate-100 font-heading">
                          BMI & Daily Protein Calculation
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Quick personalized health metrics calculation for workout and diet guidance.
                        </p>
                      </div>

                      {/* Metric Card 2: AI Fitness Assistant */}
                      <div className="p-4 rounded-xl bg-navy-900 border border-navy-700/80 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                            <Bot className="w-3.5 h-3.5 text-indigo-400" />
                            Smart Assistant
                          </span>
                          <span className="text-[10px] text-indigo-400 font-mono">AI Support</span>
                        </div>
                        <div className="text-sm font-bold text-slate-100 font-heading">
                          Interactive Workout Advisor
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Get workout splits, nutrition suggestions, and exercise techniques.
                        </p>
                      </div>
                    </div>

                    {/* Dashboard Preview Footer Banner */}
                    <div className="p-3.5 rounded-xl bg-navy-850/80 border border-cyan-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono text-slate-200">
                          Integrated College Project Review Ready
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">v1.0 Live</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Description & Feature Grid */}
              <div className="lg:col-span-5 space-y-6 text-left">
                {/* Description Text */}
                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-base text-slate-200">
                    Project Overview
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {featuredProject.overview}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="font-heading font-semibold text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Implemented & Highlighted Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {featuredProject.features.map((feature, fIdx) => {
                      const FeatureIcon = featureIcons[fIdx] || CheckCircle2;
                      return (
                        <div
                          key={feature.title}
                          className="p-2.5 rounded-xl bg-navy-950/70 border border-navy-700/60 flex items-start gap-2.5"
                        >
                          <div className="w-6 h-6 rounded-lg bg-navy-850 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                            <FeatureIcon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-200">
                              {feature.title}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
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
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-navy-950 text-slate-300 border border-navy-700 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
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
