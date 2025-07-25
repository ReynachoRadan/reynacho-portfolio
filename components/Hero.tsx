"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center gap-6 py-24 sm:py-32 px-6"
    >
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        Reynacho Azarel Radan
      </h1>
      <p className="text-lg max-w-xl text-gray-500 dark:text-gray-400">
        Android Dev · UI/UX Enthusiast · Tech Explorer
      </p>
      <a
        href="/CV-Reynacho.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black border border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white transition duration-300 font-semibold"
      >
      <FaDownload />
  Download CV
</a>
    </motion.section>
  );
}
