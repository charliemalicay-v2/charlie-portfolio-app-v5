"use client";

import { useLenis } from "lenis/react";

/** Smooth-scrolls to an in-page anchor, using Lenis when mounted and falling back to native scroll otherwise. */
export function useScrollTo() {
  const lenis = useLenis();

  return (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}
