'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCopy, FiCheck, FiMapPin, FiClock, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'garv8890@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Anchor helper for legacy link compatibility */}
      <span id="contect" className="absolute -top-24" />

      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
          <span className="w-6 h-px bg-sky-400/50" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Let&apos;s build something great together.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          Whether you have an exciting junior MERN stack or frontend opportunity, freelance project, or simply want to connect, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status & Availability Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h3 className="text-lg font-bold text-white">
              Open for MERN Stack &amp; Frontend Roles
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              I am actively seeking junior MERN stack developer, frontend developer, or web engineer positions. Ready to relocate or contribute remotely worldwide.
            </p>

            {/* 1-Click Copy Box */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <FiMail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">
                  {emailAddress}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.08] hover:bg-white/15 active:scale-95 text-white flex items-center gap-1.5 transition-all shrink-0 cursor-pointer border border-white/10"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-400 w-3.5 h-3.5" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Social Connections */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-neutral-400 flex items-center gap-1.5">
                <FiMapPin className="text-sky-400" /> Location
              </span>
              <span className="text-xs font-mono text-neutral-500">Ahmedabad, Gujarat, IN</span>
            </div>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-neutral-400">Social channels:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/garvshah07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shahgarv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/10 text-neutral-400 hover:text-sky-400 border border-white/10 transition-colors"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/garvshxh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/10 text-neutral-400 hover:text-rose-400 border border-white/10 transition-colors"
                >
                  <FiInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            action="https://formspree.io/f/mbjnwbge"
            method="POST"
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-5"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Leave your email and thoughts. Messages are forwarded straight to my personal inbox.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all text-sm"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Junior Frontend Opportunity / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Hi Garv, I came across your portfolio and wanted to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-white/5"
                >
                  <span>Send Message</span>
                  <FiSend className="text-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
