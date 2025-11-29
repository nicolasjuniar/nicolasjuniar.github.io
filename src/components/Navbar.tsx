import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  scrolled: boolean;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  scrolled,
}: NavbarProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/95 shadow-md"
            : "bg-white/95 shadow-md"
          : darkMode
          ? "bg-gray-900/80"
          : "bg-white/80"
      } backdrop-blur border-b ${
        darkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-teal-400 hover:scale-105 transition-transform cursor-pointer">
          Nicolas Juniar
        </h1>
        <div className="space-x-6 hidden md:flex">
          {[
            "home",
            "about",
            "experience",
            "education",
            // "skills",
            // "learning",
            "projects",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-teal-400 capitalize transition-colors"
            >
              {section}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-teal-500 text-gray-900 hover:bg-teal-400 transition-all"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
