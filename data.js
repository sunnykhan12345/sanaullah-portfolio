export const profile = {
    name: "Sana Ullah",
    role: "MERN Stack Developer",
    headline:
        "Premium frontend engineering for dashboards, SaaS products, and business platforms.",
    intro:
        "I build responsive, high-performance frontend systems for SaaS products, admin dashboards, landing pages, booking platforms, CRM systems, and business workflow applications using React.js, Next.js, Node.js, MongoDB, Tailwind CSS, and modern UI libraries.",
    email: "sunnykhansadda@gmail.com",
    phone: "+92 3085342445",
    location: "Pakistan - Available for Gulf, UAE, KSA, Qatar & Remote Projects",
    availability: "Available for freelance, remote, and relocation opportunities",
    education: "BSCS, Agriculture University Peshawar (AUP), 2024",
    cvUrl: "/assets/Sana_Ullah_Frontend_Developer_CV.pdf",
    socials: [
        {
            name: "GitHub",
            href: "https://github.com/sunnykhan12345",
            icon: "github",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/sanaullah-dev/",
            icon: "linkedin",
        },
        { name: "WhatsApp", href: "https://wa.me/923085342445", icon: "whatsapp" },
    ],
};

export const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
];

export const stats = [
    {
        value: 15,
        suffix: "+",
        label: "Frontend Projects",
        description: "Business-ready UI systems",
    },
    {
        value: 10,
        suffix: "+",
        label: "Dashboard Systems",
        description: "CRM, admin, audit, lead flows",
    },
    // {
    //   value: 100,
    //   suffix: "%",
    //   label: "Responsive UI",
    //   description: "Mobile-first implementation",
    // },
    {
        value: 7,
        suffix: "+",
        label: "Landing Pages",
        description: "AI workflows and dashboards",
    },
    {
        value: 3,
        suffix: "+",
        label: "Years Professional Experience",
        // description: "English, French, Arabic-ready UI",
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

export const skillGroups = [
    {
        title: "Frontend",
        description: "Core web technologies and modern application frameworks.",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Tailwind CSS",
            "React.js",
            "Next.js",
        ],
    },
    {
        title: "Backend & Database",
        description: "MERN-stack server, API, and data layer experience.",
        skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
        title: "Libraries",
        description:
            "Reusable UI systems, accessible primitives, and animation tools.",
        skills: [
            "Tailwind CSS",
            "Shadcn UI",
            "Bootstrap",
            // "Radix UI",
            "Responsive Design",
            "Figma to Code",
            "Framer Motion",
            "Swiper",
            // "React Slick",
        ],
    },
    {
        title: "Tools",
        description: "Production workflows, integrations, and deployment tooling.",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Vercel",
            "Jira",
            "Trello",
            "Figma",
            "Swagger",
            "Compass",
        ],
    },
];

export const projectFilters = [
    "All",
    "Dashboard",
    "SaaS",
    "CRM",
    "AI",
    "Booking",
    "Landing Page",
    "Marketplace",
];

export const projects = [
    {
        title: "PakDevStudio – Company Website",
        categories: ["Landing Page", "Business Website"],
        image: "/assets/projects/pak-dev.png",
        description:
            "Developed the official PakDevStudio company website from Figma with a modern, responsive, and conversion-focused design. Built reusable components, implemented dark and light themes, optimized performance, and delivered a production-ready experience using Next.js and Tailwind CSS.",

        features: [
            "Pixel-perfect Figma to Code",
            "Fully Responsive Layout",
            "Dark & Light Theme",
            "Reusable Component Architecture",
            "Modern UI/UX Design",
            "Projects Showcase",
            "Services Section",
            "Interactive FAQ Accordion",
            "Testimonials Section",
            "Team Showcase",
            "Contact Form",
            "SEO-friendly Structure",
            "Performance Optimization",
            "Cross-browser Compatibility",
        ],

        stack: [
            "Next.js",
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
        ],

        status: "Live Project",
        caseStudyUrl: "https://www.pakdevstudio.com/",
        liveUrl: "https://www.pakdevstudio.com/",
        githubUrl: null,
    },
    {
        title: "DAR SaaS Business Management Platform",
        categories: ["Dashboard", "SaaS", "CRM", "AI", "Booking"],
        image: "/assets/projects/dubai_proejcts.png",
        description:
            "A multi-role SaaS business management platform for managing leads, clients, service requests, appointments, payments, projects, AI showcase flows, and business operations from one central dashboard.",
        features: [
            "Role-based dashboards",
            "CRM workflow",
            "Service requests",
            "Appointments",
            "Payments UI",
            "AI showcase",
        ],
        stack: ["Next.js", "React", "Tailwind", "APIs"],
        status: "Private Project",
        caseStudyUrl: "#contact",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "AI Showcase Dashboard",
        categories: ["AI", "Dashboard", "SaaS"],
        image: "/assets/projects/sales.png",

        description:
            "An AI-powered business showcase interface where users can generate logos, descriptions, identity packs, social media content, newsletters, photos, and catalog assets through structured AI workflows.",
        features: [
            "AI workflows",
            "Logo generation",
            "Identity pack",
            "Business assets",
            "Dashboard UI",
        ],
        stack: ["Next.js", "AI UI", "Tailwind", "APIs"],
        status: "Private Project",
        caseStudyUrl: "#contact",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Dubai Business Experience Website",
        categories: ["Landing Page"],
        image: "/assets/projects/dubai.png",
        description:
            "A premium business consulting website for Dubai-focused entrepreneurs and investors, designed to showcase offers, packages, services, testimonials, and conversion-driven landing sections for business setup and growth support.",
        features: [
            "Hero landing section",
            "Business offers & packages",
            "Service breakdown sections",
            "Testimonials slider",
            "FAQ section",
            "Lead generation contact forms",
            "Conversion-focused CTA sections",
        ],
        stack: ["Next.js", "Tailwind CSS", "Responsive UI", "Landing Page Design"],
        status: "Preview Only",
        caseStudyUrl: "https://dubaibize.com/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Tele Prospecting CRM",
        categories: ["CRM", "Dashboard", "Booking"],
        image: "/assets/projects/tele.png",
        description:
            "A tele-prospecting CRM dashboard for managing leads, assigning sales representatives, booking appointments, tracking call outcomes, and handling prospect information in a structured workflow.",
        features: [
            "Lead management",
            "Sales assignment",
            "Call outcome",
            "Appointment booking",
            "CRM forms",
        ],
        stack: ["React", "Tailwind", "APIs", "UX"],
        status: "Private Project",
        caseStudyUrl: "#contact",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Travel & Umrah Booking Website",
        categories: ["Landing Page", "Booking"],
        image: "/assets/projects/umrah.png",
        description:
            "A travel and Umrah booking landing page with flight search UI, trip type selection, query form, callback CTA, and travel-focused hero section.",
        features: [
            "Hero section",
            "Booking form",
            "Travel UI",
            "CTA design",
            "Responsive layout",
        ],
        stack: ["Next.js", "Tailwind", "Responsive Design"],
        status: "Preview Only",
        caseStudyUrl: "https://binhamaviation.com/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Healthcare Cleaning Services Website",
        categories: ["Landing Page"],
        image: "/assets/projects/continental_cleaning_healthcare.png",
        description:
            "A professional cleaning services landing page for healthcare and cleanroom businesses with strong hero messaging, CTA buttons, service positioning, and premium visual layout.",
        features: [
            "Business website",
            "Hero design",
            "CTA section",
            "Service layout",
            "Responsive UI",
        ],
        stack: ["Next.js", "Tailwind", "SEO", "Motion"],
        status: "Preview Only",
        caseStudyUrl: "https://www.continental.cleaning/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Talent Tube Hiring Platform",
        categories: ["Landing Page", "SaaS"],
        image: "/assets/projects/talent_tube.png",
        description:
            "A hiring platform landing page designed to promote video-based hiring, app downloads, user onboarding, and modern recruitment workflows.",
        features: [
            "Hiring platform",
            "App landing page",
            "Hero section",
            "Mobile mockup",
            "CTA design",
        ],
        stack: ["React", "Tailwind", "Landing Page"],
        status: "Preview Only",
        caseStudyUrl: "https://tt.mlxsoft.com/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Haus of Axion Fitness Website",
        categories: ["Landing Page"],
        image: "/assets/projects/house_of_axion.png",
        description:
            "A premium fitness and lifestyle website with bold visual direction, modern navigation, membership sections, service discovery, and strong brand-focused layout.",
        features: [
            "Fitness website",
            "Brand UI",
            "Membership",
            "Service layout",
            "Responsive design",
        ],
        stack: ["React", "Tailwind", "UI Design"],
        status: "Preview Only",
        caseStudyUrl: "https://www.hausofaxion.ca/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Jobifyy Service Marketplace",
        categories: ["Marketplace", "Landing Page"],
        image: "/assets/projects/jobify.png",
        description:
            "A service marketplace landing page where users can search skilled professionals, explore services, manage bookings, and connect with service providers.",
        features: [
            "Marketplace UI",
            "Search bar",
            "Service discovery",
            "Booking flow",
            "Responsive layout",
        ],
        stack: ["Next.js", "Tailwind", "Marketplace UI"],
        status: "Preview Only",
        caseStudyUrl: "https://jobifyy.com/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "Marvellex Community Website",
        categories: ["Landing Page"],
        image: "/assets/projects/marvellex.png",
        description:
            "A technology community landing page with strong brand visuals, navigation, social links, updates, project sections, and modern hero presentation.",
        features: [
            "Company website",
            "Community UI",
            "Hero design",
            "Navigation",
            "Brand identity",
        ],
        stack: ["React", "Tailwind", "Landing Page"],
        status: "Preview Only",
        caseStudyUrl: "https://marvellex.com/",
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: "DAR AI Branding & Marketplace Platform",
        categories: ["AI", "Marketplace", "SaaS", "Dashboard"],
        image: "/assets/projects/dar-website.png",
        description:
            "A complete AI-powered branding and marketplace platform where businesses can generate logos, brand kits, landing pages, social media assets, product visuals, and sell products through an integrated marketplace ecosystem.",
        features: [
            "AI Logo Generation",
            "Brand Kit Builder",
            "Landing Page Creation",
            "Marketplace Access",
            "Seller Dashboard",
            "Product Management",
            "AI Business Audit",
            "Billing System",
            "Team Management",
            "Multi-language Support",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "REST APIs"],
        status: "Private Project",
        caseStudyUrl: "https://darhub.io/",
        liveUrl: null,
        githubUrl: null,
    },
];

export const caseStudies = [
    {
        title: "Business Dashboard Simplification",
        problem:
            "Complex CRM screens were overloaded with dense data, unclear actions, and weak mobile usability.",
        solution:
            "Designed clear cards, responsive data tables, sticky action zones, filter states, and role-specific dashboard flows.",
        outcome:
            "Cleaner workflows, faster scanning, and better decision-making for managers and operations teams.",
    },
    {
        title: "Responsive SaaS Interface",
        problem:
            "Dashboard content worked on desktop but became crowded on tablets and mobile devices.",
        solution:
            "Created adaptive grids, mobile cards, consistent spacing, horizontal table strategies, and touch-friendly controls.",
        outcome:
            "A consistent enterprise experience across mobile, tablet, laptop, and large displays.",
    },
    {
        title: "Multilingual Platform UI",
        problem:
            "English-first interfaces broke layout when translated to French or other longer languages.",
        solution:
            "Implemented translation-safe components, flexible labels, reusable text keys, and layout patterns that tolerate content growth.",
        outcome:
            "A scalable UI foundation for international business platforms and Gulf-market websites.",
    },
    {
        title: "Performance and UX Optimization",
        problem:
            "Users experienced slow sections, layout shifts, and unclear feedback during API loading states.",
        solution:
            "Added skeleton loaders, optimized images, reusable state components, reduced animation noise, and improved interaction feedback.",
        outcome:
            "Faster perceived performance, smoother navigation, and more professional product experience.",
    },
];

export const services = [
    {
        title: "Frontend Development",
        description:
            "Production-ready React and Next.js frontend development with clean, reusable components.",
        icon: "code",
    },
    {
        title: "Dashboard UI",
        description:
            "Premium admin dashboards, CRM screens, metrics pages, forms, tables, and role-based workflows.",
        icon: "dashboard",
    },
    {
        title: "SaaS Applications",
        description:
            "Modern SaaS product interfaces with onboarding, billing-ready layouts, settings, and responsive flows.",
        icon: "saas",
    },
    {
        title: "Responsive Design",
        description:
            "Mobile-first layouts that work cleanly across phones, tablets, laptops, ultrawide, and 4K screens.",
        icon: "responsive",
    },
    {
        title: "API Integration",
        description:
            "Frontend API integration with loading states, validation, errors, filters, pagination, and secure flows.",
        icon: "api",
    },
    {
        title: "AI Interface Design",
        description:
            "AI dashboards, audit reports, prompt-driven workflows, status screens, and intelligent UI experiences.",
        icon: "ai",
    },
    {
        title: "Admin Panels",
        description:
            "Clean admin systems for users, projects, documents, appointments, leads, and business operations.",
        icon: "panel",
    },
];

export const experiences = [
    {
        period: "Jan 2026 - Present",
        title: "Frontend Developer",
        company: "Pak Dev Studio",

        description:
            "Working as a frontend developer on enterprise-level dashboards, CRM systems, SaaS platforms, and marketplace applications with modern UI/UX practices.",

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
        period: "Jan 2024 - Dec 2025",
        title: "Frontend Developer",
        company: "Marvellex Software Solutions",

        description:
            "Worked on enterprise web applications, dashboards, and MERN-based frontend systems with focus on responsive UI and API integration.",

        points: [
            "Built responsive admin dashboards and business web applications",
            "Developed reusable UI components using React.js and Next.js",
            "Integrated REST APIs for dynamic workflows and authentication",
            "Worked on CRM-style systems and internal business tools",
            "Implemented clean UI/UX with Tailwind CSS and Bootstrap",
        ],
    },

    {
        period: "Apr 2024 - Jun 2024",
        title: "Frontend Developer Intern",
        company: "Marvellex Software Solutions",

        description:
            "Internship focused on frontend development, UI implementation, and real-world project exposure in a professional environment.",

        points: [
            "Converted Figma designs into responsive React components",
            "Assisted in building small dashboard features and UI modules",
            "Learned API integration and state management basics",
            "Improved responsive design and component structuring skills",
        ],
    },

    {
        period: "2020 - 2024",
        title: "Bachelor of Science in Computer Science (BSCS)",
        company: "Agriculture University Peshawar (AUP)",

        description:
            "Completed degree in Computer Science with focus on software engineering, databases, and web development.",

        points: [
            "Software engineering fundamentals",
            "Database systems (SQL, DB design)",
            "Web development projects",
            "Final year frontend-based project work",
        ],
    },
];

export const testimonials = [
    {
        name: "Arslan Ijaz",
        role: "CTO",
        company: "Marvellex Software Solutions",
        image: "/assets/testimonials/client-1.svg",
        feedback:
            "Sana consistently delivered responsive frontend systems with clean structure, reusable components, and strong dashboard UI implementation for business platforms.",
    },
    {
        name: "Pak Dev Studio Team",
        role: "Frontend & Product Team",
        company: "Pak Dev Studio",
        image: "/assets/testimonials/client-2.svg",
        feedback:
            "Sana contributed to SaaS dashboards, CRM interfaces, and responsive frontend workflows with clean implementation and structured UI development.",
    },
    {
        name: "Fahim Anik",
        role: "Senior Software Engineer",
        company: "Rattix IT",
        image: "/assets/testimonials/client-3.svg",
        feedback:
            "The Haus of Axion MENA frontend was implemented with a modern UI approach, strong responsiveness, and polished user experience aligned with the project vision.",
    },
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
        value: "linkedin.com/in/sanaullah-dev",
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