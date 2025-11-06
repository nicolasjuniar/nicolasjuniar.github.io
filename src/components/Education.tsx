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
      <div className="space-y-10">
        <div>
          <h4 className="text-xl font-semibold text-teal-300">
            Informatics Engineering - Atma Jaya Yogyakarta University
          </h4>
          <p className="text-gray-500 text-sm">2013 - 2018 • GPA: 3.49</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Completed a thesis project by developing two simple Android
            applications using the <strong>MVP (Model-View-Presenter)</strong>{" "}
            design pattern: a catering order app and a catering management app.
            The management app integrated <strong>Google Maps API</strong> to
            draw delivery routes using polylines within the application. The
            backend was built with <strong>CodeIgniter</strong>, which was used
            to create simple RESTful APIs for data communication between the two
            applications.
          </p>
          <a
            href="https://github.com/nicolasjuniar/porkat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm hover:underline mr-4"
          >
            View Android Project →
          </a>
          <a
            href="https://github.com/nicolasjuniar/porkat_web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm hover:underline"
          >
            View Backend Project →
          </a>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-teal-300">
            Android Beginner Batch 3 - Binar Academy
          </h4>
          <p className="text-gray-500 text-sm">2017</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Completed Bootcamp where I learned the fundamentals of Android
            development, including basic layouting and networking using
            Retrofit.
          </p>
          <a
            href="https://drive.google.com/file/d/1ZOSP_g-Kf2wlqzBhRW16JhW3oPbOetaK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm hover:underline"
          >
            View Certificate →
          </a>
        </div>
      </div>
    </motion.section>
  );
}
