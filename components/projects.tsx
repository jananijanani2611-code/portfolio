import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="section py-24 md:py-30">
      <SectionHeading
        eyebrow="Selected Work"
        title="Case studies"
        description="Five projects spanning mobile apps, ecommerce, and web — each taken from research through to high-fidelity UI."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
