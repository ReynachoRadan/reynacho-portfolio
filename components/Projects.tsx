"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
};

type Certification = {
  title: string;
  issuer: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Neo Cafe",
    description: "Digital menu app for modern cafes. Designed using Figma as a high-fidelity UI project.",
    tech: ["Figma", "UI/UX Design"],
    image: "/images/projects/neo-cafe.png",
  },
  {
    title: "Mivote",
    description: "UI/UX concept for a digital voting app that prioritizes accessibility and security.",
    tech: ["Figma", "Mobile UI Design"],
    image: "/images/projects/mivote.png",
  },
  {
    title: "Sehati",
    description: "Health monitoring app for children with clean and intuitive UI.",
    tech: ["Figma", "Health App UI"],
    image: "/images/projects/sehati.png",
  },
  {
    title: "Selisir",
    description: "Travel app for recommending East Java beaches with map-based interface.",
    tech: ["Figma", "Travel App"],
    image: "/images/projects/selisir.png",
  },
  {
    title: "Dapur Ibuk",
    description: "Traditional food ordering app featuring clean visual menus and warm branding.",
    tech: ["Figma", "Restaurant UI"],
    image: "/images/projects/dapur-ibuk.png",
  },
  {
    title: "Pipeline",
    description: "Customer relationship management app with sales tracking, analytics, and team collaboration features.",
    tech: ["Figma", "Entertainment UI", "Prototype"],
    image: "/images/projects/pipeline.png",
  },
  {
    title: "Revela",
    description: "Movie streaming app with integrated chat feature and modern interface.",
    tech: ["Figma", "CRM UI", "Prototype"],
    image: "/images/projects/revela.png",
    link: "https://www.figma.com/proto/rygMNpGVWGaTgf0cLUNkdc/Revela---Reynacho-A.-Radan?page-id=124%3A985&node-id=325-2226",
  },
];

const certifications: Certification[] = [
  { title: "Junior Multimedia Designer", issuer: "DigiUp", year: "2024" },
  { title: "Mobile App Development", issuer: "SMK Telkom Malang", year: "2024" },
  { title: "Advanced Python", issuer: "Skillvul", year: "2024" },
  { title: "React Basic", issuer: "Skillvul", year: "2024" },
  { title: "IT Specialist: JavaScript", issuer: "Certiport", year: "2023" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "certifications">("projects");

  return (
    <motion.section
      id="projects"
      className="max-w-5xl mx-auto py-24 px-6 flex flex-col gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold text-center sm:text-left text-foreground mb-4">
        My Portfolio
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("projects")}
          className={clsx(
            "px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm",
            activeTab === "projects"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-100 text-gray-600 dark:bg-[#222] dark:text-gray-400 hover:shadow-md hover:bg-gray-200/50 dark:hover:bg-[#333]/50"
          )}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={clsx(
            "px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm",
            activeTab === "certifications"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-100 text-gray-600 dark:bg-[#222] dark:text-gray-400 hover:shadow-md hover:bg-gray-200/50 dark:hover:bg-[#333]/50"
          )}
        >
          Certifications
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "projects" ? (
          <motion.div
            key="projects"
            className="grid gap-8 sm:grid-cols-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group block border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-[#111] hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.image && (
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:underline transition">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 relative w-fit"
                  >
                    <span className="relative z-10">View Figma Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="certifications"
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-[#111] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.08)" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <h4 className="text-lg font-semibold text-foreground">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} — {cert.year}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
