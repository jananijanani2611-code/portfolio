import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import Reveal from "@/components/reveal";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-lg border border-line dark:border-line-dark bg-bg dark:bg-bg-dark-secondary overflow-hidden shadow-soft hover:shadow-soft-hover transition-shadow duration-300"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-bg-secondary dark:bg-bg-dark border-b border-line dark:border-line-dark">
          <Image
            src={project.cover}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-ink-secondary dark:text-ink-dark-secondary mb-2">
                {project.category} · {project.duration}
              </p>
              <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
            </div>
            <ArrowUpRight
              size={20}
              className="shrink-0 mt-1 text-ink-secondary group-hover:text-ink dark:group-hover:text-white transition-colors"
            />
          </div>
          <p className="mt-3 text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2.5 py-1 rounded-full border border-line dark:border-line-dark text-ink-secondary dark:text-ink-dark-secondary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
