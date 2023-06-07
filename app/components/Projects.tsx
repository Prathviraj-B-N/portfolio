"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-slate-400 text-2xl">
        Projects
      </h3>
      <div className="realtive w-full flex space-x-5 overflow-x-scroll p-10 mt-[83px] md:mt-[120px] snap-x snap-mandatory">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
};

export default Projects;
