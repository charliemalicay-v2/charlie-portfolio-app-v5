"use client";

import { BadgeCheck, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { certifications } from "@/content/certifications";

export function CertificationsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!gridRef.current || reducedMotion) return;
      const cards = gridRef.current.querySelectorAll("[data-cert-card]");
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.fromTo(batch, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }),
      });
    },
    { dependencies: [reducedMotion], scope: gridRef },
  );

  return (
    <section id="certificates" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-sm tracking-widest text-cyan uppercase">Certifications</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold sm:text-5xl">Verified credentials.</h2>
        </ScrollReveal>

        <div ref={gridRef} className="mt-16 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.credentialId} data-cert-card className={reducedMotion ? undefined : "opacity-0"}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-cyan/40"
              >
                <BadgeCheck className="mt-1 size-6 shrink-0 text-cyan" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-medium text-foreground">{cert.name}</h3>
                    <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-cyan" />
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground/80">{cert.date}</p>
                  <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground/60">ID: {cert.credentialId}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
