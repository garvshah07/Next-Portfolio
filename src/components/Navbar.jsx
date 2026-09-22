"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { id: "hero", name: "Home", href: "#hero" },
  { id: "about", name: "About", href: "#about" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "experience", name: "Experience", href: "#experience" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "faq", name: "FAQ", href: "#faq" },
  { id: "contact", name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "experience", "projects", "faq", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between gap-4 sm:gap-6 px-4 py-2 sm:px-5 sm:py-2 rounded-full border backdrop-blur-md ${
          isScrolled
            ? "bg-[#090a0f]/90 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            : "bg-white/[0.03] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Clean Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 group text-white font-medium text-sm tracking-tight pr-1"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-semibold text-xs tracking-wider uppercase text-neutral-200 group-hover:text-white transition-colors">
            Garv Shah
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-neutral-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold bg-white/10"
                    : "hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-semibold rounded-full bg-white text-neutral-950 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-1 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#090a0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl md:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 rounded-xl bg-white text-neutral-950 text-sm font-semibold tracking-wide"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
