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
        "Handled ongoing basic updates and maintenance of company website.",
        "Delivered monthly printing usage reports using Power BI, supporting HOD in resource planning.",
        "Supported sales team by preparing quotations, creating sales orders, and coordinating with internal teams to process orders smoothly.",
        "Coordinate delivery arrangements with customers.",
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
        "Supported sales team by preparing quotations, creating sales orders, and coordinating with internal teams to process orders smoothly.",
        "Monitoring customer orders tracking by ERP system.",
        "Communicated with customers to confirm delivery times and arrange shipments.",
        "Issued DO and invoices once goods are ready for delivery.",
        "Handled invoice submissions through email and client's portal.",
        "Assisted purchasing team with PR buying",
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
