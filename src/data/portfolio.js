export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
];

export const ROLES = [
  'Junior Software Engineer',
  'Full-Stack Developer',
  'Flutter Developer',
  'Freelancer',
];

export const STATS = [
  { num: 8, suffix: '+', label: 'Months Coding' },
  { num: 4, suffix: '+', label: 'Projects Shipped' },
  { num: 11, suffix: '+', label: 'Technologies' },
];

export const EXPERIENCES = [
  {
    index: '01',
    company: 'JBBSoftech Private Limited',
    badge: 'Jun 2025 – Aug 2025',
    role: 'Software Engineer Intern',
    points: [
      'Worked on a visual walk-in project during a 2-month internship, creating a 360° tour experience for college use.',
      'Supported the team in adding a chatbot that guides users on how to build their own tour without any coding.',
    ],
    stack: ['React.js', 'Node.js', 'Firebase', 'AWS'],
    url: 'https://visualwalkin.com',
    urlLabel: 'visualwalkin.com →',
  },
  {
    index: '02',
    company: 'JBBSoftech Private Limited',
    badge: 'Oct 2025 – Present',
    role: 'Junior Software Engineer',
    points: [
      'Contributing to Appifyours — a platform that lets users create apps without coding by filling a form, picking colors, and publishing.',
      'Built a simple flow leading to an auto-generated app file shared with customers, including support for store upload.',
    ],
    stack: ['Flutter', 'Node.js', 'MongoDB', 'AWS'],
    url: 'https://appifyours.com',
    urlLabel: 'appifyours.com →',
  },
];

export const PROJECTS = [
  {
    emoji: '🏫',
    title: 'Visual Walk-In — 360° Tour',
    desc: 'A 360° virtual tour platform for college campuses with a no-code chatbot guide to help institutions build their own tours effortlessly.',
    tags: ['React.js', 'Node.js', 'Firebase', 'AWS'],
    url: 'https://visualwalkin.com',
    urlLabel: 'Visit Site ↗',
  },
  {
    emoji: '📱',
    title: 'Appifyours — No-Code App Builder',
    desc: 'A no-code platform where users fill a form, pick colors, and publish — resulting in an auto-generated mobile app ready for store upload on iOS & Android.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'AWS'],
    url: 'https://appifyours.com',
    urlLabel: 'Visit Site ↗',
  },
  {
    emoji: '🧵',
    title: 'Tailor Billing Web App',
    desc: 'A web app for tailoring shops to create and manage customer bills digitally. Integrated WhatsApp to send bills instantly, with Firebase for hosting.',
    tags: ['React.js', 'Firebase', 'WhatsApp API'],
    url: 'https://cascadeprojects-a08fa.web.app',
    urlLabel: 'Live Demo ↗',
  },
  {
    emoji: '📚',
    title: 'CodeLearn Platform',
    desc: 'Upcoming student learning & testing platform — a full-featured LMS where students can take courses, attempt quizzes, and track their progress in real time.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    url: null,
    urlLabel: 'Coming Soon 🚀',
    upcoming: true,
  },
];

export const SKILLS = [
  {
    icon: '💻',
    name: 'Languages',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    icon: '⚡',
    name: 'Frameworks',
    tags: ['React.js', 'Next.js', 'Node.js', 'Flutter', 'Bootstrap'],
  },
  {
    icon: '🗄️',
    name: 'Databases',
    tags: ['MongoDB', 'Firebase', 'Supabase', 'PostgreSQL', 'SQL'],
  },
  {
    icon: '🛠️',
    name: 'Tools',
    tags: ['Git', 'VS Code', 'Android Studio', 'AWS'],
  },
];

export const FREELANCE_SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Modern, responsive websites and web apps built with React, Next.js, and Node.js. Fast, SEO-ready, and pixel-perfect.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS & Android apps using Flutter. One codebase, two stores, fully polished.',
  },
  {
    icon: '🔧',
    title: 'Full-Stack Solutions',
    desc: 'End-to-end development from database design to UI. REST APIs, authentication, cloud deployment on AWS & Firebase.',
  },
  {
    icon: '🤖',
    title: 'No-Code Integrations',
    desc: 'Chatbot setup, form-to-app automation, and tool integrations that save you hours every week.',
  },
];
