import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiNginx, SiAmazons3 } from "react-icons/si";
import { FaNodeJs, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import next from "../assets/next.png";
import { SiPrisma } from "react-icons/si";

export const iconVariants = (delay) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0], // bounce
    transition: {
      duration: 3,   // slower animation
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay, // staggered start
    },
  },
});

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
    { icon: <img src={next} alt="Next.js" className="w-16 h-16 object-contain" /> },
    { icon: <SiTypescript className="text-7xl text-blue-800" /> },
    { icon: <img src={python} alt="Python" className="w-16 h-16 object-contain" /> },
    { icon: <FaNodeJs className="text-7xl text-green-500" /> },
    { icon: <BiLogoPostgresql className="text-7xl text-sky-700" /> },
    { icon: <img src={mysql} alt="MySQL" className="w-16 h-16 object-contain" /> },
    { icon: <SiMongodb className="text-7xl text-green-500" /> },
    { icon: <SiNginx className="text-7xl text-green-500" /> },
    { icon: <SiAmazons3 className="text-7xl text-white" /> },
    { icon: <SiPrisma className="text-7xl text-white" /> },
    { icon: <FaDocker className="text-7xl text-blue-500" /> },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* First row (8 items) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center mb-8">
        {techStack.slice(0, 8).map((tech, i) => (
          <motion.div
            key={i}
            variants={iconVariants(i * 0.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Second row (centered) */}
      <div className="flex justify-center gap-6">
        {techStack.slice(8).map((tech, i) => (
          <motion.div
            key={i}
            variants={iconVariants(i * 0.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
