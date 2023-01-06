import React, { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer';
import { SiNextdotjs, SiSolidity, SiTypescript, SiDocker, SiTailwindcss, SiElectron, SiNodedotjs, SiFirebase } from 'react-icons/si';
import TechIcon from './TechIcon';
import ImageSection from './ProfileImage';
let text = `Hello! I began my developer journey by creating scripts to automate tasks in Chrome, and since have expanded my skills to include desktop, mobile, backend development. As a full stack software engineer, I specialize in creating immersive and intuitive digital experiences. Seeking a challenging and dynamic opportunity to use my skills and experience to make a meaningful impact.`

export default function About() {
  const [display, setDisplay] = useState(false);
  const anim = 'transition-all ease-out '
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }} id="About" className={`duration-700 mb-20 2xl:px-5 transition-up ${display ? 'translate-in' : 'translate-out'}`}>
      <h1 className='text-light-200 font-chivo font-bold z-40 mb-8 pt-28 text-2xl sm:text-4xl' >About Me<span className='text-light-100'>.</span></h1>
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
            <TechIcon Icon={SiNodedotjs} title={'Node.js'}></TechIcon>
            <TechIcon Icon={SiTailwindcss} title={'Tailwindcss'}></TechIcon>
            <TechIcon Icon={SiTypescript} title={'Typescript'}></TechIcon>
            <TechIcon Icon={SiFirebase} title={"Firebase"}/>
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


