'use client';

import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080c] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-bold text-white tracking-tight">
              Garv Shah<span className="text-sky-400">.</span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              MERN Stack &amp; Frontend Developer &bull; Ahmedabad, Gujarat, India
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>Design &amp; Developed by Garv Shah.</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://github.com/garvshah07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahgarv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-400 transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/garvshxh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-rose-400 transition-colors"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:garv8890@gmail.com"
              aria-label="Email"
              className="hover:text-amber-400 transition-colors"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
