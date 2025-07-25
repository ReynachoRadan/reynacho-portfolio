"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl text-base leading-relaxed">
        Feel free to reach out for collaborations, freelance work, or just to say hi!
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 text-sm sm:text-base font-medium mt-4 text-foreground">
        {[
          {
            label: "reynacho.design@gmail.com",
            href: "mailto:reynacho.design@gmail.com",
          },
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
        ].map((link, idx, arr) => (
          <div key={idx} className="flex items-center gap-2">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="transition-colors group-hover:text-black dark:group-hover:text-white">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Separator dot, kecuali elemen terakhir */}
            {idx < arr.length - 1 && (
              <span className="text-gray-400 dark:text-gray-600">·</span>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
