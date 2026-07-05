"use client";

import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useLenis} from "lenis/react";

export function AnimatedWave() {
  const {scrollY} = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1800], [0, -105]);

  useLenis((lenis) => {
    scrollY.set(lenis.scroll);
  }, [scrollY]);

  return (
    <div className="pointer-events-none absolute inset-x-[-8vw] top-[54%] z-0 h-[clamp(210px,22vw,760px)] -translate-y-1/2 overflow-visible md:top-[58%]">
      <motion.div
        className="absolute inset-y-0 left-[-5vw] w-[110vw]"
        style={{y: parallaxY}}
      >
        <motion.div
          className="absolute inset-0"
        animate={{
          x: ["-2.5vw", "2.5vw", "-2.5vw"],
          y: [0, -18, 0],
          scale: [1.08, 1.13, 1.08]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
          <Image
            src="/hero-wave-4k.png"
            alt=""
            fill
            priority
            sizes="110vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
