export type SocialLink = {
  platform: string
  url: string
  icon: string
}

export type Skill = {
  name: string
  icon?: string
  category: "frontend" | "backend" | "tools" | "other"
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export type Experience = {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | "Present"
  description: string[]
  skills: string[]
}

export type Education = {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description?: string
}

export const portfolioData = {
  name: "Kabir Iqbal",
  title: "Full Stack Developer",
  email: "kabir110@gmail.com",
  location: "Karachi, Pakistan",
  about: {
    heading: "Building digital experiences that make a difference",
    subheading: "Passionate about creating elegant solutions to complex problems",
    description:
      "I'm a full stack developer with 1+ years of experience building web applications. I specialize in React, Next.js, Node.js, and TypeScript. I'm passionate about creating user-friendly interfaces and scalable backend systems. When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.",
    image: "/dp_pic.jpg?height=400&width=400",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Kabir-Iqbal",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kabeer-iqbal/",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://x.com/Kabir_Iqbal313",
      icon: "twitter",
    },
    {
      platform: "Email",
      url: "mailto:kabiriqbal110@gmail.com",
      icon: "mail",
    },
  ],
  skills: [
    { name: "React", category: "frontend", icon: "react" },
    { name: "Next.js", category: "frontend", icon: "nextjs" },
    { name: "TypeScript", category: "frontend", icon: "typescript" },
    { name: "JavaScript", category: "frontend", icon: "javascript" },
    { name: "HTML", category: "frontend", icon: "html" },
    { name: "CSS", category: "frontend", icon: "css" },
    { name: "Tailwind CSS", category: "frontend", icon: "tailwind" },
    { name: "Node.js", category: "backend", icon: "nodejs" },
    { name: "Express", category: "backend", icon: "express" },
    { name: "MongoDB", category: "backend", icon: "mongodb" },
    { name: "Sanity", category: "backend", icon: "sanity" },
    // { name: "PostgreSQL", category: "backend", icon: "postgresql" },
    { name: "Git", category: "tools", icon: "git" },
    { name: "GitHub", category: "tools", icon: "github" },
    { name: "VS Code", category: "tools", icon: "vscode" },
    { name: "Figma", category: "tools", icon: "figma" },
    // { name: "Jest", category: "tools", icon: "jest" },
  ],
  projects: [
    {
      id: "project-1",
      title: "Simple Resume Builder",
      description:
        "A simple and dynamic resume builder that lets users add, edit, and preview their resume content in real-time.",
      image: "/resume.jpg?height=600&width=800",
      techStack: ["Html5", "CSS3", "JavaScript"],
      liveUrl: "https://milestone5hackathone1.vercel.app/",
      githubUrl: "https://github.com/Kabir-Iqbal",
      featured: true,

    },
    {
      id: "project-2",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      image: "/Avian-pic.png?height=600&width=800",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Sanity", "Stripe"],
      liveUrl: "https://avain-e-commerce.vercel.app/",
      githubUrl: "https://github.com/Kabir-Iqbal",
      featured: true,
    },
    {
      id: "project-3",
      title: "Library Management System",
      description:
        "A web app to add, delete, update, search, and view books in a library, making it easy to manage and track book inventory.",
      image: "/library-project.jpg?height=600&width=800",
      techStack: ["Python", "Stramlit",],
      liveUrl: "https://library-management-313.streamlit.app/",
      githubUrl: "https://github.com/Kabir-Iqbal",
      featured: true,
    },
    {
      id: "project-4",
      title: "Furniture Store",
      description: "An e-commerce furniture store built with dynamic product listings, real-time CMS integration, and a responsive UI.",
      image: "/furniture-shop.jpg?height=600&width=800",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Sanity"],
      liveUrl: "https://furniture-shop-eosin.vercel.app/",
      githubUrl: "https://github.com/Kabir-Iqbal",
      featured: false,
    },
    {
      id: "project-5",
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "/port.png?height=600&width=800",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://portfolio-in-nextjs-tailwind.vercel.app/",
      githubUrl: "https://github.com/Kabir-Iqbal",
      featured: false,
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Frontend Developer",
      company: "Governer House.",
      location: "Karachi, Pakistan",
      startDate: "feb 2024",
      endDate: "Present",
      description: [
        "Led the development of a new customer portal using Next.js and TypeScript",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with design team to improve UI/UX",
      ],
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "CI/CD"],
    },
    {
      id: "exp-2",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      startDate: "Aug 2024",
      endDate: "present",
      description: [
        "Developed and maintained multiple web applications using React and Node.js",
        "Designed and implemented RESTful APIs",
        "Optimized database queries that improved application performance by 30%",
        "Participated in agile development processes",
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      id: "exp-3",
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      location: "Remote",
      startDate: "jan 2024",
      endDate: "March 2024",
      description: [
        "Built responsive websites for clients across various industries",
        "Implemented frontend features using JavaScript and CSS",
        "Collaborated with designers to translate mockups into functional websites",
        "Maintained and updated existing client websites",
      ],
      skills: ["JavaScript", "HTML", "CSS",],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Intermediate",
      institution: "Govt. Degree College",
      location: "K.N. Shah, Pakistan",
      startDate: "2019",
      endDate: "2021",
      description: "Specialized in engineering and science subjects.",
    },
    {
      id: "edu-2",
      degree: "Bachelor of Science (BSc)",
      institution: "Shaheed Benazir Bhutto University (College Side)",
      location: "Nawabshah, Pakistan",
      startDate: "2021",
      endDate: "2024",
      description: "Completed BSc with a focus on science subjects.",
    },
    {
      id: "edu-3",
      degree: "Agentic AI Development",
      institution: "Governor House (Sindh)",
      location: "Karachi, Pakistan",
      startDate: "2024",
      endDate: "Ongoing",
      description: "Completed full-stack development and currently focusing on Agentic AI technologies.",
    }

  ],
  contact: {
    heading: "Let's work together",
    subheading: "I'm always open to discussing new projects, opportunities, and partnerships.",
    email: "kabiriqbal110@gmail.com",
    phone: "+92 348 3618356",
  },
}
