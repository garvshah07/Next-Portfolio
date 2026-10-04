'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'AgreeWise — AI Policy Summarizer',
    category: 'ai',
    categoryLabel: 'AI Extension',
    featured: true,
    description:
      'AI-powered browser extension that scans, extracts, and summarizes complex Terms of Service and Privacy Policies before users accept them, powered by Groq LLM SDK and PDF.js.',
    tags: ['React', 'Groq SDK (LLM)', 'PDF.js', 'Vite', 'Browser Extension'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07/Agreewise',
    githubUrl: 'https://github.com/garvshah07/Agreewise',
  },
  {
    id: 2,
    title: 'PixelCurl Web Platform',
    category: 'frontend',
    categoryLabel: 'Frontend / UI',
    featured: true,
    description:
      'Modern web platform engineered with Next.js, TypeScript, Radix UI primitives, Framer Motion animations, and Tailwind CSS for interactive digital experiences.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07/pixelcurl',
    githubUrl: 'https://github.com/garvshah07/pixelcurl',
  },
  {
    id: 3,
    title: 'AI Customer Message Triage',
    category: 'ai',
    categoryLabel: 'AI / Tool',
    featured: false,
    description:
      'Support routing and triage application leveraging AI models to automatically classify, prioritize, and route incoming customer tickets for accelerated resolution.',
    tags: ['React', 'JavaScript', 'AI Classification', 'Vercel Deployment'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://ai-customer-message-triage.vercel.app',
    githubUrl: 'https://github.com/garvshah07/AI-Customer-Message-Triage',
  },
  {
    id: 4,
    title: 'BookBridge — Book Exchange Platform',
    category: 'fullstack',
    categoryLabel: 'Capstone',
    featured: false,
    description:
      'Capstone web application connecting book enthusiasts to discover, catalog, review, and exchange literature with a responsive, modern UI.',
    tags: ['React', 'JavaScript', 'State Management', 'Responsive UI', 'Vercel'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://book-bridge-sage.vercel.app',
    githubUrl: 'https://github.com/garvshah07/BookBridge',
  },
  {
    id: 5,
    title: 'Modern E-Commerce Storefront',
    category: 'frontend',
    categoryLabel: 'Frontend',
    featured: false,
    description:
      'Online shopping storefront featuring dynamic product catalog browsing, responsive grid layouts, category filtering, and shopping cart state management.',
    tags: ['React', 'JavaScript', 'CSS Grid', 'Shopping Cart', 'Vercel'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07/ecommerce',
    githubUrl: 'https://github.com/garvshah07/ecommerce',
  },
  {
    id: 6,
    title: 'REST Countries World Explorer',
    category: 'frontend',
    categoryLabel: 'API / Frontend',
    featured: false,
    description:
      'Interactive world geography exploration web app consuming the REST Countries API with real-time country search, region filters, border links, and dark mode.',
    tags: ['React', 'Vite', 'REST API Integration', 'Responsive Design'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07/rest-country',
    githubUrl: 'https://github.com/garvshah07/rest-country',
  },
  {
    id: 7,
    title: 'Film Discovery & Media App',
    category: 'frontend',
    categoryLabel: 'GraphQL',
    featured: false,
    description:
      'Media exploration application built with React, TypeScript, Apollo Client, and GraphQL for declarative data querying and type-safe state handling.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'Vite'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: 'https://github.com/garvshah07/film-app',
    githubUrl: 'https://github.com/garvshah07/film-app',
  },
  {
    id: 8,
    title: 'Next.js Developer Portfolio (2026 Edition)',
    category: 'frontend',
    categoryLabel: 'Frontend',
    featured: true,
    description:
      'Personal developer portfolio engineered with Next.js 15 App Router, React 19, Tailwind CSS, Framer Motion, and comprehensive SEO / GEO / AEO schema optimization.',
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'SEO/GEO'],
    imageUrl: '/images/card-project/card.jpg',
    demoUrl: '#hero',
    githubUrl: 'https://github.com/garvshah07/Next-Portfolio',
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
          Real projects from my GitHub.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          A showcase of real applications, AI extensions, and web tools I have built and published on GitHub.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.08] pb-4">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'ai', label: 'AI & Extensions' },
          { id: 'frontend', label: 'Frontend & Web' },
          { id: 'fullstack', label: 'Full Stack & Capstone' },
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <span>View Live</span>
                      <FiArrowUpRight className="text-sm" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
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
