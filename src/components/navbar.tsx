function Navbar() {
  return (
    <nav>
      {/* Logo */}
      <div className="flex items-center pl-2 sm:pl-6 lg:justify-between lg:pl-0">
        <span className="font-silkscreen flex space-x-3 text-3xl font-normal whitespace-nowrap not-italic rtl:space-x-reverse">
          Sherren.
        </span>

        <div className="hidden w-full lg:block lg:w-auto">
          <ul className="flex flex-col border border-gray-100 p-4 font-medium lg:flex-row lg:space-x-20 lg:border-0 lg:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#about"
                className="block px-3 py-2 text-white md:p-0"
                aria-current="page"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-3 py-2 text-white md:p-0">
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="block px-3 py-2 text-white md:p-0"
              >
                EXPERIENCES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded-sm px-3 py-2 text-white md:p-0"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
