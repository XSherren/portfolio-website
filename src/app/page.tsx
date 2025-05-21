import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { WorkExperiences } from "@/components/work-experiences";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <WorkExperiences
          experiences={[
            {
              id: 1,
              number: "01",
              dateRange: "2018 - 2022",
              title: "Retail Sales Associate",
              description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
            },
            {
              id: 2,
              number: "02",
              dateRange: "2022 - 2024",
              title: "Sales Coordinator",
              description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
            },
            {
              id: 3,
              number: "03",
              dateRange: "2024 - 2025",
              title: "IT Intern",
              description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
}
