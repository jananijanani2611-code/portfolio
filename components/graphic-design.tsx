import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { graphicDesigns } from "@/data/site";

export default function GraphicDesign() {
  return (
    <section id="graphic-design" className="section py-24 md:py-30">
      <SectionHeading
        eyebrow="Graphic & Poster Design"
        title="Beyond product UI"
        description="Visual design work outside of app and web interfaces — composition, typography, and mood for standalone visuals."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {graphicDesigns.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.08}>
            <div className="rounded-lg border border-line dark:border-line-dark bg-bg dark:bg-bg-dark-secondary overflow-hidden">
              <div className="relative aspect-[1300/1350] bg-bg-secondary dark:bg-bg-dark">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-xs font-medium text-ink-secondary dark:text-ink-dark-secondary mb-2">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold tracking-tight mb-3">{item.title}</h3>
                <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full border border-line dark:border-line-dark text-ink-secondary dark:text-ink-dark-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
