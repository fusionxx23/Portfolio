import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import PurpleSpan from './PurpleSpan';
import { BsFillTerminalFill } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import work from '../public/images/work/asteria-aio.png';
import zinlabs from '../public/images/work/zinlabs.png';
import beefy from '../public/images/work/beefy-blokes.png';
import { SiNextdotjs, SiSolidity, SiTypescript, SiDocker, SiTailwindcss, SiElectron, SiReact } from 'react-icons/si';
import Image, { StaticImageData } from 'next/image';
export default function Work() {
  const [display, setDisplay] = useState(false);
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }} className={`duration-700 h-screen md:h-60screen 2xl:px-10 transition-up ease-out 
      ${display ? ' opacity-100 translate-x-0 translate-y-0 ' : 'opacity-0 translate-y-3 translate-x-3 md:translate-y-24 md:translate-x-24'}`}>
      <h1 className='text-light-200 font-chivo font-bold z-40 mb-8 text-2xl sm:text-4xl md:text-center'>Previous Projects<PurpleSpan text={'.'} /></h1>
      {/* Projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-2 '>
        <Project title={'ASTERIA-AIO'} icons={[SiReact, SiElectron, SiTypescript, SiTailwindcss]} img={work}></Project>
        <Project title={'ZINLABS'} icons={[SiNextdotjs, SiTypescript, SiTailwindcss, SiSolidity, SiDocker]} img={zinlabs}></Project>
        <Project title={'BEEFY-BLOKES'} icons={[SiNextdotjs, SiTypescript, SiTailwindcss]} img={beefy}></Project>
        <Project title={'BUTERIN-CARDS'} icons={[SiSolidity, SiNextdotjs, SiTypescript, SiTailwindcss]} img={work}></Project>
      </div>
    </InView>
  )
}


function Project({ title, icons, img }: { title: string, icons: any[], img: StaticImageData }) {
  const [imageHover, setImgHover] = useState(false);
  return (
    <div className='flex justify-center'>
      <section className='w-full h-108 flex flex-col justify-between my-2 sm:m-4 bg-dark-0 rounded-md p-4 sm:p-6'>
        <div className='flex justify-between'>
          <BsFillTerminalFill size={20} className='text-white hover:text-light-100' />
          <div className='text-light-200'>
            <GoLinkExternal className='cursor-pointer' size={20} />
          </div>
        </div>
        <h1 className='text-light-200 mt-4 text-2xl font-chivo hover:text-light-100'>{title}</h1>
        <div className='mt-4 relative cursor-pointer'>
          {/* Purple BG */}
          <div onMouseOver={() => { setImgHover(true) }}
            onMouseLeave={() => { setImgHover(false) }}
            className="absolute transition-all z-10 ease-in h-full w-full hover:bg-transparent bg-light-100 bg-opacity-40 rounded-md">
          </div>
          <Image className='rounded-md z-0 transition-all ease-in' src={img} alt={title}
            style={{ filter: `${imageHover ? '' : 'grayscale(100%)'}` }} />
        </div>
        <div className=" flex flex-col">
          <div className='font-chivo text-light-300 text-sm'>
            <p>Lorem ipsum text about something about the project at hand. The Division of two square numbers are a random number info.</p>
          </div>
          <div className='flex'>
            {icons.map((I, i) => <I className='text-light-200 m-2' size={20} key={i} />)}
          </div>
        </div>

      </section>
    </div>

  )
}
