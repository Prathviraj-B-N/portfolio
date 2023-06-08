"use client";

import { urlFor } from '@/sanityHelper';
import { Skill } from '@/typings';
import {motion} from 'framer-motion';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

const Skill = ({directionLeft,skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer top-24'>
        <img 
        alt='img'
        src={urlFor(skill.image).url()}
        className='rounded-full border border-gray-500 object-cover w-14 h-14 filter xl:w-28 xl:h-28 md:w-16 md:h-16 group-hover:grayscale transition duration-200 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white w-14 h-14 md:w-16 md:h-16 xl:w-28 xl:h-28 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-md md:text-lg font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill