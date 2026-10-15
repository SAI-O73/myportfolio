import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Instagram,
  User,
  MessageSquare,
  FileText,
  ExternalLink,
  MapPin,
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
    hp_field: '', // Anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: null,
  });

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.hp_field) {
      console.warn('Spam submission detected.');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus({ submitting: true, success: false, error: null, message: null });

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
          message: result.message,
        });
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
          message: null,
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'An unexpected error occurred. Please try again.',
        message: null,
      });
    }
  };

  const emailFallbackBody = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    '',
    formData.message,
  ].join('\n');
  const emailFallbackHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(emailFallbackBody)}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/60">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-royal-100/40 rounded-full blur-3xl pointer-events-none" />

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
            <span>06. REACH OUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Have a question, feedback on my projects, or an internship opportunity? Send a message directly.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-heading text-navy-900">
                Let's talk code & opportunities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                I am actively seeking internship roles and collaborative project opportunities in web development and Android programming. Feel free to reach out via the form or through my direct contacts below.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-1">
              
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="text-xs font-mono font-medium text-slate-500">Email Address</div>
                  <div className="text-sm sm:text-base font-semibold text-navy-900 group-hover:text-blue-600 transition-colors truncate">
                    {personalInfo.email}
                  </div>
                  <div className="text-[11px] text-blue-600 font-mono flex items-center gap-1 font-medium">
                    <span>Direct recipient</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:+91${personalInfo.phone}`}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-medium text-slate-500">Phone Number</div>
                  <div className="text-sm sm:text-base font-semibold text-navy-900 group-hover:text-blue-600 transition-colors">
                    {personalInfo.formattedPhone}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Call / WhatsApp
                  </div>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={personalInfo.instagramUrl || personalInfo.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-medium text-slate-500">Instagram</div>
                  <div className="text-sm sm:text-base font-semibold text-navy-900 group-hover:text-blue-600 transition-colors">
                    @{personalInfo.socialUsername}
                  </div>
                  <div className="text-[11px] text-blue-600 font-mono flex items-center gap-1 font-medium">
                    <span>Follow on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* College Location Note */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed font-sans">
                  <span className="font-bold text-navy-900 block font-heading">
                    {personalInfo.college}
                  </span>
                  {personalInfo.location}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Controlled Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-premium relative">
              
              <h3 className="text-xl font-bold font-heading text-navy-900 mb-2 text-left">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 text-left mb-6 font-sans">
                Messages are routed through EmailJS directly to <span className="text-blue-600 font-mono font-medium">{personalInfo.email}</span>.
              </p>

              {/* Status Notifications */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3 text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold font-heading">Message Submitted</div>
                      <div className="text-xs text-emerald-700 mt-0.5 leading-relaxed font-sans">
                        {status.message || 'Thank you for reaching out. I will reply shortly.'}
                      </div>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3 text-left"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <div className="font-bold font-heading">Delivery Notice</div>
                      <div className="text-xs text-rose-700 leading-relaxed font-sans">
                        {status.error}
                      </div>
                      <div className="pt-1">
                        <a
                          href={emailFallbackHref}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 underline hover:text-blue-800"
                        >
                          <span>Open your email app with this message</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this</label>
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

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-semibold text-slate-700"
                    >
                      Full Name <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/60 border ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                        } text-slate-900 placeholder-slate-400 text-sm transition-all focus:outline-none disabled:opacity-60`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="text-xs text-rose-500 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-semibold text-slate-700"
                    >
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/60 border ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                        } text-slate-900 placeholder-slate-400 text-sm transition-all focus:outline-none disabled:opacity-60`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-xs text-rose-500 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-semibold text-slate-700"
                  >
                    Subject <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/60 border ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                      } text-slate-900 placeholder-slate-400 text-sm transition-all focus:outline-none disabled:opacity-60`}
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                  </div>
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-rose-500 font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-semibold text-slate-700"
                  >
                    Message <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
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
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/60 border ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                      } text-slate-900 placeholder-slate-400 text-sm transition-all focus:outline-none resize-none disabled:opacity-60`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                  </div>
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-500 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
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
