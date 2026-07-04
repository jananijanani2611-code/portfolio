"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { profile } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Design" },
  { href: "/#dev-projects", label: "Development" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/80 dark:bg-bg-dark/80 backdrop-blur border-b border-line dark:border-line-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="section flex items-center justify-between h-18" aria-label="Primary">
        <Link href="/" className="text-base font-semibold tracking-tight">
          {profile.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-ink dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-line dark:border-line-dark hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary transition-colors"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center rounded-full bg-ink text-white dark:bg-white dark:text-ink px-4 py-2 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            Let&apos;s talk
          </Link>
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line dark:border-line-dark bg-bg dark:bg-bg-dark">
          <div className="section flex flex-col py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-ink dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
