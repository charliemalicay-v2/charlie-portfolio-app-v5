"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal ticker built from a CSS keyframe animation (defined
 * inline via arbitrary Tailwind values) so it costs nothing on the main
 * thread. Content is duplicated for a seamless loop and the animation is
 * paused via `motion-reduce:` for prefers-reduced-motion.
 */
export function Marquee({ children, className, durationSeconds = 24 }: { children: ReactNode; className?: string; durationSeconds?: number }) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-[marquee_var(--marquee-duration)_linear_infinite] gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-[marquee_var(--marquee-duration)_linear_infinite] gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {children}
      </div>
    </div>
  );
}
