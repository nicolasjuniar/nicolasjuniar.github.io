import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

export default function Detail() {
  const [visitor, setVisitor] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const docRef = doc(db, "stats", "stats");

  const fetchVisitor = async () => {
    try {
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setVisitor(snap.data().visitor_count);
      } else {
        setError("Document not found in Firestore.");
      }
    } catch (e) {
      console.error("Error fetching visit count:", e);
      setError("Failed to load data.");
    }
  };

  const resetVisitor = async () => {
    try {
      await updateDoc(docRef, { visitor_count: 0 });
      setVisitor(0);
    } catch (e) {
      console.error("Error resetting visit count:", e);
    }
  };

  const listProject = [
    {
      title: "Pokeapp + Jetpack Compose + Clean Architecture",
      progress: "done",
      desc: "-",
      link: "-",
    },
    {
      title: "Pokeapp + Viewbinding + Clean Architecture",
      progress: "in progress",
      desc: "-",
      link: "-",
    },
    {
      title: "Clean Architecture Core Library",
      progress: "in progress",
      desc: "-",
      link: "-",
    },
    {
      title: "Jetpack Compose Playground",
      progress: "not done",
      desc: "-",
      link: "-",
    },
    {
      title: "Spring boot Upgradeable Restful API",
      progress: "not done",
      desc: "-",
      link: "-",
    },
    {
      title: "Gin Upgradeable Restful API",
      progress: "not done",
      desc: "-",
      link: "-",
    },
    {
      title: "Flutter Portofolio(?)",
      progress: "not done",
      desc: "-",
      link: "-",
    },
    {
      title: "Encyclopedia App(?)",
      progress: "not done",
      desc: "-",
      link: "-",
    },
  ];

  useEffect(() => {
    fetchVisitor();
  }, []);

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold text-teal-400 text-center mb-10">
        Detail
      </h1>

      <div className="space-y-6">
        <div>
          <p className="text-lg text-gray-400 mb-1">Visitor Count:</p>
          <p className="text-3xl font-bold text-teal-400">{visitor}</p>
        </div>

        <button
          onClick={resetVisitor}
          className="
            px-4 py-2 rounded-lg text-sm font-medium 
            bg-slate-600 text-white hover:bg-slate-700 
            transition
          "
        >
          Reset Counter
        </button>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-teal-400 mb-6">Projects</h2>

        <div className="space-y-6">
          {listProject.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:shadow-lg transition-all"
            >
              <h4 className="text-xl font-semibold mb-2 text-teal-300">
                {item.title}
              </h4>

              <p className="text-gray-400 mb-2 line-clamp-4">{item.desc}</p>

              <p
                className={`text-sm font-medium mb-3 ${
                  item.progress === "done"
                    ? "text-green-400"
                    : item.progress === "in progress"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                Progress: {item.progress}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 text-sm hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
