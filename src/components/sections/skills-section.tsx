"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { skillCategories } from "@/content/skills";

export function SkillsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!gridRef.current || reducedMotion) return;
      const cards = gridRef.current.querySelectorAll("[data-skill-card]");

      ScrollTrigger.batch(cards, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
          ),
      });
    },
    { dependencies: [reducedMotion], scope: gridRef },
  );

  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-sm tracking-widest text-cyan uppercase">Skills</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold sm:text-5xl">
            Eleven years across the stack, two spent living in applied AI.
          </h2>
        </ScrollReveal>

        <div ref={gridRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              data-skill-card
              className={reducedMotion ? undefined : "opacity-0"}
            >
              <div className="h-full rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-cyan/40">
                <h3 className="font-heading text-lg font-medium text-foreground">{category.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="font-normal">
                      {skill.name}
                      {skill.years > 0 && <span className="ml-1 text-muted-foreground">{skill.years}y</span>}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
