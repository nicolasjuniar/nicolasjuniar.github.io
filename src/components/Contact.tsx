import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 px-6 md:px-0 max-w-4xl mx-auto text-center"
    >
      <h3 className="text-3xl font-bold text-teal-400 mb-6">Contact</h3>
      <p className="text-gray-300 mb-4">
        Interested in collaborating or just want to say hi?
      </p>
      <div className="space-y-2">
        <p>
          Email:{" "}
          <a
            href="mailto:nicolas@example.com"
            className="text-teal-400 hover:underline"
          >
            nicolas@example.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/nicolasjuniar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            linkedin.com/in/nicolasjuniar
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/nicolasjuniar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            github.com/nicolasjuniar
          </a>
        </p>
      </div>
      <a
        href="/cv_nicolas_juniar.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-teal-500 text-gray-900 font-semibold rounded-full hover:bg-teal-400 transition-all"
      >
        Download CV
      </a>
    </motion.section>
  );
}
