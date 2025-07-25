"use client";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6"
    >
      <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl">
        Feel free to reach out for collaborations, freelance work, or just to say hi!
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground">
        <a
          href="mailto:reynacho.dev@gmail.com"
          className="hover:underline"
        >
          reynacho.design@gmail.com
        </a>
        <span>·</span>
        <a
          href="https://t.me/reynachoAradan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Telegram
        </a>
        <span>·</span>
        <a
          href="https://www.linkedin.com/in/reynachoradan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a
          href="https://instagram.com/reynacho._"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </motion.section>
  );
}
