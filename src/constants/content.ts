import type {
  NavLink,
  ValueStatement,
  Phase,
  PortfolioItem,
  FaqItem,
  ExperienceItem,
  SkillGroup,
  EducationItem,
  LocalizedText,
  Testimonial,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: { en: "Approach", es: "Enfoque" }, href: "#how" },
  { label: { en: "Portfolio", es: "Portfolio" }, href: "#portfolio" },
  { label: { en: "Reviews", es: "Reseñas" }, href: "#testimonials" },
  { label: { en: "About", es: "Sobre mí" }, href: "/about" },
  { label: { en: "FAQ", es: "Preguntas" }, href: "#faq" },
];

export const ABOUT_INTRO: {
  name: string;
  title: LocalizedText;
  photo: string;
  location: string;
  bio: LocalizedText[];
} = {
  name: "Joaquin Ocampo",
  title: {
    en: "React Native & Front-End Developer",
    es: "Desarrollador React Native y Front-End",
  },
  photo: "/images/me-2.jpeg",
  location: "Argentina",
  bio: [
    {
      en: "I'm a front-end and mobile developer from Argentina, working remotely with teams across time zones. My background spans banking systems and entertainment platforms — I've built features for Disney and Warner Bros. — and more recently, independent products I own end to end: design, architecture and code.",
      es: "Soy desarrollador front-end y mobile de Argentina, y trabajo de forma remota con equipos en distintas zonas horarias. Mi recorrido incluye sistemas bancarios y plataformas de entretenimiento — construí funcionalidades para Disney y Warner Bros. — y, más recientemente, productos propios que manejo de punta a punta: diseño, arquitectura y código.",
    },
    {
      en: "I've shipped two apps of my own to the App Store and Google Play, QuickCrew and Sweet Baby Name, directing the architecture and implementation myself with AI-assisted workflows like Claude Code. For the web, I build with Next.js and React — this site included.",
      es: "Publiqué dos apps propias en App Store y Google Play, QuickCrew y Sweet Baby Name, dirigiendo yo mismo la arquitectura y la implementación con flujos de trabajo asistidos por IA como Claude Code. Para la web, construyo con Next.js y React — este sitio incluido.",
    },
    {
      en: "Before any of this, I trained as an avionic technician, which might explain why I like systems where every part has to work together.",
      es: "Antes de todo esto, me formé como técnico en aviónica, lo que quizás explica por qué me gustan los sistemas donde cada parte tiene que funcionar en conjunto.",
    },
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: { en: "React Native Developer — Independent", es: "Desarrollador React Native — Independiente" },
    company: "Sweet Baby Name",
    location: { en: "Remote · Personal project", es: "Remoto · Proyecto personal" },
    desc: {
      en: "My most personal project yet: a baby-name app I designed and built entirely on my own, down to the character illustrations and UI, hand-drawn in Figma. React Native, Expo Router, TypeScript and Zustand, with custom animations in Reanimated and holographic card effects in Skia driven by the phone's accelerometer. Backend on Firebase, monetization through RevenueCat and AdMob with GDPR consent and App Tracking Transparency handled properly. Live on the App Store in 175 countries, with English/Spanish support.",
      es: "Mi proyecto más personal hasta ahora: una app de nombres para bebés que diseñé y construí por completo yo solo, hasta las ilustraciones de los personajes y la UI, dibujadas a mano en Figma. React Native, Expo Router, TypeScript y Zustand, con animaciones personalizadas en Reanimated y efectos holográficos de tarjeta en Skia activados por el acelerómetro del teléfono. Backend en Firebase, monetización con RevenueCat y AdMob con consentimiento GDPR y App Tracking Transparency manejados correctamente. Disponible en la App Store en 175 países, con soporte en inglés y español.",
    },
    active: true,
  },
  {
    role: { en: "React Native Developer — Independent", es: "Desarrollador React Native — Independiente" },
    company: "QuickCrew",
    location: { en: "Remote", es: "Remoto" },
    desc: {
      en: "A staffing app connecting casual workers with employers, built end to end: React Native + Expo on the front end, Firebase (Firestore, Auth, Storage, Cloud Functions) on the back, and a React + Vite + TypeScript backoffice for admins. I designed the Firestore security rules as the authorization layer and set up separate dev and prod projects with EAS-based CI/CD. Live on the App Store and Google Play.",
      es: "Una app de personal temporal que conecta trabajadores ocasionales con empleadores, construida de punta a punta: React Native + Expo en el front end, Firebase (Firestore, Auth, Storage, Cloud Functions) en el back, y un backoffice en React + Vite + TypeScript para administradores. Diseñé las reglas de seguridad de Firestore como capa de autorización y configuré proyectos separados de desarrollo y producción con CI/CD basado en EAS. Disponible en App Store y Google Play.",
    },
    active: true,
  },
  {
    role: { en: "Front End Developer", es: "Desarrollador Front End" },
    company: "Super7ui & TEKii SRL",
    location: { en: "Denver (remote) · Buenos Aires", es: "Denver (remoto) · Buenos Aires" },
    desc: {
      en: "Built features and fixes for Warner Bros., working on wbtvd.com and Brainiac (Warner's internal production tools) with React, Webpack, Less, Java and PostgreSQL.",
      es: "Construí funcionalidades y correcciones para Warner Bros., trabajando en wbtvd.com y Brainiac (las herramientas internas de producción de Warner) con React, Webpack, Less, Java y PostgreSQL.",
    },
  },
  {
    role: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    company: "Excelan Automación S.A.",
    location: { en: "Avellaneda, Argentina", es: "Avellaneda, Argentina" },
    desc: {
      en: "Built banking systems for Banco Galicia and Banco Interfinanzas: a check-processing system in SQL Server, HTML/CSS/JS/jQuery and C#/.NET MVC, plus loan and claims systems, a legacy application migration, and an automated email tool for customer claims.",
      es: "Construí sistemas bancarios para Banco Galicia y Banco Interfinanzas: un sistema de procesamiento de cheques en SQL Server, HTML/CSS/JS/jQuery y C#/.NET MVC, además de sistemas de préstamos y reclamos, una migración de una aplicación legacy, y una herramienta de email automatizado para reclamos de clientes.",
    },
  },
  {
    role: { en: "UI Developer", es: "Desarrollador UI" },
    company: "Globant",
    location: { en: "Argentina", es: "Argentina" },
    desc: {
      en: "Front-end development for Disney's production and marketing sites and the \"Hermanos de Sangre\" project, using HTML, CSS, JavaScript, AngularJS and PHP.",
      es: "Desarrollo front-end para los sitios de producción y marketing de Disney y el proyecto \"Hermanos de Sangre\", usando HTML, CSS, JavaScript, AngularJS y PHP.",
    },
  },
  {
    role: { en: "Automation Tester", es: "Tester de Automatización" },
    company: "Globant",
    location: { en: "Argentina", es: "Argentina" },
    desc: {
      en: "Where I started out: QA for Disney's platform, manual and automated testing, bug tracking in Jira.",
      es: "Donde empecé: QA para la plataforma de Disney, testing manual y automatizado, seguimiento de bugs en Jira.",
    },
  },
  {
    role: { en: "Systems Auditor", es: "Auditor de Sistemas" },
    company: "PwC Argentina",
    desc: {
      en: "My first job after university, before moving into development full time.",
      es: "Mi primer trabajo después de la universidad, antes de dedicarme de lleno al desarrollo.",
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { title: { en: "Mobile", es: "Mobile" }, items: ["React Native", "Expo / EAS", "Reanimated", "Skia"] },
  { title: { en: "Web", es: "Web" }, items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML / CSS"] },
  { title: { en: "Backend & Data", es: "Backend y Datos" }, items: ["Firebase", "Firestore", "Cloud Functions", "SQL"] },
  {
    title: { en: "Product & Tools", es: "Producto y Herramientas" },
    items: ["AI-Assisted Development (Claude Code)", "Figma", "Software Architecture", "Git"],
  },
  { title: { en: "Monetization", es: "Monetización" }, items: ["RevenueCat", "AdMob"] },
];

export const EDUCATION: EducationItem[] = [
  { degree: { en: "Information Systems Engineering", es: "Ingeniería en Sistemas de Información" }, school: "Universidad Tecnológica Nacional" },
  { degree: { en: "Avionic Technician", es: "Técnico en Aviónica" }, school: "E.E.T N°7 I.M.P.A T.R.Q" },
];

export const VALUE_STATEMENTS: ValueStatement[] = [
  {
    title: { en: "Research first", es: "Investigar primero" },
    desc: {
      en: "I dig into the market, the audience, and the identity before writing a single line of code.",
      es: "Investigo el mercado, la audiencia y la identidad antes de escribir una sola línea de código.",
    },
  },
  {
    title: { en: "Nothing is arbitrary", es: "Nada es arbitrario" },
    desc: {
      en: "Every color, font, and layout decision has a reason. I don't decorate, I communicate.",
      es: "Cada decisión de color, tipografía y diseño tiene una razón. No decoro, comunico.",
    },
  },
  {
    title: { en: "Built for you", es: "Hecho para ti" },
    desc: {
      en: "Whether it's a web, an app, or both — the product emerges from what it needs to say, not from a template.",
      es: "Ya sea una web, una app, o ambas — el producto surge de lo que necesita decir, no de una plantilla.",
    },
  },
];

export const PHASES: Phase[] = [
  {
    num: "01",
    title: { en: "I listen first", es: "Primero escucho" },
    desc: {
      en: "Every project starts with understanding who it's for, what it needs to communicate, and to whom.",
      es: "Todo proyecto empieza por entender para quién es, qué necesita comunicar, y a quién.",
    },
    tag: { en: "My approach", es: "Mi enfoque" },
  },
  {
    num: "02",
    title: { en: "Research over assumption", es: "Investigación, no suposición" },
    desc: {
      en: "Color, typography, structure — nothing is chosen at random. Everything earns its place through research and intention.",
      es: "Color, tipografía, estructura — nada se elige al azar. Todo se gana su lugar a través de la investigación y la intención.",
    },
    tag: { en: "My process", es: "Mi proceso" },
  },
  {
    num: "03",
    title: { en: "The product is the message", es: "El producto es el mensaje" },
    desc: {
      en: "A good website or app doesn't just look professional — it communicates the right things to the right people.",
      es: "Una buena web o app no solo se ve profesional — comunica las cosas correctas a las personas correctas.",
    },
    tag: { en: "My belief", es: "Lo que creo" },
  },
];

export const PROCESS_STEPS: LocalizedText[] = [
  { en: "I learn about the organization, the market, and the goals", es: "Aprendo sobre la organización, el mercado y los objetivos" },
  { en: "I define the visual identity: color, typography, tone", es: "Defino la identidad visual: color, tipografía, tono" },
  { en: "I design and build the product that communicates it", es: "Diseño y construyo el producto que lo comunica" },
  { en: "I iterate until it feels right", es: "Itero hasta que se siente bien" },
];

export const WORKS_WITH: LocalizedText[] = [
  { en: "New organizations taking their first steps", es: "Organizaciones nuevas dando sus primeros pasos" },
  { en: "Existing businesses ready for a refresh", es: "Negocios existentes listos para renovarse" },
  { en: "Artists and creators who want their work to feel like theirs", es: "Artistas y creadores que quieren que su trabajo se sienta propio" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    label: { en: "Mobile Application", es: "Aplicación Móvil" },
    title: { en: "Sweet Baby Name", es: "Sweet Baby Name" },
    headline: {
      en: "Two phones, one swipe, zero more baby-name fights.",
      es: "Dos teléfonos, un swipe, y se acaban las peleas por el nombre.",
    },
    desc: {
      en: "A baby-name discovery app I designed and built end to end. You swipe through more than 50,000 real names across Spanish, English, French, Portuguese, German, the Nordic languages and more. Every name comes as an illustrated character card with its own scene, and you can play solo or together with a partner in a shared real-time room, then save your favorites. Cards react to the phone's tilt with custom holographic shine effects rendered in Skia, and the app includes a premium subscription and bilingual (EN/ES) support. The brand, the logo and every baby character are my own illustrations, designed in Figma.",
      es: "Una app para descubrir nombres de bebés que diseñé y construí de punta a punta. Deslizás entre más de 50.000 nombres reales en español, inglés, francés, portugués, alemán, los idiomas nórdicos y más. Cada nombre llega como una tarjeta de personaje ilustrado con su propia escena, y podés jugar solo o junto a tu pareja en una sala compartida en tiempo real, para después guardar tus favoritos. Las tarjetas reaccionan a la inclinación del teléfono con efectos holográficos personalizados renderizados en Skia, y la app incluye una suscripción premium y soporte bilingüe (EN/ES). La marca, el logo y cada personaje bebé son ilustraciones propias, diseñadas en Figma.",
    },
    tags: ["React Native", "Expo", "TypeScript", "Skia", "Reanimated", "Firebase", "RevenueCat", "Figma", "Illustration", "iOS"],
    screens: [
      { src: "/images/sweet-baby-name/web/app-mode.jpg", label: { en: "Solo or partner", es: "Solo o en pareja" } },
      { src: "/images/sweet-baby-name/web/app-languages.jpg", label: { en: "Languages", es: "Idiomas" } },
      { src: "/images/sweet-baby-name/web/app-name-card.jpg", label: { en: "Name card", es: "Tarjeta de nombre" } },
      { src: "/images/sweet-baby-name/web/app-character.jpg", label: { en: "Character scene", es: "Escena de personaje" } },
      { src: "/images/sweet-baby-name/web/app-match.jpg", label: { en: "It's a match", es: "¡Hubo match!" } },
      { src: "/images/sweet-baby-name/web/app-partner.jpg", label: { en: "Play together", es: "Jugar juntos" } },
    ],
    color: "#E0665C",
    shape: "phone",
    links: [
      { label: { en: "Download on the App Store", es: "Descargar en App Store" }, href: "https://apps.apple.com/app/id6800422954" },
    ],
    walkthroughVideo: "/images/sweet-baby-name/video-sbn.mp4",
    artwork: {
      title: { en: "Brand & illustration", es: "Marca e ilustración" },
      caption: { en: "Logo and characters designed by me in Figma.", es: "Logo y personajes diseñados por mí en Figma." },
      screens: [
        { src: "/images/sweet-baby-name/web/art-logo.jpg", label: { en: "Logo", es: "Logo" } },
        { src: "/images/sweet-baby-name/web/art-doctor.jpg", label: { en: "Brand · Doctor", es: "Marca · Doctor" } },
        { src: "/images/sweet-baby-name/web/art-architect.jpg", label: { en: "Brand · Architect", es: "Marca · Arquitecto" } },
        { src: "/images/sweet-baby-name/web/art-medieval.jpg", label: { en: "Brand · Medieval", es: "Marca · Medieval" } },
        { src: "/images/sweet-baby-name/web/art-photographer.jpg", label: { en: "Brand · Photographer", es: "Marca · Fotógrafo" } },
      ],
    },
  },
  {
    label: { en: "Landing Page", es: "Landing Page" },
    title: { en: "Sweet Baby Name — Landing", es: "Sweet Baby Name — Landing" },
    headline: {
      en: "A launch site that feels like the app before you open it.",
      es: "Un sitio de lanzamiento que se siente como la app, antes de abrirla.",
    },
    desc: {
      en: "The bilingual (EN/ES) marketing site I built in Next.js for Sweet Baby Name's launch, with its own locale routing and matching the app's card-collecting identity: an animated hero with a swipeable card stack, a characters gallery, a premium frame showcase, and a roadmap section. The contact form is a Next.js Route Handler that sends mail through Resend. Covered with Vitest/Testing Library component tests and a Playwright smoke test.",
      es: "El sitio de marketing bilingüe (EN/ES) que construí en Next.js para el lanzamiento de Sweet Baby Name, con ruteo de idioma propio y la misma identidad de coleccionar tarjetas que la app: un hero animado con un mazo de tarjetas deslizable, una galería de personajes, una muestra de marcos premium y una sección de roadmap. El formulario de contacto es un Route Handler de Next.js que envía mail a través de Resend. Cubierto con tests de componentes en Vitest/Testing Library y un smoke test en Playwright.",
    },
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "i18n (EN/ES)", "Resend", "Vitest", "Playwright", "Vercel"],
    screens: [
      { src: "/images/sweet-baby-name/site/sbn-web-hero.jpg", label: { en: "Hero", es: "Hero" } },
      { src: "/images/sweet-baby-name/site/sbn-web-characters.jpg", label: { en: "Character cards", es: "Tarjetas de personajes" } },
      { src: "/images/sweet-baby-name/site/sbn-web-collection.jpg", label: { en: "Character collection", es: "Colección de personajes" } },
      { src: "/images/sweet-baby-name/site/sbn-web-premium.jpg", label: { en: "Premium", es: "Premium" } },
    ],
    color: "#534AB7",
    shape: "wide",
    links: [{ label: { en: "Visit sweet-baby-name.vercel.app", es: "Visitar sweet-baby-name.vercel.app" }, href: "https://sweet-baby-name.vercel.app/" }],
  },
  {
    label: { en: "Mobile Application", es: "Aplicación Móvil" },
    title: { en: "QuickCrew App", es: "QuickCrew App" },
    headline: {
      en: "The schedule crews finally trust.",
      es: "El cronograma en el que las cuadrillas por fin confían.",
    },
    desc: {
      en: "A full React Native app I built to connect casual hospitality workers with employers in Queenstown, NZ. Serverless Firebase backend (Firestore with security rules, Cloud Functions, separate dev and prod projects), real-time shift management, dual user roles (Worker & Employer), document upload, visa validation, and a full hiring pipeline from application to assignment. I also built an admin backoffice for it. The app is live on both stores.",
      es: "Una app completa en React Native que construí para conectar trabajadores ocasionales de hospitalidad con empleadores en Queenstown, Nueva Zelanda. Backend serverless en Firebase (Firestore con reglas de seguridad, Cloud Functions, proyectos separados de desarrollo y producción), gestión de turnos en tiempo real, dos roles de usuario (Trabajador y Empleador), carga de documentos, validación de visa, y un pipeline completo de contratación desde la postulación hasta la asignación. También construí un backoffice de administración. La app está disponible en ambas tiendas.",
    },
    tags: ["React Native", "Expo", "Firebase", "Cloud Functions", "React + Vite backoffice", "iOS & Android"],
    screens: [
      { src: "/images/app/job-list.png", label: { en: "Job listings", es: "Listado de trabajos" } },
      { src: "/images/app/job-details.png", label: { en: "Job details", es: "Detalle del trabajo" } },
      { src: "/images/app/login1.png", label: { en: "Sign in", es: "Iniciar sesión" } },
      { src: "/images/app/login2.png", label: { en: "Register", es: "Registrarse" } },
      { src: "/images/app/save.png", label: { en: "Saved jobs", es: "Trabajos guardados" } },
      { src: "/images/app/my-shift-list.png", label: { en: "My shifts", es: "Mis turnos" } },
      { src: "/images/app/my-shift-empty.png", label: { en: "Empty shifts", es: "Sin turnos" } },
    ],
    color: "#00BCD4",
    shape: "phone",
    links: [
      { label: { en: "App Store", es: "App Store" }, href: "https://apps.apple.com/app/id6761596626" },
      { label: { en: "Google Play", es: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.jacob.baron.quickcrewapp2" },
    ],
    availability: {
      en: "Only available in New Zealand and Australia, so the store pages won't show up in other regions.",
      es: "Solo disponible en Nueva Zelanda y Australia, así que las páginas de la tienda no van a aparecer en otras regiones.",
    },
  },
  {
    label: { en: "Landing Page", es: "Landing Page" },
    title: { en: "QuickCrew Landing", es: "QuickCrew Landing" },
    headline: {
      en: "Two audiences, one story, one clear next step.",
      es: "Dos públicos, una historia, un solo paso a seguir.",
    },
    desc: {
      en: "The marketing site I built in Next.js for QuickCrew's pre-launch. It converts both employers and workers with separate value propositions, app screenshots, the founder story, and clear CTAs aligned to the brand identity.",
      es: "El sitio de marketing que construí en Next.js para el pre-lanzamiento de QuickCrew. Convierte tanto a empleadores como a trabajadores con propuestas de valor separadas, capturas de la app, la historia del fundador, y CTAs claros alineados con la identidad de marca.",
    },
    tags: ["Next.js", "Vercel", "Responsive", "Conversion-focused"],
    screens: [
      { src: "/images/landing/hero1.png", label: { en: "Hero", es: "Hero" } },
      { src: "/images/landing/how-it-works.png", label: { en: "How it works", es: "Cómo funciona" } },
      { src: "/images/landing/for-business.png", label: { en: "For businesses", es: "Para empresas" } },
      { src: "/images/landing/for-workers.png", label: { en: "For workers", es: "Para trabajadores" } },
      { src: "/images/landing/workers-business.png", label: { en: "Workflow", es: "Flujo de trabajo" } },
      { src: "/images/landing/founders.png", label: { en: "Founders", es: "Fundadores" } },
    ],
    color: "#26A69A",
    shape: "wide",
    links: [{ label: { en: "Visit quickcrew-landing.vercel.app", es: "Visitar quickcrew-landing.vercel.app" }, href: "https://quickcrew-landing.vercel.app/" }],
  },
  {
    label: { en: "Website", es: "Sitio web" },
    title: { en: "Hidden Sense", es: "Hidden Sense" },
    headline: {
      en: "A site that steps aside and lets the photos talk.",
      es: "Un sitio que se corre del medio y deja hablar a las fotos.",
    },
    desc: {
      en: "A website I made for my friend Iván, a photographer and artist based in New Zealand. The design stays out of the way and lets the images lead: a quiet home page, photographic collections (Unseen Moments, New Zealand, NZ Wild Life, Elsewhere) laid out as a masonry grid on desktop and full-screen photos on mobile, smooth page transitions, and a contact form that invites a conversation instead of listing prices. The form is a Next.js Server Action that sends mail through Resend, with a honeypot against spam.",
      es: "Un sitio web que hice para mi amigo Iván, fotógrafo y artista radicado en Nueva Zelanda. El diseño se corre del medio y deja que las imágenes lideren: una página de inicio tranquila, colecciones fotográficas (Unseen Moments, New Zealand, NZ Wild Life, Elsewhere) organizadas en una grilla tipo masonry en escritorio y fotos a pantalla completa en mobile, transiciones suaves entre páginas, y un formulario de contacto que invita a una conversación en vez de listar precios. El formulario es una Server Action de Next.js que envía mail a través de Resend, con un honeypot contra spam.",
    },
    tags: ["Next.js", "React 19", "TypeScript", "CSS Modules", "View Transitions", "Resend", "Vercel"],
    screens: [
      { src: "/images/hidden-sense/hs-6.jpg", label: { en: "Home", es: "Inicio" } },
      { src: "/images/hidden-sense/hs-5.jpg", label: { en: "Collections", es: "Colecciones" } },
      { src: "/images/hidden-sense/hs-1.jpg", label: { en: "NZ Wild Life", es: "NZ Wild Life" } },
      { src: "/images/hidden-sense/hs-3.jpg", label: { en: "New Zealand", es: "New Zealand" } },
      { src: "/images/hidden-sense/hs-2.jpg", label: { en: "Unseen Moments", es: "Unseen Moments" } },
      { src: "/images/hidden-sense/hs-4.jpg", label: { en: "Contact", es: "Contacto" } },
    ],
    color: "#8A7F72",
    shape: "wide",
    links: [{ label: { en: "Visit hidden-sense.com", es: "Visitar hidden-sense.com" }, href: "https://www.hidden-sense.com/" }],
  },
  {
    label: { en: "Website", es: "Sitio web" },
    title: { en: "Viviana Rodríguez", es: "Viviana Rodríguez" },
    headline: {
      en: "A portfolio that feels as alive as the art it shows.",
      es: "Un portfolio que se siente tan vivo como el arte que muestra.",
    },
    desc: {
      en: "A portfolio site I designed for an Argentine paper weaving artist. Every section was built with intention — colors, transitions, and animations shaped around her work and who she is, not a template. A site that feels alive.",
      es: "Un sitio de portfolio que diseñé para una artista argentina de tejido en papel. Cada sección se construyó con intención — colores, transiciones y animaciones pensadas en función de su obra y quién es ella, no de una plantilla. Un sitio que se siente vivo.",
    },
    tags: ["Next.js", "Vercel", "Animations", "Art Portfolio"],
    screens: [
      { src: "/images/viviana-landing/hero.png", label: { en: "Hero", es: "Hero" } },
      { src: "/images/viviana-landing/black-and-white.png", label: { en: "Black & White", es: "Blanco y Negro" } },
      { src: "/images/viviana-landing/nihon1.png", label: { en: "Nihon I", es: "Nihon I" } },
      { src: "/images/viviana-landing/nihon2.png", label: { en: "Nihon II", es: "Nihon II" } },
    ],
    color: "#F59E0B",
    shape: "wide",
    links: [{ label: { en: "Visit viviana-rodriguez.vercel.app", es: "Visitar viviana-rodriguez.vercel.app" }, href: "https://viviana-rodriguez.vercel.app/" }],
  },
];

// Verbatim App Store reviews for Sweet Baby Name — quotes and authors are real, never invented.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Really lovely app to use as a couple! My wife and I used it to find and compare baby names, and we really enjoyed the experience.",
    author: "Dalilsabel43",
    rating: 5,
    source: { en: "Sweet Baby Name · App Store, Spain", es: "Sweet Baby Name · App Store, España" },
  },
  {
    quote: "Really simple and fun app to use! I love the idea of being able to match baby names with your partner. The design is clean, intuitive, and the matching concept is great.",
    author: "Ivan.edition",
    rating: 5,
    source: { en: "Sweet Baby Name · App Store, New Zealand", es: "Sweet Baby Name · App Store, Nueva Zelanda" },
  },
  {
    quote: "Really easy app to work through. Some great ideas for names with informative descriptions. Highly recommend to anyone wanting to explore baby names. 10/10",
    author: "Jordy Pusb",
    rating: 5,
    source: { en: "Sweet Baby Name · App Store, New Zealand", es: "Sweet Baby Name · App Store, Nueva Zelanda" },
  },
  {
    quote: "Una forma muy entretenida de buscar nombre para el bebé.",
    author: "Melocotónrosa",
    rating: 5,
    source: { en: "Sweet Baby Name · App Store, Spain", es: "Sweet Baby Name · App Store, España" },
  },
  {
    quote: "The game is really funny, and it helped us to get the perfect name for our son.",
    author: "Francocuts127",
    rating: 5,
    source: { en: "Sweet Baby Name · App Store, New Zealand", es: "Sweet Baby Name · App Store, Nueva Zelanda" },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: { en: "Do I need a clear idea of what I want before reaching out?", es: "¿Necesito tener una idea clara de lo que quiero antes de contactarte?" },
    a: {
      en: "Not at all. Many people come with a general direction but no clear picture yet. That's exactly what the first conversation is for — I help figure out what's needed, not just how to build it.",
      es: "Para nada. Mucha gente llega con una dirección general pero sin una idea clara todavía. Para eso está justamente la primera conversación — ayudo a definir qué se necesita, no solo cómo construirlo.",
    },
  },
  {
    q: { en: "Do you work with people who don't have anything built yet?", es: "¿Trabajás con personas que todavía no tienen nada construido?" },
    a: {
      en: "Yes. Whether you're starting from scratch or looking to refresh something that already exists, I adapt to where you are.",
      es: "Sí. Ya sea que arranques de cero o busques renovar algo que ya existe, me adapto a dónde estás.",
    },
  },
  {
    q: { en: "What does the process actually look like?", es: "¿Cómo es el proceso en la práctica?" },
    a: {
      en: "It starts with a conversation. I learn about you, your organization, and what you want to communicate. From there I move into research, identity definition, and then design and build. Every step is collaborative.",
      es: "Empieza con una conversación. Aprendo sobre vos, tu organización, y qué querés comunicar. De ahí paso a la investigación, la definición de identidad, y después al diseño y la construcción. Cada paso es colaborativo.",
    },
  },
  {
    q: { en: "Do you do branding, or just web and app development?", es: "¿Hacés branding, o solo desarrollo web y de apps?" },
    a: {
      en: "Both, and I don't separate them. The visual identity — color, typography, logo — and the product are built together because they need to speak the same language.",
      es: "Ambos, y no los separo. La identidad visual — color, tipografía, logo — y el producto se construyen juntos porque necesitan hablar el mismo idioma.",
    },
  },
  {
    q: { en: "How long does a project take?", es: "¿Cuánto tiempo toma un proyecto?" },
    a: {
      en: "It depends on the scope. A landing page with a defined identity can be ready in a few weeks. A full app with brand work from scratch takes longer. I'll give you an honest timeline after our first conversation.",
      es: "Depende del alcance. Una landing page con identidad definida puede estar lista en unas semanas. Una app completa con trabajo de marca desde cero toma más tiempo. Te voy a dar un cronograma honesto después de nuestra primera conversación.",
    },
  },
  {
    q: { en: "How do you handle confidentiality?", es: "¿Cómo manejás la confidencialidad?" },
    a: {
      en: "Everything you share with me is treated as confidential. If you need an NDA before sharing sensitive materials, just mention it and we'll sort it out.",
      es: "Todo lo que compartís conmigo se trata como confidencial. Si necesitás un NDA antes de compartir material sensible, solo decímelo y lo resolvemos.",
    },
  },
  {
    q: { en: "What if I already have a brand but just need a website or app?", es: "¿Y si ya tengo una marca y solo necesito un sitio o una app?" },
    a: {
      en: "I can work with what you have. If your identity is solid, I build around it. If I notice things that could be stronger, I'll mention it — but there's no obligation to revisit anything you're happy with.",
      es: "Puedo trabajar con lo que ya tenés. Si tu identidad es sólida, construyo alrededor de ella. Si noto algo que podría mejorarse, te lo voy a comentar — pero no hay obligación de revisar nada con lo que ya estés conforme.",
    },
  },
  {
    q: { en: "How involved do I need to be during the process?", es: "¿Cuánto tengo que involucrarme durante el proceso?" },
    a: {
      en: "As involved as you want to be. Some people prefer to stay close at every step, others give me direction and check in at key milestones. I adapt to how you work best.",
      es: "Tanto como quieras. Algunas personas prefieren estar cerca en cada paso, otras me dan una dirección y se suman en hitos clave. Me adapto a cómo te resulte mejor trabajar.",
    },
  },
  {
    q: { en: "What happens after the project is delivered?", es: "¿Qué pasa después de entregar el proyecto?" },
    a: {
      en: "I don't disappear after launch. If something needs adjusting, if you want to evolve the product, or if a new need comes up — I'm available. I prefer long-term relationships over one-off deliveries.",
      es: "No desaparezco después del lanzamiento. Si algo necesita un ajuste, si querés evolucionar el producto, o si surge una necesidad nueva — estoy disponible. Prefiero las relaciones de largo plazo por sobre las entregas puntuales.",
    },
  },
  {
    q: { en: "Do you work with people outside of New Zealand?", es: "¿Trabajás con gente fuera de Nueva Zelanda?" },
    a: {
      en: "Yes. I work remotely with people anywhere. Most of the process happens over calls and shared documents, so location isn't a barrier.",
      es: "Sí. Trabajo de forma remota con gente de cualquier parte. La mayor parte del proceso pasa por llamadas y documentos compartidos, así que la ubicación no es un obstáculo.",
    },
  },
];
