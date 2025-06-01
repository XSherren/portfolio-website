import { FaRegPaperPlane } from "react-icons/fa";

const GitHubIcon = () => (
  <svg
    className="h-8 w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="h-6.5 w-6.5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center py-12 md:py-20"
    >
      <div className="container mx-auto px-8">
        <div className="mb-10 text-center md:mb-16">
          <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
            Contact Me
          </h1>
          <p className="text-lg text-purple-200 md:text-xl">
            Happy to connect about new opportunities or anything else.
            Let&apos;s talk!
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Contact Form */}
          <form className="w-full space-y-8 text-center md:order-2 md:space-y-6 md:text-left lg:w-1/2">
            <div>
              <input
                type="text"
                name="yourName"
                id="yourName"
                className="mt-1 block w-full border-0 border-b-2 border-[#E2CBFF]/30 bg-transparent px-1 py-2 text-white placeholder-[#D8D2E7] focus:border-purple-200 focus:ring-0 focus:outline-none sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email_form"
                id="email_form"
                className="mt-1 block w-full border-0 border-b-2 border-[#E2CBFF]/30 bg-transparent px-1 py-2 text-white placeholder-[#D8D2E7] focus:border-purple-200 focus:ring-0 focus:outline-none sm:text-sm"
                placeholder="E-mail"
              />
            </div>
            <div>
              <textarea
                id="yourMessage"
                name="yourMessage"
                rows={4}
                className="mt-1 block w-full border-0 border-b-2 border-[#E2CBFF]/30 bg-transparent px-1 py-2 text-white placeholder-[#D8D2E7] focus:border-purple-200 focus:ring-0 focus:outline-none sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full border bg-linear-to-br from-[#E7DAFF] to-[#B494EF] px-8 py-3 text-base font-semibold text-[#2C1746] shadow-sm transition-colors hover:border hover:bg-linear-to-br hover:from-[#CFB5FF] hover:to-[#655BD6] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900 focus:outline-none md:w-auto"
              >
                Send Message
                <FaRegPaperPlane className="-mr-1 ml-1 h-4 w-4 transform" />
              </button>
            </div>
          </form>

          {/* Contact Details */}
          <div className="mx-auto mt-10 space-y-8 text-center md:order-1 md:mt-0 md:text-left lg:mx-0 lg:w-1/2 lg:pl-26">
            {/* Email */}
            <div>
              <h3 className="mb-1 text-sm font-semibold text-purple-300 uppercase">
                Email
              </h3>
              <a
                href="mailto:sherren.sg00@gmail.com"
                className="group text-lg text-white transition-colors hover:text-purple-300"
              >
                sherren.sg00@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div>
              <h3 className="mb-1 text-sm font-semibold text-purple-300 uppercase">
                Phone
              </h3>
              <p className="text-lg text-white">(65) 8902 9865</p>
            </div>
            {/* Follow Social */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-purple-300 uppercase">
                Follow
              </h3>
              <div className="flex items-center justify-center space-x-3 md:justify-start">
                <a
                  href="https://github.com/XSherren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B9B5E4]"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/sherren-lau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B9B5E4]"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
