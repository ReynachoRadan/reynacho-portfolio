"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-24 border-t border-gray-200 dark:border-gray-700 px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
    >
      <p className="mb-1">
        &copy; {new Date().getFullYear()} Reynacho A. Radan
      </p>
      <p className="italic text-gray-400 dark:text-gray-500">
        Minimal, meaningful, and made with care.
      </p>
    </motion.footer>
  );
}
