"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // <-- animasi muncul tiap kali visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300 p-10 text-center flex flex-col items-center gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-foreground"
        >
          Let’s work together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-xl text-base leading-relaxed"
        >
          I’m currently open for new projects, collaborations, or just a friendly hello.
          Feel free to reach out.
        </motion.p>

        <motion.a
          href="mailto:reynacho.design@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative font-medium text-sm sm:text-base text-black dark:text-white group transition-colors duration-300"
        >
          <span className="relative z-10">Contact Me</span>
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-current group-hover:w-full group-hover:left-0 transition-all duration-300 origin-left" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
