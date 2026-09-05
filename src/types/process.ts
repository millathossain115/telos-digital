export interface ProcessPhase {
  id: string;
  step: string;
  timeframe: string;
  title: string;
  summary: string;
  icon: "compass" | "penTool" | "code2" | "rocket" | string;
  deliverables: string[];
  clientTouchpoints: string[];
  tooling: string[];
}

export interface CollaborationRule {
  id: string;
  title: string;
  desc: string;
  icon: "zap" | "gitBranch" | "shieldCheck" | string;
}

