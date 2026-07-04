import Reveal from "@/components/reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-14 md:mb-20">
      {eyebrow && (
        <p className="text-sm font-medium text-ink-secondary dark:text-ink-dark-secondary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
