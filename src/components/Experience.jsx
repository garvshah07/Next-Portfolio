'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const milestones = [
  {
    id: 1,
    type: 'education',
    role: 'Master of Science in Information Technology (MSC-IT)',
    organization: 'GLS University',
    location: 'Ahmedabad, Gujarat, IN',
    period: 'July 2025 - July 2027',
    status: 'Upcoming / Enrolled',
    description:
      'Pursuing advanced coursework in modern software development architectures, distributed systems, and computer applications.',
    skills: ['Software Architecture', 'Advanced Web Systems', 'Database Systems'],
  },
  {
    id: 2,
    type: 'work',
    role: 'Junior Software Developer',
    organization: 'Web & Software Solutions',
    location: 'Ahmedabad, Gujarat, IN',
    period: 'November 2024 - July 2025',
    status: 'Completed',
    description:
      'Engineered responsive, accessible frontend user interfaces using React.js and modern CSS. Collaborated on component libraries, refactored legacy layouts, and improved web performance across mobile and desktop devices.',
    skills: ['React.js', 'Responsive UI', 'Component Architecture', 'Modern CSS'],
  },
  {
    id: 3,
    type: 'education',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Silver Oak University',
    location: 'Ahmedabad, Gujarat, IN',
    period: 'August 2021 - June 2024',
    status: 'Graduated',
    description:
      'Graduated with a comprehensive foundation in computer science, software engineering principles, web technologies, object-oriented programming, and relational databases.',
    skills: ['BCA', 'Computer Science', 'Web Development', 'OOP', 'SQL'],
  },
  {
    id: 4,
    type: 'work',
    role: 'React Developer Intern',
    organization: 'Codage Habitation',
    location: 'Ahmedabad, Gujarat, IN',
    period: 'February 2023 - August 2023',
    status: 'Completed',
    description:
      'Contributed to real-world frontend web applications using React.js. Created reusable UI components, integrated RESTful APIs, and maintained clean version control workflows in a collaborative team.',
    skills: ['React.js', 'Frontend Development', 'API Integration', 'Git'],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const filteredMilestones =
    filter === 'all'
      ? milestones
      : milestones.filter((m) => m.type === filter);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
          <span className="w-6 h-px bg-sky-400/50" />
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Experience & Education.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          A transparent chronological journey of my academic background and hands-on software development roles.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-12 border-b border-white/[0.08] pb-4">
        {[
          { id: 'all', label: 'All Milestones' },
          { id: 'work', label: 'Work Experience' },
          { id: 'education', label: 'Education' },
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

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
        <AnimatePresence>
          {filteredMilestones.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-7 h-7 rounded-full bg-[#090a0f] border border-white/20 flex items-center justify-center text-neutral-400 group-hover:border-sky-400 group-hover:text-sky-400 group-hover:scale-110 transition-all duration-200 shadow-md">
                {item.type === 'work' ? (
                  <FiBriefcase className="w-3.5 h-3.5" />
                ) : (
                  <FiBookOpen className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.035] transition-all duration-200 space-y-4">
                {/* Period & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <FiCalendar className="text-sky-400 w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      item.status === 'Completed' || item.status === 'Graduated'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Role and Organization */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-400 mt-1">
                    <span className="text-neutral-200 font-medium">{item.organization}</span>
                    <span className="text-neutral-600">&bull;</span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-3 h-3 text-neutral-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Skills / Focus Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
