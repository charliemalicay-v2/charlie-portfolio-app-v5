"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Pixels to travel from, revealing upward into place. */
  y?: number;
  delay?: number;
  duration?: number;
  /** ScrollTrigger `start` value. */
  start?: string;
};

/**
 * Fades + slides its children into view once they cross into the viewport.
 * Renders content already in its final, visible state under
 * prefers-reduced-motion instead of skipping the animation mid-flight.
 */
export function ScrollReveal({
  children,
  className,
  y = 32,
  delay = 0,
  duration = 0.9,
  start = "top 85%",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { dependencies: [reducedMotion], scope: ref },
  );

  return (
    <div ref={ref} className={cn(reducedMotion ? undefined : "opacity-0", className)}>
      {children}
    </div>
  );
}
