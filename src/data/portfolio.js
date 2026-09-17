import {
  Binary,
  Bot,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Eye,
  FileCode2,
  GitBranch,
  GitFork,
  Globe2,
  Laptop,
  LineChart,
  MessageSquareCode,
  Network,
  Sigma,
  TerminalSquare,
  Workflow,
} from 'lucide-react'

export const personalInfo = {
  name: 'Kothamrita Chakraborty',
  firstName: 'Kothamrita',
  lastName: 'Chakraborty',
  initials: 'KC',
  location: 'Kolkata, India',
  phone: '+91 7890242495',
  phoneLink: 'tel:+917890242495',
  email: 'kothamritac@gmail.com',
  emailLink: 'mailto:kothamritac@gmail.com',
  linkedin: 'https://linkedin.com/in/kothamrita-chakraborty',
  github: 'https://github.com/Kothamrita',
  resume: '/resume.pdf',
  role: 'AI/ML • Full-Stack Developer • Computer Science Engineering Undergraduate',
  description:
    'Building intelligent, practical software at the intersection of AI, machine learning and full-stack engineering.',
}

export const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Tech Stack', id: 'tech-stack' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]

export const focusAreas = [
  { title: 'B.Tech CSE', icon: Laptop },
  { title: 'AI / ML', icon: BrainCircuit },
  { title: 'Full-Stack Development', icon: Code2 },
  { title: 'LLM Applications', icon: Bot },
]

export const projects = [
  {
    id: 'mplads',
    number: '01',
    title: 'MPLADS Guardian AI',
    subtitle: 'AI-Powered Monitoring & Analytics Platform',
    categories: ['AI/ML', 'Full-Stack', 'Data'],
    description:
      'AI-powered platform for monitoring MPLADS fund utilization and project implementation, aimed at improving transparency and accountability.',
    details:
      'Worked on database-related development and backend workflows using Cloudflare Workers to support handling project data for monitoring expenditure, work progress and implementation status.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Cloudflare Workers'],
    live: 'https://mplads-guardian-ai.mplads-guardian-ai.workers.dev/',
    visual: 'mplads',
    accent: 'violet',
  },
  {
    id: 'margdarshak',
    number: '02',
    title: 'Margdarshak AI',
    subtitle: 'Traffic Prediction & Decision-Support System',
    badge: 'IIT Bombay Techfest Finalist',
    categories: ['AI/ML', 'Data'],
    description:
      'Developed an ML-based traffic congestion prediction system using real-time traffic data collected through global APIs.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    highlights: [
      'Developed an ML-based traffic congestion prediction system.',
      'Engineered time-series features.',
      'Trained predictive models achieving approximately 85% prediction accuracy for congestion forecasting.',
      'Developed a decision-support framework for route optimization and traffic flow management.',
      'Selected as an IIT Bombay Techfest Finalist.',
    ],
    visual: 'traffic',
    accent: 'cyan',
  },
  {
    id: 'glaucat',
    number: '03',
    title: 'GlauCat',
    subtitle: 'AI-Based Glaucoma & Cataract Risk Detection',
    categories: ['AI/ML'],
    description:
      'Developed a TensorFlow-based computer vision system for glaucoma and cataract risk assessment using real-time eye tracking and visual response analysis.',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    highlights: [
      'Implemented camera-based screening workflows.',
      'Monitored eye movement patterns through interactive clinic-inspired exercises and games.',
      'Designed an automated screening pipeline.',
      'Designed to support accessible and early-stage eye disease screening using laptop and mobile device cameras.',
    ],
    flow: ['Camera Input', 'Eye Tracking', 'Visual Response Analysis', 'Interactive Screening', 'Risk Assessment'],
    visual: 'eye',
    accent: 'blue',
  },
  {
    id: 'blooming',
    number: '04',
    title: 'Blooming of Plants',
    subtitle: 'NASA Space Apps Challenge',
    badge: 'NASA Space Apps Challenge Participant',
    categories: ['Data'],
    description:
      'Utilized NASA-provided environmental datasets to study and visualize plant blooming patterns across different regions.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    highlights: [
      'Developed visual representations of vegetation growth and blooming cycles.',
      'Illustrated seasonal environmental changes.',
      'Analyzed climate and ecological data.',
      'Generated insights into plant growth behavior and ecosystem dynamics.',
    ],
    visual: 'plants',
    accent: 'green',
  },
  {
    id: 'sadharan-india',
    number: '05',
    title: 'Sadharan India',
    subtitle: 'Interactive Web Project',
    categories: ['Full-Stack'],
    description: 'Interactive India-focused web project featuring a clickable map experience.',
    visual: 'india',
    accent: 'orange',
    supporting: true,
  },
]

export const technologies = [
  { name: 'Python', category: 'Languages', icon: TerminalSquare },
  { name: 'C++', category: 'Languages', icon: Binary },
  { name: 'JavaScript', category: 'Languages', icon: Braces },
  { name: 'SQL', category: 'Languages', icon: Database },
  { name: 'Machine Learning', category: 'AI/ML', icon: BrainCircuit },
  { name: 'Computer Vision', category: 'AI/ML', icon: Eye },
  { name: 'LLM Applications', category: 'AI/ML', icon: Bot },
  { name: 'LangChain', category: 'Frameworks', icon: Workflow },
  { name: 'OpenAI API', category: 'Frameworks', icon: MessageSquareCode },
  { name: 'Gemini API', category: 'Frameworks', icon: Globe2 },
  { name: 'Vector Databases', category: 'Frameworks', icon: Network },
  { name: 'Prompt Engineering', category: 'Frameworks', icon: Braces },
  { name: 'React', category: 'Frameworks', icon: Code2 },
  { name: 'TensorFlow', category: 'Frameworks', icon: Sigma },
  { name: 'Pandas', category: 'Libraries', icon: LineChart },
  { name: 'NumPy', category: 'Libraries', icon: Sigma },
  { name: 'Matplotlib', category: 'Libraries', icon: LineChart },
  { name: 'OpenCV', category: 'Libraries', icon: Eye },
  { name: 'Scikit-learn', category: 'Libraries', icon: BrainCircuit },
  { name: 'HTML', category: 'Web/Cloud', icon: FileCode2 },
  { name: 'CSS', category: 'Web/Cloud', icon: FileCode2 },
  { name: 'TypeScript', category: 'Web/Cloud', icon: Braces },
  { name: 'Cloudflare Workers', category: 'Web/Cloud', icon: Cloud },
  { name: 'Git', category: 'Tools', icon: GitBranch },
  { name: 'GitHub', category: 'Tools', icon: GitFork },
  { name: 'VS Code', category: 'Tools', icon: Code2 },
]

export const technologyCategories = ['All', 'Languages', 'AI/ML', 'Frameworks', 'Libraries', 'Web/Cloud', 'Tools']

export const experience = [
  {
    company: 'Infosys Springboard',
    role: 'Web Development Intern',
    date: 'Nov 2025 – Jan 2026',
    responsibilities: [
      'Developed AI-powered multi-agent systems using LangChain, Gemini, OpenAI APIs, and Vector Databases for research, summarization, email assistance, and task automation.',
      'Designed and implemented specialized agents including Research Assistant, Summarizer, Email Assistant, and Task Management Assistant.',
      'Integrated LLM-powered workflows into web applications using React, Bootstrap, and Prompt Engineering.',
    ],
  },
  {
    company: 'Indian Statistical Institute',
    role: 'Research Intern',
    date: 'Aug 2025 – Sep 2025',
    responsibilities: [
      'Performed exploratory data analysis on research datasets using Python and data visualization libraries.',
      'Developed visualizations to identify trends, patterns, and actionable insights from complex datasets.',
      'Prepared analytical reports and documentation supporting research-oriented workflows.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Meghnad Saha Institute of Technology',
    year: '2024 – 2028 (Expected)',
    detail: 'CGPA: 7.3 (Till Sem 4)',
    primary: true,
  },
  { degree: 'Class XII', institution: 'Aaloke Bharti Model School', year: '2024' },
  { degree: 'Class X', institution: 'St. Teresa’s Secondary School', year: '2022', detail: '92%' },
]

export const achievements = [
  { title: 'IIT Bombay Techfest Finalist', detail: 'Margdarshak AI', type: 'Achievement' },
  { title: 'Qualified International Computer Science Competition (ICSC)', type: 'Achievement' },
  { title: 'NASA Space Apps Challenge Participant', detail: 'Blooming of Plants', type: 'Achievement' },
  { title: 'Programming Fundamentals Using Python', detail: 'Infosys Springboard', type: 'Certification' },
]
