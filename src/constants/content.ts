import type { NavLink, ValueStatement, Phase, PortfolioItem, FaqItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "How it works", href: "#how" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export const VALUE_STATEMENTS: ValueStatement[] = [
  {
    title: "Research first",
    desc: "We dig into your market, your audience, and your identity before writing a single line of code.",
  },
  {
    title: "Nothing is arbitrary",
    desc: "Every color, font, and layout decision has a reason. We don't decorate, we communicate.",
  },
  {
    title: "Built for you",
    desc: "Whether you need a web, an app, or both — the product emerges from what you need, not a template.",
  },
];

export const PHASES: Phase[] = [
  {
    num: "01",
    title: "We listen first",
    desc: "Every project starts with understanding who you are, what you want to communicate, and who you're communicating it to.",
    tag: "Our approach",
  },
  {
    num: "02",
    title: "Research over assumption",
    desc: "Color, typography, structure — nothing is chosen at random. Everything earns its place through research and intention.",
    tag: "Our process",
  },
  {
    num: "03",
    title: "The product is the message",
    desc: "A good website or app doesn't just look professional — it communicates the right things to the right people.",
    tag: "Our belief",
  },
];

export const PROCESS_STEPS: string[] = [
  "We learn about your organization, your market, and your goals",
  "We define your visual identity: color, typography, tone",
  "We design and build the product that communicates it",
  "We iterate until it feels right",
];

export const WORKS_WITH: string[] = [
  "New organizations taking their first steps",
  "Existing businesses ready for a refresh",
  "Anyone who wants their product to mean something",
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    label: "Mobile Application",
    title: "QuickCrew App",
    desc: "Full React Native app connecting casual hospitality workers with employers in Queenstown, NZ. Firebase backend, real-time shift management, dual user roles (Worker & Employer), document upload, visa validation, and a full hiring pipeline from application to assignment.",
    tags: ["React Native", "Firebase", "Expo", "iOS & Android"],
    screens: ["Job listings", "Shift creation", "Worker profile", "Application flow"],
    color: "#00BCD4",
  },
  {
    label: "Landing Page",
    title: "QuickCrew Landing",
    desc: "Marketing site built in Next.js for QuickCrew pre-launch. Designed to convert both employers and workers with separate value propositions, app screenshots, founder story, and clear CTAs aligned to the brand identity.",
    tags: ["Next.js", "Vercel", "Responsive", "Conversion-focused"],
    screens: ["Hero section", "How it works", "For businesses", "For workers"],
    color: "#26A69A",
  },
  {
    label: "Website",
    title: "Viviana Rodríguez",
    desc: "A portfolio site for an Argentine paper weaving artist. Every section was designed with intention — colors, transitions, and animations built around her work and who she is, not a template. A site that feels alive.",
    tags: ["Next.js", "Vercel", "Animations", "Art Portfolio"],
    screens: [],
    color: "#F59E0B",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do we need to have a clear idea of what we want before reaching out?",
    a: "Not at all. Many of our clients come to us with a general direction but no clear picture yet. That's exactly what the first conversation is for — we help you figure out what you need, not just how to build it.",
  },
  {
    q: "Do you work with people who don't have anything built yet?",
    a: "Yes. Whether you're starting from scratch or looking to refresh something that already exists, we adapt to where you are.",
  },
  {
    q: "What does the process actually look like?",
    a: "It starts with a conversation. We learn about you, your organization, and what you want to communicate. From there we move into research, identity definition, and then design and build. Every step is collaborative.",
  },
  {
    q: "Do you do branding, or just web and app development?",
    a: "Both, and we don't separate them. The visual identity — color, typography, logo — and the product are built together because they need to speak the same language.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. A landing page with a defined identity can be ready in a few weeks. A full app with brand work from scratch takes longer. We'll give you an honest timeline after our first conversation.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "Everything you share with us is treated as confidential. If you need an NDA before sharing sensitive materials, just mention it and we'll sort it out.",
  },
  {
    q: "What if I already have a brand but just need a website or app?",
    a: "We can work with what you have. If your identity is solid, we build around it. If we notice things that could be stronger, we'll mention it — but there's no obligation to revisit anything you're happy with.",
  },
  {
    q: "How involved do I need to be during the process?",
    a: "As involved as you want to be. Some clients prefer to stay close at every step, others give us direction and check in at key milestones. We adapt to how you work best.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "We don't disappear after launch. If something needs adjusting, if you want to evolve the product, or if a new need comes up — we're available. We prefer long-term relationships over one-off deliveries.",
  },
  {
    q: "Do you work with clients outside of New Zealand?",
    a: "Yes. We work remotely with clients anywhere. Most of our process happens over calls and shared documents, so location isn't a barrier.",
  },
];