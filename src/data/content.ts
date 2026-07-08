export const profile = {
  name: "Rushikesh Sobale",
  handle: "R. SOBALE",
  location: "Mumbai, IN",
  email: "rushikeshsobale@gmail.com",
  phone: "+91 91523 27223",
  githubUrl: "https://github.com/rushikeshsobale",
  githubHandle: "github.com/rushikeshsobale",
  linkedinUrl: "https://linkedin.com/in/rushikesh-sobale",
  linkedinHandle: "linkedin.com/in/rushikesh-sobale",
};

export const roleLine = [
  "React.js",
  "Next.js",
  "Node.js / NestJS",
  "MongoDB / MySQL",
  "AWS",
];

export const hero = {
  heading: "Full stack developer who ships real-time, production-ready software.",
  accentWord: "production-ready",
  lede:
    "I build secure, scalable web applications — from encrypted messaging platforms to IoT control dashboards — and deploy them to production on AWS. Open to full-time engineering roles, and available for freelance/contract builds.",
};

export const about = {
  paragraphs: [
    "I'm Rushikesh, a full stack developer based in Mumbai with hands-on experience building production web applications across the entire stack — from responsive React interfaces down to the AWS infrastructure that serves them.",
    "My internship and personal projects share a common thread: real-time systems. Whether it's tracking message delivery status in a chat app over Socket.IO, or streaming live sensor data from an irrigation controller to a web dashboard and a mobile app, I like building things that respond the instant something changes.",
    "I care about writing code that's secure by default — JWT and OAuth authentication, encrypted data flows — and about shipping things that actually run in production, not just in a local dev environment.",
  ],
  facts: [
    { num: "8 mo", label: "internship experience" },
    { num: "4", label: "shipped projects — web, mobile & IoT" },
    { num: "B.Sc.", label: "2025 grad · CGPA 7.8" },
  ],
};

export const stackGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native (Expo)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "JWT Auth",
      "Google OAuth",
    ],
  },
  {
    title: "Data & Real-Time",
    items: ["MongoDB", "MySQL", "Supabase", "Socket.IO", "WebSockets"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "IAM", "PM2", "Linux (Ubuntu)", "Vercel"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const services = [
  {
    title: "Web Applications",
    description:
      "End-to-end web apps with React/Next.js frontends and Node.js backends — dashboards, internal tools, MVPs.",
  },
  {
    title: "Real-Time Features",
    description:
      "Live chat, notifications, status tracking, or live dashboards using Socket.IO and WebSockets.",
  },
  {
    title: "Custom UI Builds",
    description:
      "Pixel-accurate interface simulations and interactive demos — built and delivered for real campaigns and clients.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Getting your app live and stable on AWS (EC2, S3) with proper auth, storage, and uptime in mind.",
  },
];

export const experience = [
  {
    period: "2024",
    duration: "8 months",
    badge: "Internship",
    role: "Frontend Development Intern",
    company: "Interactive Icespice",
    points: [
      "Developed and maintained responsive React.js user interfaces for production use.",
      "Collaborated closely with developers and designers to scope and implement new features.",
      "Optimized frontend performance and usability across key user flows.",
      "Managed source code and collaborative workflows using Git and GitHub.",
      "Participated in bug fixing, QA, and deployment activities.",
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "live";
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  status: string;
  features: string[];
  tags: string[];
  links: ProjectLink[];
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "HiBuddy",
    tagline: "Social networking & real-time encrypted chat platform",
    status: "deployed",
    description:
      "A full-stack social networking and messaging platform with secure login and true real-time delivery, built to feel instant the way modern chat apps do.",
    features: [
      "JWT authentication and Google OAuth login",
      "Real-time 1:1 messaging via Socket.IO",
      "Message delivery and read-status tracking",
      "End-to-end encrypted messaging architecture",
      "Backend deployed on AWS EC2",
      "AWS S3 integration for media storage",
    ],
    tags: ["React.js", "Node.js", "Socket.IO", "MongoDB", "AWS EC2", "AWS S3", "JWT"],
    links: [
      { label: "Source", href: "https://github.com/rushikeshsobale/chatApp-new", type: "github" },
      { label: "Live", href: "https://hibuddy-opal.vercel.app", type: "live" },
    ],
    images: [
      "/projects/hibuddy-login.png",
      "/projects/hibuddy-profile.png",
      "/projects/hibuddy-feed.png",
    ],
  },
  {
    title: "FarmersBay",
    tagline: "Marketplace platform connecting farmers directly with buyers",
    status: "in development",
    description:
      "A Next.js web platform giving farmers a direct digital storefront — profile pages and produce listings — backed by Supabase for auth and data, so farmers can reach buyers without a middleman.",
    features: [
      "Farmer profile & storefront pages",
      "Supabase-backed auth and data layer",
      "Server-rendered Next.js App Router pages",
      "Tailwind CSS v4 responsive UI",
    ],
    tags: ["Next.js", "React 19", "Supabase", "Tailwind CSS", "TypeScript"],
    links: [],
  },
  {
    title: "Smart Irrigation Controller",
    tagline: "IoT automation system for remote pump monitoring & control — web dashboard + mobile app",
    status: "deployed",
    description:
      "An IoT-based irrigation automation solution that bridges hardware sensors with a live web dashboard and a companion mobile app, letting a pump be scheduled, monitored, and stopped remotely from either.",
    features: [
      "Responsive web dashboard (React + Vite) for remote pump monitoring",
      "Companion mobile app (Expo / React Native) with matching controls",
      "Scheduling, loop cycles, and emergency-stop functionality",
      "Voltage monitoring via ZMPT101B sensors",
      "Real-time hardware-to-frontend communication",
    ],
    tags: ["React.js", "TypeScript", "Vite", "Expo / React Native", "WebSockets", "IoT / ZMPT101B"],
    links: [],
  },
  {
    title: "EVM UI Simulator",
    tagline: "Electronic Voting Machine interface simulation, built for an MLA election campaign",
    status: "client project",
    description:
      "Commissioned by an MLA's election campaign as a visual aid for voter outreach and advertising. Recreates the look and interaction of a real Electronic Voting Machine so voters could see and try a faithful on-screen replica before election day.",
    features: [
      "Pixel-accurate recreation of EVM panel design",
      "Interactive candidate selection & button-press feedback",
      "Built solo as a paid freelance commission",
      "Used directly in campaign advertising materials",
    ],
    tags: ["React.js", "UI Simulation", "Freelance"],
    links: [],
  },
];
