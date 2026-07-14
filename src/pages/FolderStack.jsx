import { useState } from "react";

import Wallpaper from "../components/Wallpaper";
import FolderLayer from "../components/FolderLayer";
import { motion } from "framer-motion";
//import MenuBar from "../components/MenuBar";
//import Dock from "../components/Dock";

import folderWallpaper from "../assets/wallpapers/folder-wallpaper.jpg";

import About from "./folders/About";
import Projects from "./folders/Projects";
import Resume from "./folders/Resume";
import Skills from "./folders/Skills";

import green from "../assets/folders/skills-certifications.png";
import white from "../assets/folders/projects.png";
import black from "../assets/folders/resume.png";
import pink from "../assets/folders/about.png";

function FolderStack() {
  const [activeFolder, setActiveFolder] = useState(null);

  if (activeFolder === "about") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <About onBack={() => setActiveFolder(null)} />
      </motion.div>
    );
  }

  if (activeFolder === "resume") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Resume onBack={() => setActiveFolder(null)} />
      </motion.div>
    );
  }

  if (activeFolder === "projects") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Projects onBack={() => setActiveFolder(null)} />
      </motion.div>
    );
  }

  if (activeFolder === "skills") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Skills onBack={() => setActiveFolder(null)} />
      </motion.div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Wallpaper image={folderWallpaper} />

      <div className="absolute inset-0 bg-[#FFF7E8]/15 pointer-events-none" />

      <FolderLayer
        image={green}
        name="skills"
        title="Skills & Certifications"
        titleClassName="
          top-[38px]
          left-[245px]
          text-[#FFFFFF]
        "
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        className="top-[-3%] w-[1450px] z-10"
      />

      <FolderLayer
        image={white}
        name="projects"
        title="Projects"
        titleClassName="
          top-[40px]
          left-[310px]
          text-[#C11C84]
        "
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        className="top-[11%] w-[1450px] z-20"
      />

      <FolderLayer
        image={black}
        name="resume"
        title="Resume"
        titleClassName="
          top-[40px]
          right-[280px]
          text-[#F7F4E9]
        "
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        className="top-[28%] w-[1450px] z-30"
      />

      <FolderLayer
        image={pink}
        name="about"
        title="About Me"
        titleClassName="
          top-[43px]
          left-[305px]
          text-[#FFEF00]
        "
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        className="top-[50%] w-[1450px] z-40"
      />
    </div>
  );
}

export default FolderStack;