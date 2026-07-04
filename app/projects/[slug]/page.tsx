import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { CSBlock, CSDivider } from "@/components/case-study-block";
import Reveal from "@/components/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article>
      {/* Hero */}
      <section className="section pt-16 pb-20 md:pt-20 md:pb-24">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-ink dark:hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-4">
            {project.category} · {project.duration}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            {project.hero.headline}
          </h1>
          <p className="mt-6 text-lg text-ink-secondary dark:text-ink-dark-secondary max-w-2xl leading-relaxed">
            {project.hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mb-1">Role</p>
              <p className="text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mb-1">Duration</p>
              <p className="text-sm font-medium">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mb-1">Category</p>
              <p className="text-sm font-medium">{project.category}</p>
            </div>
            <div>
              <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mb-1">Tools</p>
              <p className="text-sm font-medium">{project.tools.join(", ")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={project.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-white dark:bg-white dark:text-ink px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            View Figma Prototype <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>

      <div className="section pb-24 md:pb-30">
        {/* Discover */}
        <CSDivider index="01" heading="Discover" />
        <CSBlock index="" heading={project.problem.heading} body={project.problem.body} bullets={project.problem.bullets} />
        <CSBlock index="" heading={project.businessGoal.heading} body={project.businessGoal.body} bullets={project.businessGoal.bullets} />
        <CSBlock index="" heading={project.research.heading} body={project.research.body} bullets={project.research.bullets} />
        <CSBlock
          index=""
          heading={project.competitorAnalysis.heading}
          body={project.competitorAnalysis.body}
          bullets={project.competitorAnalysis.bullets}
        />

        {/* Define */}
        <CSDivider index="02" heading="Define" />
        <Reveal className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 py-12 border-t border-line dark:border-line-dark">
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium" />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">User Persona</h2>
            <p className="text-sm font-medium">{project.persona.name}</p>
            <p className="text-base text-ink-secondary dark:text-ink-dark-secondary italic mt-2">
              &ldquo;{project.persona.quote}&rdquo;
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="text-xs font-medium mb-2">Goals</p>
                <ul className="space-y-1.5">
                  {project.persona.goals.map((g) => (
                    <li key={g} className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                      — {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium mb-2">Frustrations</p>
                <ul className="space-y-1.5">
                  {project.persona.frustrations.map((f) => (
                    <li key={f} className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                      — {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 py-12 border-t border-line dark:border-line-dark">
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium" />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Empathy Map</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {(["thinks", "feels", "says", "does"] as const).map((key) => (
                <div key={key}>
                  <p className="text-xs font-medium capitalize mb-2">{key}</p>
                  <ul className="space-y-1.5">
                    {project.empathyMap[key].map((v) => (
                      <li key={v} className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                        — {v}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <CSBlock index="" heading="Pain Points" body="The core frictions this design needed to solve." bullets={project.painPoints} />

        <Reveal className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 py-12 border-t border-line dark:border-line-dark">
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium" />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">User Journey</h2>
            <div className="space-y-4">
              {project.userJourney.map((stage, i) => (
                <div key={stage.stage} className="flex gap-4 items-baseline">
                  <span className="text-xs text-ink-secondary dark:text-ink-dark-secondary w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{stage.stage}</p>
                    <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                      {stage.action} · <span className="italic">{stage.emotion}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Design */}
        <CSDivider index="03" heading="Design" />
        <CSBlock
          index=""
          heading={project.informationArchitecture.heading}
          body={project.informationArchitecture.body}
        />
        <CSBlock index="" heading="Task Flow" body="The path a user takes to complete their core task." bullets={project.taskFlow} />

        <Reveal className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 py-12 border-t border-line dark:border-line-dark">
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium" />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Wireframes</h2>
            <div className="space-y-4">
              {project.wireframes.map((w) => (
                <div key={w.level} className="border-b border-line dark:border-line-dark pb-4">
                  <p className="text-sm font-medium">{w.level}</p>
                  <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary mt-1">{w.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 py-12 border-t border-line dark:border-line-dark">
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium" />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Design System</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-medium mb-2">Typography</p>
                <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                  {project.designSystem.typography}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium mb-2">Grid</p>
                <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                  {project.designSystem.grid}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium mb-2">Colors</p>
                <div className="flex gap-2 mt-1">
                  {project.designSystem.colors.map((c) => (
                    <span
                      key={c}
                      className="w-8 h-8 rounded-full border border-line dark:border-line-dark"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-2">Components</p>
                <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                  {project.designSystem.components.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Validate */}
        <CSDivider index="04" heading="Validate" />
        <CSBlock
          index=""
          heading={project.usabilityTesting.heading}
          body={project.usabilityTesting.body}
          bullets={project.usabilityTesting.bullets}
        />
        <CSBlock index="" heading="Iterations" body="What changed after testing, and why." bullets={project.iterations} />
        <CSBlock index="" heading="Accessibility" body="How this design holds up for every user." bullets={project.accessibility} />

        {/* Reflect */}
        <CSDivider index="05" heading="Reflect" />
        <CSBlock index="" heading="Lessons Learned" body="What this project taught me." bullets={project.reflection.learned} />
        <CSBlock index="" heading="Next Steps" body="Where this design would go with more time." bullets={project.reflection.nextSteps} />
      </div>

      <div className="section pb-24">
        <Reveal className="flex items-center justify-between border-t border-line dark:border-line-dark pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-ink-secondary dark:hover:text-ink-dark-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>
          <a
            href={project.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-ink-secondary dark:hover:text-ink-dark-secondary transition-colors"
          >
            View prototype <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </article>
  );
}
