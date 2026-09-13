export type Project = {
  title: string;
  slug: string;
  /** One-line description. For most repos this is inferred from the repo
   * name only (no README/screenshots were available) — kept intentionally
   * short and non-specific rather than invented in detail. */
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Football Gallery",
    slug: "football-gallery-nextjs-app",
    description:
      "Full-stack football management platform — FastAPI/MySQL backend and a Next.js/shadcn-ui frontend covering landing, auth, portals, profiles and payments.",
    url: "https://github.com/charliemalicay-v2/football-gallery-nextjs-app",
    tags: ["Next.js", "FastAPI", "MySQL", "shadcn/ui", "Stripe"],
  },
  {
    title: "SmartMove AI",
    slug: "smartmove-ai-frontend-app",
    description: "Frontend for an AI-assisted moving and logistics planning app.",
    url: "https://github.com/charliemalicay-v2/smartmove-ai-frontend-app",
    tags: ["Next.js", "React"],
  },
  {
    title: "Veterinary Appointment App",
    slug: "veterinary-appointment-application",
    description: "A booking and scheduling application for veterinary clinics to manage client appointments.",
    url: "https://github.com/charliemalicay-v2/veterinary-appointment-application",
    tags: ["React"],
  },
  {
    title: "Survival Management App",
    slug: "survival-management-app",
    description: "A resource and inventory management tool for tracking supplies and readiness.",
    url: "https://github.com/charliemalicay-v2/survival-management-app",
    tags: ["React"],
  },
  {
    title: "HVAC Homepage",
    slug: "hvac-homepage",
    description: "A marketing landing page built for an HVAC services business.",
    url: "https://github.com/charliemalicay-v2/hvac-homepage",
    tags: ["Frontend"],
  },
  {
    title: "Link-Based Task App",
    slug: "link-based-task-app",
    description: "A task-tracking app where tasks are organized and shared via links.",
    url: "https://github.com/charliemalicay/link-based-task-app",
    tags: ["Full-Stack"],
  },
];
