export interface ServiceCapability {
  icon: string;
  label: string;
  detail: string;
}

export interface ServiceModule {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  techStack: string[];
  reverse: boolean;
  capabilities: ServiceCapability[];
}

export interface EngagementModel {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
  ctaText: string;
  highlight: boolean;
}

export interface ServicesData {
  modules: ServiceModule[];
  engagementModels: EngagementModel[];
}
