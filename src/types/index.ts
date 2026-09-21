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

export type ScreenShape = "phone" | "wide" | "square";

export interface PortfolioArtwork {
  title: string;
  caption: string;
  screens: PortfolioScreen[];
}

export interface PortfolioItem {
  label: string;
  title: string;
  desc: string;
  tags: string[];
  screens: PortfolioScreen[];
  color: string;
  /** Phone screenshots, wide website screenshots, or square artwork. */
  shape: ScreenShape;
  /** Where to open or download the project (store pages, live site). */
  links?: PortfolioLink[];
  /** Short note shown next to the links, e.g. regional availability. */
  availability?: string;
  /** Design work made for the project (e.g. brand and illustrations), shown as a second gallery. */
  artwork?: PortfolioArtwork;
}

export interface FaqItem {
  q: string;
  a: string;
}