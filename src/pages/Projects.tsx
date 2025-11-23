import { motion } from "framer-motion";

const projects = [
  {
    title: "PokeApp Clean Architecture",
    desc: "Pokémon app built with Jetpack Compose, MVVM Clean Architecture, and Paging3.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Room",
      "DataStore",
      "Retrofit",
      "Paging3",
      "Detekt",
      "Jacoco",
    ],
    features: [
      "Login/Register user",
      "List Pokemon from PokeAPI",
      "Pokemon detail + favorite",
      "Offline mode",
      "Theming (Light/Dark)",
      "Paging3 + RemoteMediator",
      "Unit & UI Testing",
      "Modularization & CI/CD",
    ],
    concept: [
      "MVVM + Clean Architecture",
      "Repository Pattern",
      "UseCase",
      "DTO/Mapper",
    ],
  },
  {
    title: "Java Spring Boot Marketplace API",
    desc: "Backend API for marketplace with CRUD, authentication, and role-based access.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Swagger/OpenAPI",
      "Docker",
      "Redis",
    ],
    features: [
      "CRUD Product & User",
      "Authentication + JWT",
      "Role-based access",
      "Search & Paging",
      "Logging & error handling",
      "Unit & Integration tests",
      "Advanced: Redis caching, Docker deployment",
    ],
    concept: [
      "Service Layer",
      "Repository Pattern",
      "DTO",
      "RESTful API",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Golang Social Media API Lite",
    desc: "Golang backend with Gin & MongoDB for CRUD posts, likes, and follow system.",
    stack: ["Golang", "Gin", "MongoDB", "JWT", "Swagger UI", "Docker", "Redis"],
    features: [
      "CRUD Post & User",
      "Like/Comment system",
      "Follow/Unfollow users",
      "Pagination for posts",
      "Middleware: Logging & validation",
      "Unit & integration tests",
      "Advanced: Redis, Docker, Microservice-ready",
    ],
    concept: [
      "Repository Pattern",
      "Service Layer",
      "Middleware",
      "Error Handling",
      "Swagger UI",
    ],
  },
  {
    title: "Flutter PokeApp BLoC",
    desc: "Pokémon app in Flutter using BLoC state management and offline caching.",
    stack: [
      "Flutter",
      "BLoC/Cubit",
      "Dio",
      "Hive",
      "Auto_route",
      "flutter_animate",
    ],
    features: [
      "Login/Register user",
      "List Pokemon from PokeAPI",
      "Pokemon detail + favorite",
      "Offline caching",
      "Theming (Light/Dark)",
      "Animations: Hero, Fade, Slide",
      "Unit & Widget Testing",
      "Modularization & CI/CD",
    ],
    concept: [
      "BLoC",
      "Clean Architecture",
      "Repository",
      "DTO/Mapper",
      "Dependency Injection",
    ],
  },
  {
    title: "Android Clean Architecture Skeleton Library",
    desc: "Starter template for Android apps with Clean Architecture and Jetpack Compose.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Room",
      "Paging3",
      "Retrofit",
      "Jacoco",
      "Detekt",
    ],
    features: [
      "MVVM + Clean Architecture setup",
      "BaseActivity/BaseFragment/BaseViewModel",
      "Reusable Composables or XML snippets",
      "Navigation Component setup",
      "DI: Dagger Hilt",
      "Network & DB setup template",
      "Unit test templates",
      "Extensions, Logger, Coroutine helpers",
      "Modularization & CI/CD ready",
    ],
    concept: [
      "MVVM + Clean Architecture",
      "Repository",
      "UseCase",
      "DTO/Mapper",
      "Modularization",
    ],
  },
  {
    title: "Jetpack Compose Playground",
    desc: "Explore all Jetpack Compose components and state management patterns.",
    stack: ["Kotlin", "Jetpack Compose"],
    features: [
      "Text, Button, Image, Icon",
      "Row, Column, Box, ConstraintLayout",
      "LazyColumn / LazyRow",
      "Card, Surface, Scaffold, AppBar",
      "Dialogs, Snackbars, Toasts",
      "Animations: Fade, Slide, Scale",
      "State management: remember, mutableStateOf, ViewModel",
      "Theming & Modifiers",
    ],
    concept: [
      "Component exploration",
      "State management",
      "Theming",
      "UI/UX patterns",
    ],
  },
  {
    title: "Flutter Widget Playground",
    desc: "Explore all Flutter widgets and interactions with BLoC examples.",
    stack: ["Flutter", "BLoC/Cubit", "Material3"],
    features: [
      "Text, Icon, Image, Button",
      "Row, Column, Stack, Container, SizedBox",
      "ListView, GridView, ScrollViews",
      "Card, Scaffold, AppBar, BottomNavigationBar",
      "Dialogs, Snackbars, Tooltip",
      "Animations: Hero, FadeTransition, AnimatedContainer",
      "GestureDetector, InkWell",
      "Theming (Light/Dark)",
    ],
    concept: [
      "Widget exploration",
      "State management",
      "Animations",
      "Gesture handling",
    ],
  },
];

const badgeColor = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "kotlin":
      return "bg-teal-400";
    case "jetpack compose":
      return "bg-purple-500";
    case "hilt":
      return "bg-pink-500";
    case "room":
      return "bg-orange-400";
    case "datastore":
      return "bg-yellow-400";
    case "retrofit":
      return "bg-indigo-400";
    case "paging3":
      return "bg-green-400";
    case "detekt":
      return "bg-red-400";
    case "jacoco":
      return "bg-red-600";
    case "spring boot":
      return "bg-green-600";
    case "java":
      return "bg-gray-600";
    case "postgresql":
      return "bg-blue-600";
    case "jwt":
      return "bg-purple-600";
    case "swagger/openapi":
      return "bg-cyan-500";
    case "docker":
      return "bg-gray-700";
    case "redis":
      return "bg-red-700";
    case "golang":
      return "bg-cyan-600";
    case "gin":
      return "bg-blue-500";
    case "flutter":
      return "bg-blue-400";
    case "bloc/cubit":
      return "bg-orange-500";
    case "dio":
      return "bg-indigo-500";
    case "hive":
      return "bg-yellow-600";
    default:
      return "bg-gray-500";
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter px-6 md:px-0 py-24 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold text-teal-400 mb-8">Projects</h3>
      <div className="space-y-8">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h4 className="text-2xl font-semibold mb-2 text-teal-300">
              {p.title}
            </h4>
            <p className="text-gray-400 mb-3">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2 py-1 rounded ${badgeColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-300 mb-1">Features:</p>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-300 mb-1">Concepts:</p>
              <div className="flex flex-wrap gap-2">
                {p.concept.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2 py-1 bg-gray-600 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="text-teal-400 text-sm mt-3 inline-block hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
