"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useFinePointer } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

/** Wraps its child and pulls it gently toward the cursor on hover, springing back on leave. */
export function MagneticButton({ children, className, strength = 0.35 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const active = finePointer && !reducedMotion;

  useGSAP(
    () => {
      if (!active || !ref.current) return;
      const el = ref.current;
      const moveX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const moveY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

      function onMove(event: MouseEvent) {
        const rect = el.getBoundingClientRect();
        const relX = event.clientX - (rect.left + rect.width / 2);
        const relY = event.clientY - (rect.top + rect.height / 2);
        moveX(relX * strength);
        moveY(relY * strength);
      }

      function onLeave() {
        moveX(0);
        moveY(0);
      }

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { dependencies: [active], scope: ref },
  );

  return (
    <div ref={ref} className={cn("inline-block will-change-transform", className)}>
      {children}
    </div>
  );
}
