import Image from 'next/image';
import Link from 'next/link';
import TextRunner from './TextRunner'
import BGCircle from './BGCircle';
type Props = {}

const Hero = (props: Props) => {
  return (

    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BGCircle/>
        <Image
        src="/profile-md.jpg"
        width={120}
        height={120}
        alt="Picture of the author"
        className='relative rounded-full mx-auto object-cover h-[130px] w-[130px] md:h-[156px] md:w-[156px]'
        />
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-widest'>
            computer science engineer
        </h2>
        <div className='min-h-[100px] ml-5'>
            <TextRunner/>
        </div>
        <div className='pt-5'>
          <Link href="#about"><button className='heroButton'>About</button></Link>
          <Link href="#skills"><button className='heroButton'>Skills</button></Link>
          <Link href="#projects"><button className='heroButton'>Projects</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Hero