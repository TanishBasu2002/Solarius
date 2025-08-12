"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function ScrollAnimationWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const y = useTransform(
    smoothProgress,
    [0, 0.3, 1],
    [distance, 0, -distance / 2],
  );
  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8],
  );
  const scale = useTransform(
    smoothProgress,
    [0, 0.3, 0.8, 1],
    [0.95, 1, 1, 1.02],
  );

  return (
    <motion.div
      ref={ref}
      className={`h-full ${className}`}
      initial={getInitialTransform()}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      viewport={{ once: false, margin: "-100px" }}
      style={{
        y: direction === "up" || direction === "down" ? y : 0,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}
