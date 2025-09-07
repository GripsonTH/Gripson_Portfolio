import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";


export const HERO_CONTENT = `I am an aspiring full stack developer with a passion for building robust and scalable web applications. With a solid foundation in front-end technologies like React, Next along with back-end technologies like Node.js, Express, MySQL, PostgreSQL and MongoDB. I am continuously learning and refining my skills to create innovative solutions that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated Full Stack Developer with a strong foundation in building dynamic and scalable web applications. My expertise includes React, Next.js, Node.js, Express, MySQL, PostgreSQL and MongoDB, enabling me to deliver seamless and efficient digital experiences. As part of my web development journey, I have also contributed to projects involving API development, database management and scalable backend services.
In addition to web development, I have explored game development by creating an online multiplayer shooting game for PC using Unity (C#) and Photon PUN2. Driven by curiosity and a passion for problem-solving, I thrive in collaborative environments and continuously seek opportunities to grow. Beyond coding, I enjoy experimenting with emerging technologies, contributing to open-source projects and refining my game development skills.

`;

export const EXPERIENCES = [
  {
    year: "2022 jan - jun",  
    role: "IT Trainee",
    company: " PIIMA Health Care",
    description: `I worked as an IT Trainee at a Hospital for 5 months. During my time there, I was responsible for a variety of tasks, including `,
    points: ["- installation and configuration computer hardware and software.",
       "- troubleshooted computer problem", 
       "- provided technical support to hospital staff",
      "- maintained the hospital's IT infrastructure.",
      "- Developing a training program for hospital staff on how to use the systems about related with their designation",
      "I learned a lot during my time at the hospital and I gained valuable experience in a variety of IT disciplines. "]
  },
  {
    year: "2025 jun - Present",
    role: "Software Developer",
    company: " Lamzing Tech",
    description: `As part of the development team, I contribute to building and maintaining scalable web applications. My work involves developing RESTful APIs with Express, integrating PostgreSQL databases, and building front-end features with Next.js. I also help with containerization using Docker and deployment configurations with Nginx.`,
    technologies: ["TypeScript", "Next.js", "Postgresql","Express", "Docker", "Nginx"],
    points: [
    "- Collaborated with team members to design and implement new features.",
    "- Built and optimized RESTful APIs with Express.",
    "- Integrated PostgreSQL for reliable data storage and queries.",
    "- Developed responsive front-end components using Next.js.",
    "- Assisted with Docker-based containerization and environment setup.",
    "- Configured Nginx for deployment and load balancing."
  ]
  },  

];

export const PROJECTS = [
  {
    title: "Sales Management System",
    image: project1,
    description:
      "Sales Management System is a e-commerce website with fully functional features like product listing, shopping cart and user authentication.",
    technologies: ["C#", "ASP.NET", "Microsoft SQL Server", "IIS"],
  },
  {
    title: "E-Bridge",
    image: project2,
    description:
      "E-Bridge is a mobile app that connects teachers and students for seamless learning. It features chat, video conferencing, audio calls, notes sharing, and file transfers, making online classes interactive and efficient.",
    technologies: ["Java", "Android Studio", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Laser Security System using Arduino",
    image: project5,
    description:
      "This project designs a laser-based security system using an LDR sensor and buzzer. When the laser beam is interrupted, the sensor detects it and triggers an alarm, ensuring efficient and reliable intrusion detection.",
    technologies: ["C++", "Arduino"],
  },
  {
    title: " Image Filtering",
    image: project6,
    description:
      "This project explores image filtering techniques using Tkinter, PIL and OpenCV. Users can apply grayscale, negative, edge detection, noise reduction and rotation.",
    technologies: ["Python"],
  },
  {
    title: " Online Multiplayer Shooting Game",
    image: project7,
    description:
      "This first-person shooter game, built with Unity and Photon PUN2, features real-time multiplayer, lobby creation, and competitive free-for-all gameplay.",
    technologies: ["C#", "Photon Pun2", "Unity Engine"],
  },
  {
    title: " Ecom website using MERN",
    image: project8,
    description:
      "A full-stack e-commerce website built with the MERN stack featuring user authentication, product browsing, cart and order management. It includes a secure admin panel for managing products, users and orders. The app uses RESTful APIs and JWT-based authentication for smooth and secure operations.",
    technologies: ["MERN", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "Athokpam Awang Leikai, Thoubal - 795138",
  phoneNo: "+91-7629938972 ",
  email: "gripsonthongam@gmail.com",
};
