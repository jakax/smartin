import type { NavLink, ValueStatement, Phase, PortfolioItem, FaqItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Approach", href: "#how" },
  { label: "Process", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export const VALUE_STATEMENTS: ValueStatement[] = [
  {
    title: "Research first",
    desc: "I dig into the market, the audience, and the identity before writing a single line of code.",
  },
  {
    title: "Nothing is arbitrary",
    desc: "Every color, font, and layout decision has a reason. I don't decorate, I communicate.",
  },
  {
    title: "Built for you",
    desc: "Whether it's a web, an app, or both — the product emerges from what it needs to say, not from a template.",
  },
];

export const PHASES: Phase[] = [
  {
    num: "01",
    title: "I listen first",
    desc: "Every project starts with understanding who it's for, what it needs to communicate, and to whom.",
    tag: "My approach",
  },
  {
    num: "02",
    title: "Research over assumption",
    desc: "Color, typography, structure — nothing is chosen at random. Everything earns its place through research and intention.",
    tag: "My process",
  },
  {
    num: "03",
    title: "The product is the message",
    desc: "A good website or app doesn't just look professional — it communicates the right things to the right people.",
    tag: "My belief",
  },
];

export const PROCESS_STEPS: string[] = [
  "I learn about the organization, the market, and the goals",
  "I define the visual identity: color, typography, tone",
  "I design and build the product that communicates it",
  "I iterate until it feels right",
];

export const WORKS_WITH: string[] = [
  "New organizations taking their first steps",
  "Existing businesses ready for a refresh",
  "Artists and creators who want their work to feel like theirs",
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    label: "Mobile Application",
    title: "Sweet Baby Name",
    desc: "A baby-name discovery app I designed and built end to end. You swipe through more than 50,000 real names across Spanish, English, French, Portuguese, German, the Nordic languages and more. Every name comes as an illustrated character card with its own scene, and you can play solo or together with a partner in a shared real-time room, then save your favorites. Cards react to the phone's tilt with custom holographic shine effects rendered in Skia, and the app includes a premium subscription and bilingual (EN/ES) support.",
    tags: ["React Native", "Expo", "TypeScript", "Skia", "Reanimated", "Firebase", "RevenueCat", "iOS"],
    screens: [
      { src: "/images/sweet-baby-name/sbn-5.png", label: "Play solo" },
      { src: "/images/sweet-baby-name/sbn-8.png", label: "Name card" },
      { src: "/images/sweet-baby-name/sbn-9.png", label: "Character scene" },
      { src: "/images/sweet-baby-name/sbn-3.png", label: "Favorites" },
    ],
    color: "#E0665C",
    isApp: true,
    links: [
      { label: "Download on the App Store", href: "https://apps.apple.com/app/id6800422954" },
    ],
  },
  {
    label: "Mobile Application",
    title: "QuickCrew App",
    desc: "A full React Native app I built to connect casual hospitality workers with employers in Queenstown, NZ. Serverless Firebase backend (Firestore with security rules, Cloud Functions, separate dev and prod projects), real-time shift management, dual user roles (Worker & Employer), document upload, visa validation, and a full hiring pipeline from application to assignment. I also built an admin backoffice for it. The app is live on both stores.",
    tags: ["React Native", "Expo", "Firebase", "Cloud Functions", "React + Vite backoffice", "iOS & Android"],
    screens: [
      { src: "/images/app/job-list.png", label: "Job listings" },
      { src: "/images/app/job-details.png", label: "Job details" },
      { src: "/images/app/login1.png", label: "Sign in" },
      { src: "/images/app/login2.png", label: "Register" },
      { src: "/images/app/save.png", label: "Saved jobs" },
      { src: "/images/app/my-shift-list.png", label: "My shifts" },
      { src: "/images/app/my-shift-empty.png", label: "Empty shifts" },
    ],
    color: "#00BCD4",
    isApp: true,
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6761596626" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jacob.baron.quickcrewapp2" },
    ],
    availability:
      "Only available in New Zealand and Australia, so the store pages won't show up in other regions.",
  },
  {
    label: "Landing Page",
    title: "QuickCrew Landing",
    desc: "The marketing site I built in Next.js for QuickCrew's pre-launch. It converts both employers and workers with separate value propositions, app screenshots, the founder story, and clear CTAs aligned to the brand identity.",
    tags: ["Next.js", "Vercel", "Responsive", "Conversion-focused"],
    screens: [
      { src: "/images/landing/hero1.png", label: "Hero" },
      { src: "/images/landing/how-it-works.png", label: "How it works" },
      { src: "/images/landing/for-business.png", label: "For businesses" },
      { src: "/images/landing/for-workers.png", label: "For workers" },
      { src: "/images/landing/workers-business.png", label: "Workflow" },
      { src: "/images/landing/founders.png", label: "Founders" },
    ],
    color: "#26A69A",
    isApp: false,
  },
  {
    label: "Website",
    title: "Hidden Sense",
    desc: "A website I made for my friend Iván, a photographer and artist based in New Zealand. The design stays out of the way and lets the images lead: a quiet home page, photographic collections (Unseen Moments, New Zealand, NZ Wild Life, Elsewhere) laid out as a masonry grid on desktop and full-screen photos on mobile, smooth page transitions, and a contact form that invites a conversation instead of listing prices. The form is a Next.js Server Action that sends mail through Resend, with a honeypot against spam.",
    tags: ["Next.js", "React 19", "TypeScript", "CSS Modules", "View Transitions", "Resend", "Vercel"],
    screens: [
      { src: "/images/hidden-sense/hs-6.jpg", label: "Home" },
      { src: "/images/hidden-sense/hs-5.jpg", label: "Collections" },
      { src: "/images/hidden-sense/hs-1.jpg", label: "NZ Wild Life" },
      { src: "/images/hidden-sense/hs-3.jpg", label: "New Zealand" },
      { src: "/images/hidden-sense/hs-2.jpg", label: "Unseen Moments" },
      { src: "/images/hidden-sense/hs-4.jpg", label: "Contact" },
    ],
    color: "#8A7F72",
    isApp: false,
    links: [{ label: "Visit hidden-sense.com", href: "https://www.hidden-sense.com/" }],
  },
  {
    label: "Website",
    title: "Viviana Rodríguez",
    desc: "A portfolio site I designed for an Argentine paper weaving artist. Every section was built with intention — colors, transitions, and animations shaped around her work and who she is, not a template. A site that feels alive.",
    tags: ["Next.js", "Vercel", "Animations", "Art Portfolio"],
    screens: [
      { src: "/images/viviana-landing/hero.png", label: "Hero" },
      { src: "/images/viviana-landing/black-and-white.png", label: "Black & White" },
      { src: "/images/viviana-landing/nihon1.png", label: "Nihon I" },
      { src: "/images/viviana-landing/nihon2.png", label: "Nihon II" },
    ],
    color: "#F59E0B",
    isApp: false,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do I need a clear idea of what I want before reaching out?",
    a: "Not at all. Many people come with a general direction but no clear picture yet. That's exactly what the first conversation is for — I help figure out what's needed, not just how to build it.",
  },
  {
    q: "Do you work with people who don't have anything built yet?",
    a: "Yes. Whether you're starting from scratch or looking to refresh something that already exists, I adapt to where you are.",
  },
  {
    q: "What does the process actually look like?",
    a: "It starts with a conversation. I learn about you, your organization, and what you want to communicate. From there I move into research, identity definition, and then design and build. Every step is collaborative.",
  },
  {
    q: "Do you do branding, or just web and app development?",
    a: "Both, and I don't separate them. The visual identity — color, typography, logo — and the product are built together because they need to speak the same language.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. A landing page with a defined identity can be ready in a few weeks. A full app with brand work from scratch takes longer. I'll give you an honest timeline after our first conversation.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "Everything you share with me is treated as confidential. If you need an NDA before sharing sensitive materials, just mention it and we'll sort it out.",
  },
  {
    q: "What if I already have a brand but just need a website or app?",
    a: "I can work with what you have. If your identity is solid, I build around it. If I notice things that could be stronger, I'll mention it — but there's no obligation to revisit anything you're happy with.",
  },
  {
    q: "How involved do I need to be during the process?",
    a: "As involved as you want to be. Some people prefer to stay close at every step, others give me direction and check in at key milestones. I adapt to how you work best.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "I don't disappear after launch. If something needs adjusting, if you want to evolve the product, or if a new need comes up — I'm available. I prefer long-term relationships over one-off deliveries.",
  },
  {
    q: "Do you work with people outside of New Zealand?",
    a: "Yes. I work remotely with people anywhere. Most of the process happens over calls and shared documents, so location isn't a barrier.",
  },
];
