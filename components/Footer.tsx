"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-24 border-t border-gray-200 dark:border-gray-700 px-6 py-10 text-sm text-gray-600 dark:text-gray-400"
    >
      {/* Scroll to Top */}
      <div className="flex justify-center mb-6">
        <button
          onClick={scrollToTop}
          className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300"
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Quote */}
      <p className="text-center italic mb-4 text-gray-500 dark:text-gray-500">
        Minimal, meaningful, and made with care.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6 text-foreground font-medium">
        {[
          {
            label: "Telegram",
            href: "https://t.me/reynachoAradan",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/reynachoradan/",
          },
          {
            label: "Instagram",
            href: "https://instagram.com/reynacho._",
          },
        ].map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-colors hover:text-black dark:hover:text-white"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4">
        &copy; {new Date().getFullYear()} Reynacho A. Radan
      </p>
    </motion.footer>
  );
}
