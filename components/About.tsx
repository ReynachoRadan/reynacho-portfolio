"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative bg-white dark:bg-[#0a0a0a] py-24 px-6 max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-12 rounded-xl shadow-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* FOTO */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 group transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <Image
          src="/reynacho.jpg"
          alt="Reynacho A. Radan"
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
          priority
        />
      </div>

      {/* BIO & SOCIAL */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-4xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 rounded mb-6 mx-auto sm:mx-0" />

        {/* Highlight Quote */}
        <p className="bg-gray-100 dark:bg-gray-800/40 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 text-sm text-gray-700 dark:text-gray-300 italic mb-6">
          “Building meaningful digital experiences through code and creativity.”
        </p>

        {/* Animated Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4"
        >
          I&rsquo;m <strong>Reynacho A. Radan</strong> — a passionate mobile app developer and UI/UX designer based in Indonesia. I specialize in crafting intuitive user interfaces backed by clean, scalable code.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4"
        >
          My expertise in Android development and visual design allows me to bridge functionality with aesthetics, building digital experiences that are not just usable — but delightful.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6"
        >
          I believe in continuous growth, collaborative work, and purposeful design. Whether it&#39;s designing from scratch or refining existing products, I aim to bring ideas to life with impact and clarity.
        </motion.p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center sm:justify-start gap-6 text-2xl text-foreground">
          <a
            href="https://www.linkedin.com/in/reynachoradan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Nachodelreyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/reynacho._"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ReynachoRadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
