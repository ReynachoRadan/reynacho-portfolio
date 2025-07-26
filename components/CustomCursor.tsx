"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full z-[9999] pointer-events-none 
                 bg-white mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5,
      }}
    />
  );
}
