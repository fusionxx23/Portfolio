import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import doodle from '../public/images/sun_pfp.png'
import { InView, useInView } from 'react-intersection-observer';
import { SiNextdotjs, SiSolidity, SiTypescript, SiDocker, SiTailwindcss } from 'react-icons/si';
let text = 'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.'


export default function About() {
  const [display, setDisplay] = useState(false);
  const anim = 'transition-all ease-out '
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);

      }
    }} style={{ minHeight: '200px' }} className={`duration-700 h-screen md:px-10 transition-up ${anim} ${display ? ' opacity-100 translate-x-0 translate-y-0 ' : 'opacity-0 translate-y-24 translate-x-24'}`}>
      <h1 className='text-light-200 font-chivo font-bold z-40 mb-8 text-2xl sm:text-4xl' >About Me<span className='text-light-100'>.</span></h1>
      <div className='flex flex-wrap md:flex-nowrap justify-between'>
        <div className='text-light-200 text-md font-chivo'>
          <h2>{text}</h2>
          <h2 className='mt-8 text-light-200 font-bold text-lg font-poppins'>Technologies I{`'`}ve worked with recently<span className='text-light-100'>:</span></h2>
          <div className='flex flex-wrap mt-2 px-2'>
            <div className='flex items-center mr-4'>
              <div className='w-10 bg-light-100' style={{ height: '2px' }}>
              </div>
            </div>

            <TechIcon Icon={SiNextdotjs} title={'Next.js'}></TechIcon>
            <TechIcon Icon={SiSolidity} title={'Solidity'}></TechIcon>
            <TechIcon Icon={SiTypescript} title={'Typescript'}></TechIcon>
            <TechIcon Icon={SiDocker} title={'Docker'}></TechIcon>
            <TechIcon Icon={SiTailwindcss} title={'Tailwindcss'}></TechIcon>
            <div className='flex items-center mr-4'>
              <div className='w-10 bg-light-100' style={{ height: '2px' }}>
              </div>
            </div>
          </div>
        </div>

        <ImageSection />
      </div>
    </InView>
  )
}

function TechIcon({ Icon, title }: { Icon: any, title: string }) {
  return (
    <div className='mr-4 my-2 flex flex-col items-center'>
      <h1 className='mb-1 text-xs md:text-md'>{title}</h1>
      <Icon className='text-light-100' size={20} />
    </div>
  )
}

function ImageSection() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className={'ml-10 mt-5 w-64 h-64 md:mt-0 md:w-80 md:h-96'}>
      <div onMouseOver={() => { setHovering(true) }} onMouseOut={() => { setHovering(false) }} className='z-20 w-48 md:w-80 relative'>
        <Image className='rounded-full relative z-10' src={doodle} alt={''}></Image>
        <div className={`absolute z-0 cursor-pointer top-5 left-5 ${hovering ? 'top-2 left-2' : ''} transition-all hover:top-2 border-light-100 border-2 w-48 h-48 md:w-80 md:h-80  rounded-full`}></div>
      </div>
    </div>
  )
}