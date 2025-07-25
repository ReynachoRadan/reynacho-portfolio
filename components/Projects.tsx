"use client";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Neo Cafe",
    description:
      "Digital menu app for modern cafes. Designed using Figma as a high-fidelity UI project.",
    tech: ["Figma", "UI/UX Design"],
  },
  {
    title: "Mivote",
    description:
      "UI/UX concept for a digital voting app that prioritizes accessibility and security.",
    tech: ["Figma", "Mobile UI Design"],
  },
  {
    title: "Sehati",
    description:
      "Health monitoring app for children with clean and intuitive UI.",
    tech: ["Figma", "Health App UI"],
  },
  {
    title: "Selisir",
    description:
      "Travel app for recommending East Java beaches with map-based interface.",
    tech: ["Figma", "Travel App"],
  },
  {
    title: "Dapur Ibuk",
    description:
      "Traditional food ordering app featuring clean visual menus and warm branding.",
    tech: ["Figma", "Restaurant UI"],
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-24 px-6 flex flex-col gap-10"
    >
      <h2 className="text-3xl font-bold text-foreground text-center sm:text-left">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white dark:bg-[#111]"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
