"use client";

import {motion, type Variants} from "framer-motion";

type BlurFadeProps = {
  as?: "div" | "span";
  blur?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  inView?: boolean;
  inViewMargin?: string;
  offset?: number;
  variant?: Variants;
};

const axisByDirection = {
  up: {x: 0, y: 1},
  down: {x: 0, y: -1},
  left: {x: 1, y: 0},
  right: {x: -1, y: 0}
};

export function BlurFade({
  as = "div",
  blur = "6px",
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.4,
  inView = false,
  inViewMargin = "-50px",
  offset = 6,
  variant
}: BlurFadeProps) {
  const Component = as === "span" ? motion.span : motion.div;
  const axis = axisByDirection[direction];
  const variants =
    variant ??
    ({
      hidden: {
        filter: `blur(${blur})`,
        opacity: 0,
        x: axis.x * offset,
        y: axis.y * offset
      },
      visible: {
        filter: "blur(0px)",
        opacity: 1,
        x: 0,
        y: 0
      }
    } satisfies Variants);

  return (
    <Component
      animate={inView ? undefined : "visible"}
      className={className}
      initial="hidden"
      transition={{delay, duration, ease: [0.16, 1, 0.3, 1]}}
      variants={variants}
      viewport={{once: true, margin: inViewMargin}}
      whileInView={inView ? "visible" : undefined}
    >
      {children}
    </Component>
  );
}
