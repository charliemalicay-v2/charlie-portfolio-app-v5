import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { profile } from "@/content/profile";

export function AboutSection() {
  const paragraphs = profile.profile.split("\n\n");

  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr]">
        <ScrollReveal>
          <div className="lg:sticky lg:top-32">
            <p className="font-mono text-sm tracking-widest text-cyan uppercase">About</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">Building at the edge of full-stack and AI.</h2>
            <p className="mt-6 text-sm text-muted-foreground">
              {profile.education.degree} · {profile.education.school} · {profile.education.date}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {paragraphs.map((paragraph, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <p className="text-lg leading-relaxed text-foreground/90">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
