"use client";

import * as React from "react";
import {motion, useScroll, useTransform, type MotionValue} from "framer-motion";

export interface MagicTextProps {
  className?: string;
  text: string;
  wordClassName?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  wordClassName?: string;
}

const Word: React.FC<WordProps> = ({children, progress, range, wordClassName}) => {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className={`relative mx-[0.12em] mt-[0.18em] inline-block ${wordClassName ?? ""}`}>
      <span aria-hidden="true" className="absolute opacity-15">
        {children}
      </span>
      <motion.span style={{opacity}}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({className, text, wordClassName}) => {
  const container = React.useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  return (
    <p ref={container} className={`flex flex-wrap justify-center p-0 leading-[1.18] ${className ?? ""}`}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={`${word}-${index}`} progress={scrollYProgress} range={[start, end]} wordClassName={wordClassName}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
