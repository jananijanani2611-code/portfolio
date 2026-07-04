import { FileText, Download } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { profile } from "@/data/site";

export default function Resume() {
  return (
    <section id="resume" className="section py-24 md:py-30">
      <SectionHeading eyebrow="Resume" title="The one-page version" />
      <Reveal>
        <div className="rounded-lg border border-line dark:border-line-dark bg-bg dark:bg-bg-dark-secondary p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-bg-secondary dark:bg-bg-dark flex items-center justify-center border border-line dark:border-line-dark">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">{profile.name} — Resume</p>
              <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                UI/UX design, frontend, and full-stack development experience, one PDF.
              </p>
            </div>
          </div>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white dark:bg-white dark:text-ink px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-transform shrink-0"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
