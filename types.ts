export enum Language {
  ES = 'ES',
  EN = 'EN'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'cpu' | 'users' | 'layers' | 'message' | 'shield' | 'code';
}

export interface WorkflowStep {
  title: string;
  desc: string;
  icon: 'ingest' | 'brain' | 'human' | 'action';
}

export interface Content {
  nav: {
    home: string;
    services: string;
    workflow: string;
    methodology: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    explore: string;
  };
  trustedBy: {
    title: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  workflow: {
    title: string;
    subtitle: string;
    tabs: {
      fintech: string;
      legal: string;
      logistics: string;
    };
    steps: Record<'fintech' | 'legal' | 'logistics', WorkflowStep[]>;
  };
  demo: {
    title: string;
    subtitle: string;
    agentGreeting: string;
    placeholder: string;
    disclaimer: string;
  };
  methodology: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}