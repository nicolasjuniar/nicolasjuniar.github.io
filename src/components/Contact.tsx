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
      <div className="space-y-2">
        <p>
          Phone:{" "}
          <a
            href="https://wa.me/6287724192339"
            className="text-teal-400 hover:underline"
          >
            087724192339
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:nicolasjuniar@gmail.com"
            className="text-teal-400 hover:underline"
          >
            nicolasjuniar@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nicolas-juniar-90bb48117/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Nicolas Juniar
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
        href="https://drive.google.com/file/d/1Q0Z0ZrnV6WtRxmE8qnhHFJiVDkjY9RBm/view?usp=sharing"
        download
        className="mt-6 inline-block px-6 py-3 bg-teal-500 text-gray-900 font-semibold rounded-full hover:bg-teal-400 transition-all"
      >
        Download CV
      </a>
    </motion.section>
  );
}
