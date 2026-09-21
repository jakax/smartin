export interface NavLink {
  label: string;
  href: string;
}

export interface ValueStatement {
  title: string;
  desc: string;
}

export interface Phase {
  num: string;
  title: string;
  desc: string;
  tag: string;
}

export interface PortfolioScreen {
  src: string;
  label: string;
}

export interface PortfolioLink {
  label: string;
  href: string;
}

export interface PortfolioItem {
  label: string;
  title: string;
  desc: string;
  tags: string[];
  screens: PortfolioScreen[];
  color: string;
  /** Phone-shaped screenshots (true) or wide website screenshots (false). */
  isApp: boolean;
  /** Where to open or download the project (store pages, live site). */
  links?: PortfolioLink[];
  /** Short note shown next to the links, e.g. regional availability. */
  availability?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}