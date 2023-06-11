"use client";

import { urlFor } from "@/helper/sanityHelper";
import { Project } from "@/helper/typings";
// import { motion } from "framer-motion";
// import Image from "next/image";

type Props = {
  project: Project
};

const ProjectCard = ({project}: Props) => {
  // console.log(project)
  return (
    <article className="flex m-5 flex-col relative rounded-lg items-center space-y-1 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-black/90 p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      {/* <Image
        src={urlFor(project.projectImage).url()}
        alt="project-logo"
        height={200}
        width={200}
        className="w-14 h-14 rounded-full md:rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center"
      /> */}

      <div className="px-0 md:px-10 text-left">
        <h4 className="text-4xl font-light">{project.projectTitle}</h4>
        <p className="font-bold text-2xl mt-1">{project.technology}</p>
        <div className="flex space-x-2 my-2">
          {project.techStack.map((tech)=>
            <img key={tech._id} src={urlFor(tech.image).url()} className="md:h-10 md:w-10 h-5 w-5 rounded-full " alt="" />
          )}
           </div>
        <p className="uppercase py-5 text-slate-400">{project.dateStarted} to <span/>
        {(project.isOngoing)?<span> present</span>:project.dateEnded}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {project.points.map((point,idx)=>
            <li key={idx}>{point}</li>
          )}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
