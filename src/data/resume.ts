export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  github: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  period?: string;
  techStack: string;
  github?: string;
  description: string[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education;
  certifications: Certification[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Ajay Kumar",
    title: "Full Stack Developer",
    location: "Mohali, India",
    phone: "+91-8696260393",
    email: "ajaydevelops38@gmail.com",
    github: "https://github.com/ajay-develops",
  },
  summary:
    "Results-oriented Full Stack Developer with specialized expertise in the MERN stack and SQL-based environments. Proven track record in building scalable web applications using React.js, Node.js, and PostgreSQL. Adept at designing complex relational database schemas, developing secure REST APIs, and optimizing frontend performance with Next.js. passionate about clean code and efficient database management.",
  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Redux",
        "TailwindCSS",
        "MaterialUI",
        "shadcn/ui",
        "MagicUI",
        "HeroUI",
        "HTML5",
        "CSS3",
        "jQuery",
        "i18next (Internationalization)",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Serverless Functions",
        "Stripe Integration",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker",
        "Git/GitHub",
        "Azure",
        "AWS",
        "Google Cloud",
        "Postman",
      ],
    },
    {
      category: "CMS/CRM",
      items: ["HubSpot (HubL)", "Payload CMS", "Sanity CMS", "Prismic CMS", "GoHighLevel CRM"],
    },
  ],
  projects: [
    {
      name: "Logopsi (Educational Platform)",
      period: "Latest Project",
      techStack: "Next.js 15, Payload CMS, MongoDB, Stream Chat, Stripe, TypeScript, TailwindCSS",
      github: "https://github.com/ajay-develops/logopsi-merge",
      description: [
        "Architected a comprehensive multi-language educational platform supporting French, English, and Spanish with dynamic locale routing and i18n translation system.",
        "Implemented Payload CMS for content management with custom collections for Exercises, Quizzes, Books, and Users, featuring role-based access control (Admin, Tutor, Child).",
        "Integrated Stream Chat API for real-time messaging between tutors and children with channel management and automated cleanup via Vercel Cron jobs.",
        "Built Stripe payment integration with multiple subscription tiers (Sapphire, Gold, Diamond, Emerald, Ruby) and payment success workflows.",
        "Developed responsive dashboards for tutors and children with exercise assignment tracking, quiz management, and progress monitoring.",
        "Migrated entire codebase from legacy translation system to modular dictionary structure, improving maintainability and translation workflow.",
      ],
    },
    {
      name: "Punjabi Beats (Music Streaming Application)",
      period: "Latest Project",
      techStack: "PostgreSQL, Express.js, React.js, Node.js",
      github: "https://github.com/ajay-develops/punjabi-beats",
      description: [
        "Designed and implemented a normalized relational database schema in PostgreSQL to efficiently manage complex relationships between Artists, Albums, Tracks, and User Playlists.",
        "Developed robust backend REST APIs using Node.js and Express to handle media streaming requests and user authentication.",
        "Optimized SQL queries using joins and indexing to ensure sub-100ms response times for music search and filtering.",
        "Built a dynamic, responsive user interface with React.js allowing users to create custom playlists and stream audio seamlessly.",
      ],
    },
    {
      name: "Scale RCM Analytics (Healthcare Web App)",
      period: "Mar 2024",
      techStack: "Next.js, Express.js, MongoDB, Azure, Power BI",
      description: [
        "Architected a secure healthcare analytics platform from scratch, deploying on Azure Virtual Machines.",
        "Implemented role-based authentication (RBAC) using JWT and Express.js middleware to secure sensitive patient data.",
        "Integrated Microsoft Power BI via \"App Owns Data\" model to render dynamic, interactive visualizations within the React frontend.",
        "Utilized Next.js features like Server-Side Rendering (SSR) and Request Caching to improve load times by 40%.",
      ],
    },
    {
      name: "Flipkart & Amazon Price Tracker (Chrome Extension)",
      period: "Dec 2022",
      techStack: "Node.js, React.js, Chrome API, Web Scraping",
      description: [
        "Developed a browser extension that tracks product price fluctuations on major e-commerce platforms.",
        "Engineered a notification system using Node.js and Nodemailer to alert users of price drops in real-time.",
        "Built a user-friendly popup interface using React.js to manage tracked items and history.",
      ],
    },
  ],
  experience: [
    {
      company: "Scale Healthcare",
      position: "Full Stack Developer",
      location: "Mohali",
      startDate: "Mar 2024",
      endDate: "Jan 2025",
      responsibilities: [
        "Spearheaded the full-cycle development of the specific RCM web application, resulting in improved data visibility for admins.",
        "Designed and maintained scalable backend services using Node.js/Express, ensuring high availability and fault tolerance.",
        "Managed complex data models and aggregation pipelines, ensuring data integrity across user roles.",
        "Collaborated with cross-functional teams to integrate Power BI reports, enabling real-time decision-making capabilities.",
      ],
    },
    {
      company: "MarkeStac",
      position: "Full Stack Developer",
      location: "Mohali",
      startDate: "Apr 2023",
      endDate: "Oct 2023",
      responsibilities: [
        "Developed custom automation solutions and private apps using Node.js for clients on HubSpot and Pipedrive CRMs.",
        "Built high-converting landing pages and email templates using HubL, JavaScript, and jQuery.",
        "Enhanced workflow capabilities by deploying serverless functions to handle custom business logic and third-party API integrations.",
      ],
    },
    {
      company: "SpiceTech IT Solutions",
      position: "Junior Software Developer",
      location: "Kota",
      startDate: "Jul 2022",
      endDate: "Oct 2023",
      responsibilities: [
        "Built and customized Shopify add-ons and themes using Liquid, HTML, CSS, and JavaScript.",
        "Optimized frontend performance using GSAP and Framer Motion for smooth animations and user interactions.",
        "Assisted in the development of Android applications using React Native, bridging the gap between web and mobile experiences.",
      ],
    },
    {
      company: "Talentelgia Technologies PVT LTD",
      position: "Software Intern",
      location: "Punjab, India",
      startDate: "Feb 2022",
      endDate: "Jun 2022",
      responsibilities: [
        "Learned and created web projects using HTML, CSS and Bootstrap, JavaScript, jQuery, NodeJS, ExpressJS, EJS, MongoDB.",
        "Built an e-commerce store front-end and back-end using ReactJS and ExpressJS respectively.",
        "Built an online Calculator.",
        "Built a Game similar to dino game in chrome browser.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology (Computer Science)",
    institution: "Modi Institute of Technology",
    location: "Kota",
    startDate: "Jul 2018",
    endDate: "Jul 2022",
  },
  certifications: [
    {
      name: "Full Stack Web Development Bootcamp",
      issuer: "Udemy - Angela Yu",
    },
    {
      name: "HackerRank JavaScript (Intermediate)",
      issuer: "HackerRank",
    },
  ],
};

