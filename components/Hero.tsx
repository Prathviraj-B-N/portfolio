import Image from 'next/image';
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
        <div className='min-h-[192px] ml-5'>
            <TextRunner/>
        </div>
        <div className='pt-5'>
          <a href="/#about" className='heroButton' >About</a>
          <a href="/#skills" className='heroButton' >Skills</a>
          <a href="/#projects" className='heroButton' >Projects</a>
        </div>
        </div>
    </div>
  )
}

export default Hero