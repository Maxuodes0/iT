"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import type {HTMLMotionProps, MotionStyle} from "framer-motion";

type SpringOptions = {
  damping?: number;
  mass?: number;
  stiffness?: number;
};

type TiltProps = HTMLMotionProps<"div"> & {
  isRevese?: boolean;
  rotationFactor?: number;
  springOptions?: SpringOptions;
};

export function Tilt({
  children,
  className,
  isRevese = false,
  rotationFactor = 8,
  springOptions,
  style,
  ...props
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const direction = isRevese ? -1 : 1;
  const springConfig = {
    damping: springOptions?.damping ?? 12,
    mass: springOptions?.mass ?? 0.18,
    stiffness: springOptions?.stiffness ?? 120
  };

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotationFactor, -rotationFactor].map((value) => value * direction)), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotationFactor, rotationFactor].map((value) => value * direction)), springConfig);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();

        if (!rect) {
          return;
        }

        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        perspective: 900,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style
      } as MotionStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type SpotlightProps = HTMLMotionProps<"div"> & {
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({className, size = 248, springOptions, style, ...props}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = {
    damping: springOptions?.damping ?? 12,
    mass: springOptions?.mass ?? 0.18,
    stiffness: springOptions?.stiffness ?? 120
  };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const parent = ref.current?.parentElement;

    if (!parent) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      x.set(event.clientX - rect.left - size / 2);
      y.set(event.clientY - rect.top - size / 2);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
    parent.addEventListener("mousemove", handleMouseMove);

    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      parent.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size, x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] transition-opacity duration-300 ${className ?? ""}`}
      style={{
        height: size,
        left: springX,
        opacity: visible ? 1 : undefined,
        top: springY,
        width: size,
        ...style
      } as MotionStyle}
      {...props}
    />
  );
}
