"use client";

import { urlFor } from "@/sanityHelper";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo : PageInfo[]
};

const About = ({pageInfo}: Props) => {
  const pageData = pageInfo[0];
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly mx-auto items-center overflow-y-scroll">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-slate-400 text-2xl">
        About
      </h3>
      <motion.img
        src={urlFor(pageData.profilePic).url()}
        className="mx-auto md:mb-0 flex-shrink-0 w-40 h-40 relative top-28 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      />
      <motion.div
              initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
      className="space-y-5 relative top-24 md:top-20 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold ">Here is a <span className="underline decoration-emerald-400/80">little</span> background</h4>
        <p className="text-sm md:text-lg text-justify indent-9 leading-relaxed overflow-y-scroll">{pageData.backgroundInformation}</p>
      </motion.div>
    </div>
  );
};

export default About;
