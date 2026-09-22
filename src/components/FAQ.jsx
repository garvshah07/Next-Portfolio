'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const faqItems = [
  {
    id: 'who-is-garv',
    question: 'Who is Garv Shah and what does he specialize in?',
    shortAnswer:
      'Garv Shah is a Frontend and Web Developer based in Ahmedabad, Gujarat, India, with 9+ months of hands-on software development experience.',
    detailedAnswer:
      'Garv specializes in building fast, responsive, and accessible web interfaces using the modern React ecosystem — including Next.js 15, React 19, JavaScript (ES6+), and Tailwind CSS. He emphasizes clean component architecture, reliable state management, and tactile user experience design.',
    highlights: [
      'Specialized in Next.js 15 & React 19',
      '9+ months of hands-on web development experience',
      'Based in Ahmedabad, Gujarat, India',
    ],
  },
  {
    id: 'tech-stack',
    question: "What is Garv Shah's core technical stack?",
    shortAnswer:
      'Garv’s primary day-to-day stack consists of Next.js, React.js, Tailwind CSS, and modern JavaScript (ES6+).',
    detailedAnswer:
      'Beyond frontend engineering, Garv has working foundational knowledge of backend and database technologies including Node.js, Express.js, and MongoDB. He utilizes Git and GitHub for version control, Figma for design translation, and Vercel for continuous deployment.',
    highlights: [
      'Frontend: React, Next.js, Tailwind CSS, HTML5, CSS3',
      'Backend & Data: Node.js, Express.js, MongoDB',
      'Tools: Git, GitHub, VS Code, Vercel, Figma',
    ],
  },
  {
    id: 'education-experience',
    question: "What is Garv Shah's educational background and experience?",
    shortAnswer:
      'Garv graduated with a Bachelor of Computer Applications (BCA) and is pursuing his Master of Science in Information Technology (MSC-IT).',
    detailedAnswer:
      'He completed his BCA at Silver Oak University (2021–2024) and is enrolled in the MSC-IT program at GLS University in Ahmedabad (2025–2027). His professional experience includes a Junior Software Developer role in Ahmedabad and a React Developer Internship at Codage Habitation.',
    highlights: [
      'MSC-IT @ GLS University (July 2025 – July 2027)',
      'Junior Software Developer @ Ahmedabad (Nov 2024 – July 2025)',
      'BCA @ Silver Oak University (Aug 2021 – June 2024)',
      'React Developer Intern @ Codage Habitation (Feb 2023 – Aug 2023)',
    ],
  },
  {
    id: 'availability',
    question: 'Is Garv Shah available for frontend developer roles and hiring?',
    shortAnswer:
      'Yes, Garv Shah is actively open and available for junior frontend developer, web developer, and React engineer roles.',
    detailedAnswer:
      'He is available for full-time employment, contract roles, and select freelance web development projects. Garv is ready to contribute remotely to distributed teams worldwide, or work on-site in Ahmedabad with openness to relocation across India.',
    highlights: [
      'Open to Full-Time, Contract, & Freelance Opportunities',
      'Available for Remote Work (worldwide) and On-site (Ahmedabad / Relocation)',
      'Fast onboarding and high eagerness to contribute to codebases',
    ],
  },
  {
    id: 'contact-how',
    question: 'How can I get in touch with Garv Shah?',
    shortAnswer:
      'You can reach Garv directly via email at garv8890@gmail.com or by using the direct message form on this portfolio.',
    detailedAnswer:
      'Garv regularly checks his inbox and responds to genuine inquiries. You can also connect with him professionally on LinkedIn or explore his open-source code repositories and commits on GitHub.',
    highlights: [
      'Direct Email: garv8890@gmail.com',
      'LinkedIn: linkedin.com/in/shahgarv',
      'GitHub: github.com/garvshah07',
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
          <span className="w-6 h-px bg-sky-400/50" />
          <span>Questions &amp; Direct Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Frequently asked questions.
        </h2>
        <p className="text-base text-neutral-400 max-w-2xl">
          Quick, authoritative answers about my skills, background, and availability for engineering teams and AI search engines.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 max-w-4xl">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white/[0.035] border-white/15 shadow-lg shadow-black/40'
                  : 'bg-white/[0.015] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.025]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2 rounded-lg border transition-colors ${
                      isOpen
                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                        : 'bg-white/[0.03] border-white/[0.06] text-neutral-400'
                    }`}
                  >
                    <FiHelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {item.question}
                  </h3>
                </div>
                <div
                  className={`p-1.5 rounded-full text-neutral-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-sky-400' : ''
                  }`}
                >
                  <FiChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 space-y-4 border-t border-white/[0.05] text-neutral-300 text-sm leading-relaxed">
                      {/* Short Featured Snippet Block (AEO target) */}
                      <p className="font-medium text-white/90 bg-white/[0.03] p-3.5 rounded-xl border border-white/[0.06]">
                        {item.shortAnswer}
                      </p>

                      {/* Detailed narrative */}
                      <p className="text-neutral-400">{item.detailedAnswer}</p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-2">
                        {item.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                            <FiCheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Direct CTA prompt */}
      <div className="mt-10 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl text-xs text-neutral-400">
        <span>Have a question not answered here?</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium cursor-pointer"
        >
          <span>Ask me directly</span>
          <FiArrowUpRight className="text-sm" />
        </a>
      </div>
    </section>
  );
}
