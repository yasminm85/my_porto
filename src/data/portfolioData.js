import Joba from '../assets/Joba.png';
import Chato from '../assets/Chato.png';
import Navnotif from '../assets/navnotif.png';
import IAD from '../assets/iadfiles.png';
import Maryana from '../assets/Maryana.png';
import Masy from '../assets/masynet.png';

export const portfolioMeta = {
  name: 'Yasmin',
  fullName: 'Nuryasmin Mutiara Bintang',
  title: 'Software Developer',
  status: 'Available for freelance & full-time roles',
  location: 'Tangerang, Indonesia',
  email: 'yasminmutiarabintang@gmail.com',
  github: 'https://github.com/yasminm85',
  linkedin: 'https://linkedin.com/in/nuryasminmb/',
  bio: "Hi there! I'm Yasmin, a software developer with a passionate eye for backend developer and full-stack developer. I love building delightful web experiences using Laravel, Node.js, React, and Solidity.",
  // yearsExperience: '4+ Years',
  // projectsShipped: '4+',
  // coffeeCups: '1,420+'
};

export const projectsData = [
  {
    id: 'Joba',
    title: 'Joba',
    category: 'Full-Stack',
    tagline: 'Easily input data job application',
    description: 'Joba is a full-stack web application built with Next.js, designed to extract and analyze key information from job descriptions using AI.',
    image: Joba,
    tags: ['Nextjs', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
    features: [
      'Transform raw text into structured database entries automatically',
      'Extract text from screenshots and convert it into structured database entries',
      'Easily schedule and sync interview dates with Google Calendar integration',
    ],
    liveUrl: 'https://joba.chato.sbs',
    githubUrl: 'https://github.com/yasminm85/joba-app.git',
    color: '#e5a84b'
  },
  {
    id: 'Chato',
    title: 'Chato',
    category: 'Full-Stack',
    tagline: 'Room Chat with AI',
    description: 'Chato is a chatting app that unobtrusive grammar tips',
    image: Chato,
    tags: ['Nodejs', 'React', 'MongoDB', 'Tailwind'],
    features: [
      'Receive subtle, non-intrusive grammar tips',
      'Easily see who is online and start chatting with your existing friends instantly',
      'Connect with English speakers and learners from all over the world.',
    ],
    liveUrl: 'https://chato.sbs',
    githubUrl: 'https://github.com/yasminm85/chato-app.git',
    color: '#4ca4a0'
  },
  {
    id: 'Maryana',
    title: 'Maryana',
    category: 'Backend',
    tagline: 'Englis Speaking Tutor Bot',
    description: 'A bot telegram that can help speaking practice using voice note.',
    image: Maryana,
    tags: ['Python', 'Deepseek', 'Groq'],
    features: [
      'Voice-to-Text Transcript',
      'Grammar Feedback',
      'Text-to-Speech'
    ],
    liveUrl: 'https://t.me/maryana_tutor_bot',
    githubUrl: 'https://github.com/yasminm85/maryana_telegram_bot.git',
    color: '#d9534f'
  },
  {
    id: 'Navnotif',
    title: 'Navnotif',
    category: 'Fullstack',
    tagline: 'Disposition Management',
    description: 'Realtime disposition monitoring application.',
    image: Navnotif,
    tags: ['Nodejs', 'React', 'MongoDB'],
    features: [
      'Realtime Notification on Dashboard and TV',
      'Manage disposition agenda',
      'Approving report system'
    ],
    liveUrl: 'https://frontend-navnotif.vercel.app/pages/login',
    githubUrl: '#',
    color: '#9368b7'
  },
  {
    id: 'IAD',
    title: 'IAD Files',
    category: 'Fullstack',
    tagline: 'Files and Folder Management',
    description: 'Management system for handling folder and files depends on categorization.',
    image: IAD,
    tags: ['Nodejs', 'React', 'MongoDB'],
    features: [
      'Classification folder and files based on all brances',
      'Tracking document status from all brances',
      'Document management system'
    ],
    liveUrl: 'https://github.com/yasminm85/management_app.git',
    githubUrl: '#',
    color: '#50c728'
  },
  {
    id: 'Masy',
    title: 'Masy-net',
    category: 'Blockchain',
    tagline: 'Employee management based on blockchain ',
    description: 'a decentralized data storage application built on the Internet Computer Protocol (ICP).',
    image: Masy,
    tags: ['Motoko', 'React'],
    features: [
      'Passwordless Login via Internet Identity (II)',
      'Add Employees and Create Digital Contract On-Chain Data Storage on the ICP',
      'View Employees Position and Sign Contracts Tied to Employees'
    ],
    liveUrl: 'https://github.com/yasminm85/masy-net.git',
    githubUrl: '#',
    color: '#6610de'
  }
];

export const experienceData = [
  {
    id: 'exp-1',
    role: 'IT Development',
    company: 'AirNav Indonesia',
    period: 'October 2025 - April 2026',
    location: 'Tangerang, Indonesia',
    type: 'Internship',
    description: [
      "Developed NavNotif, a real-time task monitoring application using React, Node.js, and MongoDB Atlas to streamline disposition management for the Internal Audit Division.",
        "Implemented an automated alarm system and TV-display integration to visualize weekly disposisi schedules preventing missed deadlines caused by notification fatigue in previous systems.",
        "Engineered IADFiles, a specialized file management system for the Internal Audit Division to eliminate data silos and reduce file retrieval time by implementing structured folder classification and multi-year filtering.",
    ],
    skills: ['React', 'Node.js', 'MongoDB'],
    highlight: 'Spearheaded the redesign of flagship digital experience receiving FWA of the Day.'
  },
  {
    id: 'exp-2',
    role: 'IT Officer',
    company: 'PT Pan Brother Tbk',
    period: 'August 2023 - December 2023',
    location: 'Boyolali, Indonesia',
    type: 'Internship',
    description: [
      "Tested APIs using Postman to ensure functionality and developed login pages using APIs.",
        "Analyzed the old application flow and created flowcharts to facilitate the migration process",
        "Migrated the Warehouse Management System application from PHP to Laravel for 22 sub-systems",
    ],
    skills: ['Laravel', 'PHP', 'Ajax', 'MySQL'],
    highlight: 'Scaled websocket concurrent session handling from 2k to 50k users.'
  },
  {
    id: 'exp-3',
    role: 'Data Management - Human Resources & HRIS',
    company: 'PT ASDP Indonesia Ferry (Persero)',
    period: 'February 2023 - July 2023',
    location: 'Jakarta, Indonesia',
    type: 'Internship',
    description: [
      "Compiled and validated employee data from all office branches from mentors using Excel to assist in database preparation.",
        "Checking the data position code number which can help the team to identify data calculation errors.",
        "Added new users from new employee data to the HCIS website and attendance website and can complete up to 104 data."
    ],
    skills: ['Excel', 'Word'],
    highlight: 'Shipped 18 client web apps on schedule with 100% client satisfaction score.'
  }
];

export const skillCategories = [
  {
    title: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'React / Next.js'},
    ]
  },
  {
    title: 'Backend',
    iconName: 'Server',
    skills: [
      { name: 'Node.js / Express' },
      { name: 'PostgreSQL' },
      { name: 'REST APIs'},
      { name: 'Docker / Vercel / NevaCloud'},
      { name: 'WebSocket Pub/Sub' }
    ]
  },
  {
    title: 'Design & Creative Tools',
    iconName: 'Palette',
    skills: [
      { name: 'Figma & UI Prototyping' },
    ]
  }
];
