'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiMapPin, FiHeart, FiCode, FiLayers, FiZap, FiCheckCircle } from 'react-icons/fi';

export default function About() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata timezone (Ahmedabad)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const corePillars = [
    {
      icon: <FiCode className="w-5 h-5 text-sky-400" />,
      title: 'Clean Architecture',
      description: 'I write modular, readable React & Next.js code that is easy to maintain, debug, and scale.',
    },
    {
      icon: <FiLayers className="w-5 h-5 text-indigo-400" />,
      title: 'Responsive & Accessible',
      description: 'Every interface is engineered from mobile-first to widescreen displays with keyboard and screen accessibility in mind.',
    },
    {
      icon: <FiZap className="w-5 h-5 text-amber-400" />,
      title: 'Speed & Interaction',
      description: 'Smooth 60fps micro-interactions, low bundle footprints, and instant page transitions using modern tooling.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
          <span className="w-6 h-px bg-sky-400/50" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          A developer focused on craft, usability, and genuine curiosity.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          Here is a genuine look into my background, what drives me every day, and how I build for the web.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Human Journey */}
        <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base leading-relaxed">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white">My Journey into Web Development</h3>
            <p>
              I am <strong className="text-white font-medium">Garv Shah</strong>, a MERN Stack &amp; Frontend developer based in{' '}
              <span className="text-sky-400">Ahmedabad, Gujarat</span>. Over the past 9+ months of hands-on software development,
              I have channeled my energy into mastering full-stack MERN (MongoDB, Express.js, React.js, Node.js), Next.js, and the modern JavaScript ecosystem.
            </p>
            <p>
              My academic background in computer applications and information technology (BCA at Silver Oak University and
              pursuing MSC-IT at GLS University) gave me solid foundations in programming, database structures, and systems.
              However, my real spark ignited when building interfaces that live on the web — turning Figma thoughts and clean
              ideas into responsive, interactive realities.
            </p>
            <p>
              Rather than chasing buzzwords, I focus on what truly matters to users and engineering teams: code that doesn&apos;t break,
              interfaces that load immediately, and intuitive navigation that feels effortless.
            </p>
          </div>

          {/* Core Pillars / Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors space-y-2"
              >
                <div className="p-2 rounded-lg bg-white/[0.04] w-fit border border-white/[0.05]">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                <p className="text-xs text-neutral-400 leading-normal">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Grounded Info Cards & Real Live Clock */}
        <div className="lg:col-span-5 space-y-4">
          {/* Real Live Ahmedabad Clock */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-sky-400" /> Ahmedabad, Gujarat, IN
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                IST (UTC+5:30)
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider">
                {currentTime || '--:--:-- --'}
              </div>
              <FiClock className="w-5 h-5 text-neutral-500" />
            </div>
            <p className="text-xs text-neutral-500">
              Working remotely or locally with teams across Indian and global time zones.
            </p>
          </div>

          {/* Genuine Interests & Personal Passions */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <FiHeart className="text-rose-400" />
              <span>Beyond the Screen</span>
            </div>
            <h4 className="text-sm font-semibold text-white">What I love when not coding:</h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-neutral-200">Cricket:</strong> Avid follower of cricket matches, tactical analysis, and playing local matches.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-neutral-200">UI / Visual Design:</strong> Exploring clean design systems, typography pairings, and micro-animations.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-neutral-200">Continuous Upskilling:</strong> Experimenting with latest Next.js features, server components, and styling libraries.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Contact Prompt */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-sky-500/[0.08] to-indigo-500/[0.04] border border-sky-500/20 space-y-2">
            <p className="text-xs font-mono text-sky-300">Looking for a motivated teammate?</p>
            <p className="text-sm text-neutral-200 leading-snug">
              I bring energy, accountability, and eagerness to contribute to frontend codebases from day one.
            </p>
            <a
              href="#contact"
              className="inline-block text-xs font-medium text-sky-400 hover:text-sky-300 underline underline-offset-4 pt-1"
            >
              Let&apos;s start a conversation &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
