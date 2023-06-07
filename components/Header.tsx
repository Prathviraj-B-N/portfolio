"use client";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion";

type Props = {};

function Header({}: Props) {
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
      <SocialIcon url="https://twitter.com/Prathviraj_bn"  fgColor="gray" bgColor="transparent"/>
      <SocialIcon url="https://www.instagram.com/prath.v1/"  fgColor="gray" bgColor="transparent"/>
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
        <a href="#contact">Contact Me</a>
        <p className="hidden md:inline-flex text-sm text-gray-400">getInTouch();</p>
      </motion.div>
    </header>
  );
}

export default Header;
