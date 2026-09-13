"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useFinePointer } from "@/hooks/use-media-query";
import { SplitText } from "@/components/motion/split-text";
import { Marquee } from "@/components/motion/marquee";
import { profile } from "@/content/profile";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();

  useGSAP(
    () => {
      if (!finePointer || reducedMotion || !sectionRef.current || !glowRef.current) return;
      const moveX = gsap.quickTo(glowRef.current, "x", { duration: 1.2, ease: "power3" });
      const moveY = gsap.quickTo(glowRef.current, "y", { duration: 1.2, ease: "power3" });

      function onMove(event: MouseEvent) {
        const rect = sectionRef.current!.getBoundingClientRect();
        moveX((event.clientX - rect.left - rect.width / 2) * 0.08);
        moveY((event.clientY - rect.top - rect.height / 2) * 0.08);
      }

      sectionRef.current.addEventListener("mousemove", onMove);
      return () => sectionRef.current?.removeEventListener("mousemove", onMove);
    },
    { dependencies: [finePointer, reducedMotion], scope: sectionRef },
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6"
    >
      <div aria-hidden className="absolute inset-0 flex">
        <div className="relative h-full w-1/2">
          <Image
            src="/photos/IMG_6787.jpeg"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover grayscale-[40%]"
          />
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src="/photos/IMG_20260531_082054.jpg"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover grayscale-[40%]"
          />
        </div>
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-0 h-72 w-72 translate-y-1/2 rounded-full bg-amber/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-4 font-mono text-sm tracking-widest text-cyan uppercase">{profile.location}</p>
        <SplitText
          as="h1"
          text={profile.name}
          trigger="load"
          splitBy="words"
          className="font-heading text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl"
        />
        <div className="mt-6 max-w-2xl">
          <Marquee durationSeconds={18}>
            {profile.roles.map((role) => (
              <span key={role} className="font-heading text-xl text-muted-foreground sm:text-2xl">
                {role}
                <span className="mx-8 text-cyan">·</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground motion-safe:animate-bounce">
        <ChevronDown className="size-6" />
      </div>
    </section>
  );
}
