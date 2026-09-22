'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
} from 'react-icons/si';
import { FiLayers, FiCode, FiDatabase, FiTool } from 'react-icons/fi';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend Core' },
  { id: 'backend', label: 'Backend & Data' },
  { id: 'tools', label: 'Tools & Workflow' },
];

const skills = [
  // Frontend
  {
    name: 'Next.js',
    category: 'frontend',
    icon: SiNextdotjs,
    level: 'Core Framework',
    description: 'App Router, Server Components, SEO optimization, and static/dynamic rendering.',
    color: 'hover:text-white',
    badge: 'Daily Use',
  },
  {
    name: 'React.js',
    category: 'frontend',
    icon: SiReact,
    level: 'Component Architecture',
    description: 'Hooks, state management, component lifecycle, reusable UI building.',
    color: 'hover:text-sky-400',
    badge: 'Core',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    icon: SiJavascript,
    level: 'Language Core',
    description: 'Modern syntax, async/await, DOM manipulation, functional programming patterns.',
    color: 'hover:text-amber-400',
    badge: 'Foundational',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: SiTailwindcss,
    level: 'Utility-first Styling',
    description: 'Responsive layouts, fluid typography, dark mode systems, custom theme configuration.',
    color: 'hover:text-cyan-400',
    badge: 'Daily Use',
  },
  {
    name: 'HTML5 Semantic',
    category: 'frontend',
    icon: SiHtml5,
    level: 'Web Structure',
    description: 'Accessible semantic markup, SEO best practices, modern form controls.',
    color: 'hover:text-orange-500',
    badge: 'Foundational',
  },
  {
    name: 'CSS3 & Animations',
    category: 'frontend',
    icon: SiCss3,
    level: 'Styling & Micro-interactions',
    description: 'Flexbox, CSS Grid, keyframes, transitions, responsive mobile breakpoints.',
    color: 'hover:text-blue-500',
    badge: 'Core',
  },

  // Backend & Data
  {
    name: 'Node.js',
    category: 'backend',
    icon: SiNodedotjs,
    level: 'Runtime Environment',
    description: 'JavaScript on the server, asynchronous event loop, npm ecosystem.',
    color: 'hover:text-emerald-500',
    badge: 'Working Knowledge',
  },
  {
    name: 'Express.js',
    category: 'backend',
    icon: SiExpress,
    level: 'Server Framework',
    description: 'RESTful API routing, middleware integration, JSON request handling.',
    color: 'hover:text-neutral-200',
    badge: 'Working Knowledge',
  },
  {
    name: 'MongoDB',
    category: 'backend',
    icon: SiMongodb,
    level: 'NoSQL Database',
    description: 'Document-oriented database schemas, CRUD operations, Mongoose models.',
    color: 'hover:text-green-500',
    badge: 'Academic & Projects',
  },

  // Tools & Workflow
  {
    name: 'Git & Version Control',
    category: 'tools',
    icon: SiGit,
    level: 'Source Control',
    description: 'Branching, merging, commit discipline, resolving conflicts.',
    color: 'hover:text-rose-500',
    badge: 'Daily Use',
  },
  {
    name: 'GitHub',
    category: 'tools',
    icon: SiGithub,
    level: 'Collaboration',
    description: 'Pull requests, code reviews, repository management, releases.',
    color: 'hover:text-white',
    badge: 'Daily Use',
  },
  {
    name: 'Vercel Deployment',
    category: 'tools',
    icon: SiVercel,
    level: 'Cloud Platform',
    description: 'Continuous deployment, preview branches, production hosting, DNS config.',
    color: 'hover:text-white',
    badge: 'Production',
  },
  {
    name: 'Figma to Code',
    category: 'tools',
    icon: SiFigma,
    level: 'Design Handoff',
    description: 'Translating design specifications, color palettes, and spacing tokens into pixel-clean code.',
    color: 'hover:text-purple-400',
    badge: 'Workflow',
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
          <span className="w-6 h-px bg-sky-400/50" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Technologies I work with daily.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          An honest overview of my technical stack, focused on frontend excellence and modern web development standards.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.08] pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === cat.id
                ? 'bg-white text-neutral-950 shadow-md shadow-white/5 font-semibold'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 text-neutral-300 transition-colors ${skill.color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-[11px] font-mono text-neutral-400">{skill.level}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300">
                    {skill.badge}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Stack Summary Bar */}
      <div className="mt-12 p-5 rounded-xl bg-white/[0.015] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <FiCode className="text-sky-400 w-4 h-4" />
          <span>Continuously learning new tooling, TypeScript patterns, and modern web APIs.</span>
        </div>
        <div className="font-mono text-neutral-500">
          Last updated: 2026
        </div>
      </div>
    </section>
  );
}
