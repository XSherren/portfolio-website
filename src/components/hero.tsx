import { Navbar } from "./navbar";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section className="">
        <Navbar />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-35 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-xl text-4xl leading-19 font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Hey! I’m Sherren. A Software Developer.
            </h1>
            <p className="mb-6 max-w-xl font-light text-white md:text-lg lg:mb-8 lg:text-xl">
              I’m a recent IT grad who loves coding. I’m always learning new
              things, building projects, and having fun growing as a developer.
            </p>
            <a
              href="#"
              className="mr-4 inline-flex w-50 items-center justify-center rounded-full border border-[#8F63C5] bg-[#8F63C5] px-5 py-3 text-center text-base font-medium text-white hover:border-[#572594] hover:bg-[#572594]"
            >
              CONTACT ME
            </a>
            <a
              href="#"
              className="inline-flex w-50 items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-center text-base font-medium text-white"
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src="/hero-image.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="rounded-full shadow-[2px_2px_40px_#C08DFF]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export { Hero };
