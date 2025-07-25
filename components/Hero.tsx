"use client";
import { motion } from "framer-motion";

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
        className="inline-block mt-4 px-6 py-2 rounded-full bg-foreground text-background hover:bg-gray-800 dark:hover:bg-gray-200 transition font-medium"
        aria-label="Download CV"
      >
        Download CV
      </a>
    </motion.section>
  );
}
