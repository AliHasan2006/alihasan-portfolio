// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.jpg';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import gitHubNew from './assets/tech_logo/gitHubNew.jpg'
import bootstrap from './assets/tech_logo/bootstrap.png'
// Experience Section Logo's
import zennexLogo from './assets/company_logo/zennexLogo.jpg';

// Education Section Logo's
import kmcluLogo from './assets/education_logo/kmclu_logo.png';
import vibgyorLogo from './assets/education_logo/vibgyor_logo.png';

// Project Section Logo's
import remove_bg from './assets/work_logo/remove_bg.png';
import npm from './assets/work_logo/npm.png';
import github_det from './assets/work_logo/github_det.png';
import landingPage from './assets/work_logo/landingPage.png';
// /import image_search from './assets/work_logo/image_search.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrap},
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: gitHubNew },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: zennexLogo,
      role: "Web Designer & Devolper",
      company: "Zennex Solutions",
      date: "June 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "Redux",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: kmcluLogo,
      school: "Kmc Language University",
      date: "Sept-2023 - July-2026",
      grade: "8.51 SGPA",
      desc: "I completed my Bachelor's degree in Computer Application (B.C.A) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - B.C.A",
    },
    {
      id: 1,
      img: vibgyorLogo,
      school: "Vibgyor Public School",
      date: "Apr 2022 - March 2023",
      grade: "75%",
      desc: "I completed my class 12th class from Vibgyor Public School, Raebareli, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vibgyorLogo,
      school: "Vibgyor Public School",
      date: "Apr 2020 - March 2021",
      grade: "92%",
      desc: "I completed my class 10th class from Vibgyor Public School, Raebareli, under the State board, where I studied Physics, Chemistry, Biology, and Mathematics (PCM).",
      degree: "CBSE(X) - Science with Computer Application",
    },
  ];
  
  export const projects = [
  {
    img : github_det,
    title: "GitInsight: GitHub Profile Detective",
    type: "GitHub User Search & Metrics App",
    description: "A sleek and responsive web application built to instantly fetch and display comprehensive information for any GitHub user. By simply entering a username, GitInsight utilizes the GitHub API to showcase key profile metrics like name, joined date, followers, following, public repositories, and location. The modern, utility-first UI is crafted with Tailwind CSS, providing a fast and seamless experience for developers and recruiters alike.",
    imageSrc: "githubdetLogo",
    technologies: ["React JS", "Axios (API Fetching)", "Tailwind CSS", "HTML", "JavaScript"],
    demoLink: "https://github-account-finder-roan.vercel.app/",
    codeLink: "https://github.com/AliHasan2006/web-dev-projects/tree/main/githubAccountFinder",
  },
    {
    img : landingPage,
    title: "Event Landing Page",
    type: "Responsive Web Design & API Integration",
    description: "A fully responsive, modern landing page designed for optimal viewing on all devices. It features a working **contact form** where user information is captured and sent to a specified email address using an external **API (e.g., EmailJS or a custom backend endpoint)**. Built solely with foundational web technologies, demonstrating proficiency in design, responsiveness, and asynchronous data submission.",
    imageSrc: "landingPageScreenshot",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
    demoLink: "https://event-landing-web.vercel.app/",
    codeLink: "https://github.com/AliHasan2006/event-landing-project",
  },
  {
    img : remove_bg,
    title: "Advanced Task Manager (Todo List)",
    type: "State Management Application", // Category
    description: "A feature-rich, single-page To-Do List application providing functionalities like adding, deleting, editing, and filtering tasks (Active, Completed, All). This project highlights expertise in **React's functional components** and utilizes the **Context API** for efficient global state management, ensuring a clean and scalable codebase. The modern and responsive UI is styled entirely with **Tailwind CSS**.",
    // imageSrc: "todoListScreenshot", // Use an appropriate variable name for the image
    technologies: ["HTML", "CSS", "React JS", "Tailwind CSS", "Context API", "Local Storage System"],
    demoLink: "https://react-learning-c5ct.vercel.app/", // Replace with your actual live link
    codeLink: "https://github.com/AliHasan2006/react-learning/tree/main/12todoAppUsingLocalStorage", // Replace with your actual GitHub link
  },
  {
    img : npm,
    title: "Advanced Password Generator",
    type: "Security Utility Tool", // New Category
    description: "An interactive and robust password generator application built with React. It features customizable options for password length and inclusion of uppercase letters, numbers, and special characters. The core logic utilizes **React's `useState` hook** for efficient state management (length, options, and output), providing a smooth user experience in generating strong, unique passwords. Styled for a sleek, responsive interface.",
    imageSrc: "passwordGenScreenshot", // Use an appropriate variable name for the image
    technologies: ["React JS", "useState Hook", "HTML", "CSS", "JavaScript"], // Added useState
    demoLink: "https://react-learning-gold.vercel.app/", // Replace with your actual live link
    codeLink: "https://github.com/AliHasan2006/react-learning/tree/main/05passWordGeneratorProject", // Replace with your actual GitHub link
  }
];