import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { WorkExperiences } from "@/components/work-experiences";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <WorkExperiences />
        <Contact />
      </main>
    </>
  );
}
