export type Skill = { name: string; years: number };
export type SkillCategory = { category: string; skills: Skill[] };

/**
 * Skill categories and levels sourced directly from resume_18.pdf.
 * Grouped skills (e.g. "EventBridge, SQS, SNS, SES (2y)") are kept as a single
 * entry to faithfully reflect the resume. Skills without a year figure (ranges,
 * descriptions, or bare names) are stored with years: 0 so no "Ny" suffix shows.
 */
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", years: 11 },
      { name: "JavaScript", years: 11 },
      { name: "TypeScript", years: 9 },
      { name: "HTML5 & CSS3", years: 11 },
    ],
  },
  {
    category: "Front end",
    skills: [
      { name: "React", years: 9 },
      { name: "Next.js", years: 7 },
      { name: "React Native & Expo", years: 3 },
      { name: "Tailwind CSS", years: 5 },
      { name: "Chakra UI", years: 5 },
      { name: "Material UI", years: 5 },
      { name: "shadcn/ui", years: 3 },
      { name: "WordPress", years: 3 },
    ],
  },
  {
    category: "Back end",
    skills: [
      { name: "Flask", years: 7 },
      { name: "FastAPI", years: 4 },
      { name: "NestJS", years: 1 },
      { name: "ExpressJS", years: 3 },
      { name: "REST APIs", years: 11 },
      { name: "GraphQL", years: 5 },
      { name: "Django and Django REST", years: 0 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", years: 7 },
      { name: "MySQL", years: 5 },
      { name: "SQLite", years: 5 },
      { name: "MongoDB", years: 4 },
      { name: "DynamoDB", years: 3 },
      { name: "Elasticsearch/OpenSearch", years: 3 },
      { name: "Supabase", years: 3 },
      { name: "Pinecone", years: 2 },
    ],
  },
  {
    category: "AWS",
    skills: [
      { name: "EC2", years: 8 },
      { name: "S3", years: 8 },
      { name: "Lambda", years: 8 },
      { name: "RDS", years: 8 },
      { name: "Amplify", years: 7 },
      { name: "ECS/ECR/Fargate", years: 2 },
      { name: "EventBridge, SQS, SNS, SES", years: 2 },
      { name: "Cognito", years: 2 },
      { name: "Azure", years: 0 },
    ],
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      { name: "Git", years: 11 },
      { name: "Ubuntu on EC2", years: 8 },
      { name: "Docker & Compose", years: 3 },
      { name: "GitHub Actions", years: 3 },
      { name: "Terraform", years: 4 },
      { name: "NGINX", years: 5 },
      { name: "tmux", years: 5 },
      { name: "GitLab CI", years: 0 },
      { name: "Prometheus & Grafana monitoring", years: 0 },
      { name: "automated database backups", years: 0 },
      { name: "SSL/TLS", years: 0 },
      { name: "incident root-cause analysis", years: 0 },
    ],
  },
  {
    category: "Generative AI",
    skills: [
      { name: "OpenAI/GPT", years: 4 },
      { name: "RAG", years: 4 },
      { name: "Hugging Face", years: 4 },
      { name: "LangChain", years: 3 },
      { name: "embeddings & vector search", years: 3 },
      { name: "Gemini", years: 3 },
      { name: "Anthropic Claude", years: 2 },
      { name: "LangGraph", years: 2 },
      { name: "LangServe", years: 2 },
    ],
  },
  {
    category: "Automation & integrations",
    skills: [
      { name: "PDF parsing & OCR", years: 8 },
      { name: "Slack", years: 4 },
      { name: "n8n", years: 1 },
      { name: "Make", years: 1 },
      { name: "GoHighLevel", years: 1 },
      { name: "Apollo", years: 1 },
      { name: "Clay", years: 1 },
      { name: "Smart Lead", years: 1 },
    ],
  },
  {
    category: "Security & quality",
    skills: [
      { name: "JWT", years: 8 },
      { name: "OAuth", years: 7 },
      { name: "Swagger/ReDoc", years: 9 },
      { name: "SSL/TLS", years: 0 },
      { name: "CORS", years: 0 },
      { name: "Pytest", years: 0 },
      { name: "Jest", years: 0 },
    ],
  },
  {
    category: "Tooling",
    skills: [
      { name: "Claude Code", years: 0 },
      { name: "Codex", years: 0 },
      { name: "Kiro", years: 0 },
      { name: "Cursor", years: 0 },
      { name: "GitHub Copilot", years: 0 },
      { name: "VS Code", years: 0 },
      { name: "PyCharm", years: 0 },
      { name: "Postman", years: 0 },
    ],
  },
];
