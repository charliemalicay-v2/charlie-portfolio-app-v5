"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || !railRef.current || reducedMotion) return;

      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    },
    { dependencies: [reducedMotion], scope: containerRef },
  );

  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="font-mono text-sm tracking-widest text-cyan uppercase">Experience</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold sm:text-5xl">Eleven roles, one throughline.</h2>
        </ScrollReveal>

        <div ref={containerRef} className="relative mt-16 pl-8">
          <div className="absolute top-0 left-0 h-full w-px bg-border" aria-hidden />
          <div
            ref={railRef}
            className="absolute top-0 left-0 h-full w-px origin-top bg-cyan"
            style={{ transform: "scaleY(0)" }}
            aria-hidden
          />

          <div className="flex flex-col gap-16">
            {experience.map((job) => (
              <ScrollReveal key={`${job.company}-${job.dates}`} y={16}>
                <div className="relative">
                  <div className="absolute top-1.5 -left-[2.15rem] size-3 rounded-full border-2 border-cyan bg-background" aria-hidden />
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{job.dates}</p>
                  <h3 className="mt-2 font-heading text-2xl font-medium text-foreground">{job.title}</h3>
                  <p className="text-cyan">{job.company}</p>
                  <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {job.projects.length > 0 && (
                    <p className="mt-4 text-xs text-muted-foreground">
                      Projects: <span className="text-foreground/80">{job.projects.join(" · ")}</span>
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
