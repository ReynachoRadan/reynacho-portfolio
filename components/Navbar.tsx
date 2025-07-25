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
        {/* Brand */}
        <Link href="#hero" className="font-bold text-lg tracking-tight">
          Reynacho
        </Link>

        {/* Nav Links */}
        <div className="hidden sm:flex gap-6">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition duration-300 ease-in-out hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
