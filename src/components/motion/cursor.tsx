"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useFinePointer } from "@/hooks/use-media-query";

/**
 * Lightweight custom cursor: a fast dot plus a lagging ring that scales up
 * over interactive elements. Only mounted on fine-pointer devices, and
 * never under prefers-reduced-motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const active = finePointer && !reducedMotion;

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", active);
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [active]);

  useGSAP(
    () => {
      if (!active || !dotRef.current || !ringRef.current) return;

      const moveDot = gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power3" });
      const moveDotY = gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power3" });
      const moveRing = gsap.quickTo(ringRef.current, "x", { duration: 0.4, ease: "power3" });
      const moveRingY = gsap.quickTo(ringRef.current, "y", { duration: 0.4, ease: "power3" });

      let revealed = false;
      function onMove(event: MouseEvent) {
        moveDot(event.clientX);
        moveDotY(event.clientY);
        moveRing(event.clientX);
        moveRingY(event.clientY);
        if (!revealed) {
          revealed = true;
          gsap.to([dotRef.current, ringRef.current], { opacity: 1, duration: 0.3 });
        }
      }

      function onOver(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const interactive = target.closest("a, button, [role='button']");
        gsap.to(ringRef.current, { scale: interactive ? 1.8 : 1, duration: 0.3, ease: "power3" });
      }

      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseover", onOver);
      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseover", onOver);
      };
    },
    { dependencies: [active] },
  );

  if (!active) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/70 opacity-0"
      />
      <div ref={dotRef} className="fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan opacity-0" />
    </div>
  );
}
