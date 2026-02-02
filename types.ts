export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  subtitle?: string;
  price: string;
  oldPrice?: string;
  period: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  tag?: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}