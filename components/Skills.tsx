"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/helper/typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-slate-400 text-2xlr">
        skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-slate-300 text-sm">
        Hover/Click over skills for progress
      </h3>

      <div className="grid grid-cols-4 gap-5 absolute top-24">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
