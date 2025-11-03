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
        I’m an{" "}
        <span className="text-teal-400 font-semibold">Android Developer</span>{" "}
        with over 5 years of experience building reliable and maintainable
        mobile applications. I focus on writing clean and efficient code using
        modern Android tools and architecture. I’m passionate about continuous
        learning, improving my skills, and keeping up with the latest Android
        development practices.
      </p>
    </motion.section>
  );
}
