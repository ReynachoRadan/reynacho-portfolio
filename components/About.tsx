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
      className="max-w-6xl mx-auto px-6 py-24 flex flex-col sm:flex-row items-center gap-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* FOTO */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group">
        <Image
          src="/reynacho.jpg"
          alt="Reynacho A. Radan"
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700 ease-in-out"
          priority
        />
      </div>

      {/* BIO & SOCIAL LINK */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-4xl font-semibold text-foreground mb-6">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
          I&rsquo;mm <strong>Reynacho A. Radan</strong> — a passionate mobile app developer and UI/UX designer based in Indonesia. I specialize in crafting intuitive user interfaces backed by clean, scalable code.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
          My expertise in Android development and visual design allows me to bridge functionality with aesthetics, building digital experiences that are not just usable — but delightful.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
          I believe in continuous growth, collaborative work, and purposeful design. Whether it's designing from scratch or refining existing products, I aim to bring ideas to life with impact and clarity.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center sm:justify-start gap-6 text-2xl text-foreground">
          <a
            href="https://www.linkedin.com/in/reynachoradan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Nachodelreyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="hover:text-sky-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/reynacho._"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ReynachoRadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
