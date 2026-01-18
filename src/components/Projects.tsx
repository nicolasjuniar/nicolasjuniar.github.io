// src/components/Projects.tsx
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Projects() {
  const projects = [
    {
      title: "PokeApp Clean Architecture",
      desc: "Simple App with Latest Android Architecture Implementation",
      stack: "Clean Architecture, Jetpack Compose, Hilt",
      link: "https://github.com/nicolasjuniar/pokeapp-jetpack-compose",
      status: "done",
    },
    {
      title: "Simple OTA (Over-The-Air) Android",
      desc: "Simple App to demonstrate how you update APK using OTA",
      stack: "Kotlin",
      link: "https://github.com/nicolasjuniar/simple-ota-android-simulaltion",
      status: "done",
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
      <h3 className="text-3xl font-bold text-teal-400 mb-6 text-center">
        Projects
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 dark:bg-gray-700 p-5 rounded-xl border border-gray-700 hover:shadow-lg transition-all w-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-sm"
          >
            <h4 className="text-xl font-semibold mb-1 text-teal-300">
              {p.title}
            </h4>

            <span
              className={`inline-block text-xs px-2 py-1 rounded-full mb-2
          ${
            p.status === "done"
              ? "bg-green-500/10 text-green-400"
              : "bg-yellow-500/10 text-yellow-400"
          }
        `}
            >
              {p.status === "done" ? "Done" : "In Progress"}
            </span>

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
