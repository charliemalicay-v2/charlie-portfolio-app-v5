export type Job = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  projects: string[];
};

export const experience: Job[] = [
  {
    title: "Senior Automation Engineer & Orchestrator Trainee",
    company: "Ideahub Solution LLC",
    dates: "Jul 2026 – Sep 2026",
    bullets: [
      "Workflow automation: Designed and shipped automation workflows in n8n and Make, integrating GoHighLevel APIs and custom CRMs built on top of GHL.",
      "Agent orchestration: Orchestrated the Viktor AI Employee and Grok Bot across Slack, Apollo, Clay, Smart Lead and GoHighLevel to run multi-step outbound and CRM processes.",
      "Generative AI integration: Wired OpenAI and Anthropic chat-completion models into those workflows, alongside OCR and LLM-based document handling.",
      "Web & mobile development: Built web and mobile applications with Next.js, Python FastAPI and React Native / Expo, backed by PostgreSQL, Supabase and SQLite.",
      "Marketing sites: Built and maintained landing-page websites on WordPress.",
      "Tooling: Worked primarily in Claude Code, VS Code and Codex, with Grok Bot and Viktor as in-loop agents.",
    ],
    projects: [],
  },
  {
    title: "Full-Stack & AWS Developer",
    company: "Entvas",
    dates: "Apr 2025 – May 2026",
    bullets: [
      "Frontend & prompt design: Built responsive, user-centric interfaces in Next.js, React, Tailwind CSS and shadcn/ui, working spec-first with prompt-based and Kiro Spec development.",
      "Backend architecture: Designed modular, enterprise-grade services in NestJS and tuned MySQL schemas and queries for high-throughput workloads.",
      "Cloud infrastructure: Architected and operated secure AWS infrastructure provisioned with Terraform — containerised compute on ECS, ECR, Fargate, EC2 and Lambda, with hosting and identity via Amplify and Cognito.",
      "Event-driven systems: Orchestrated messaging pipelines across microservices with EventBridge, SQS, SNS and SES, and configured NGINX routing for Next.js and Python deployments.",
      "Cost & capability: Optimised AWS cost models while extending the team's cloud-AI capability toward ML Engineer – Associate level.",
    ],
    projects: ["Legacy CRM", "PCA CRM", "Legacy Timesheet"],
  },
  {
    title: "Full-Stack Developer",
    company: "Icebear Solutions",
    dates: "Feb 2025 – Mar 2025",
    bullets: [
      "Platform build: Delivered the full Football Gallery platform end to end — FastAPI and MySQL backend, Next.js and shadcn/ui frontend covering landing, auth, portals, profiles and payments.",
      "Data modelling: Designed a normalised ERD spanning users, players, team managers, agents and fans for integrity and scalability.",
      "APIs & integrations: Built JWT-authenticated public and protected endpoints with filtering, sorting and pagination; integrated Gemini for video analysis, Stripe and PayPal for payments, and CSV import pipelines into MySQL.",
      "Deployment & QA: Shipped to Ubuntu EC2 behind NGINX with tmux process management, CI/CD, Docker Compose, Terraform-provisioned infrastructure, unit and integration tests, Swagger/ReDoc docs, SSL/TLS and automated MySQL backups.",
    ],
    projects: ["Football Management App"],
  },
  {
    title: "Full-Stack Developer / AI Engineer",
    company: "AK Holdings",
    dates: "Nov 2024 – Mar 2025",
    bullets: [
      "AI agent architecture: Built the Smart AI Agent Interface on Next.js, React, Tailwind and shadcn/ui, served by LangServe (FastAPI) with LangChain agents using OpenAI embeddings against Pinecone.",
      "Data pipelines: Wrote Python jobs to OCR PDFs and images from S3 into vectorised Pinecone records, and parsed a 50 GB CSV dataset into PostgreSQL.",
      "Model integration: Wired GPT-3.5, GPT-4 and Anthropic Claude into the chat-completion layer for grounded, retrieval-backed responses.",
      "Infrastructure & security: Deployed the stack on Ubuntu EC2 with NGINX, tmux and Docker Compose, provisioned with Terraform; managed containers and Postgres via Supabase; enforced OAuth, JWT, CORS and SSL/TLS.",
      "Testing & monitoring: Added Pytest and Jest suites with CI/CD, plus Prometheus and Grafana for logging, monitoring and performance tuning. Documented APIs in Swagger and Postman.",
    ],
    projects: ["Technical Manual AI Bot", "Database Migration"],
  },
  {
    title: "Senior Frontend Developer",
    company: "Shakewell Agency",
    dates: "May 2024 – Sep 2024",
    bullets: [
      "Frontend engineering: Built responsive, mobile-first web applications and PWAs in TypeScript, ES10 and React.",
      "Collaboration: Partnered with designers, product managers and backend engineers to shape product design and feature scope.",
      "Performance: Improved load times and scalability by refactoring components and minimising network requests.",
      "Standards: Championed clean-code principles, accessibility (a11y) and cross-browser compatibility.",
    ],
    projects: ["Resort Sites", "Air Navigation & Inventory App"],
  },
  {
    title: "Software Engineer, Level 2",
    company: "Innodata Knowledge Inc.",
    dates: "Apr 2022 – Mar 2024",
    bullets: [
      "R&D development: Full-stack engineer in the Research and Development department, working primarily in Python.",
      "API & UI engineering: Built Flask and FastAPI service frameworks and React / Next.js frontends against both SQL and NoSQL stores.",
      "AI & machine learning: Delivered machine-learning, deep-learning and image-processing solutions, including OpenAI API integration into backend services.",
      "Architecture & DevOps: Authored design and analysis documentation for stakeholders, contributed to project planning, provisioned infrastructure with Terraform, and automated NGINX-based deployments.",
    ],
    projects: ["Image Management & Processing", "Site Data Scraper", "Image Object Detection", "PDF Parser Workflow"],
  },
  {
    title: "Associate R&D Engineer",
    company: "Advanced World Solution Inc.",
    dates: "Oct 2021 – Mar 2022",
    bullets: [
      "Defect resolution: Reproduced, debugged and fixed feature and UI defects in production software, and managed EXE release deployments.",
      "Quality assurance: Ran unit testing through application simulators and hardware integration testing on target machines.",
      "Documentation & process: Documented root-cause analysis through to fix, and worked in Agile Scrum with ticket-based task tracking. JavaScript and SVN.",
    ],
    projects: ["Sharp Printer Software"],
  },
  {
    title: "Full-Stack Developer",
    company: "SCL",
    dates: "Jul 2018 – Jun 2021",
    bullets: [
      "Backend development: Built Flask REST APIs and commercial API integrations, plus AWS Lambda functions in Python for data processing and live server requests.",
      "Frontend & desktop: Developed web and desktop applications with React, TypeScript and Electron.js, migrating legacy jQuery/CSS3 codebases to React and LESS.",
      "Data & AWS: Modelled and evolved MySQL and SQLite schemas; configured API Gateway, SQS, EC2 and Lambda, and deployed React apps via AWS Amplify.",
    ],
    projects: ["Media Files Management App", "User Management App"],
  },
  {
    title: "Software Developer",
    company: "EasyRent (project-based)",
    dates: "Nov 2017 – Feb 2018",
    bullets: [
      "Backend & database: Developed REST APIs in Python and Flask with PostgreSQL persistence.",
      "Frontend: Designed and built the user interface in HTML, CSS3 and jQuery.",
    ],
    projects: ["EasyRent App"],
  },
  {
    title: "Embedded Developer",
    company: "Ship Electronics (project-based)",
    dates: "Jun 2017 – Oct 2018",
    bullets: [
      "Hardware programming: Programmed microchips to drive and read electronic sensors.",
      "Circuit design: Designed schematics and printed circuit boards, and sourced electronic components.",
    ],
    projects: [],
  },
  {
    title: "Software Engineer",
    company: "HGG Profiling Specialists Philippines Inc.",
    dates: "Apr 2014 – Jun 2015",
    bullets: [
      "Full-stack development: Wrote Python and Django backend APIs and built frontends with jQuery, CSS and Knockout.js.",
      "Maintenance & reporting: Extended and maintained the core web application and its database records, and generated automated PDF reports from HTML and CSS.",
    ],
    projects: [],
  },
];
