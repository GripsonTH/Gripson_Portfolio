import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";


export const HERO_CONTENT = `I am an aspiring full stack developer with a passion for building robust and scalable web applications. With a solid foundation in front-end technologies like React, along with back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, I am eager to apply my knowledge to real-world projects. I am continuously learning and refining my skills to create innovative solutions that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and passionate Full Stack Developer with a strong foundation in building dynamic and scalable web applications. My expertise spans React, Node.js, MySQL, PostgreSQL and MongoDB, allowing me to craft seamless and efficient digital experiences.

Beyond web development, I have ventured into game development, where I built an online multiplayer shooting game for PC using Unity (C#) and Photon PUN2. Additionally, I have worked on several Python projects, exploring automation, data processing and backend development.

My journey in technology is driven by curiosity and a love for problem-solving. I thrive in collaborative environments and continuously seek opportunities to learn and improve. When I’m not coding, I enjoy experimenting with new technologies, contributing to open-source projects and refining my game development skills.

`;

export const EXPERIENCES = [
  /*{
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },*/
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
