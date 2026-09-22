'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiFolder, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'Next.js Developer Portfolio (2026)',
    category: 'frontend',
    categoryLabel: 'Frontend',
    featured: true,
    description:
      'Personal developer portfolio engineered with Next.js 15 App Router, React 19, Tailwind CSS, and Framer Motion. Features dark minimalist aesthetics, tactile micro-interactions, and 100% authentic personal background.',
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: '#home',
    githubUrl: 'https://github.com/garvshah07/Next-Portfolio',
  },
  {
    id: 2,
    title: 'React Interactive Web Application',
    category: 'frontend',
    categoryLabel: 'Frontend',
    featured: false,
    description:
      'Modular, responsive web interface built with React.js. Focused on predictable client-side state management, custom hooks, reusable design patterns, and cross-browser responsiveness.',
    tags: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Component UI'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07',
    githubUrl: 'https://github.com/garvshah07',
  },
  {
    id: 3,
    title: 'Full-Stack MERN Application',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    featured: false,
    description:
      'End-to-end web application combining a React frontend with a Node.js & Express REST API backend and MongoDB document storage for dynamic data persistence.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07',
    githubUrl: 'https://github.com/garvshah07',
  },
  {
    id: 4,
    title: 'Responsive UI Design & Interaction Lab',
    category: 'ui',
    categoryLabel: 'UI / UX',
    featured: false,
    description:
      'Collection of tactile, accessible frontend interface components and prototypes. Includes dark mode transitions, fluid typography, and mobile-first CSS grid systems.',
    tags: ['HTML5', 'Modern CSS', 'Responsive Grid', 'Micro-interactions'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07',
    githubUrl: 'https://github.com/garvshah07',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
          <span className="w-6 h-px bg-sky-400/50" />
          <span>Selected Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Featured projects & applications.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          Real projects built with modern tooling, clean architecture, and responsive user interfaces.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.08] pb-4">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'frontend', label: 'Frontend' },
          { id: 'fullstack', label: 'Full Stack' },
          { id: 'ui', label: 'UI / UX' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === tab.id
                ? 'bg-white text-neutral-950 font-semibold shadow-md shadow-white/5'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 overflow-hidden transition-all duration-200"
            >
              {/* Image Preview Area */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950 border-b border-white/[0.06]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/10 text-neutral-300">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-300">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.demoUrl}
                      target={project.demoUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 active:scale-[0.98] transition-all"
                    >
                      <span>View Live</span>
                      <FiArrowUpRight className="text-sm" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-all"
                    >
                      <FiGithub className="text-sm" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-white">Looking for more code repositories?</h4>
          <p className="text-xs text-neutral-400">
            Explore active commits, experimentation branches, and UI components on my GitHub.
          </p>
        </div>
        <a
          href="https://github.com/garvshah07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all shrink-0"
        >
          <FiGithub className="text-base" />
          <span>garvshah07 on GitHub</span>
        </a>
      </div>
    </section>
  );
}
