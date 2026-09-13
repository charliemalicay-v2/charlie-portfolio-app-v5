"use client";

import { useRef, type ElementType } from "react";
import SplitType from "split-type";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type SplitTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  splitBy?: "chars" | "words" | "lines";
  /** "load" animates immediately on mount; "scroll" waits for the element to enter the viewport. */
  trigger?: "load" | "scroll";
  delay?: number;
  stagger?: number;
};

/**
 * Splits text into chars/words/lines (via split-type) and reveals them with
 * a staggered upward slide. Under prefers-reduced-motion, renders the plain
 * text with no splitting or animation.
 */
export function SplitText({
  text,
  as: Tag = "span",
  className,
  splitBy = "words",
  trigger = "scroll",
  delay = 0,
  stagger = 0.03,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;

      const split = new SplitType(ref.current, { types: splitBy, tagName: "span" });
      const targets = split[splitBy] ?? [];
      if (!targets.length) return;

      gsap.set(targets, { display: "inline-block" });

      const tween = gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "power4.out",
          scrollTrigger:
            trigger === "scroll"
              ? { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" }
              : undefined,
        },
      );

      return () => {
        tween.kill();
        split.revert();
      };
    },
    { dependencies: [reducedMotion, text], scope: ref },
  );

  return (
    <Tag ref={ref} className={className} style={{ overflow: "hidden" }}>
      {text}
    </Tag>
  );
}
