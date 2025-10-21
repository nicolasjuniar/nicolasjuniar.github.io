import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowScroll(y > 400);
      setScrolled(y > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`min-h-screen font-inter transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
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
              "skills",
              "learning",
              "projects",
              "hireme",
              "contact",
            ].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
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

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center h-screen px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-teal-400">Nicolas Juniar</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Android Developer passionate about Clean Architecture, scalable mobile apps, and backend development with Spring Boot & Go.
        </motion.p>
      </section>

      {/* About */}
      <motion.section
        id="about"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">About Me</h3>
        <p className="leading-relaxed text-gray-400 dark:text-gray-300">
          I’m an Android Developer with 5+ years of experience building maintainable apps using Kotlin, Clean Architecture, and Jetpack Compose.
          Currently learning backend technologies — <span className="text-teal-400 font-semibold">Spring Boot (Java)</span> and <span className="text-teal-400 font-semibold">Go (Golang)</span> — to become a full-stack mobile engineer.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Experience</h3>
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-semibold text-teal-300">
              Senior Android Developer — ABC Tech
            </h4>
            <p className="text-gray-500 text-sm">Jan 2022 - Present</p>
            <ul className="list-disc list-inside mt-3 text-gray-400 space-y-1">
              <li>Developed modular apps with Hilt, Retrofit, and Paging 3.</li>
              <li>Implemented CI/CD workflows with GitHub Actions.</li>
              <li>Maintained Clean Architecture and unit-tested codebase.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-300">
              Android Developer — XYZ Studio
            </h4>
            <p className="text-gray-500 text-sm">Jun 2019 - Dec 2021</p>
            <ul className="list-disc list-inside mt-3 text-gray-400 space-y-1">
              <li>Worked on Kotlin projects using MVVM and ViewBinding.</li>
              <li>Integrated Firebase Analytics and push notifications.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Education</h3>
        <div>
          <h4 className="text-xl font-semibold text-teal-300">
            Bachelor of Computer Science — University of Technology
          </h4>
          <p className="text-gray-500 text-sm">2015 - 2019</p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            "Kotlin",
            "Jetpack Compose",
            "Hilt",
            "Room",
            "Retrofit",
            "DataStore",
            "Paging 3",
            "Firebase",
            "Git",
            "CI/CD",
          ].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={skill}
              className="p-3 bg-gray-800 dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Currently Learning */}
      <motion.section
        id="learning"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Currently Learning</h3>
        <p className="text-gray-400 mb-6">
          Expanding my backend knowledge to complement my Android expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              name: "Spring Boot",
              desc: "Java RESTful API + JWT Auth",
              link: "https://github.com/nicolasjuniar/springboot-expensetracker",
            },
            {
              name: "GoLang",
              desc: "Simple REST API + CRUD",
              link: "https://github.com/nicolasjuniar/golang-todoapi",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all w-64"
            >
              <p className="text-teal-400 font-semibold">{item.name}</p>
              <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-400 hover:underline"
              >
                View Progress →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "PokeApp",
              desc: "Pokémon app built with Clean Architecture and Paging 3.",
              stack: "Kotlin, Hilt, Room, Retrofit",
            },
            {
              title: "DevHub",
              desc: "Developer community app using Jetpack Compose.",
              stack: "Kotlin, Compose, DataStore",
            },
            {
              title: "Expense Tracker API",
              desc: "RESTful API with Spring Boot and MySQL secured by JWT.",
              stack: "Java, Spring Boot, MySQL",
            },
          ].map((p) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={p.title}
              className="bg-gray-800 dark:bg-gray-700 p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition-all"
            >
              <h4 className="text-xl font-semibold mb-2 text-teal-300">
                {p.title}
              </h4>
              <p className="text-gray-400 mb-2">{p.desc}</p>
              <p className="text-sm text-gray-500">Tech Stack: {p.stack}</p>
              <a
                href="#"
                className="text-teal-400 text-sm mt-2 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Hire Me */}
      <motion.section
        id="hireme"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-3xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-4">
          Let’s Work Together
        </h3>
        <p className="text-gray-400 mb-6">
          Open for Android or backend (Spring Boot / GoLang) projects. Let's build something awesome!
        </p>
        <a
          href="mailto:nicolas@example.com"
          className="bg-teal-500 text-gray-900 px-8 py-3 rounded-lg shadow hover:bg-teal-400 transition-all"
        >
          Hire Me →
        </a>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-0 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Contact</h3>
        <p className="mb-4 text-gray-400">Want to collaborate or just say hi?</p>
        <div className="space-y-2">
          <p>
            Email:{" "}
            <a href="mailto:nicolas@example.com" className="text-teal-400 hover:underline">
              nicolas@example.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/nicolasjuniar"
              className="text-teal-400 hover:underline"
            >
              linkedin.com/in/nicolasjuniar
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/nicolasjuniar"
              className="text-teal-400 hover:underline"
            >
              github.com/nicolasjuniar
            </a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className={`py-6 text-center text-sm border-t ${
          darkMode
            ? "border-gray-800 text-gray-500"
            : "border-gray-200 text-gray-600"
        }`}
      >
        © {new Date().getFullYear()} Nicolas Juniar. All rights reserved.
      </footer>

      {/* Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-8 right-8 bg-teal-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-teal-400 transition-all"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}
