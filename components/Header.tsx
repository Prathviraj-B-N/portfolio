"use client";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion";
import { Social } from "@/helper/typings";

type Props = {
  socials: Social[]
};

function Header({socials}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }} 
      
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      
      transition={{duration: 1}}

      className="flex flex-row items-center cursor-pointer">
      {socials.map((social)=>{
        return <SocialIcon key={social._id} url={social['url']}  fgColor="gray" bgColor="transparent" className="hover:animate-pulse"/>
      })}
      </motion.div>

      <motion.div initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }} 
      
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      
      transition={{duration: 1}}>
        <a href="#contact" className="flex items-center justify-center gap-4">
        <img src="/email.png" className="w-8 h-8 bg-slate-300 rounded-full filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 animate-pulse relative top-2"/>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
