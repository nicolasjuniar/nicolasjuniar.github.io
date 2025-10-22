// src/components/Projects.tsx
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Projects() {
  const projects = [
    {
      title: "PokeApp",
      desc: "Pokémon app built with Clean Architecture and Paging 3.",
      stack: "Kotlin, Hilt, Room, Retrofit",
      link: "https://github.com/nicolasjuniar/pokeapp",
    },
    {
      title: "DevHub",
      desc: "Developer community app using Jetpack Compose and offline-first architecture.",
      stack: "Kotlin, Compose, DataStore",
      link: "https://github.com/nicolasjuniar/devhub",
    },
    {
      title: "SimpleNotes",
      desc: "Offline notes app with Room and ViewModel.",
      stack: "Kotlin, Room, ViewModel",
      link: "https://github.com/nicolasjuniar/simplenotes",
    },
    {
      title: "Expense Tracker API",
      desc: "RESTful API with Spring Boot and MySQL secured by JWT.",
      stack: "Java, Spring Boot, MySQL",
      link: "https://github.com/nicolasjuniar/expense-tracker",
    },
    {
      title: "Portfolio Web",
      desc: "Responsive portfolio using React, Tailwind, and Framer Motion.",
      stack: "React, TailwindCSS, Framer Motion",
      link: "https://github.com/nicolasjuniar/portfolio",
    },
  ];

  return (
    <motion.section
      id="projects"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 px-6 md:px-0 max-w-5xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-teal-400 mb-6 text-center">Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 dark:bg-gray-700 p-5 rounded-xl border border-gray-700 hover:shadow-lg transition-all"
          >
            <h4 className="text-xl font-semibold mb-2 text-teal-300">{p.title}</h4>
            <p className="text-gray-400 mb-2">{p.desc}</p>
            <p className="text-sm text-gray-500 mb-3">Tech Stack: {p.stack}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-sm hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
