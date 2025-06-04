"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
  id: string | number;
  title: string;
  company: string;
  dateRange: string;
  responsibilities: string[];
}

interface WorkExperiencesProps {
  experiences: Experience[];
}

const WorkExperiences = ({ experiences }: WorkExperiencesProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | number | null>(
    experiences.length > 0 ? experiences[0].id : null,
  );

  const handleAccordionClick = (id: string | number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const cardBaseBg = "bg-[#3D1B67]/55";
  const cardExpandedBg = "bg-[#3D1B67]";
  const cardBaseBorder = "border-white/10";
  const cardExpandedBorder = "border-white/20";

  return (
    <section
      id="experiences"
      className="container mx-auto px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-12 gap-y-10 lg:flex-row">
          {/* Left Column: Open To Work, Title and Description */}
          <div className="text-center lg:w-1/2 lg:content-center lg:text-left">
            <div className="mb-4 inline-flex items-center rounded-full border border-transparent bg-[#3D1B67] px-4 py-0.5 lg:mb-6">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-[#F2F2F2]">
                Open To Work
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl lg:mb-8 xl:text-6xl">
              Work Experiences
            </h2>
            <p className="text-slate-300 lg:text-lg">
              Detailing my career journey and the practical experience I&apos;ve
              gained, showcasing my contributions and growth in various
              professional environments.
            </p>
          </div>
          {/* Right Column: Experience Cards (Accordion) */}
          <div className="space-y-4 lg:w-1/2">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`rounded-lg border shadow-lg transition-all duration-600 ease-in-out focus-within:shadow-xl hover:border-[#6A6A82] hover:shadow-xl ${openAccordion === exp.id ? `${cardExpandedBg} ${cardExpandedBorder}` : `${cardBaseBg} ${cardBaseBorder}`} `}
              >
                <button
                  onClick={() => handleAccordionClick(exp.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={openAccordion === exp.id}
                  aria-controls={`accordion-content-${exp.id}`}
                >
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#C7C2E8]">{exp.company}</p>
                  </div>
                  <div className="ml-4 flex flex-col items-end">
                    <p className="text-sm whitespace-nowrap text-[#A099C2]">
                      {exp.dateRange}
                    </p>
                    {openAccordion === exp.id ? (
                      <ChevronUp className="mt-1 h-5 w-5 text-[#A099C2] transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="mt-1 h-5 w-5 text-[#A099C2] transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  id={`accordion-content-${exp.id}`}
                  className={`overflow-hidden transition-all duration-1200 ease-in-out ${openAccordion === exp.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} `}
                >
                  <div
                    className={`px-6 pb-6 ${openAccordion === exp.id ? "pt-2" : "pt-0"}`}
                  >
                    {exp.responsibilities && exp.responsibilities.length > 0 ? (
                      <ul className="ml-5 list-disc space-y-2 text-sm text-[#EDE3FF]">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#A099C2]">
                        No specific details available for this role.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { WorkExperiences };
