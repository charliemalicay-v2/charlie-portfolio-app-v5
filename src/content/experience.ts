export type Job = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  projects: string[];
};

export const experience: Job[] = [
  {
    title: "Senior Automation Engineer",
    company: "Ideahub Solution LLC (contract)",
    dates: "Jul 2026 – Sep 2026",
    bullets: [
      "Built n8n and Make workflows integrating GoHighLevel APIs and custom GHL-based CRMs, including a lead-intake scenario (landing-page webhook into GHL, error-handler retries) running under 1,000 operations a month.",
      "Added LLM lead classification (OpenAI, Anthropic): JSON output requested in the prompt, parsed and validated, retried on parse failure, with 429 rate limits handled.",
      "Orchestrated the Viktor AI Employee and Grok Bot across Slack, Apollo, Clay, Smart Lead and GoHighLevel to run multi-step outbound and CRM processes.",
      "Built web and mobile apps with Next.js, FastAPI and React Native/Expo on PostgreSQL, Supabase and SQLite; maintained WordPress landing pages.",
    ],
    projects: [],
  },
  {
    title: "Full-Stack & AWS Developer",
    company: "Entvas",
    dates: "Apr 2025 – May 2026",
    bullets: [
      "Built Next.js, React, Tailwind and shadcn/ui interfaces using spec-first development (Kiro Spec).",
      "Designed modular NestJS services with custom interceptors, JWT and role guards, @CurrentUser/@Roles decorators and dynamic modules; tuned MySQL schemas and queries for high-throughput workloads.",
      "Provisioned AWS with Terraform: ECS, ECR, Fargate, EC2 and Lambda, with Amplify and Cognito for hosting and identity; event-driven pipelines on EventBridge, SQS, SNS and SES; NGINX routing for Next.js and Python deployments.",
      "Built CI/CD in GitHub Actions: multi-stage Docker builds, layer caching, OIDC authentication to AWS, and build, push to ECR and deploy to ECS pipelines.",
      "Optimised AWS cost models alongside capacity.",
    ],
    projects: [],
  },
  {
    title: "Full-Stack Developer",
    company: "Icebear Solutions (contract)",
    dates: "Feb 2025 – Mar 2025",
    bullets: [
      "Delivered the Football Gallery platform end to end: FastAPI and MySQL back end, Next.js and shadcn/ui front end covering auth, portals, profiles and payments.",
      "Designed a normalised ERD (users, players, managers, agents, fans); built JWT-authenticated endpoints with filtering, sorting and pagination.",
      "Integrated Gemini for video analysis, Stripe and PayPal for payments, CSV import pipelines, and a RAG player and team search (Pinecone plus OpenAI).",
      "Shipped to Ubuntu EC2 behind NGINX with Docker Compose, Terraform, CI/CD, unit and integration tests, Swagger/ReDoc docs, SSL/TLS and automated MySQL backups.",
    ],
    projects: [],
  },
  {
    title: "Full-Stack Developer / AI Engineer",
    company: "AK Holdings (contract)",
    dates: "Nov 2024 – Mar 2025",
    bullets: [
      "Led a small team (front end, data prep, QA) on the Technical Manual AI Bot: a RAG chatbot on Next.js and LangServe (FastAPI) with LangChain agents, OpenAI embeddings and Pinecone, used by 20–100 client staff.",
      "Wrote Python jobs to OCR PDFs and images from S3 into Pinecone, and loaded a 50 GB CSV dataset into PostgreSQL.",
      "Integrated GPT-3.5, GPT-4 and Claude with automatic fallback to a secondary model on rate limits and errors.",
      "Designed RDS primary and read-replica routing behind an ALB with custom SQLAlchemy session routing.",
      "Deployed on EC2 with NGINX and Docker Compose via Terraform; enforced OAuth, JWT, CORS and SSL/TLS; added Pytest and Jest suites, and Prometheus and Grafana monitoring that exposed the production OOM failure described above.",
    ],
    projects: [],
  },
  {
    title: "Senior Frontend Developer",
    company: "Shakewell Agency (contract)",
    dates: "May 2024 – Sep 2024",
    bullets: [
      "Built responsive, mobile-first web apps and PWAs in TypeScript and React; improved load times by refactoring components and reducing network requests.",
      "Worked with designers, PMs and back-end engineers on feature scope; championed accessibility and cross-browser compatibility.",
    ],
    projects: [],
  },
  {
    title: "Software Engineer, Level 2",
    company: "Innodata Knowledge Inc.",
    dates: "Apr 2022 – Mar 2024",
    bullets: [
      "Full-stack engineer in R&D, primarily Python: Flask and FastAPI services and React/Next.js front ends over SQL and NoSQL stores.",
      "Delivered machine-learning and image-processing solutions, including object-detection models running on in-house GPU machines, and a RAG document-QA pipeline integrating the OpenAI API.",
      "Wrote design and analysis documentation for stakeholders, provisioned infrastructure with Terraform and automated NGINX-based deployments.",
    ],
    projects: [],
  },
  {
    title: "Associate R&D Engineer",
    company: "Advanced World Solution Inc.",
    dates: "Oct 2021 – Mar 2022",
    bullets: [
      "Debugged production defects, managed release deployments, ran simulator and hardware integration tests, documented root-cause analysis in Agile Scrum.",
    ],
    projects: [],
  },
  {
    title: "Full-Stack Developer",
    company: "SCL",
    dates: "Jul 2018 – Jun 2021",
    bullets: [
      "Flask REST APIs, Python Lambda functions, React/TypeScript/Electron apps, jQuery-to-React migrations, MySQL and SQLite schemas, API Gateway, SQS and Amplify.",
    ],
    projects: [],
  },
  {
    title: "Software Developer",
    company: "EasyRent",
    dates: "Nov 2017 – Feb 2018",
    bullets: [
      "Flask and PostgreSQL REST APIs and a jQuery front end.",
    ],
    projects: [],
  },
  {
    title: "Embedded Developer",
    company: "Ship Electronics",
    dates: "Jun 2017 – Oct 2018",
    bullets: [
      "Programmed microcontrollers for sensor I/O; designed schematics and PCBs.",
    ],
    projects: [],
  },
  {
    title: "Software Engineer",
    company: "HGG Profiling Specialists Philippines Inc.",
    dates: "Apr 2014 – Jun 2015",
    bullets: [
      "Python and Django back-end APIs, jQuery and Knockout.js front ends, automated PDF reporting.",
    ],
    projects: [],
  },
];
