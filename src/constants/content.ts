import type { NavLink, Metric, Phase, PortfolioItem, FaqItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "How it works", href: "#how" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export const METRICS: Metric[] = [
  { value: "5", unit: "days", label: "Audit delivery" },
  { value: "10", unit: "issues", label: "Prioritized findings" },
  { value: "30", unit: "min", label: "Strategy debrief" },
];

export const PHASES: Phase[] = [
  {
    num: "01",
    title: "Structural Review",
    desc: "Product + UX + performance + technical signals. Output: clear priorities and an actionable roadmap.",
    tag: "Phase 1",
  },
  {
    num: "02",
    title: "Implementation Sprint",
    desc: "We execute the highest-impact fixes: onboarding, conversion, performance, reliability.",
    tag: "Phase 2",
  },
  {
    num: "03",
    title: "Optimization Partner",
    desc: "Monthly support for sequencing, roadmap governance, and technical decision clarity.",
    tag: "Phase 3",
  },
];

export const DELIVERABLES: string[] = [
  "Executive summary (1 page): biggest blockers + next 30 days",
  "Product flow review: landing → signup → activation",
  "UX friction map: issues ranked by severity",
  "Performance snapshot: key bottlenecks & quick wins",
  "Technical signals: scalability & reliability risks",
  "Top-10 roadmap: Impact × Effort × Risk scoring",
];

export const WHO: string[] = [
  "Pre-seed to Seed (or early Series A)",
  "0–50k MRR or active waitlist/traction",
  "1–10 person teams",
  "Non-technical founder-led or founder needs technical clarity",
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
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What exactly do I get from the Structural Review?",
    a: "You receive a complete written audit covering five areas: product flow (landing to activation), UX friction points ranked by severity, performance bottlenecks, technical risk signals, and a top-10 prioritized roadmap scored by Impact × Effort × Risk. Everything is delivered in 5 business days with a 30-minute debrief call to walk you through the findings and answer questions.",
  },
  {
    q: "I am not technical. Will I understand the audit?",
    a: "That is exactly who this is built for. Every finding is written in plain language with context explaining why it matters — not just what it is. The executive summary gives you a one-page view of your biggest blockers and what to do in the next 30 days. You will not need to be technical to act on the output.",
  },
  {
    q: "How is this different from a generic UX audit?",
    a: "Most audits review your interface in isolation. SmartIn reviews your entire product structure: how users flow from discovery to activation, where they drop off, what technical decisions are creating invisible drag, and how your roadmap priorities are stacked against each other. It is a product audit, not just a design review.",
  },
  {
    q: "What if I only need help with one specific area?",
    a: "The Structural Review covers all five areas because they are deeply connected — a performance issue often explains a UX drop-off, and a structural decision often explains a technical risk. That said, during the debrief we will talk about where your highest leverage is, and Phase 2 implementation can be scoped to focus on specific areas if that makes sense for your stage.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "Everything shared with SmartIn is treated as confidential. We do not share client information, product details, or findings with third parties. If you need an NDA signed before sharing access or sensitive materials, we are happy to do that — just mention it when you submit your request.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "At minimum: your product URL and a short description of your current situation — where you are, what is not working, and what you are trying to achieve. If you have analytics access, a staging environment, or internal docs you are comfortable sharing, those help us go deeper. But a public URL and honest context is enough to get started.",
  },
  {
    q: "Do you work with products that are not SaaS?",
    a: "The Structural Review is designed for digital products — SaaS, mobile apps, marketplaces, and B2B tools. If your product has users, a flow, and a conversion goal, the framework applies. If you are not sure whether your product fits, send us a message and we will tell you honestly.",
  },
  {
    q: "What happens after the Structural Review?",
    a: "You will have a clear picture of your biggest blockers and a prioritized roadmap. From there, you can implement the fixes yourself, hand the roadmap to your team, or move into Phase 2 with SmartIn where we execute the highest-impact changes directly. There is no obligation to continue — the audit is designed to be valuable on its own.",
  },
];