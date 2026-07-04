"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/site";
import HeroIllustration from "@/components/hero-illustration";

export default function Hero() {
  return (
    <section className="relative grid-bg">
      <div className="section min-h-[92vh] flex flex-col justify-center py-30">
        <div className="grid md:grid-cols-[1.3fr,1fr] gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-6"
            >
              Hello, I&apos;m {profile.name}.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08]"
            >
              {profile.role.split(" & ")[0]} &amp;
              <br />
              {profile.role.split(" & ")[1]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-ink-secondary dark:text-ink-dark-secondary max-w-lg leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center rounded-full bg-ink text-white dark:bg-white dark:text-ink px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform"
              >
                View Projects
              </Link>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark px-6 py-3 text-sm font-medium hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden md:block"
          >
            <HeroIllustration />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center gap-2 text-xs text-ink-secondary dark:text-ink-dark-secondary"
        >
          <ArrowDown size={14} />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
