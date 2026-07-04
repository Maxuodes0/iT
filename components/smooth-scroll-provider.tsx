"use client";

import {useEffect, useState} from "react";
import {ReactLenis} from "lenis/react";

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
const duration = 1.1;

export function SmoothScrollProvider({children}: {children: React.ReactNode}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(!reducedMotion.matches);
    };

    update();
    reducedMotion.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration,
        easing,
        autoRaf: true,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.04,
        touchInertiaExponent: 1.2,
        wheelMultiplier: 1,
        anchors: {
          duration,
          easing
        }
      }}
    >
      {children}
    </ReactLenis>
  );
}
