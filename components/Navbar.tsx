"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/80 dark:bg-[#111]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium text-foreground">
        <Link href="#hero" className="font-semibold text-lg">
          Reynacho
        </Link>
        <div className="hidden sm:flex gap-6">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
