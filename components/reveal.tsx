"use client";

import {motion} from "framer-motion";

type RevealProps = {
  as?: "section" | "div";
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Reveal({as = "section", children, className, id}: RevealProps) {
  const Component = as === "div" ? motion.div : motion.section;

  return (
    <Component
      id={id}
      className={className}
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.18}}
      transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
    >
      {children}
    </Component>
  );
}
