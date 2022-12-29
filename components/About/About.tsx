import React, { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer';
import { SiNextdotjs, SiSolidity, SiTypescript, SiDocker, SiTailwindcss, SiElectron } from 'react-icons/si';
import TechIcon from './TechIcon';
import ImageSection from './ProfileImage';
let text = 'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.'


export default function About() {
  const [display, setDisplay] = useState(false);
  const anim = 'transition-all ease-out '
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }}  className={`duration-700 mb-20 2xl:px-5 transition-up ${display ? 'translate-in' : 'translate-out'}`}>
      <h1 className='text-light-200 font-chivo font-bold z-40 mb-8 text-2xl sm:text-4xl' >About Me<span className='text-light-100'>.</span></h1>
      <div className='flex flex-wrap md:flex-nowrap justify-between'>
        <div className='text-light-200 text-md font-chivo'>
          <h2>{text}</h2>
          <h2 className='mt-8 text-light-200 font-bold text-lg font-poppins'>Technologies I{`'`}ve worked with recently<span className='text-light-100'>:</span></h2>
          <div className='flex flex-wrap mt-4 pr-2 '>
            {/* <div className='flex items-center mr-4'>
              <div className='w-10 bg-light-100' style={{ height: '2px' }}>
              </div>
            </div> */}
            {/* <div className='flex items-center mr-4'>
              <div className='w-4 bg-light-100' style={{ height: '2px' }}>
              </div>
            </div> */}
            <TechIcon Icon={SiNextdotjs} title={'Next.js'}></TechIcon>
            <TechIcon Icon={SiElectron} title={'Electron'}/>
            <TechIcon Icon={SiSolidity} title={'Solidity'}></TechIcon>
            <TechIcon Icon={SiTailwindcss} title={'Tailwindcss'}></TechIcon>
            <TechIcon Icon={SiTypescript} title={'Typescript'}></TechIcon>
            <TechIcon Icon={SiDocker} title={'Docker'}></TechIcon>
           
          
            {/* <div className='2xl:flex items-center mr-4 hidden '>
              <div className='w-44 bg-light-100' style={{ height: '2px' }}>
              </div>
            </div> */}
          </div>
        </div>

        <ImageSection />
      </div>
    </InView>
  )
}


