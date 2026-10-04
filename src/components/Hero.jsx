'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiGithub, FiLinkedin, FiInstagram, FiCode, FiMapPin, FiZap } from 'react-icons/fi';

const quickStats = [
  { label: 'Hands-on Experience', value: '9+ Months' },
  { label: 'Core Specialization', value: 'MERN & Next.js' },
  { label: 'Location', value: 'Ahmedabad, IN' },
  { label: 'Availability', value: 'Open for Roles' },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      <span id="home" className="absolute -top-28" />
      {/* Subtle background radial glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[380px] h-[300px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Intro & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs text-neutral-300 font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for MERN &amp; frontend developer roles</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-sm font-mono text-sky-400 font-medium tracking-wider uppercase">
              Hello, world &bull; I am
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Garv Shah<span className="text-sky-400">.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 font-medium pt-1">
              MERN Stack &amp; Frontend Developer crafting fast, human-centered digital experiences.
            </p>
          </div>

          {/* Narrative description */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl font-normal">
            I build responsive, full-stack, and high-performance web applications using{' '}
            <span className="text-neutral-200 font-medium">MERN Stack</span> (
            <span className="text-neutral-200 font-medium">MongoDB</span>,{' '}
            <span className="text-neutral-200 font-medium">Express</span>,{' '}
            <span className="text-neutral-200 font-medium">React</span>,{' '}
            <span className="text-neutral-200 font-medium">Node.js</span>),{' '}
            <span className="text-neutral-200 font-medium">Next.js</span>, and{' '}
            <span className="text-neutral-200 font-medium">Tailwind CSS</span>. With 9+ months of hands-on
            software development experience, I care about clean architecture, snappy performance, and thoughtful UI polish.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-white/5 cursor-pointer"
            >
              <span>Explore My Work</span>
              <FiArrowDown className="text-base" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-200 font-medium text-sm hover:bg-white/10 hover:text-white active:scale-[0.98] transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <FiMail className="text-base text-neutral-400" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] max-w-md">
            <span className="text-xs text-neutral-500 font-mono">Connect:</span>
            <div className="flex items-center gap-3 text-neutral-400">
              <a
                href="https://github.com/garvshah07"
                target="_blank"
                rel="noreferrer"
                aria-label="Garv's GitHub"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahgarv/"
                target="_blank"
                rel="noreferrer"
                aria-label="Garv's LinkedIn"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-sky-400 hover:border-sky-400/30 transition-all duration-200"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/garvshxh/"
                target="_blank"
                rel="noreferrer"
                aria-label="Garv's Instagram"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-rose-400 hover:border-rose-400/30 transition-all duration-200"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:garv8890@gmail.com"
                aria-label="Email Garv"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-amber-400 hover:border-amber-400/30 transition-all duration-200"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
            <span className="text-xs text-neutral-500 font-mono ml-auto">
              Ahmedabad, IN
            </span>
          </div>
        </motion.div>

        {/* Right Column: Sleek Interactive Profile/Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 space-y-6">
            {/* Top Bar of the Card */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <FiCode className="text-sky-400" /> garv.developer.json
              </span>
            </div>

            {/* Code / Developer Object Display */}
            <div className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-1.5 select-none">
              <p className="text-neutral-500">{"// Developer snapshot"}</p>
              <p>
                <span className="text-rose-400">const</span>{' '}
                <span className="text-sky-300">garvShah</span> = {'{'}
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">name:</span>{' '}
                <span className="text-emerald-300">&apos;Garv Shah&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">role:</span>{' '}
                <span className="text-emerald-300">&apos;MERN &amp; Frontend Developer&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">experience:</span>{' '}
                <span className="text-amber-300">&apos;9+ months&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">location:</span>{' '}
                <span className="text-emerald-300">&apos;Ahmedabad, Gujarat&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">education:</span>{' '}
                <span className="text-emerald-300">&apos;MSC-IT @ GLS University&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">stack:</span> [
                <span className="text-sky-300">&apos;MongoDB&apos;</span>,{' '}
                <span className="text-sky-300">&apos;Express&apos;</span>,{' '}
                <span className="text-sky-300">&apos;React&apos;</span>,{' '}
                <span className="text-sky-300">&apos;Node.js&apos;</span>,{' '}
                <span className="text-sky-300">&apos;Next.js&apos;</span>,{' '}
                <span className="text-sky-300">&apos;Tailwind&apos;</span>
                ],
              </p>
              <p className="pl-4">
                <span className="text-neutral-400">mindset:</span>{' '}
                <span className="text-emerald-300">&apos;Clean code, full-stack craft, continuous learning&apos;</span>
              </p>
              <p>{'};'}</p>
            </div>

            {/* Micro Quick Status Footer */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin className="text-sky-400" />
                Gujarat, India
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <FiZap />
                Building modern web apps
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grounded Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
      >
        {quickStats.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors backdrop-blur-sm"
          >
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{item.value}</div>
            <div className="text-xs text-neutral-400 mt-1 font-mono">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
