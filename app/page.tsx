import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import DevProjects from "@/components/dev-projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <DevProjects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
