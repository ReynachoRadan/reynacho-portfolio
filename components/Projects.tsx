"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Combine refs
  const setRefs = (node: any) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      ref={setRefs}
      className="max-w-5xl mx-auto py-24 px-6 flex flex-col gap-10"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <h2 className="text-4xl font-bold text-center sm:text-left text-foreground mb-4">
        Selected Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group block border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-[#111] hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
          >
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
