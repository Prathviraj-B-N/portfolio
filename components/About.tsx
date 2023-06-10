"use client";

import { urlFor } from "@/helper/sanityHelper";
import { PageInfo } from "@/helper/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo : PageInfo[]
};

const About = ({pageInfo}: Props) => {
  const pageData = pageInfo[0];
  return (
    <div className="h-screen flex flex-col relative text-center max-w-7xl px-10 gap-5 mx-auto  items-center">
      <h3 className="relative top-24 uppercase tracking-[10px] text-slate-400 text-2xl flex items-center justify-center w-screen">
        About
      </h3>

      <div className="flex md:flex-row flex-col gap-1 md:gap-4 items-center justify-center relative top-24 md:py-16 w-full">

      <motion.img
        src={urlFor(pageData.profilePic).url()}
        className="mx-auto md:mb-0 w-40 h-40 relative items-center rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"
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
      className="relative px-0 md:px-10 w-screen">
        <h4 className="text-2xl py-6 md:text-4xl font-semibold ">Here is a <span className="underline decoration-emerald-400/80">little</span> background</h4>
        <p className="px-10 text-xs sm:text-sm md:text-lg text-justify indent-9 leading-relaxed ">{pageData.backgroundInformation}</p>
      </motion.div>
      </div>
    </div>
  );
};

export default About;
