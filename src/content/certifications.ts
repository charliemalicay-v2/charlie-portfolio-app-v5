export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "January 2026 – January 2029",
    credentialId: "44c05416-5ae6-46fa-89fc-3455c10e9167",
    url: "https://www.credly.com/badges/44c05416-5ae6-46fa-89fc-3455c10e9167/linked_in_profile",
  },
  {
    name: "AWS ML Engineer – Assoc",
    issuer: "O'Reilly",
    date: "March 2026 (No Expiration)",
    credentialId: "619c1750-8ebe-48d7-87af-adb07bacfb27",
    url: "https://www.credly.com/badges/619c1750-8ebe-48d7-87af-adb07bacfb27/linked_in_profile",
  },
  {
    name: "API Security: OWASP Top 10",
    issuer: "O'Reilly",
    date: "February 2026 (No Expiration)",
    credentialId: "228d3b1f-d16f-4c27-b340-9d3bd710b90b",
    url: "https://www.credly.com/badges/228d3b1f-d16f-4c27-b340-9d3bd710b90b/linked_in_profile",
  },
  {
    name: "AWS Partner: Technical Accredited – Training Badge",
    issuer: "Amazon Web Services (AWS)",
    date: "November 2025 (No Expiration)",
    credentialId: "10227edd-22e8-4398-9c45-10079144ea5d",
    url: "https://www.credly.com/badges/10227edd-22e8-4398-9c45-10079144ea5d/linked_in_profile",
  },
  {
    name: "Python Data Science",
    issuer: "TestDome",
    date: "March 2025 (No Expiration)",
    credentialId: "2a7e7302016a408f8d742e169859d243",
    url: "https://www.testdome.com/certificates/2a7e7302016a408f8d742e169859d243",
  },
];
