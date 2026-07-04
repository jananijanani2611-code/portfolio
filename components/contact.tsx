"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { profile } from "@/data/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="section py-24 md:py-30">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something well-designed"
        description="Open to UI/UX design roles and frontend opportunities. The fastest way to reach me is email."
      />

      <div className="grid md:grid-cols-[1fr,1.2fr] gap-12">
        <Reveal className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm hover:text-ink-secondary dark:hover:text-ink-dark-secondary transition-colors"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm hover:text-ink-secondary dark:hover:text-ink-dark-secondary transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm hover:text-ink-secondary dark:hover:text-ink-dark-secondary transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <p className="flex items-center gap-3 text-sm text-ink-secondary dark:text-ink-dark-secondary">
            <MapPin size={16} /> {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded border border-line dark:border-line-dark bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded border border-line dark:border-line-dark bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded border border-line dark:border-line-dark bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white dark:bg-white dark:text-ink px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              <Send size={16} />
              Send message
            </button>
            {status === "sent" && (
              <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary" role="status">
                Opening your email client…
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
