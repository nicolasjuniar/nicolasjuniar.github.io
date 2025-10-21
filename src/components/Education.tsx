import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Education() {
  return (
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
  );
}
