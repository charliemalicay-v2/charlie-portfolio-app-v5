export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  url?: string;
};

/**
 * Certifications sourced directly from resume_18.pdf. The PDF lists two
 * certifications without credential IDs or verification URLs, so those fields
 * are omitted (and conditionally rendered in the certifications section).
 */
export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "In progress",
  },
];
