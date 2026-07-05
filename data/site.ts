// ─────────────────────────────────────────────────────────
// Central content source — built from Janani B's actual resume & Figma work.
// Edit this file to update the whole site.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Janani B",
  role: "UI/UX Designer & Frontend Developer",
  tagline:
    "I design intuitive digital experiences in Figma, then build them myself with React and Next.js — so nothing gets lost between design and code.",
  email: "janani26112006@gmail.com",
  linkedin: "https://linkedin.com/in/janani-b-b20712392",
  github: "https://github.com/jananijanani2611-code",
  location: "Coimbatore, Tamil Nadu",
  resumeUrl: "/resume/Janani-B-Resume.pdf",
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "UX",
    description: "How I understand people and shape structure before pixels.",
    skills: [
      "User Flows",
      "Wireframing (Low → High Fidelity)",
      "Information Architecture",
      "Usability Testing",
      "Interaction Design",
      "Design Systems",
      "Developer Handoff",
    ],
  },
  {
    title: "UI",
    description: "How I turn structure into something people enjoy using.",
    skills: [
      "Visual Design",
      "Responsive Layout",
      "Component Systems",
      "Prototyping (Figma)",
      "Design Tokens",
    ],
  },
  {
    title: "Frontend",
    description: "How I build what I design, so nothing is lost in translation.",
    skills: [
      "React.js",
      "Next.js 14/15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
      "Bootstrap 5",
    ],
  },
  {
    title: "Backend & Tools",
    description: "How I make sure a design actually ships.",
    skills: [
      "Spring Boot",
      "REST API Design",
      "Flask / Flask-SQLAlchemy",
      "MySQL",
      "MongoDB",
      "Git & GitHub",
      "Vercel / Render",
    ],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "CodeAlpha",
    role: "UI/UX Design Intern",
    period: "January 2026 · Remote",
    summary:
      "Designed mobile application UI screens and interactive prototypes in Figma, applying user flows and usability testing to refine designs iteratively.",
    achievements: [
      "Designed complete mobile UI screens and interactive Figma prototypes from user flows",
      "Ran usability testing passes to refine designs before final handoff",
      "Delivered final design assets with developer handoff documentation, reducing implementation ambiguity for engineering",
    ],
  },
  {
    company: "Altalya Solutions Pvt Ltd",
    role: "Project Trainee — Website Development",
    period: "May 16–30, 2026 · Tiruppur",
    summary:
      "Built and deployed a fully responsive corporate website using Next.js 14, Tailwind CSS, and Framer Motion, live on Vercel with an SEO-optimized, mobile-first structure.",
    achievements: [
      "Shipped a production corporate website end-to-end, from Figma to deployed Next.js build",
      "Integrated TinaCMS so non-technical teams could update content without a developer",
      "Optimized the build for SEO and mobile-first performance before launch",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  type?: "certification" | "hackathon";
};

export const certifications: Certification[] = [
  {
    title: "Noble Book of World Records — Largest Collaborative UI/UX Design Project",
    issuer: "175-designer team, ~6,300 Figma UI pages in 3 hours",
    year: "Mar 2026",
  },
  { title: "NPTEL Elite — Data Analytics with Python", issuer: "IIT Roorkee", year: "Jan–Apr 2026" },
  {
    title: "Java Full Stack Development Course",
    issuer: "Altalya Solutions Pvt Ltd, with Dept. of CSBS",
    year: "Mar 2026",
  },
  {
    title: "AI in Edge Computing & IoT — 5-Day Value Added Course",
    issuer: "KRISHTEC / Dr. NGP Institute of Technology",
    year: "Jul 2025",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Forage Job Simulation",
    year: "Jul 2026",
  },
  {
    title: "AI/ML Neural Hack",
    issuer: "FIESTAA'26, KPR Institute of Engineering & Technology",
    year: "Feb 2026",
    type: "hackathon",
  },
  {
    title: "BioAI Hack",
    issuer: "FIESTAA'26, KPR Institute of Engineering & Technology",
    year: "Feb 2026",
    type: "hackathon",
  },
  {
    title: "Paper Presentation — NEXERA'26",
    issuer: "National Level Technical Symposium, CIT",
    year: "Feb 2026",
    type: "hackathon",
  },
  {
    title: "Entrepreneurship Program",
    issuer: "App Innovation Technologies Pvt Ltd, Coimbatore",
    year: "Aug 2024",
    type: "hackathon",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science & Business Systems (CSBS)",
    institution: "Dr. N.G.P Institute of Technology, Coimbatore",
    period: "2025–2028",
    detail: "CGPA: 7.2 / 10",
  },
  {
    degree: "Diploma — Computer Science Engineering",
    institution: "Sri Ramakrishna Polytechnic College",
    period: "2022–2025",
    detail: "84.4%",
  },
];

export type DevProject = {
  slug: string;
  name: string;
  period: string;
  tagline: string;
  description: string;
  why: string;
  how: string;
  who: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Live" | "Code available";
  featured?: boolean;
};

export const devProjects: DevProject[] = [
  {
    slug: "hireflow-ats",
    name: "HireFlow — Applicant Tracking System",
    period: "2026",
    tagline: "A live, production ATS for managing job postings and candidate pipelines — built solo, end-to-end.",
    description:
      "A full-stack Applicant Tracking System where recruiters can post open roles and manage candidates through the hiring pipeline. Built entirely solo across frontend and backend, and deployed live rather than kept as a local demo.",
    why: "Most of my other projects are Figma-only or academic exercises — I wanted one real, deployed, end-to-end system that proves I can own a product from database to UI by myself.",
    how: "Built the frontend in React/Next.js, with backend services split across Node.js and Spring Boot, backed by a SQL database for job postings, candidates, and pipeline stage data. Deployed live so it's a working product, not just a repo.",
    who: "Recruiters and hiring teams who need a straightforward system to track candidates through a hiring pipeline, from application to offer.",
    stack: ["React / Next.js", "Node.js", "Spring Boot", "SQL"],
    liveUrl: "https://hireflow-ats-sigma.vercel.app/",
    status: "Live",
    featured: true,
  },
  {
    slug: "smart-tourist-safety-system",
    name: "Smart Tourist Safety System",
    period: "2025–26",
    tagline: "A tourist safety monitoring platform with a Flask + SQLAlchemy backend.",
    description:
      "A web platform for monitoring tourist safety, built with a Flask backend and SQLAlchemy data layer, deployed live on Render.",
    why: "Tourists in unfamiliar areas often lack a simple, centralized way to be tracked or flagged for safety concerns by local authorities or trip organizers.",
    how: "Built the backend in Flask with Flask-SQLAlchemy for data modeling, then deployed the full application on Render for a working live demo rather than a local-only prototype.",
    who: "Tourism boards, trip organizers, or safety monitoring teams who need a lightweight system to track tourist status in a region.",
    stack: ["Python", "Flask", "Flask-SQLAlchemy", "Render"],
    githubUrl: "https://github.com/jananijanani2611-code/miniproject",
    liveUrl: "https://miniproject-9elk.onrender.com",
    status: "Live",
  },
  {
    slug: "hostel-management-system",
    name: "Hostel Management & Monitoring System",
    period: "2024–25",
    tagline: "A full-stack room allocation and occupancy-tracking system.",
    description:
      "A role-based hostel management platform with a Spring Boot backend and a React + Bootstrap 5 frontend, handling real-time room availability through REST APIs.",
    why: "Hostel wardens and admin staff typically track room allocation manually, leading to double-booking and no real-time visibility into occupancy.",
    how: "Implemented a Spring Boot REST API backend with MySQL for persistence, role-based access control for wardens vs. students, and a React + Bootstrap 5 frontend consuming those APIs for real-time occupancy views.",
    who: "Hostel administrators who need real-time room allocation, and students who need to view their own room status.",
    stack: ["Spring Boot", "React", "MySQL", "Bootstrap 5", "REST API"],
    githubUrl: "https://github.com/jananijanani2611-code/hostel-management-system",
    status: "Code available",
  },
  {
    slug: "full-stack-development-frontend",
    name: "Full Stack Development Frontend",
    period: "2024",
    tagline: "A reusable React frontend integrated with REST APIs.",
    description:
      "A React application built around reusable components, dynamic routing, and state management, designed to stay responsive and consistent across devices.",
    why: "Practiced building a frontend that could plug into any REST API cleanly, with components structured for reuse rather than one-off pages.",
    how: "Built with React.js, implementing dynamic routing and centralized state management, with components designed to be reused across different views of the same data.",
    who: "A reference build for any product needing a REST-API-driven React frontend with cross-device responsiveness.",
    stack: ["React.js", "REST API"],
    githubUrl: "https://github.com/jananijanani2611-code/full-stack-development-frontend",
    status: "Code available",
  },
  {
    slug: "student-management-system",
    name: "Student Management System",
    period: "2024",
    tagline: "A Java + JDBC system for student registration and records.",
    description:
      "A desktop-style Java application for student registration, record management, and search, built directly on JDBC with MySQL.",
    why: "Wanted a hands-on application of core OOP principles (encapsulation, inheritance) against a real relational database rather than an in-memory exercise.",
    how: "Used Java with JDBC to connect directly to MySQL, structuring the codebase around OOP principles for registration, record management, and search functionality.",
    who: "Small institutions or coursework contexts needing straightforward student record management without a full web stack.",
    stack: ["Java", "JDBC", "MySQL"],
    githubUrl: "https://github.com/jananijanani2611-code/studentmanagement",
    status: "Code available",
  },
];

export type CaseStudySection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  duration: string;
  category: string;
  tools: string[];
  summary: string;
  cover: string;
  prototypeUrl?: string;
  color: string;
  screens: { src: string; alt: string; caption: string }[];
  hero: { headline: string; subhead: string };
  problem: CaseStudySection;
  businessGoal: CaseStudySection;
  research: CaseStudySection;
  competitorAnalysis: CaseStudySection;
  persona: { name: string; age: string; quote: string; goals: string[]; frustrations: string[] };
  empathyMap: { thinks: string[]; feels: string[]; says: string[]; does: string[] };
  painPoints: string[];
  userJourney: { stage: string; action: string; emotion: string }[];
  informationArchitecture: CaseStudySection;
  taskFlow: string[];
  wireframes: { level: "Low Fidelity" | "Mid Fidelity" | "High Fidelity"; note: string }[];
  designSystem: {
    typography: string;
    colors: string[];
    components: string[];
    grid: string;
  };
  usabilityTesting: CaseStudySection;
  iterations: string[];
  accessibility: string[];
  reflection: { learned: string[]; nextSteps: string[] };
};

export const projects: Project[] = [
  {
    slug: "jewellery-ecommerce",
    name: "Jewellery E-Commerce Website",
    role: "UI/UX Designer",
    duration: "Personal project",
    category: "Web · Ecommerce",
    tools: ["Figma", "High-Fidelity UI"],
    summary:
      "A full desktop jewellery storefront with category-first browsing, a dedicated men's collection, and a soft pink-and-gold palette suited to the brand.",
    cover: "/images/case-studies/jewellery-hero.png",
    prototypeUrl:
      "https://www.figma.com/proto/IhiQWYYsQkar4yHrrpscaY/jewellery-website?node-id=2-2&starting-point-node-id=2%3A2",
    color: "#AEACB2",
    screens: [
      {
        src: "/images/case-studies/jewellery-hero.png",
        alt: "Jewellery website hero banner with category navigation",
        caption:
          "Hero banner and top navigation. Categories (Diamond, Platinum, Rings, Earrings, Necklace Sets, Everyday Essential) are visible before any scrolling — the first thing a visitor decides is which category to enter, so it's answered immediately.",
      },
    ],
    hero: {
      headline: "Selling trust through structure, not just imagery",
      subhead:
        "A desktop-first jewellery storefront built around clear category discovery instead of a single scrolling catalog.",
    },
    problem: {
      heading: "Problem Statement",
      body: "Fine jewellery has dozens of subcategories (rings, earrings, bangles, mangalsutra, men's pieces), but many storefronts flatten everything into one generic grid. Shoppers with a specific piece in mind end up scrolling past unrelated categories to find what they want.",
    },
    businessGoal: {
      heading: "Business Goal",
      body: "Design a homepage structure that gets a shopper from landing to the right category in one glance, without sacrificing the premium, editorial feel expected of a jewellery brand.",
      bullets: [
        "Surface every major category (daily wear, rings, earrings, pendants, bracelets, bangles, necklace, mangalsutra) above the fold",
        "Give the men's collection its own clear section rather than burying it in a unisex grid",
        "Keep the visual tone premium: soft pink and gold, generous imagery, minimal chrome",
      ],
    },
    research: {
      heading: "Research",
      body: "Looked at how shoppers actually search for jewellery online: by occasion (daily wear vs. gifting) and by piece type, rarely by material alone.",
      bullets: [
        "Category-first navigation matches how people already think about jewellery shopping",
        "A visible 'For Men' section reduces the friction of men's pieces being an afterthought",
        "Large, consistent product photography reads as more premium than dense grids",
      ],
    },
    competitorAnalysis: {
      heading: "Competitor Analysis",
      body: "Reviewed how established jewellery ecommerce sites structure their homepage between hero, offers, and category navigation.",
      bullets: [
        "Most lead with a single hero banner, then split into a 'Shop by Category' grid",
        "Category grids typically use consistent square or portrait cards with a label overlay",
        "Men's collections are often a secondary link rather than a first-class section",
      ],
    },
    persona: {
      name: "A shopper browsing for a gift",
      age: "25–40",
      quote: "I know the occasion, I just need to find the right category fast.",
      goals: ["Find pieces by occasion or recipient quickly", "Trust the storefront feels premium, not generic"],
      frustrations: [
        "Long, undifferentiated scrolling grids",
        "Men's jewellery treated as an afterthought",
      ],
    },
    empathyMap: {
      thinks: ["Where do I even start looking?", "Does this brand feel premium enough to gift from?"],
      feels: ["Slightly overwhelmed by choice", "Reassured by clean, consistent presentation"],
      says: ["I'm looking for something for daily wear", "Do they have anything for him?"],
      does: ["Scans category icons before scrolling", "Compares card sizing across sections for consistency"],
    },
    painPoints: [
      "Generic grids that mix occasion, material, and gender without hierarchy",
      "Men's collection hard to find on many storefronts",
      "Inconsistent card sizing breaks visual trust",
    ],
    userJourney: [
      { stage: "Land", action: "Sees hero banner and value proposition", emotion: "Curious" },
      { stage: "Scan", action: "Scans 'Shop by Category' icons", emotion: "Oriented" },
      { stage: "Browse", action: "Taps into rings, earrings, or men's section", emotion: "Engaged" },
      { stage: "Compare", action: "Compares consistent product cards within category", emotion: "Confident" },
    ],
    informationArchitecture: {
      heading: "Information Architecture",
      body: "Structured the homepage as: hero banner → offer strip → 'Shop by Category' grid (Daily Wear, Rings, Earrings, Pendants, Bracelets, Bangles, Necklace, Mangalsutra) → dedicated 'For Men' grid (Couple Rings, Bracelets, Chains, Rings) → footer.",
    },
    taskFlow: [
      "Land on homepage → see hero and offer banner",
      "Scan category grid → tap a category (e.g. Rings)",
      "Browse consistent product cards within that category",
      "Add to cart or continue browsing related categories",
    ],
    wireframes: [
      { level: "Low Fidelity", note: "Grayscale frame testing hero + category grid hierarchy" },
      { level: "Mid Fidelity", note: "Structured grid with placeholder imagery to test card consistency" },
      { level: "High Fidelity", note: "Final soft pink-and-gold visual design with real product photography" },
    ],
    designSystem: {
      typography: "Clean serif-adjacent headline pairing with a simple sans body face",
      colors: ["#AEACB2", "#000000", "#FFC0CB", "#8FE3F7"],
      components: ["Category card", "Product card", "Offer banner", "Footer nav"],
      grid: "Desktop-first, 4-column category grid, consistent card aspect ratio",
    },
    usabilityTesting: {
      heading: "Usability Testing",
      body: "Walked through the prototype with peers to confirm the category grid was scannable and the men's section was easy to locate.",
      bullets: [
        "Category icons were recognized without needing labels reread twice",
        "The 'For Men' section was found on first scroll without additional navigation",
      ],
    },
    iterations: [
      "Adjusted card sizing so every category tile shared the same visual weight",
      "Moved the men's collection into its own labeled section instead of mixing it into the general grid",
    ],
    accessibility: [
      "Sufficient contrast maintained against the soft pink palette",
      "Category labels always paired with icons, never icon-only",
    ],
    reflection: {
      learned: [
        "Category-first structure builds trust faster than a single long scroll",
        "Giving a secondary audience (men's shoppers) its own section signals the brand actually considered them",
      ],
      nextSteps: ["Add a product detail page with certification and sizing guidance", "Design a wishlist and cart flow"],
    },
  },
  {
    slug: "online-learning-platform",
    name: "Online Learning Platform",
    role: "UI/UX Designer",
    duration: "Personal project",
    category: "Mobile App",
    tools: ["Figma", "High-Fidelity UI"],
    summary:
      "A 5-screen mobile learning app flow — splash, login, home, course details, and profile — built around fast course scanning and clear visual hierarchy.",
    cover: "/images/case-studies/learning-splash.png",
    prototypeUrl:
      "https://www.figma.com/proto/GGcorkfNaLJijzUJs5HeJq/online-platform?node-id=3-47&starting-point-node-id=3%3A47",
    color: "#111111",
    screens: [
      {
        src: "/images/case-studies/learning-splash.png",
        alt: "Online Learning App splash screen with illustration",
        caption:
          "Splash screen. First-time users see the app name and 'Learn Anytime, Anywhere' promise before anything else — it sets expectation before login is even shown, so nobody wonders what the app is for.",
      },
    ],
    hero: {
      headline: "Five screens, one clear path from open to enrolled",
      subhead:
        "A mobile learning app designed so a new learner can go from splash screen to a chosen course without friction.",
    },
    problem: {
      heading: "Problem Statement",
      body: "Course-listing apps often present too many categories at once, making it hard for a learner to quickly scan and pick a course that matches their level and interest.",
    },
    businessGoal: {
      heading: "Business Goal",
      body: "Design a complete first-time-user flow — splash to login to enrollment — that feels fast and low-friction across every screen.",
      bullets: [
        "Get a new user from splash screen to browsing courses in as few taps as possible",
        "Make course cards scannable by level and duration at a glance",
        "Keep the profile screen simple: enrolled courses, settings, logout",
      ],
    },
    research: {
      heading: "Research",
      body: "Looked at what learners scan for first when picking a course: title, duration, and difficulty level, in that order.",
      bullets: [
        "Course cards need level and duration visible without opening the course",
        "A search bar on the home screen is expected, not optional",
        "Profile screens work best when kept to essentials: enrolled count, settings, logout",
      ],
    },
    competitorAnalysis: {
      heading: "Competitor Analysis",
      body: "Reviewed common ed-tech app structures for how they handle the splash-to-home transition and course card density.",
      bullets: [
        "Most apps use an illustrated splash screen with a single clear CTA",
        "Course cards typically show a thumbnail, title, and one or two metadata tags",
      ],
    },
    persona: {
      name: "A self-paced learner",
      age: "18–26",
      quote: "I want to see what's inside a course before I commit any real time to it.",
      goals: ["Quickly compare courses by level and duration", "Track what they've already started"],
      frustrations: ["Dense course lists with no visible difficulty or duration", "Cluttered profile screens"],
    },
    empathyMap: {
      thinks: ["Is this course beginner-friendly?", "How long will this actually take me?"],
      feels: ["Motivated when the path forward is clear"],
      says: ["Show me the basics first"],
      does: ["Scans thumbnails and titles before reading descriptions", "Checks duration before enrolling"],
    },
    painPoints: [
      "Course metadata (level, duration) often hidden until the detail screen",
      "Login screens with too many fields slow down first-time use",
      "Profile screens overloaded with settings not relevant to a new learner",
    ],
    userJourney: [
      { stage: "Splash", action: "Sees app name and value proposition", emotion: "Curious" },
      { stage: "Login", action: "Enters email and password", emotion: "Neutral" },
      { stage: "Home", action: "Scans course list by title and thumbnail", emotion: "Engaged" },
      { stage: "Course details", action: "Reviews duration, level, and instructor", emotion: "Confident to enroll" },
    ],
    informationArchitecture: {
      heading: "Information Architecture",
      body: "Structured as: Splash → Login → Home (search + course list) → Course Details (thumbnail, description, duration, level, instructor, Start Learning CTA) → Profile (enrolled courses, settings, logout).",
    },
    taskFlow: [
      "Open app → splash screen with app identity",
      "Log in with email and password",
      "Search or scan home course list",
      "Open a course → review details → tap Start Learning",
    ],
    wireframes: [
      { level: "Low Fidelity", note: "Grayscale layout of all 5 screens to validate flow order" },
      { level: "Mid Fidelity", note: "Structured course cards with placeholder thumbnails" },
      { level: "High Fidelity", note: "Final visual design with real course thumbnails and blue brand palette" },
    ],
    designSystem: {
      typography: "Bold sans headlines for course titles, regular weight for metadata",
      colors: ["#111111", "#FAFAFA", "#4C6FFF", "#6B7280"],
      components: ["Course card", "Search bar", "Course detail header", "Profile row item"],
      grid: "Mobile single-column, 8px spacing scale",
    },
    usabilityTesting: {
      heading: "Usability Testing",
      body: "Walked peers through the prototype from splash to enrollment to confirm the flow felt fast and course cards were scannable.",
      bullets: [
        "Course level and duration were noticed on the card without opening course details",
        "Login-to-home transition felt immediate with no confusing intermediate states",
      ],
    },
    iterations: [
      "Added duration tags directly to course cards after initial feedback that they were missing",
      "Simplified profile screen to enrolled count, settings, and logout only",
    ],
    accessibility: [
      "Form fields on login carry visible labels, not placeholder-only text",
      "Course card tap targets sized for comfortable thumb reach",
    ],
    reflection: {
      learned: [
        "Metadata visible at the card level saves a full screen of back-and-forth for the learner",
        "A simple 5-screen flow can still feel complete if each screen has one clear job",
      ],
      nextSteps: ["Add a progress-tracking home state for returning learners", "Design a course video player screen"],
    },
  },
  {
    slug: "foodie-food-delivery-app",
    name: "Foodie — Food Delivery App",
    role: "UI/UX Designer",
    duration: "Personal project",
    category: "Mobile App",
    tools: ["Figma", "Low-Fi to High-Fi"],
    summary:
      "A food delivery app taken through a full low-fidelity to high-fidelity progression, with a consistent orange accent system across login, home, and restaurant screens.",
    cover: "/images/case-studies/foodie-login.png",
    prototypeUrl: "https://www.figma.com/proto/PbW8xMzO4PKP8Bp8iaRYoX/Food-Delivery-App?node-id=16-42",
    color: "#F97316",
    screens: [
      {
        src: "/images/case-studies/foodie-login.png",
        alt: "Foodie app login screen with phone number and password fields",
        caption:
          "Login screen. Just two fields and a single orange CTA — for a habitual, hunger-driven app, every extra field on this screen is a user who closes the app and orders elsewhere instead.",
      },
    ],
    hero: {
      headline: "From grayscale wireframe to a ready-to-order screen",
      subhead:
        "Foodie's ordering flow, designed low-fidelity first to lock the structure before any visual polish.",
    },
    problem: {
      heading: "Problem Statement",
      body: "Ordering flows can get visually noisy fast once real food photography, pricing, and add-to-cart actions all compete on one screen. The structure needed to be right before the visuals were added.",
    },
    businessGoal: {
      heading: "Business Goal",
      body: "Design a login-to-checkout flow where the core actions — search, browse, add to cart — stay clear even as visual detail increases from low to high fidelity.",
      bullets: [
        "Keep primary actions (Login, Add, View Cart) visually dominant at every fidelity stage",
        "Maintain a single accent color system throughout so the ordering flow feels cohesive",
        "Reduce visual noise on the restaurant screen where photography and pricing compete for attention",
      ],
    },
    research: {
      heading: "Research",
      body: "Studied how delivery apps balance food photography against transactional UI (price, rating, add-to-cart) without either one overwhelming the other.",
      bullets: [
        "Bottom navigation with 4 core destinations (Home, Search, Cart, Profile) is the expected pattern",
        "A single accent color for CTAs (orange, in this case) helps actions stand out against photography",
        "Offers/discounts banners work best as one clear block, not multiple competing promos",
      ],
    },
    competitorAnalysis: {
      heading: "Competitor Analysis",
      body: "Compared how leading delivery apps structure the home and restaurant screens between promotional content and functional ordering content.",
      bullets: [
        "Most apps lead with one offers banner, then a scrollable restaurant list",
        "Restaurant/menu screens typically pair a food image with name, rating, and an inline add button",
      ],
    },
    persona: {
      name: "A hungry commuter",
      age: "20–35",
      quote: "I want to see the food, the price, and add it to cart without extra taps.",
      goals: ["Order quickly during a short break", "Trust the rating before choosing a restaurant"],
      frustrations: ["Cluttered menu screens with too much competing content", "Hidden or hard-to-find add-to-cart"],
    },
    empathyMap: {
      thinks: ["Is this restaurant good?", "Where's the add button?"],
      feels: ["Impatient if the flow has too many screens"],
      says: ["Just let me add this and check out"],
      does: ["Scans star ratings before item names", "Taps directly on the ADD button"],
    },
    painPoints: [
      "Early low-fidelity version had unclear visual priority between rating and price",
      "Restaurant image needed to not compete with the add-to-cart action below it",
      "Bottom navigation needed to stay consistent across every screen",
    ],
    userJourney: [
      { stage: "Login", action: "Enters phone number and password", emotion: "Neutral" },
      { stage: "Home", action: "Sees offers banner and restaurant list", emotion: "Curious" },
      { stage: "Restaurant", action: "Reviews food image, price, and rating", emotion: "Deciding" },
      { stage: "Cart", action: "Adds items and views cart", emotion: "Satisfied" },
    ],
    informationArchitecture: {
      heading: "Information Architecture",
      body: "Structured as: Login → Home (search, offers banner, restaurant list, bottom nav) → Restaurant (image, item cards with price/rating/add, View Cart CTA), with bottom navigation persistent across Home, Search, Cart, and Profile.",
    },
    taskFlow: [
      "Log in with phone number and password",
      "Browse offers and restaurant list on home",
      "Open a restaurant → review items with price and rating",
      "Tap ADD on desired items → tap View Cart",
    ],
    wireframes: [
      { level: "Low Fidelity", note: "Grayscale frames for login, home, and restaurant screens to lock structure" },
      { level: "Mid Fidelity", note: "Grayscale item cards with placeholder pricing and ratings" },
      { level: "High Fidelity", note: "Final orange-accent visual design with real food photography" },
    ],
    designSystem: {
      typography: "Bold sans headline ('Foodie') paired with clean body text for item names and pricing",
      colors: ["#F97316", "#FFFFFF", "#F5F5F5", "#111111"],
      components: ["Item card", "Offers banner", "Bottom navigation", "Add button", "View Cart bar"],
      grid: "Mobile single-column, consistent card padding across fidelity stages",
    },
    usabilityTesting: {
      heading: "Usability Testing",
      body: "Compared the low-fidelity and high-fidelity versions with peers to confirm the visual upgrade didn't change how quickly people found the add-to-cart action.",
      bullets: [
        "Add-to-cart action was found equally fast at both low and high fidelity",
        "Orange accent color was consistently identified as the 'action' color across screens",
      ],
    },
    iterations: [
      "Increased contrast between item price and the ADD button after low-fidelity review",
      "Made the View Cart bar persistent and full-width for higher visibility",
    ],
    accessibility: [
      "ADD buttons sized for reliable thumb tapping",
      "Rating and price never conveyed by color alone, always paired with text",
    ],
    reflection: {
      learned: [
        "Locking structure at low fidelity made the high-fidelity pass much faster and more consistent",
        "A single accent color used only for actions keeps a photography-heavy screen from feeling busy",
      ],
      nextSteps: ["Design the checkout and order-tracking screens", "Add a saved/favorite restaurants state"],
    },
  },
  {
    slug: "coffee-shop-website",
    name: "Coffee Shop Website",
    role: "UI/UX Designer",
    duration: "Personal project",
    category: "Web · Single Page",
    tools: ["Figma", "High-Fidelity UI"],
    summary:
      "A single-page coffee shop site with a hero section, coffee and dessert carousels, pricing, and a newsletter signup, in a warm brown-and-cream palette.",
    cover: "/images/case-studies/coffee-hero.png",
    prototypeUrl:
      "https://www.figma.com/proto/wZ5tWUj4FCUk4N2RlQdefq/coffee-shop?node-id=1-2&p=f&t=hNja9BAvwPekwhwY-0&scaling=minzoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    color: "#8E8888",
    screens: [
      {
        src: "/images/case-studies/coffee-hero.png",
        alt: "Coffee shop website hero section with latte art photography and Order Now button",
        caption:
          "Hero section. Warm, high-contrast photography and a single 'Order Now' action — the shop's whole personality (rich, cozy, quality-first) has to land in the first three seconds of this scroll, before any menu content.",
      },
    ],
    hero: {
      headline: "A single page that does the job of a whole site",
      subhead:
        "One scroll from hero to newsletter signup, built for a coffee shop that doesn't need more than that.",
    },
    problem: {
      heading: "Problem Statement",
      body: "A local coffee shop needs a website that communicates menu, pricing, and atmosphere without requiring visitors to navigate multiple pages for simple information.",
    },
    businessGoal: {
      heading: "Business Goal",
      body: "Design a single-page site that lets a visitor see the menu, understand pricing, and sign up for offers in one continuous scroll.",
      bullets: [
        "Lead with a strong hero that sets the shop's warm, premium tone immediately",
        "Present coffee and dessert menus with consistent card pricing",
        "Close with a low-friction newsletter signup offering a discount incentive",
      ],
    },
    research: {
      heading: "Research",
      body: "Looked at what visitors to small food and beverage sites actually look for first: what's on the menu and what it costs.",
      bullets: [
        "Visitors scan menu sections before reading brand copy",
        "Clear per-item pricing next to an 'Order Now' action reduces hesitation",
        "A discount-incentivized newsletter signup performs better than a plain signup form",
      ],
    },
    competitorAnalysis: {
      heading: "Competitor Analysis",
      body: "Reviewed small hospitality websites for how they balanced brand storytelling against straightforward menu and pricing information.",
      bullets: [
        "Most single-page food sites follow hero → menu → offer → footer",
        "Menu items are consistently presented as image, name, description, price, and a CTA",
      ],
    },
    persona: {
      name: "A nearby coffee drinker deciding where to go",
      age: "22–45",
      quote: "Show me the menu and the price, I'll decide in ten seconds.",
      goals: ["Quickly see what's on the menu and what it costs", "Feel like the shop has character, not just coffee"],
      frustrations: ["Sites that hide pricing", "Generic template feel with no sense of place"],
    },
    empathyMap: {
      thinks: ["What's actually on the menu?", "Is this worth the trip?"],
      feels: ["Reassured by warm, consistent visual tone"],
      says: ["I want a cappuccino, what's the price?"],
      does: ["Scrolls straight to the menu section", "Checks the newsletter offer before leaving"],
    },
    painPoints: [
      "Pricing sometimes buried below decorative content",
      "Coffee and dessert menus need equal visual treatment without one overwhelming the other",
      "Newsletter signup needs to feel like a natural next step, not an interruption",
    ],
    userJourney: [
      { stage: "Hero", action: "Reads the welcome message and value proposition", emotion: "Warm, curious" },
      { stage: "Menu", action: "Scrolls through coffee and dessert cards", emotion: "Engaged, deciding" },
      { stage: "Offer", action: "Sees the newsletter discount incentive", emotion: "Tempted" },
      { stage: "Footer", action: "Finds location, hours, and social links", emotion: "Informed" },
    ],
    informationArchitecture: {
      heading: "Information Architecture",
      body: "Structured as a single scroll: Hero (welcome + CTA) → Our Special Coffee (cards) → Our Special Dessert (cards) → Newsletter offer block → Footer (links, hours, social).",
    },
    taskFlow: [
      "Land on hero → read welcome message",
      "Scroll to coffee menu → compare items and pricing",
      "Scroll to dessert menu → compare items and pricing",
      "Reach newsletter block → sign up for 15% off",
    ],
    wireframes: [
      { level: "Low Fidelity", note: "Grayscale scroll structure testing hero-to-footer order" },
      { level: "Mid Fidelity", note: "Menu card layout validated with placeholder content" },
      { level: "High Fidelity", note: "Final warm brown-and-cream visual design with real menu photography" },
    ],
    designSystem: {
      typography: "Bold serif-leaning headline for warmth, clean sans for menu descriptions and pricing",
      colors: ["#8E8888", "#1A1A1A", "#F5E9DD", "#FFFFFF"],
      components: ["Menu card", "Hero banner", "Newsletter block", "Footer link grid"],
      grid: "Single-column responsive scroll, consistent 3-across menu card grid on desktop",
    },
    usabilityTesting: {
      heading: "Usability Testing",
      body: "Walked through the single-page scroll with peers to check pricing was easy to find and the newsletter offer didn't feel like an interruption.",
      bullets: [
        "Pricing was located immediately within each menu card without needing to hunt",
        "Newsletter block was read as a natural closing step, not a pop-up-style interruption",
      ],
    },
    iterations: [
      "Increased price contrast against the card background after initial review",
      "Added an 'Order Now' action directly on each menu card instead of only at the page bottom",
    ],
    accessibility: [
      "Warm palette contrast-checked against WCAG AA for text legibility",
      "Newsletter form fully operable via keyboard with visible focus state",
    ],
    reflection: {
      learned: [
        "A single well-structured page can outperform a multi-page site for a small, focused business",
        "Pricing visibility is a trust signal, not just a transactional detail",
      ],
      nextSteps: ["Add an online ordering flow", "Design a seasonal menu variant"],
    },
  },
  {
    slug: "drink-product-landing-pages",
    name: "Drink / Smoothie Product Pages",
    role: "UI/UX Designer",
    duration: "Personal project",
    category: "Web · Landing Pages",
    tools: ["Figma", "Product Landing Pages"],
    summary:
      "Four individual product landing pages — Green Smoothie, Berry Smoothie, Coffee Milk, Strawberry — sharing one component system with color-coded categories.",
    cover: "/images/case-studies/drink-list.png",
    prototypeUrl: "https://www.figma.com/proto/Ya9YjvVE60ZFq3Dh0Vanfb/drink?node-id=2-66&starting-point-node-id=2%3A66",
    color: "#D6336C",
    screens: [
      {
        src: "/images/case-studies/drink-list.png",
        alt: "Four smoothie product variants listed with color-coded category numbers",
        caption:
          "The shared template's variant list — Green Smoothie, Berry Smoothie, Coffee Milk, and Strawberry each get a numbered entry and color accent, so switching between flavors feels like flipping through one cohesive set rather than four unrelated pages.",
      },
    ],
    hero: {
      headline: "One layout, four flavors, zero inconsistency",
      subhead:
        "A shared component system applied across four product variants, each with its own full-bleed color identity.",
    },
    problem: {
      heading: "Problem Statement",
      body: "A four-product beverage line needed individual landing pages that felt distinct per flavor, without designing four unrelated layouts from scratch.",
    },
    businessGoal: {
      heading: "Business Goal",
      body: "Build one reusable landing page template that adapts cleanly across four product variants using color as the primary differentiator.",
      bullets: [
        "Keep layout, typography, and component structure identical across all four pages",
        "Use full-bleed product photography against a solid brand color to distinguish each variant",
        "Make it trivial to add a fifth product later without redesigning anything",
      ],
    },
    research: {
      heading: "Research",
      body: "Looked at how beverage brands handle multi-flavor product lines online, where consistency across variants builds brand recognition faster than novelty per page.",
      bullets: [
        "Color-coded variants let customers recognize a flavor instantly without reading the label",
        "Full-bleed product photography reads as more premium than boxed product shots",
      ],
    },
    competitorAnalysis: {
      heading: "Competitor Analysis",
      body: "Reviewed how beverage brands present multi-SKU product lines, comparing shared-template approaches against fully custom per-product pages.",
      bullets: [
        "Shared-template approaches were far more common and scaled better across large product lines",
        "Color remained the primary differentiator even when layouts were identical",
      ],
    },
    persona: {
      name: "A shopper browsing a drinks lineup",
      age: "18–35",
      quote: "I can tell which flavor this is before I even read the name.",
      goals: ["Quickly identify a flavor by color and photography", "Compare products without relearning a new layout each time"],
      frustrations: ["Inconsistent layouts across a single product line", "Product photography that doesn't stand out against its background"],
    },
    empathyMap: {
      thinks: ["This all feels like one cohesive brand"],
      feels: ["Confident switching between product pages"],
      says: ["I want to see the other flavors too"],
      does: ["Uses the numbered variant list to jump between products"],
    },
    painPoints: [
      "Risk of each product page drifting visually without a shared system",
      "Product photography needed to pop against four different brand colors",
    ],
    userJourney: [
      { stage: "Land", action: "Sees one product's full-bleed color and photography", emotion: "Impressed" },
      { stage: "Compare", action: "Uses the variant list to jump to another flavor", emotion: "Curious" },
      { stage: "Decide", action: "Recognizes the flavor by color before reading text", emotion: "Confident" },
    ],
    informationArchitecture: {
      heading: "Information Architecture",
      body: "Each page shares an identical structure: numbered variant list (01–04) → full-bleed product photography on brand color → product name and short description → Next action.",
    },
    taskFlow: [
      "Land on a product page → see full-bleed photography and product name",
      "Reference the numbered variant list to jump between flavors",
      "Tap 'Next' or a variant number to move to another product page",
    ],
    wireframes: [
      { level: "Low Fidelity", note: "Grayscale layout of the shared template before color was applied" },
      { level: "Mid Fidelity", note: "Template validated with one variant's real photography" },
      { level: "High Fidelity", note: "All four variants finalized with full-bleed color and photography" },
    ],
    designSystem: {
      typography: "Bold condensed headline for product names, minimal supporting body text",
      colors: ["#5C8A00", "#D6336C", "#B08D57", "#FFFFFF"],
      components: ["Variant list item", "Full-bleed product frame", "Next action button"],
      grid: "Single shared template, full-bleed imagery, consistent margin across all 4 pages",
    },
    usabilityTesting: {
      heading: "Usability Testing",
      body: "Reviewed all four pages side by side with peers to confirm the shared template read as one cohesive product line rather than four disconnected pages.",
      bullets: [
        "All reviewers correctly identified the pages as one product line without being told",
        "Color was consistently used to recall which flavor was which after a first pass",
      ],
    },
    iterations: [
      "Standardized the numbered variant list position across all four pages after inconsistency in early drafts",
      "Increased product photography size relative to the background color block for more visual impact",
    ],
    accessibility: [
      "Product name text contrast checked against each of the four background colors individually",
      "Variant list fully navigable by keyboard",
    ],
    reflection: {
      learned: [
        "A strong shared template scales a product line faster than bespoke pages per SKU",
        "Color can carry brand recognition as effectively as typography when used consistently",
      ],
      nextSteps: ["Add a fifth variant to stress-test the template's flexibility", "Design a combined product line overview page"],
    },
  },
];
