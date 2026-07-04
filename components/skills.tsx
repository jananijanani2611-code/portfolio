import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { skillCategories } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section py-24 md:py-30">
      <SectionHeading eyebrow="Skills" title="What I bring to a product team" />

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.1}>
            <div className="h-full rounded-lg border border-line dark:border-line-dark p-7 bg-bg dark:bg-bg-dark-secondary">
              <h3 className="text-lg font-semibold tracking-tight">{cat.title}</h3>
              <p className="mt-2 text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                {cat.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-bg-secondary dark:bg-bg-dark border border-line dark:border-line-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
