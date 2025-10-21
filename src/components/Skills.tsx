import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Skills() {
  const skills = [
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
  ];

  return (
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
        {skills.map((skill) => (
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
  );
}
