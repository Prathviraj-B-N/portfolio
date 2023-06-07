"use client";

import { motion } from 'framer-motion';

type Props = {}

const BGCircle = (props: Props) => {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
    }}
    transition={{
      duration: 2.5
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#1e6832]  rounded-full h-[200px] w-[200px] animate-ping mt-52 opacity-50"/>
        <div className="absolute border border-[rgb(62,59,59)] rounded-full h-[300px] w-[300px] animate-ping mt-52 opacity-30"/>
        <div className="absolute border border-[rgb(59,58,58)] rounded-full h-[500px] w-[500px] animate-ping mt-52 opacity-30"/>
        <div className="absolute border border-[#155727] rounded-full h-[650px] w-[650px] animate-pulse mt-52 opacity-20"/>
        <div className="absolute border border-[#2a362d] rounded-full h-[800px] w-[800px] animate-ping mt-52 opacity-25"/>
    </motion.div>
  )
}

export default BGCircle