"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="shrink-0 text-xl font-bold text-white"
        >
          Rajat
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className="relative whitespace-nowrap transition hover:text-cyan-400"
              >
                {item.name}

                {active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute -bottom-2 left-0 h-px w-full bg-cyan-400"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-zinc-800 bg-zinc-950 md:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const active = activeSection === id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigation}
                    className={`border-b border-zinc-900 px-2 py-4 text-sm transition last:border-b-0 ${
                      active
                        ? "text-cyan-400"
                        : "text-zinc-300 hover:text-cyan-400"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}

                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      )}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}