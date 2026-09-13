import { socialLinks } from "@/content/links";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, GSAP & Lenis.
        </p>
        <ul className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
