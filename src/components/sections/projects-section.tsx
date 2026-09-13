"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-sm tracking-widest text-cyan uppercase">Projects</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold sm:text-5xl">Selected work.</h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={(index % 2) * 0.1}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group block h-full rounded-2xl border border-border bg-card/60 p-8 transition-colors hover:border-cyan/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-medium text-foreground">{project.title}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan" />
                </div>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
