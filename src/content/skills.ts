export type Skill = { name: string; years: number };
export type SkillCategory = { category: string; skills: Skill[] };

/**
 * Source strings use "Name (Ny)" tokens separated by "·" and, in a few
 * categories, an extra "," within one "·" segment — split on both.
 */
function parseSkillString(raw: string): Skill[] {
  return raw
    .split(/[·,]/)
    .map((token) => token.trim())
    .filter(Boolean)
    .map((token) => {
      const match = token.match(/^(.*?)\((\d+)y\)$/);
      if (!match) return { name: token, years: 0 };
      return { name: match[1].trim(), years: Number(match[2]) };
    });
}

const rawSkills: Record<string, string> = {
  Languages: "Python (11y) · JavaScript (11y) · TypeScript (9y) · HTML5 & CSS3 (11y)",
  Frontend:
    "React (9y) · Next.js (7y) · React Native & Expo (3y) · Tailwind CSS (5y) · shadcn/ui (5y) · Chakra UI (5y) · Material UI (5y) · WordPress (3y)",
  Backend: "FastAPI (7y) · Flask (7y) · Django REST (7y) · NestJS (2y) · ExpressJS (3y) · REST APIs (11y) · GraphQL (5y)",
  Databases: "MySQL (9y) · PostgreSQL (7y) · SQLite (5y) · MongoDB (4y) · CouchDB (2y) · Supabase (3y) · Pinecone (2y)",
  AWS: "EC2 (8y) · S3 (8y) · Lambda (8y) · RDS (8y) · ECS & ECR (2y) · Fargate (2y) · EventBridge (2y), SQS (2y), SNS (2y), SES (2y) · Amplify (8y) · Cognito (2y)",
  "Generative AI":
    "OpenAI / GPT (4y) · Anthropic Claude (2y) · Gemini (3y) · LangChain (4y), LangGraph (4y), LangServe (4y) · RAG (4y) · Hugging Face (4y) · embeddings & vector search (3y)",
  Automation:
    "n8n (1y) · Make (1y) · GoHighLevel (GHL) API & custom CRM (1y) · Slack (4y) · Apollo (1y) · Clay (1y) · Smart Lead (1y) · agent orchestration (Viktor, Grok Bot) (1y)",
  Integrations: "Stripe & PayPal (5y) · PDF parsing & OCR (8y) · CSV pipelines (8y) · video analysis (3y) · chat-completion models (4y)",
  DevOps:
    "Cloud service management: AWS & Microsoft Azure · CI/CD pipelines in GitHub Actions & GitLab CI (8y) · Docker & Compose (7y) · Terraform (2y) · NGINX reverse proxy (5y) · Ubuntu on EC2 (8y) · tmux (5y) · Git (11y) · Prometheus & Grafana",
  "API Security": "JWT & token security (8y) · OAuth (7y) · CORS policies (11y) · SSL/TLS · Swagger / ReDoc documentation (9y)",
  Tooling: "VS Code · PyCharm · WebStorm · Cursor · Windsurf · Claude Code · Codex · GitHub Copilot · Postman",
};

export const skillCategories: SkillCategory[] = Object.entries(rawSkills).map(([category, raw]) => ({
  category,
  skills: parseSkillString(raw),
}));
