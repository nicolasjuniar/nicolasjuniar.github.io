import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Experience() {
  return (
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
  );
}
