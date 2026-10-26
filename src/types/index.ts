export type Locale = "en" | "es";

export interface LocalizedText {
  en: string;
  es: string;
}

export interface NavLink {
  label: LocalizedText;
  href: string;
}

export interface ValueStatement {
  title: LocalizedText;
  desc: LocalizedText;
}

export interface Phase {
  num: string;
  title: LocalizedText;
  desc: LocalizedText;
  tag: LocalizedText;
}

export interface PortfolioScreen {
  src: string;
  label: LocalizedText;
}

export interface PortfolioLink {
  label: LocalizedText;
  href: string;
}

export type ScreenShape = "phone" | "wide" | "square";

export interface PortfolioArtwork {
  title: LocalizedText;
  caption: LocalizedText;
  screens: PortfolioScreen[];
}

export interface PortfolioItem {
  label: LocalizedText;
  title: LocalizedText;
  desc: LocalizedText;
  /** One-line story hook shown on the homepage spotlight cards, instead of a tech stack. */
  headline: LocalizedText;
  tags: string[];
  screens: PortfolioScreen[];
  color: string;
  /** Phone screenshots, wide website screenshots, or square artwork. */
  shape: ScreenShape;
  /** Where to open or download the project (store pages, live site). */
  links?: PortfolioLink[];
  /** Short note shown next to the links, e.g. regional availability. */
  availability?: LocalizedText;
  /** Full screen-recorded walkthrough, shown as a dedicated click-to-play phone player. */
  walkthroughVideo?: string;
  /** Design work made for the project (e.g. brand and illustrations), shown as a second gallery. */
  artwork?: PortfolioArtwork;
}

export interface FaqItem {
  q: LocalizedText;
  a: LocalizedText;
}

export interface Testimonial {
  /** Verbatim quote from a real review — never translated or rewritten. */
  quote: string;
  author: string;
  rating: number;
  source: LocalizedText;
}

export interface ExperienceItem {
  role: LocalizedText;
  company: string;
  location?: LocalizedText;
  desc: LocalizedText;
  /** Currently active / ongoing work — shown with a pulsing live indicator. */
  active?: boolean;
}

export interface SkillGroup {
  title: LocalizedText;
  items: string[];
}

export interface EducationItem {
  degree: LocalizedText;
  school: string;
}
