// All resume content — edit this file to update name, education, experience, projects, skills.

export const PROFILE = {
  name: "Pinmanat Nankat",
  role: "Full Stack Developer",
  age: 29,
  location: "Bangkok, Thailand",
  phone: "065-445-6566",
  email: "pinmanat.nan@gmail.com",
  lineId: "nippc",
  github: "https://github.com/Pinmanatn",
  intro:
    "Full Stack Developer with experience developing and maintaining production web applications and business systems. Skilled in front-end development, RESTful API integration, backend development using Go, troubleshooting, and collaborative software development. Strong problem-solving mindset with a proactive approach to continuous learning and professional growth.",
};

export const EDUCATION = [
  {
    school: "King Mongkut's University of Technology North Bangkok",
    short: "KMUTNB",
    period: "2017 – 2020",
    degree: "Bachelor's Degree",
    major: "Electrical Engineering",
    faculty: "Faculty of Industrial Education",
    gpa: "3.48",
    honor: "Second Class Honors",
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "TIGONSOFT CO., LTD",
    period: "Sep 2023 — Present",
    current: true,
    bullets: [
      "Developed and maintained production web applications including back-office systems and landing pages.",
      "Designed and developed reusable UI components to support scalable and maintainable front-end architecture.",
      "Designed and integrated RESTful APIs and data handling workflows using Go.",
      "Supported PostgreSQL database design and data management for web application workflows.",
      "Managed authentication and authorization including token handling and role-based access control.",
      "Improved user experience through asynchronous API communication and centralized error handling.",
      "Refactored and enhanced codebases to improve maintainability and code quality.",
      "Supported Docker and deployment workflows while continuously expanding knowledge in CI/CD.",
    ],
    stack: ["Go", "Nuxt.js", "Vue", "PostgreSQL", "Docker", "Tailwind"],
  },
  {
    role: "Test Engineer",
    company: "MICROCHIP TECHNOLOGY COMPANY",
    period: "Feb 2021 — Sep 2023",
    current: false,
    bullets: [
      "Maintained, controlled and implemented electronics test systems (testers, fixtures, test software) according to given requirements.",
      "Software debug and development for tester systems to support production lines at optimum condition.",
      "Provided technical expertise upon request by manufacturing.",
    ],
    stack: ["C/C++", "Test Automation", "Hardware Debug"],
  },
];

export const PROJECTS = [
  { title: "Volt Garage EV", img: "/volt-garage.jpg", desc: "A web application for EV repair shops to manage repair workflows and allow customers to track repair status. Built with Next.js and Tailwind CSS. Currently in development.", tag: "In Progress" },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: [
      { name: "Nuxt.js (v2, v3)", level: 90 },
      { name: "Vue.js (v2, v3)",  level: 90 },
      { name: "React.js",          level: 80 },
      { name: "Next.js",           level: 75 },
      { name: "Tailwind CSS",      level: 92 },
      { name: "Vuetify 2 / 3",     level: 82 },
    ],
  },
  {
    group: "Backend",
    items: [{ name: "Go (Golang)", level: 78 }],
  },
  {
    group: "Database",
    items: [{ name: "PostgreSQL", level: 80 }],
  },
  {
    group: "Tools",
    items: [
      { name: "Docker",            level: 40 },
      { name: "Git",               level: 40 },
      { name: "CI/CD workflows",   level: 40 },
    ],
  },
];

export const VIBES = {
  nebula: { label: "Nebula", bg: "#02010a", blobs: ["#a855f7", "#ec4899", "#3b82f6"] as [string, string, string] },
};
