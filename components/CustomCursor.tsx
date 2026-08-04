"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // useSpring membungkus motion value dengan physics-based smoothing
  const springX = useSpring(cursorX, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });
  const springY = useSpring(cursorY, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full z-[9999] pointer-events-none 
                 bg-white mix-blend-difference"
      style={{ x: springX, y: springY }}
    />
  );
}