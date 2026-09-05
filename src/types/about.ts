export interface AboutStandard {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export interface AboutPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: "terminal" | "code2" | "lock" | "gitCommit" | string;
}

export interface AboutQuote {
  badge: string;
  text: string;
  author: string;
  role: string;
}

export interface AboutData {
  standards: AboutStandard[];
  principles: AboutPrinciple[];
  quote: AboutQuote;
}
