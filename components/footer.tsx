import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark mt-30">
      <div className="section py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-base font-semibold tracking-tight">{profile.name}</p>
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary mt-1">
            {profile.role}
          </p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-ink dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2 rounded-full border border-line dark:border-line-dark hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full border border-line dark:border-line-dark hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full border border-line dark:border-line-dark hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <div className="section pb-10">
        <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
