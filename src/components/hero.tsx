import Image from "next/image";

function Hero() {
  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col-reverse px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:gap-6 lg:px-8 lg:py-20">
          <div className="mx-auto place-self-center lg:w-1/2">
            <h1 className="mx-auto mb-4 text-center font-bold tracking-tight lg:text-left lg:leading-12 dark:text-white">
              <span className="title-outfit text-[25pt] lg:text-5xl">
                Hey! I&apos;m Sherren.
              </span>
              <br />
              <span className="text-[23pt] lg:text-[28pt]">
                A Software Developer.
              </span>
            </h1>
            <p className="mb-6 max-w-xl text-center font-light text-white sm:px-6 lg:mb-8 lg:px-0 lg:text-left lg:text-lg">
              I&apos;m a recent IT grad who loves coding. I&apos;m always
              learning new things, building projects, and having fun growing as
              a developer.
            </p>
            <a
              href="#"
              className="mx-auto mb-[15px] inline-flex w-full items-center justify-center rounded-full border border-[#8F63C5] bg-[#8F63C5] px-5 py-3 text-center text-base font-medium text-white hover:border-[#572594] hover:bg-[#572594] lg:mr-4 lg:w-50"
            >
              CONTACT ME
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-center text-base font-medium text-white lg:w-50"
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="mb-[40px] lg:mt-0 lg:flex lg:w-1/2">
            <Image
              src="/hero-image.svg"
              alt="Hero Image"
              width={0}
              height={0}
              className="mx-auto h-70 w-70 rounded-full shadow-[2px_2px_40px_#C08DFF] sm:h-100 sm:w-100 lg:h-[450px] lg:w-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export { Hero };
