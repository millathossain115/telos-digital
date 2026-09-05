export interface WorkMetric {
  label: string;
  value: string;
}

export interface WorkProject {
  id: string;
  title: string;
  client: string;
  category: "E-Commerce & Marketplaces" | "Growth & Performance SaaS" | "Luxury Editorial & Brand" | "Architecture & Engineering";
  year: string;
  tagline: string;
  summary: string;
  architectureHighlight: string;
  challenge: string;
  solution: string;
  liveUrl: string;
  image: string;
  metrics: WorkMetric[];
  techStack: string[];
  deliverables: string[];
  status: string;
}
