/**
 * Portfolio Data File for D. Rama Venkata Sai
 * Centralized configuration for all personal details, skills, projects, and education.
 */

export const personalInfo = {
  name: "D. Rama Venkata Sai",
  preferredName: "Sai",
  initials: "SAI",
  role: "Aspiring Web Developer | Android Programming Enthusiast",
  educationStatus: "Final-Year Diploma Student in Computer Science",
  college: "AANM & VVRSR Polytechnic College, Gudlavalleru",
  location: "Gudlavalleru, Andhra Pradesh, India",
  email: "dsaimtm@gmail.com",
  phone: "8919086393",
  formattedPhone: "+91 8919086393",
  socialUsername: "rowdysai2112",
  socialUrl: "https://github.com/SAI-O73", // Configurable profile URL
  githubUrl: "https://github.com/SAI-O73",
  resumePath: "/resume.pdf",
  heroDescription:
    "I'm a final-year Computer Science diploma student passionate about building modern web experiences and exploring Android application development. I enjoy transforming ideas into functional, user-friendly applications while continuously improving my development skills.",
  aboutParagraphs: [
    "I am currently in my final year pursuing a Diploma in Computer Science at AANM & VVRSR Polytechnic College, Gudlavalleru. My journey in technology is driven by a deep curiosity about how digital systems connect people and solve day-to-day challenges.",
    "My primary focus centers on modern web development with React.js and JavaScript, crafting clean, responsive, and intuitive interfaces. Alongside web technologies, I actively study Android application development fundamentals using Java and Android Studio, aiming to build versatile software across both web and mobile platforms.",
    "I believe in learning by building practical, real-world projects. Whether designing responsive layouts, experimenting with interactive components, or architecting project workflows, I am committed to writing clean, maintainable code and continuously expanding my technical knowledge."
  ],
  interestsSummary: [
    "React web development",
    "Responsive website design",
    "JavaScript programming",
    "Android application development",
    "Building practical projects",
    "Learning new technologies"
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Web Development",
    iconName: "Globe",
    description: "Building responsive, modern, and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: "Code2", tag: "Markup" },
      { name: "CSS3", icon: "Palette", tag: "Styling" },
      { name: "JavaScript", icon: "Braces", tag: "Core Language" },
      { name: "React.js", icon: "Atom", tag: "Library" },
      { name: "Vite", icon: "Zap", tag: "Build Tool" },
      { name: "Responsive Web Design", icon: "Layout", tag: "Design" },
    ],
  },
  {
    title: "Android Development",
    iconName: "Smartphone",
    description: "Exploring mobile app development and native Android fundamentals.",
    skills: [
      { name: "Java", icon: "FileCode", tag: "Language" },
      { name: "Android Studio", icon: "Layers", tag: "IDE" },
      { name: "XML Layouts", icon: "Component", tag: "UI Layouts" },
      { name: "Android Programming Fundamentals", icon: "Cpu", tag: "Core Concepts" },
    ],
  },
  {
    title: "Development Tools",
    iconName: "Wrench",
    description: "Modern tools and workflows for building and deploying applications.",
    skills: [
      { name: "VS Code", icon: "Terminal", tag: "Editor" },
      { name: "Git", icon: "GitBranch", tag: "Version Control" },
      { name: "GitHub", icon: "Github", tag: "Collaboration" },
      { name: "Vercel", icon: "Cloud", tag: "Deployment" },
      { name: "Supabase", icon: "Database", tag: "Backend / Database" },
    ],
  },
];

export const featuredProject = {
  name: "AI Gym Fitness",
  badge: "Featured College Project",
  tagline: "Intelligent Fitness & Workout Companion Web Application",
  liveUrl: "http://fitness-073.vercel.app/",
  githubUrl: "https://github.com/SAI-O73/gym-project",
  description:
    "AI Gym Fitness is a fitness-focused web application developed as a college project. It brings fitness tools and related information together in one convenient experience.",
  overview:
    "Created as a comprehensive fitness companion, AI Gym Fitness integrates intuitive calculators, training tools, and helpful guidance to support users along their fitness and health goals.",
  features: [
    {
      title: "Fitness & Diet Planning",
      description: "Structured workout plans and nutrition guidelines tailored for fitness enthusiasts."
    },
    {
      title: "Protein Calculator",
      description: "Precise daily protein intake calculations based on weight, activity, and goals."
    },
    {
      title: "BMI Calculator",
      description: "Fast Body Mass Index measurement with clear category ranges and feedback."
    },
    {
      title: "AI Fitness Assistant",
      description: "Interactive guidance to answer exercise queries and workout recommendations."
    },
    {
      title: "User Authentication",
      description: "Secure account access allowing personalized preferences and saved workouts."
    },
    {
      title: "Interactive User Dashboard",
      description: "Clean central hub displaying health metrics, tools, and recent activities."
    }
  ],
  technologies: [
    "React.js",
    "JavaScript ES6+",
    "Tailwind CSS",
    "Vite",
    "AI Fitness Tools",
    "Responsive Design",
    "Vercel Deployment"
  ]
};

export const educationHistory = [
  {
    institution: "AANM & VVRSR Polytechnic College",
    course: "Diploma in Computer Science",
    location: "Gudlavalleru, Andhra Pradesh, India",
    status: "Final-Year Student",
    description:
      "Undertaking practical coursework in computer science fundamentals, web development, object-oriented programming, data structures, and mobile application concepts.",
    highlights: [
      "Core focus on software development and web applications",
      "Hands-on project work including the AI Gym Fitness college project",
      "Active exploration of Android application architecture and Java",
      "Participation in academic labs and peer development sessions"
    ]
  }
];

export const developmentInterests = [
  {
    title: "Web Development",
    iconName: "Globe",
    quote:
      "Interested in developing responsive websites, modern user interfaces, and interactive web applications using React and related technologies.",
    color: "from-blue-600/10 via-blue-50 to-white",
    borderColor: "border-blue-200 hover:border-blue-500",
    accentColor: "text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    tags: ["React.js", "UI/UX", "Tailwind CSS", "JavaScript", "Vite", "Component Architecture"]
  },
  {
    title: "Android Programming",
    iconName: "Smartphone",
    quote:
      "Interested in learning Android application development and building useful mobile experiences.",
    color: "from-blue-600/10 via-blue-50 to-white",
    borderColor: "border-blue-200 hover:border-blue-500",
    accentColor: "text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    tags: ["Java", "Android Studio", "XML UI", "Activities & Intents", "Mobile UX", "Native Apps"]
  }
];
