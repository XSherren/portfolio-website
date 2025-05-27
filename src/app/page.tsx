import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { WorkExperiences } from "@/components/work-experiences";
import { Header } from "@/components/header";

export default function Home() {
  const experiencesData = [
    {
      id: 1,
      title: "Sales cum Website Coordinator",
      company: "Glendale Electronic Components Pte Ltd",
      dateRange: "Jul, 2024 - Present",
      responsibilities: [
        "Led the revamp of company's website, handling website redesigns, migrations and security implementation.",
        "Managing and maintaining the company's website.",
        "Assist sales team in processing sales orders, purchase orders and delivery orders.",
        "Coordinate delivery arrangements with customers.",
        "Use Power BI to generate and distribute monthly printing usage report to each HOD.",
      ],
    },
    {
      id: 2,
      title: "IT Intern",
      company: "Cognitus Technologies Sdn Bhd",
      dateRange: "Jan, 2024 - Jun, 2024",
      responsibilities: [
        "Assist in developing, testing, deploying, maintaining, and improving software applications.",
        "Contribute to innovative solutions while learning from experienced mentors.",
      ],
    },
    {
      id: 3,
      title: "Sales Coordinator",
      company: "Glendale Electronic Components Pte Ltd",
      dateRange: "Jun, 2022 - Dec, 2023",
      responsibilities: [
        "Assist sales team in processing sales orders, purchase orders and delivery orders.",
        "Coordinate delivery arrangements with customers.",
        "Use Power BI to generate and distribute monthly printing usage report to each HOD.",
      ],
    },
    {
      id: 4,
      title: "Salesgirl",
      company: "Unice Marketing Sdn Bhd",
      dateRange: "Apr, 2018 - Apr, 2022",
      responsibilities: [
        "Providing quality sales and consultation services for hair and beauty supplies products.",
        "Handling incoming inquiries from customers.",
        "Handle order fulfillment processes for customers in store and online store.",
        "Process payments using POS system.",
      ],
    },
  ];

  return (
    <>
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <WorkExperiences experiences={experiencesData} />
        <Contact />
      </main>
    </>
  );
}
