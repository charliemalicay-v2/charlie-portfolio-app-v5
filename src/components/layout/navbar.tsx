"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { nav } from "@/content/links";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();
  const reducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  useGSAP(
    () => {
      if (!navRef.current || reducedMotion) return;
      let lastY = window.scrollY;

      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const goingDown = self.scroll() > lastY;
          lastY = self.scroll();
          gsap.to(navRef.current, {
            yPercent: goingDown && self.scroll() > 120 ? -120 : 0,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });

      return () => trigger?.kill();
    },
    { dependencies: [reducedMotion] },
  );

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("#home")}
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          CM<span className="text-cyan">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-cyan"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="size-5" />
        </Button>

        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
      </nav>
    </header>
  );
}
