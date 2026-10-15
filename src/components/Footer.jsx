import React from 'react';
import {
  ArrowUp,
  Github,
  Mail,
  Phone,
  Instagram,
  GraduationCap,
  MapPin,
  ExternalLink,
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
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-12 overflow-hidden text-left">
      {/* Top subtle royal blue accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-150">
          
          {/* Column 1: Personal Branding & Role */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/20">
                <span className="font-heading font-extrabold text-sm tracking-wider text-white">
                  {personalInfo.initials}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-900">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-sm font-semibold text-blue-600">
              {personalInfo.role}
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 font-sans max-w-sm">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{personalInfo.college}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Final-Year Diploma Student Portfolio
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-navy-900 uppercase tracking-wider">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-600 hover:text-blue-600 transition-colors inline-block font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-navy-900 uppercase tracking-wider">
              Direct Contact & Socials
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:+91${personalInfo.phone}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>+91 {personalInfo.phone}</span>
              </a>

              <a
                href={personalInfo.instagramUrl || personalInfo.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                <Instagram className="w-4 h-4 text-blue-600 shrink-0" />
                <span>@{personalInfo.socialUsername}</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                <Github className="w-4 h-4 text-slate-500 shrink-0" />
                <span>github.com/SAI-O73</span>
              </a>
            </div>

            {/* Back to Top Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Back to top of the page"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Designed and developed by</span>
            <span className="text-blue-600 font-bold">{personalInfo.preferredName}</span>
            <span>with React & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
