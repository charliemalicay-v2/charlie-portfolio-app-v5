export const profile = {
  name: "Charliemagne Malicay",
  title: "Full-Stack Developer · AI Engineer · AWS Certified Cloud Practitioner",
  roles: ["Full-Stack Developer", "AI Engineer", "AWS Certified Cloud Practitioner"],
  location: "Davao City, Philippines",
  email: "charliemalicay@gmail.com",
  profile: `Full-Stack Developer and AI Engineer with 11 years shipping production web systems, the last two spent almost entirely on applied AI. I build dynamic frontends in Next.js, React, TypeScript and Tailwind, back them with Python (FastAPI, Flask, Django REST) or NestJS, and deploy the whole stack on AWS behind NGINX.

My AI work centres on retrieval-grounded agents built with LangChain, LangGraph and LangServe: OCR and embedding pipelines that load PDFs, images and multi-gigabyte datasets into Pinecone and PostgreSQL, with chat-completion models from OpenAI, Anthropic and Google wired into the response layer. More recently I have moved from single agents to orchestration — running the Viktor AI Employee and Grok Bot across Slack, Apollo, Clay, Smart Lead and GoHighLevel, and connecting them through n8n and Make automation workflows. I build spec-first, with Claude Code, Codex and Kiro Spec prompt development in the daily loop.

As an AWS Certified Cloud Practitioner I work daily with EC2, S3, Lambda, ECS/ECR, RDS and event-driven services (EventBridge, SQS, SNS), and I am currently working toward the AWS Certified Machine Learning Engineer – Associate. Agile practitioner, comfortable on Windows and Ubuntu, with a bias toward clean, secure, performance-optimised code.`,
  education: {
    degree: "BS Computer Engineering",
    school: "University of the Immaculate Conception",
    date: "March 2014",
  },
} as const;
