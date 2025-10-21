import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
        id="home" 
        className="flex flex-col justify-center items-center text-center h-screen px-6 md:px-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-teal-400">Nicolas Juniar</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl max-w-2xl"
      >
        Android Developer passionate about Clean Architecture and backend
        development using Spring Boot & Go.
      </motion.p>
    </section>
  );
}
