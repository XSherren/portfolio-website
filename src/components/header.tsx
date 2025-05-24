import { Navbar } from "./navbar"; // Import the Navbar component

function Header() {
  return (
    <>
      <header className="px-4 py-8 lg:py-12">
        <div className="container mx-auto">
          {/* Navbar */}
          <Navbar />
        </div>
      </header>
    </>
  );
}

export { Header };
