import { ArrowUpRight } from "lucide-react";
import { SplitText } from "@/components/motion/split-text";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { socialLinks } from "@/content/links";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-sm tracking-widest text-cyan uppercase">Contact</p>
        <SplitText
          as="h2"
          text="Let's build something."
          splitBy="words"
          className="mt-4 font-heading text-4xl font-semibold sm:text-6xl"
        />

        <ScrollReveal delay={0.2} className="mt-10 flex justify-center">
          <MagneticButton>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-8 py-4 text-lg text-foreground transition-colors hover:bg-cyan/20"
            >
              {profile.email}
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </MagneticButton>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-12 flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
