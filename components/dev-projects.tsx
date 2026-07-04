"use client";

import { useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { devProjects } from "@/data/site";

export default function DevProjects() {
  const [openSlug, setOpenSlug] = useState<string | null>(devProjects[0]?.slug ?? null);

  return (
    <section id="dev-projects" className="section py-24 md:py-30">
      <SectionHeading
        eyebrow="Development Projects"
        title="What I've built end-to-end"
        description="Beyond design, I ship working software — full-stack apps with real backends, databases, and deployments."
      />

      <div className="space-y-4">
        {devProjects.map((p, i) => {
          const open = openSlug === p.slug;
          return (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="rounded-lg border border-line dark:border-line-dark bg-bg dark:bg-bg-dark-secondary overflow-hidden">
                <button
                  onClick={() => setOpenSlug(open ? null : p.slug)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border ${
                          p.status === "Live"
                            ? "border-green-600/30 text-green-700 dark:text-green-400"
                            : "border-line dark:border-line-dark text-ink-secondary dark:text-ink-dark-secondary"
                        }`}
                      >
                        {p.status}
                      </span>
                      <span className="text-xs text-ink-secondary dark:text-ink-dark-secondary">
                        {p.period}
                      </span>
                    </div>
                    <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                      {p.tagline}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <div className="px-6 md:px-7 pb-7 pt-1 border-t border-line dark:border-line-dark">
                    <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed mt-5 max-w-2xl">
                      {p.description}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 mt-6">
                      <div>
                        <p className="text-xs font-medium mb-1.5">Why</p>
                        <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                          {p.why}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-1.5">How</p>
                        <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                          {p.how}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-1.5">Who it's for</p>
                        <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                          {p.who}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-bg-secondary dark:bg-bg-dark border border-line dark:border-line-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-7">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark px-5 py-2.5 text-sm font-medium hover:bg-bg-secondary dark:hover:bg-bg-dark transition-colors"
                      >
                        <Github size={15} /> View Code
                      </a>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink text-white dark:bg-white dark:text-ink px-5 py-2.5 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform"
                        >
                          <ExternalLink size={15} /> View Live
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
