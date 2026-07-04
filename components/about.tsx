import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { education } from "@/data/site";

const values = [
  {
    title: "Design with implementation in mind",
    body: "I design in Figma and build in React, so handoff friction and rework cycles disappear before they start.",
  },
  {
    title: "Structure before decoration",
    body: "Every screen starts as a user flow and a wireframe. Visual polish is the last step, never the first.",
  },
  {
    title: "Test before you trust it",
    body: "I treat usability testing as part of the design process, not an optional final check.",
  },
];

export default function About() {
  return (
    <section id="about" className="section py-24 md:py-30">
      <SectionHeading
        eyebrow="About"
        title="A designer who ships what she designs"
        description="Computer Science & Business Systems student who works across the full product cycle — research, wireframes, high-fidelity UI, and the React/Next.js code that ships it."
      />

      <div className="grid md:grid-cols-[280px,1fr] gap-12 md:gap-16">
        <Reveal>
          <div className="w-full aspect-[3/4] rounded-lg border border-line dark:border-line-dark bg-bg-secondary dark:bg-bg-dark-secondary overflow-hidden relative">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Janani B"
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-4">
                Design philosophy
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {values.map((v) => (
                  <div key={v.title}>
                    <p className="text-sm font-semibold mb-2">{v.title}</p>
                    <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((e) => (
                  <div
                    key={e.degree}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-line dark:border-line-dark pb-4"
                  >
                    <div>
                      <p className="text-sm font-medium">{e.degree}</p>
                      <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                        {e.institution} · {e.detail}
                      </p>
                    </div>
                    <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mt-1 sm:mt-0 shrink-0">
                      {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
