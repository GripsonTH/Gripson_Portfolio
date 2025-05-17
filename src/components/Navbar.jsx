import React from "react";
import logo from "../assets/GTLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Resume from "../assets/Resume.png"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/"><img className="mx-2 w-20" src={logo} alt="logo" /></a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/thongam-gripson-695185271/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600 transition duration-200" />
        </a>
        <a
          href="https://github.com/GripsonTH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-500 transition duration-200" />
        </a>
        <a
          href="https://www.instagram.com/gripson_thongam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition duration-200" />
        </a>
        <a href="/Resume_May.pdf" download="Resume_May.pdf"><img className="w-7 hover:scale-105 hover:rotate-3 hover:opacity-75 transition duration-200" src={Resume} alt="Resume" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
