"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaBehance,
} from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 flex flex-col sm:flex-row items-center gap-12"
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
        <h2 className="text-4xl font-semibold text-foreground mb-4">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
          I’m <strong>Reynacho Azarel</strong>, a mobile app developer and UI/UX designer based in Indonesia. I love creating intuitive interfaces and crafting clean code behind beautiful designs.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
          With a strong foundation in Android Development and a passion for design, I aim to build impactful digital experiences through thoughtful visuals and user-focused development.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center sm:justify-start gap-6 text-2xl text-foreground">
          <a
            href="https://www.linkedin.com/in/reynachoradan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Nachodelreyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="hover:text-sky-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/reynacho._"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.behance.net/reynachoradan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="hover:text-blue-500"
          >
            <FaBehance />
          </a>
          <a
            href="https://github.com/ReynachoRadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 dark:hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
