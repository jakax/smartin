export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  unit: string;
  label: string;
}

export interface Phase {
  num: string;
  title: string;
  desc: string;
  tag: string;
}

export interface PortfolioItem {
  label: string;
  title: string;
  desc: string;
  tags: string[];
  screens: string[];
  color: string;
}

export interface FaqItem {
  q: string;
  a: string;
}