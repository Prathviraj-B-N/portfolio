"use client";

import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-slate-400 text-2xl">
        About
      </h3>
      <motion.img
        src="/profile.jpg"
        className="-mb-20 m-5 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
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
      className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">Here is a <span className="underline decoration-orange-200/50">little</span> background</h4>
        <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit earum unde sed totam minus et provident iste repellendus. Molestias ad adipisci corrupti voluptas voluptate. Obcaecati enim dignissimos laborum molestias.</p>
      </motion.div>
    </div>
  );
};

export default About;
