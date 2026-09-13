"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";

const LOOM_VIDEO_ID = "f627299de7ec4450b1f5e7fb3a20d680";

/**
 * Video introduction, click-to-load: the Loom iframe is only mounted after
 * the user presses play, so the section costs nothing on first paint.
 */
export function VideoIntroSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="intro" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900">
            {playing ? (
              <iframe
                src={`https://www.loom.com/embed/${LOOM_VIDEO_ID}?autoplay=1`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play video introduction"
                className="absolute inset-0 flex size-full items-center justify-center"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklch,var(--cyan),transparent_85%),transparent_60%)]"
                />
                <MagneticButton>
                  <div className="relative flex size-20 items-center justify-center rounded-full border border-cyan/40 bg-background/60 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-7 fill-cyan text-cyan" />
                  </div>
                </MagneticButton>
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Video introduction
                </p>
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
