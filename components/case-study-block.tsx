import Reveal from "@/components/reveal";

export function CSBlock({
  index,
  heading,
  body,
  bullets,
}: {
  index: string;
  heading: string;
  body: string;
  bullets?: string[];
}) {
  return (
    <Reveal className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 py-12 border-t border-line dark:border-line-dark">
      <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium">{index}</p>
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">{heading}</h2>
        <p className="text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
          {body}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-5 space-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0"
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

export function CSDivider({ index, heading }: { index: string; heading: string }) {
  return (
    <div className="grid md:grid-cols-[80px,1fr] gap-4 md:gap-12 pt-16 pb-4 border-t border-line dark:border-line-dark">
      <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-medium">{index}</p>
      <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
    </div>
  );
}
