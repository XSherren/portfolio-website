import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects, ProjectSection } from "@/components/projects";
import { Skills } from "@/components/skills";
import { WorkExperiences } from "@/components/work-experiences";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects>
          <ProjectSection title="e Leave System" imgSource="">
            A Web application for managing employee leave requests.
          </ProjectSection>
          <ProjectSection title="Web Design" imgSource=""></ProjectSection>
          <ProjectSection title="Next Web App" imgSource=""></ProjectSection>
        </Projects>
        <WorkExperiences />
        <Contact />
      </main>
    </>
  );
}
