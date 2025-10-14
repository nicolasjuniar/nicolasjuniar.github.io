import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur z-50 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-teal-400">Nicolas Juniar</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-teal-400">Home</a>
            <a href="#about" className="hover:text-teal-400">About</a>
            <a href="#skills" className="hover:text-teal-400">Skills</a>
            <a href="#projects" className="hover:text-teal-400">Projects</a>
            <a href="#contact" className="hover:text-teal-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="flex flex-col justify-center items-center text-center h-screen px-4">
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
          Android Developer passionate about Clean Architecture and scalable mobile apps.
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 md:px-0 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-teal-400 mb-6">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I’m an Android Developer with over 5 years of experience in building high-quality, maintainable, and scalable mobile applications using Kotlin and Jetpack tools. Passionate about Clean Architecture, Jetpack Compose, and continuous learning in modern mobile development.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 md:px-0 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            "Kotlin", "Jetpack Compose", "Hilt", "Room",
            "Retrofit", "DataStore", "Paging 3", "Firebase", "Git", "CI/CD"
          ].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="p-3 bg-gray-800 rounded-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 md:px-0 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "PokeApp",
              desc: "Pokémon app built with Clean Architecture and Paging 3.",
              stack: "Kotlin, Hilt, Room, Retrofit",
            },
            {
              title: "DevHub",
              desc: "Developer community app using Jetpack Compose and offline-first architecture.",
              stack: "Kotlin, Compose, DataStore",
            },
            {
              title: "SimpleNotes",
              desc: "Offline notes app with Room and ViewModel.",
              stack: "Kotlin, Room, ViewModel",
            },
          ].map((p) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={p.title}
              className="bg-gray-800 p-5 rounded-xl border border-gray-700"
            >
              <h4 className="text-xl font-semibold mb-2 text-teal-300">{p.title}</h4>
              <p className="text-gray-400 mb-2">{p.desc}</p>
              <p className="text-sm text-gray-500">Tech Stack: {p.stack}</p>
              <a href="#" className="text-teal-400 text-sm mt-2 inline-block hover:underline">
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-0 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-teal-400 mb-6">Contact</h3>
        <p className="text-gray-300 mb-4">Interested in collaborating or just want to say hi?</p>
        <div className="space-y-2">
          <p>Email: <a href="mailto:nicolas@example.com" className="text-teal-400 hover:underline">nicolas@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/nicolasjuniar" className="text-teal-400 hover:underline">linkedin.com/in/nicolasjuniar</a></p>
          <p>GitHub: <a href="https://github.com/nicolasjuniar" className="text-teal-400 hover:underline">github.com/nicolasjuniar</a></p>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Nicolas Juniar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
