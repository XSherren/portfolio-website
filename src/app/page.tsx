import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { WorkExperiences } from "@/components/work-experiences";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <WorkExperiences />
        <Contact />
      </main>
    </>
  );
}
