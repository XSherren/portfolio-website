import Image from "next/image";

function Hero() {
  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col-reverse px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:gap-6 lg:px-4">
          {/* Hero Content */}
          <div className="mx-auto place-self-center lg:w-1/2 lg:justify-items-end">
            <div>
              <h1 className="mx-auto mb-4 text-center leading-8 font-bold tracking-tight sm:leading-12 lg:text-left dark:text-white">
                <span className="title-outfit text-[25pt] sm:text-5xl lg:text-5xl xl:text-6xl">
                  Hey! I&apos;m Sherren.
                </span>
                <br />
                <span className="text-[23pt] sm:text-4xl lg:text-4xl xl:text-5xl">
                  A Software Developer.
                </span>
              </h1>
              <p className="mb-6 max-w-xl text-center font-light text-white sm:px-6 lg:mb-8 lg:px-0 lg:text-left lg:text-lg">
                I&apos;m a recent IT grad who loves coding. I&apos;m always
                learning new things, building projects, and having fun growing
                as a developer.
              </p>
              <a
                href="#"
                className="mx-auto mb-[15px] inline-flex w-full items-center justify-center rounded-full border bg-linear-to-br from-[#E7DAFF] to-[#B494EF] px-5 py-3 text-center text-base font-semibold text-[#2C1746] hover:border hover:bg-linear-to-br hover:from-[#CFB5FF] hover:to-[#655BD6] lg:mr-4 lg:mb-0 lg:w-50"
              >
                CONTACT ME
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-center text-base font-semibold text-white lg:w-50"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-[40px] lg:mt-0 lg:flex lg:w-1/2 xl:mb-0">
            <Image
              src="/Hero-image.svg"
              alt="Hero Image"
              width={0}
              height={0}
              className="mx-auto h-70 w-70 sm:h-100 sm:w-100 lg:h-[500px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export { Hero };
