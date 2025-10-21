import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Learning() {
  const items = [
    {
      name: "Spring Boot",
      desc: "Java RESTful API + JWT Auth",
      link: "https://github.com/nicolasjuniar/springboot-expensetracker",
    },
    {
      name: "GoLang",
      desc: "Simple REST API + CRUD",
      link: "https://github.com/nicolasjuniar/golang-todoapi",
    },
  ];

  return (
    <motion.section
      id="learning"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 px-6 md:px-0 max-w-4xl mx-auto text-center"
    >
      <h3 className="text-3xl font-bold text-teal-400 mb-6">
        Currently Learning
      </h3>
      <p className="text-gray-400 mb-6">
        Expanding my backend knowledge to complement my Android expertise.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all w-64"
          >
            <p className="text-teal-400 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-teal-400 hover:underline"
            >
              View Progress →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
