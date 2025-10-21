import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function About() {
  return (
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
        I’m an Android Developer with 5+ years of experience building
        maintainable apps using Kotlin, Clean Architecture, and Jetpack Compose.
        Currently learning backend technologies —{" "}
        <span className="text-teal-400 font-semibold">Spring Boot (Java)</span>{" "}
        and{" "}
        <span className="text-teal-400 font-semibold">Go (Golang)</span> — to
        become a full-stack mobile engineer.
      </p>
    </motion.section>
  );
}
