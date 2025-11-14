import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { incrementVisitorCount } from "./services/statsService";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (!triggered.current) {
      triggered.current = true;
      incrementVisitorCount();
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`min-h-screen font-inter transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrolled={scrolled}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        {/* <Skills /> */}
        {/* <Learning /> */}
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
