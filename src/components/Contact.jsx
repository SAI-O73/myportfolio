import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  AtSign,
  User,
  MessageSquare,
  FileText,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { sendEmail } from '../services/emailService';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    hp_field: '', // Honeypot field for bot/spam protection
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    isConfigMissing: false,
  });

  // Basic email format validator
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam filter
    if (formData.hp_field) {
      console.warn('Spam submission detected via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus({ submitting: true, success: false, error: null, isConfigMissing: false });

    try {
      const result = await sendEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (result.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          isConfigMissing: false,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          hp_field: '',
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: result.message,
          isConfigMissing: !!result.isConfigMissing,
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'An unexpected error occurred. Please try again.',
        isConfigMissing: false,
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950/90">
      {/* Background glow accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span>06. REACH OUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Have a question, feedback on my projects, or an internship opportunity? Send a message directly.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-slate-100">
                Let's talk code & opportunities
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am actively seeking internship roles and collaborative project opportunities in web development and Android programming. Feel free to contact me via the form or through my direct contacts below.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-start gap-4 p-4 rounded-2xl glass-panel bg-navy-900/80 border border-navy-700/80 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors truncate">
                    {personalInfo.email}
                  </div>
                  <div className="text-[11px] text-cyan-400/80 font-mono flex items-center gap-1">
                    <span>Direct recipient</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:+91${personalInfo.phone}`}
                className="group flex items-start gap-4 p-4 rounded-2xl glass-panel bg-navy-900/80 border border-navy-700/80 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono text-slate-400">Phone Number</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {personalInfo.formattedPhone}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Call / WhatsApp
                  </div>
                </div>
              </a>

              {/* Social Media Card */}
              <a
                href={personalInfo.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl glass-panel bg-navy-900/80 border border-navy-700/80 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <AtSign className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono text-slate-400">Social Media</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    @{personalInfo.socialUsername}
                  </div>
                  <div className="text-[11px] text-cyan-400/80 font-mono flex items-center gap-1">
                    <span>Configurable Profile URL</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* College Location Note */}
              <div className="p-4 rounded-2xl bg-navy-950/60 border border-navy-700/60 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 leading-relaxed font-sans">
                  <span className="font-semibold text-slate-300 block">
                    {personalInfo.college}
                  </span>
                  {personalInfo.location}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Controlled EmailJS Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 bg-navy-900/90 border border-navy-700 shadow-2xl relative">
              
              <h3 className="text-xl font-bold font-heading text-slate-100 mb-2 text-left">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 text-left mb-6 font-sans">
                Messages are routed through EmailJS directly to <span className="text-cyan-400 font-mono">{personalInfo.email}</span>.
              </p>

              {/* Status Notifications */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3 text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Message Delivered Successfully!</div>
                      <div className="text-xs text-emerald-200/90 mt-0.5">
                        Thank you for reaching out. I have received your note and will get back to you shortly at your email.
                      </div>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3 text-left"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <div className="font-semibold">Delivery Notice</div>
                      <div className="text-xs text-rose-200/90">
                        {status.error}
                      </div>
                      {status.isConfigMissing && (
                        <div className="pt-1">
                          <a
                            href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                              formData.subject || 'Portfolio Inquiry'
                            )}&body=${encodeURIComponent(formData.message || '')}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 underline hover:text-cyan-200"
                          >
                            <span>Click here to open your email client</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                {/* Honeypot field (hidden from screen reader and visual layout) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this field</label>
                  <input
                    type="text"
                    id="hp_field"
                    name="hp_field"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.hp_field}
                    onChange={handleChange}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-300 font-medium"
                    >
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status.submitting}
                        placeholder="e.g. John Doe"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-navy-700 focus:border-cyan-400'
                        } text-slate-100 placeholder-slate-500 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 disabled:opacity-60`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="text-xs text-rose-400 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-300 font-medium"
                    >
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status.submitting}
                        placeholder="e.g. john@example.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-navy-700 focus:border-cyan-400'
                        } text-slate-100 placeholder-slate-500 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 disabled:opacity-60`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-xs text-rose-400 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-300 font-medium"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status.submitting}
                      placeholder="e.g. Internship Inquiry / College Project Review"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-navy-700 focus:border-cyan-400'
                      } text-slate-100 placeholder-slate-500 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 disabled:opacity-60`}
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                  </div>
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-rose-400 font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-300 font-medium"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status.submitting}
                      placeholder="Write your message here..."
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-navy-700 focus:border-cyan-400'
                      } text-slate-100 placeholder-slate-500 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none disabled:opacity-60`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                  </div>
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-navy-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-navy-950" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2 text-[11px] font-mono text-slate-400">
                  Protected with client validation & anti-spam honeypot
                </div>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
