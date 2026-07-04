import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { experience, certifications } from "@/data/site";
import { Award, Zap } from "lucide-react";

export default function Experience() {
  const certs = certifications.filter((c) => c.type !== "hackathon");
  const hackathons = certifications.filter((c) => c.type === "hackathon");

  return (
    <section id="experience" className="section py-24 md:py-30">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="space-y-0 mb-24">
        {experience.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.1}>
            <div className="grid md:grid-cols-[220px,1fr] gap-4 md:gap-12 py-8 border-t border-line dark:border-line-dark first:border-t-0">
              <div>
                <p className="text-sm font-medium">{item.period}</p>
                <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary mt-1">
                  {item.company}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                <p className="mt-2 text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed max-w-2xl">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((a) => (
                    <li
                      key={a}
                      className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-6">
          Certifications & Achievements
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {certs.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.06}>
            <div className="flex gap-4 rounded-lg border border-line dark:border-line-dark p-5 bg-bg dark:bg-bg-dark-secondary h-full">
              <Award size={18} className="shrink-0 mt-0.5 text-ink-secondary dark:text-ink-dark-secondary" />
              <div>
                <p className="text-sm font-medium leading-snug">{cert.title}</p>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mt-1">
                  {cert.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {hackathons.length > 0 && (
        <>
          <Reveal>
            <h3 className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-6">
              Hackathons & Competitions
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {hackathons.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-lg border border-line dark:border-line-dark p-5 bg-bg dark:bg-bg-dark-secondary h-full">
                  <Zap size={18} className="shrink-0 mt-0.5 text-ink-secondary dark:text-ink-dark-secondary" />
                  <div>
                    <p className="text-sm font-medium leading-snug">{cert.title}</p>
                    <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
