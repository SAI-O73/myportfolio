import React from 'react';
import {
  ArrowUp,
  Github,
  Mail,
  Phone,
  AtSign,
  GraduationCap,
  MapPin,
  Heart,
  Code2,
} from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-navy-950 border-t border-navy-700/80 pt-16 pb-12 overflow-hidden text-left">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-700/60">
          
          {/* Column 1: Personal Branding & Role (Col Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-850 to-navy-900 border border-cyan-400/40 flex items-center justify-center shadow-glow-cyan">
                <span className="font-heading font-extrabold text-sm tracking-wider text-cyan-400">
                  {personalInfo.initials}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-100">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-sm font-medium text-cyan-400">
              {personalInfo.role}
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 font-sans max-w-sm">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{personalInfo.college}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-400">
              Final-Year Diploma Student Portfolio
            </div>
          </div>

          {/* Column 2: Quick Links (Col Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social Handles (Col Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
              Direct Contact & Socials
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:+91${personalInfo.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+91 {personalInfo.phone}</span>
              </a>

              <a
                href={personalInfo.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <AtSign className="w-4 h-4 text-sky-400 shrink-0" />
                <span>@{personalInfo.socialUsername} (Profile)</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400 shrink-0" />
                <span>github.com/SAI-O73</span>
              </a>
            </div>

            {/* Back to Top Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-cyan-400 bg-navy-900 border border-navy-700 hover:border-cyan-400 hover:bg-navy-850 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Back to top of the page"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed and developed by</span>
            <span className="text-cyan-400 font-semibold">{personalInfo.preferredName}</span>
            <span>with React & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
