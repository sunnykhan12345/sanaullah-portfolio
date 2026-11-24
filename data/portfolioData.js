export const profile = {
  name: "Sana Ullah",
  initials: "SU",
  role: "MERN Stack Developer | React.js & Next.js Developer",
  experienceYears: "3+",
  headline: "Building Modern Web Experiences.",
  intro: "I engineer fast, production-ready web applications and scalable SaaS interfaces with the MERN stack, React.js, Next.js, and modern AI integrations.",
  email: "sunnykhansadda@gmail.com",
  phone: "+92 3085342445",
  location: "Islamabad / Rawalpindi, Pakistan",
  locationDetails: "Pakistan - Available for Gulf, UAE, KSA, Qatar & Remote Projects",
  availability: "Available for freelance, remote, and relocation opportunities",
  education: "BSCS, Agriculture University Peshawar (AUP), 2024",
  cvUrl: "/assets/Sana_Ullah_Frontend_Developer_CV.pdf",
  portfolioUrl: "https://sanaullah-dev-portfolio.vercel.app",
  linkedinUrl: "https://www.linkedin.com/in/sanaullah-dev/",
  githubUrl: "https://github.com/sunnykhan12345",
  whatsappUrl: "https://wa.me/923085342445",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/sunnykhan12345",
      icon: "terminal",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sanaullahdev",
      icon: "work",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/923085342445",
      icon: "chat",
    },
  ],
  mission: "My mission is to craft reliable, responsive web applications that solve real problems and scale cleanly across every device.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "LangChain & Groq"
];

export const stats = [
  {
    value: "15+",
    label: "Frontend Projects",
    description: "Business-ready UI systems",
    accent: true,
  },
  {
    value: "10+",
    label: "Dashboard Systems",
    description: "CRM, admin, audit, lead flows",
    accent: false,
  },
  {
    value: "7+",
    label: "Landing Pages",
    description: "AI workflows and dashboards",
    accent: false,
  },
  {
    value: "3+",
    label: "Years Experience",
    description: "Professional Web Development",
    accent: true,
  },
];

export const aboutHighlights = [
  "Frontend development for scalable business platforms",
  "Enterprise dashboard UI and CRM workflow design",
  "Multilingual websites with clean localization patterns",
  "Responsive design for mobile, tablet, laptop, and 4K screens",
  "API-driven interfaces with strong loading and error states",
  "Performance optimization for fast, production-grade UX",
];

export const skillCategories = {
  frontend: {
    title: "Frontend",
    icon: "web",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Next.js"],
  },
  backend: {
    title: "Backend & Database",
    icon: "dns",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  libraries: {
    title: "Libraries & UI",
    icon: "layers",
    skills: ["Tailwind CSS", "Shadcn UI", "Bootstrap", "Responsive Design", "Figma to Code", "Framer Motion", "Swiper"],
  },
  tools: {
    title: "Tools & DevOps",
    icon: "build",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Jira", "Trello", "Figma", "Swagger"],
  },
  ai: {
    title: "AI & LLM Integrations",
    icon: "neurology",
    skills: ["LangChain", "LangGraph", "Groq", "AI Integrations"],
  },
};

export const projectFilters = [
  "All",
  "Live Demos",
  "Dashboard",
  "SaaS",
  "CRM",
  "AI",
  "Booking",
  "Landing Page",
  "Marketplace",
];

export const allProjects = [
  // 1. Vi'à Dom
  {
    id: "via-dom",
    title: "Vi’à Dom – Home Care Services Website",
    categoryLabel: "SERVICE WEBSITE",
    categories: ["Live Demos", "Landing Page", "SaaS"],
    image: "/assets/projects/via-dom.png",
    alt: "Vi’à Dom Home Care Services Website mockup",
    description: "A professional French home-care services website featuring comprehensive service information, recruitment workflows, interactive contact forms, and multilingual content with a focus on responsive frontend development and form integrations.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "EmailJS", "Resend"],
    status: "Live Project",
    liveUrl: "https://via-dom-website.vercel.app/",
    caseStudyUrl: "https://via-dom-website.vercel.app/",
    githubUrl: null,
  },
  // 2. Mustapha Furniture
  {
    id: "mustapha-furniture",
    title: "Mustapha Furniture – Furniture E-commerce Website",
    categoryLabel: "FURNITURE E-COMMERCE & ADMIN",
    categories: ["Live Demos", "Dashboard", "Marketplace"],
    image: "/assets/projects/mustafafurniture.png",
    alt: "Mustapha Furniture E-commerce Website mockup",
    description: "Full-featured furniture e-commerce storefront with integrated admin functionality: complete product management, item visibility control, dynamic pricing, quantity tracking, editing, and online order handling.",
    stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    status: "Live Project",
    liveUrl: "https://mustaphafurniture.vercel.app/",
    caseStudyUrl: "https://mustaphafurniture.vercel.app/",
    githubUrl: null,
  },
  // 3. Hicham Furniture
  {
    id: "hicham-furniture",
    title: "Hicham Furniture – Furniture Website",
    categoryLabel: "FURNITURE SHOWCASE",
    categories: ["Live Demos", "Landing Page", "Marketplace"],
    image: "/assets/projects/hicham-furniture.jpg",
    alt: "Hicham Furniture Website showcase",
    description: "A modern furniture and home furnishing showcase website presenting luxury living rooms, suites, and bespoke furniture with attractive product imagery, responsive grid layouts, and direct order inquiry features.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
    status: "Live Project",
    liveUrl: "https://hicham-website-murex.vercel.app/",
    caseStudyUrl: "https://hicham-website-murex.vercel.app/",
    githubUrl: null,
  },
  // 4. Palais des Fleurs
  {
    id: "palais-des-fleurs",
    title: "Palais des Fleurs – Flower Website",
    categoryLabel: "FLORAL PRODUCTS SHOWCASE",
    categories: ["Live Demos", "Landing Page", "Marketplace"],
    image: "/assets/projects/palais-des-fleurs.jpeg",
    alt: "Palais des Fleurs floral website showcase",
    description: "An elegant flower and floral products website focused on attractive visual product presentation, responsive design across all viewports, and seamless client ordering workflows.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    status: "Live Project",
    liveUrl: "https://palais-des-fleurs-website.vercel.app/",
    caseStudyUrl: "https://palais-des-fleurs-website.vercel.app/",
    githubUrl: null,
  },
  // 5. FormaKampus
  {
    id: "formakampus",
    title: "FormaKampus – Educational Training Website",
    categoryLabel: "EDUCATION & TRAINING PLATFORM",
    categories: ["Live Demos", "Landing Page", "SaaS"],
    image: "/assets/projects/form-campus.png",
    alt: "FormaKampus Training Platform showcase",
    description: "A professional French training organization platform offering customized vocational courses, sector training packs, financing guidance, and enrollment booking flows with responsive Next.js frontend architecture.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Responsive UI"],
    status: "Live Project",
    liveUrl: "https://formacampus-website.vercel.app/",
    caseStudyUrl: "https://formacampus-website.vercel.app/",
    githubUrl: null,
  },
  // 6. PakDevStudio
  {
    id: "pak-dev",
    title: "PakDevStudio – Company Website",
    categoryLabel: "OFFICIAL COMPANY WEBSITE",
    categories: ["Live Demos", "Landing Page"],
    image: "/assets/projects/pak-dev.png",
    alt: "PakDevStudio company website mockup",
    description: "Developed the official PakDevStudio company website from Figma with a modern, responsive, and conversion-focused design. Built reusable components, implemented dark and light themes, optimized performance, and delivered a production-ready experience using Next.js and Tailwind CSS.",
    stack: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    status: "Live Project",
    liveUrl: "https://www.pakdevstudio.com/",
    caseStudyUrl: "https://www.pakdevstudio.com/",
    githubUrl: null,
  },
  // 7. DAR SaaS Platform
  {
    id: "dar-saas",
    title: "DAR SaaS Business Management Platform",
    categoryLabel: "MULTI-ROLE SAAS PLATFORM",
    categories: ["Dashboard", "SaaS", "CRM", "AI", "Booking"],
    image: "/assets/projects/dubai_proejcts.png",
    alt: "DAR SaaS Business Management Platform",
    description: "A multi-role SaaS business management platform for managing leads, clients, service requests, appointments, payments, projects, AI showcase flows, and business operations from one central dashboard.",
    stack: ["Next.js", "React", "Tailwind", "APIs"],
    status: "Private Project",
    liveUrl: null,
    caseStudyUrl: "#contact",
    githubUrl: null,
  },
  // 8. AI Showcase Dashboard
  {
    id: "ai-showcase",
    title: "AI Showcase Dashboard",
    categoryLabel: "AI CREATIVE INTERFACE",
    categories: ["AI", "Dashboard", "SaaS"],
    image: "/assets/projects/sales.png",
    alt: "AI Showcase Dashboard interface",
    description: "An AI-powered business showcase interface where users can generate logos, descriptions, identity packs, social media content, newsletters, photos, and catalog assets through structured AI workflows.",
    stack: ["Next.js", "AI UI", "Tailwind", "APIs"],
    status: "Private Project",
    liveUrl: null,
    caseStudyUrl: "#contact",
    githubUrl: null,
  },
  // 9. Dubai Business Experience
  {
    id: "dubai-biz",
    title: "Dubai Business Experience Website",
    categoryLabel: "BUSINESS CONSULTING",
    categories: ["Landing Page"],
    image: "/assets/projects/dubai.png",
    alt: "Dubai Business Experience Website",
    description: "A premium business consulting website for Dubai-focused entrepreneurs and investors, designed to showcase offers, packages, services, testimonials, and conversion-driven landing sections for business setup and growth support.",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI", "Landing Page Design"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://dubaibize.com/",
    githubUrl: null,
  },
  // 10. Tele Prospecting CRM
  {
    id: "tele-crm",
    title: "Tele Prospecting CRM",
    categoryLabel: "LEAD MANAGEMENT & SALES CRM",
    categories: ["CRM", "Dashboard", "Booking"],
    image: "/assets/projects/tele.png",
    alt: "Tele Prospecting CRM dashboard",
    description: "A tele-prospecting CRM dashboard for managing leads, assigning sales representatives, booking appointments, tracking call outcomes, and handling prospect information in a structured workflow.",
    stack: ["React", "Tailwind", "APIs", "UX"],
    status: "Private Project",
    liveUrl: null,
    caseStudyUrl: "#contact",
    githubUrl: null,
  },
  // 11. Travel & Umrah Booking
  {
    id: "umrah-travel",
    title: "Travel & Umrah Booking Website",
    categoryLabel: "TRAVEL & BOOKING PORTAL",
    categories: ["Landing Page", "Booking"],
    image: "/assets/projects/binham.png",
    alt: "Travel & Umrah Booking Website",
    description: "A travel and Umrah booking landing page with flight search UI, trip type selection, query form, callback CTA, and travel-focused hero section.",
    stack: ["Next.js", "Tailwind", "Responsive Design"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://binhamaviation.com/",
    githubUrl: null,
  },
  // 12. Healthcare Cleaning Services
  {
    id: "healthcare-clean",
    title: "Healthcare Cleaning Services Website",
    categoryLabel: "HEALTHCARE SERVICES",
    categories: ["Landing Page"],
    image: "/assets/projects/continental_cleaning_healthcare.png",
    alt: "Healthcare Cleaning Services Website",
    description: "A professional cleaning services landing page for healthcare and cleanroom businesses with strong hero messaging, CTA buttons, service positioning, and premium visual layout.",
    stack: ["Next.js", "Tailwind", "SEO", "Motion"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://www.continental.cleaning/",
    githubUrl: null,
  },
  // 13. Talent Tube Hiring Platform
  {
    id: "talent-tube",
    title: "Talent Tube Hiring Platform",
    categoryLabel: "VIDEO RECRUITMENT SAAS",
    categories: ["Landing Page", "SaaS"],
    image: "/assets/projects/talent_tube.png",
    alt: "Talent Tube Hiring Platform",
    description: "A hiring platform landing page designed to promote video-based hiring, app downloads, user onboarding, and modern recruitment workflows.",
    stack: ["React", "Tailwind", "Landing Page"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://tt.mlxsoft.com/",
    githubUrl: null,
  },
  // 14. Haus of Axion Fitness
  {
    id: "haus-of-axion",
    title: "Haus of Axion Fitness Website",
    categoryLabel: "FITNESS & LIFESTYLE",
    categories: ["Landing Page"],
    image: "/assets/projects/house_of_axion.png",
    alt: "Haus of Axion Fitness Website",
    description: "A premium fitness and lifestyle website with bold visual direction, modern navigation, membership sections, service discovery, and strong brand-focused layout.",
    stack: ["React", "Tailwind", "UI Design"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://www.hausofaxion.ca/",
    githubUrl: null,
  },
  // 15. Jobifyy Service Marketplace
  {
    id: "jobifyy",
    title: "Jobifyy Service Marketplace",
    categoryLabel: "ON-DEMAND SERVICES",
    categories: ["Marketplace", "Landing Page"],
    image: "/assets/projects/jobify.png",
    alt: "Jobifyy Service Marketplace",
    description: "A service marketplace landing page where users can search skilled professionals, explore services, manage bookings, and connect with service providers.",
    stack: ["Next.js", "Tailwind", "Marketplace UI"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://jobifyy.com/",
    githubUrl: null,
  },
  // 16. Marvellex Community Website
  {
    id: "marvellex",
    title: "Marvellex Community Website",
    categoryLabel: "TECH COMMUNITY",
    categories: ["Landing Page"],
    image: "/assets/projects/marvellex.png",
    alt: "Marvellex Community Website",
    description: "A technology community landing page with strong brand visuals, navigation, social links, updates, project sections, and modern hero presentation.",
    stack: ["React", "Tailwind", "Landing Page"],
    status: "Preview Only",
    liveUrl: null,
    caseStudyUrl: "https://marvellex.com/",
    githubUrl: null,
  },
  // 17. DAR AI Branding & Marketplace
  {
    id: "dar-ai",
    title: "DAR AI Branding & Marketplace Platform",
    categoryLabel: "AI BRANDING ECOSYSTEM",
    categories: ["AI", "Marketplace", "SaaS", "Dashboard"],
    image: "/assets/projects/dar-website.png",
    alt: "DAR AI Branding & Marketplace Platform",
    description: "A complete AI-powered branding and marketplace platform where businesses can generate logos, brand kits, landing pages, social media assets, product visuals, and sell products through an integrated marketplace ecosystem.",
    stack: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    status: "Private Project",
    liveUrl: null,
    caseStudyUrl: "https://darhub.io/",
    githubUrl: null,
  },
  // 18. ChargerHub Store
  {
    id: "charger-hub",
    title: "ChargerHub Store – Mobile Charging Accessories Website",
    categoryLabel: "MOBILE ACCESSORIES STORE",
    categories: ["Marketplace", "Landing Page"],
    image: "/assets/projects/charger-hub.png",
    alt: "ChargerHub Store Website mockup",
    description: "A mobile charging accessories website showcasing mobile chargers, fast chargers, USB-C cables, and charging accessories. French-language storefront with product presentation and direct WhatsApp ordering.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "WhatsApp Ordering"],
    status: "In Progress",
    liveUrl: null,
    caseStudyUrl: "#contact",
    githubUrl: null,
  },
];

export const experiences = [
  {
    num: "01",
    company: "Pak Dev Studio",
    role: "MERN Stack Developer",
    period: "Jan 2026 – Present",
    current: true,
    description: "Working as a MERN stack developer on enterprise-level dashboards, CRM systems, SaaS platforms, and marketplace applications with modern UI/UX and full-stack practices.",
    points: [
      "Developed scalable dashboards (CRM, admin, analytics systems)",
      "Built booking and appointment management interfaces",
      "Created reusable component-based architecture in React/Next.js",
      "Integrated REST APIs with authentication and dynamic data flows",
      "Improved performance and responsiveness across devices",
      "Collaborated with backend and design teams for production-ready features",
    ],
  },
  {
    num: "02",
    company: "Marvellex Software Solutions",
    role: "Frontend / React.js Developer",
    period: "Jan 2024 – Dec 2025",
    current: false,
    description: "Worked on enterprise web applications, dashboards, and MERN-based frontend systems with focus on responsive UI and API integration.",
    points: [
      "Built responsive admin dashboards and business web applications",
      "Developed reusable UI components using React.js and Next.js",
      "Integrated REST APIs for dynamic workflows and authentication",
      "Worked on CRM-style systems and internal business tools",
      "Implemented clean UI/UX with Tailwind CSS and Bootstrap",
    ],
  },
  {
    num: "03",
    company: "Agriculture University Peshawar (AUP)",
    role: "Bachelor of Science in Computer Science (BSCS)",
    period: "2020 – 2024",
    current: false,
    description: "Completed degree in Computer Science with focus on software engineering, databases, and web development.",
    points: [
      "Software engineering fundamentals",
      "Database systems (SQL, DB design)",
      "Web development projects",
      "Final year frontend-based project work",
    ],
  },
];

export const caseStudies = [
  {
    title: "Business Dashboard Simplification",
    problem: "Complex CRM screens were overloaded with dense data, unclear actions, and weak mobile usability.",
    solution: "Designed clear cards, responsive data tables, sticky action zones, filter states, and role-specific dashboard flows.",
    outcome: "Cleaner workflows, faster scanning, and better decision-making for managers and operations teams.",
  },
  {
    title: "Responsive SaaS Interface",
    problem: "Dashboard content worked on desktop but became crowded on tablets and mobile devices.",
    solution: "Created adaptive grids, mobile cards, consistent spacing, horizontal table strategies, and touch-friendly controls.",
    outcome: "A consistent enterprise experience across mobile, tablet, laptop, and large displays.",
  },
  {
    title: "Multilingual Platform UI",
    problem: "English-first interfaces broke layout when translated to French or other longer languages.",
    solution: "Implemented translation-safe components, flexible labels, reusable text keys, and layout patterns that tolerate content growth.",
    outcome: "A scalable UI foundation for international business platforms and Gulf-market websites.",
  },
  {
    title: "Performance and UX Optimization",
    problem: "Users experienced slow sections, layout shifts, and unclear feedback during API loading states.",
    solution: "Added skeleton loaders, optimized images, reusable state components, reduced animation noise, and improved interaction feedback.",
    outcome: "Faster perceived performance, smoother navigation, and more professional product experience.",
  },
];

export const services = [
  {
    title: "Frontend Development",
    icon: "code",
    description: "Production-ready React and Next.js frontend development with clean, reusable components.",
  },
  {
    title: "Dashboard UI",
    icon: "dashboard",
    description: "Premium admin dashboards, CRM screens, metrics pages, forms, tables, and role-based workflows.",
  },
  {
    title: "SaaS Applications",
    icon: "saas",
    featured: true,
    description: "Modern SaaS product interfaces with onboarding, billing-ready layouts, settings, and responsive flows.",
  },
  {
    title: "Responsive Design",
    icon: "responsive",
    description: "Mobile-first layouts that work cleanly across phones, tablets, laptops, ultrawide, and 4K screens.",
  },
  {
    title: "API Integration",
    icon: "api",
    description: "Frontend API integration with loading states, validation, errors, filters, pagination, and secure flows.",
  },
  {
    title: "AI Interface Design",
    icon: "ai",
    description: "AI dashboards, audit reports, prompt-driven workflows, status screens, and intelligent UI experiences.",
  },
];

export const testimonials = [
  {
    name: "Arslan Ijaz",
    role: "CTO",
    company: "Marvellex Software Solutions",
    image: "/assets/testimonials/client-1.svg",
    feedback: "Sana consistently delivered responsive frontend systems with clean structure, reusable components, and strong dashboard UI implementation for business platforms.",
  },
  {
    name: "Pak Dev Studio Team",
    role: "Frontend & Product Team",
    company: "Pak Dev Studio",
    image: "/assets/testimonials/client-2.svg",
    feedback: "Sana contributed to SaaS dashboards, CRM interfaces, and responsive frontend workflows with clean implementation and structured UI development.",
  },
  {
    name: "Fahim Anik",
    role: "Senior Software Engineer",
    company: "Rattix IT",
    image: "/assets/testimonials/client-3.svg",
    feedback: "The Haus of Axion MENA frontend was implemented with a modern UI approach, strong responsiveness, and polished user experience aligned with the project vision.",
  },
];

export const aiHighlights = [
  {
    title: "LangChain",
    desc: "Prompt pipelines & RAG",
    icon: "hub"
  },
  {
    title: "LangGraph",
    desc: "Stateful agent flows",
    icon: "account_tree"
  },
  {
    title: "Groq",
    desc: "Fast LLM inference",
    icon: "speed"
  },
  {
    title: "AI APIs",
    desc: "Streaming UI & tools",
    icon: "api",
    featured: true
  }
];

export const contactItems = [
  {
    label: "Email",
    value: "sunnykhansadda@gmail.com",
    href: "mailto:sunnykhansadda@gmail.com",
    icon: "mail",
  },
  {
    label: "WhatsApp",
    value: "+92 3085342445",
    href: "https://wa.me/923085342445",
    icon: "whatsapp",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sanaullahdev",
    href: "https://www.linkedin.com/in/sanaullah-dev/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/sunnykhan12345",
    href: "https://github.com/sunnykhan12345",
    icon: "github",
  },
  {
    label: "Location",
    value: "Pakistan - Gulf remote ready",
    href: "#contact",
    icon: "location",
  },
  {
    label: "Availability",
    value: "Open to remote and relocation",
    href: "#contact",
    icon: "availability",
  },
];
