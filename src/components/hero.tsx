import Image from "next/image";

function Hero() {
  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col-reverse gap-4 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:gap-6 lg:px-4">
          {/* Hero Content */}
          <div className="mx-auto place-self-center lg:w-1/2">
            <div>
              <h1 className="mx-auto mb-4 text-center leading-8 font-bold tracking-tight sm:leading-12 lg:text-left dark:text-white">
                <span className="font-outfit text-4xl sm:text-5xl xl:text-6xl">
                  Hey! I&apos;m Sherren.
                </span>
                <br />
                <span className="font-outfit text-3xl sm:text-4xl xl:text-5xl">
                  A Software Developer.
                </span>
              </h1>
              <p className="mb-6 text-center font-light text-slate-300 sm:px-6 lg:mb-8 lg:px-0 lg:text-left lg:text-lg">
                I&apos;m a recent IT grad who loves coding. I&apos;m always
                learning new things, building projects, and having fun growing
                as a developer.
              </p>
              <a
                href="#contact"
                className="mx-auto mb-[15px] inline-flex w-full items-center justify-center rounded-full border bg-linear-to-br from-[#E7DAFF] to-[#B494EF] px-5 py-3 text-center text-base font-semibold text-[#2C1746] transition duration-300 hover:border hover:bg-linear-to-br hover:from-[#CFB5FF] hover:to-[#655BD6] lg:mr-4 lg:mb-0 lg:w-50"
              >
                CONTACT ME
              </a>
              <a
                href="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-center text-base font-semibold text-white duration-300 hover:border-indigo-200 hover:text-indigo-200 lg:w-50"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:mt-0 lg:flex lg:w-1/2 lg:justify-end xl:mb-0">
            <Image
              src="/Hero-image.svg"
              alt="Hero Image"
              width={0}
              height={0}
              className="mx-auto h-70 w-70 sm:h-100 sm:w-100 lg:mx-0 lg:h-auto lg:w-[500px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export { Hero };
