"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <article className="flex m-5 flex-col relative rounded-lg items-center space-y-1 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#e93939] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      <Image
        src="/letter-p.png"
        alt="project-logo"
        height={200}
        width={200}
        className="w-14 h-14 rounded-full md:rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center"
      />

      <div className="px-0 md:px-10 text-left">
        <h4 className="text-4xl font-light">Project Title</h4>
        <p className="font-bold text-2xl mt-1">Tech</p>
        <div className="flex space-x-2 my-2">
          <img src="/letter-p.png" className="h-10 w-10 rounded-full " alt="" />
          <img src="/letter-p.png" className="h-10 w-10 rounded-full " alt="" />
          <img src="/letter-p.png" className="h-10 w-10 rounded-full " alt="" />
          <img src="/letter-p.png" className="h-10 w-10 rounded-full " alt="" />
        </div>
        <p className="uppercase py-5 text-slate-400">start work ... - Ended ...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
