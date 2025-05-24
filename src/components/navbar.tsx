function Navbar() {
  return (
    <nav>
      {/* Logo */}
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Logo
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="flex flex-col border border-gray-100 p-4 font-medium lg:flex-row lg:space-x-20 lg:border-0 lg:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white md:p-0"
                aria-current="page"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-white md:p-0">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-white md:p-0">
                EXPERIENCES
              </a>
            </li>
            <li>
              <a
                href="#"
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
