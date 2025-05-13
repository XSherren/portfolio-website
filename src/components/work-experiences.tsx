interface Experience {
  id: string | number;
  number: string;
  dateRange: string;
  title: string;
  description: string;
}

interface WorkExperiencesProps {
  experiences: Experience[];
}

const WorkExperiences = ({ experiences }: WorkExperiencesProps) => {
  return (
    <section className={"px-4 py-16 font-sans sm:px-6 lg:px-8"}>
      <div className="container mx-auto text-center">
        <h2 className={"mb-3 text-4xl font-bold text-white md:text-5xl"}>
          Work Experiences
        </h2>
        <p className={"mb-16 text-lg text-[#A099C2] md:mb-20 md:text-xl"}>
          Lorem ipsum dolor sit amet consectetur
        </p>

        <div className="relative mx-auto w-full max-w-5xl">
          <div
            className={
              "absolute top-8 right-0 left-0 z-0 h-0.5 bg-[#A099C2] md:top-10 md:h-1"
            }
            aria-hidden="true"
          ></div>

          <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 md:gap-y-0">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="z-10 flex flex-col items-center text-center"
              >
                <div
                  className={
                    "mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C7C2E8] shadow-lg md:mb-8 md:h-20 md:w-20"
                  }
                >
                  <span
                    className={"text-2xl font-bold text-[#2C204B] md:text-3xl"}
                  >
                    {exp.number}
                  </span>
                </div>

                <div className="mt-2">
                  <p
                    className={
                      "mb-1.5 text-sm font-semibold text-white md:text-base"
                    }
                  >
                    {exp.dateRange}
                  </p>
                  <h3
                    className={"mb-2.5 text-lg font-bold text-white md:text-xl"}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className={
                      "px-2 text-xs leading-relaxed text-[#A099C2] md:text-sm"
                    }
                  >
                    {exp.description}
                  </p>
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
