import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import doodle from '../public/images/sun_pfp.png'
let text = 'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.'
export default function About({display} :{display: boolean}) {
  console.log(display, 'DISPLAY'); 
  const anim = 'transition-all ease-out '
  return (
    <div style={{minHeight:'200px'}} className={`duration-700 h-screen transition-all ${anim} ${display ? ' opacity-100 translate-x-0 translate-y-0 ' : 'opacity-0 translate-y-24 translate-x-24'}`}>
      <h1 className='text-light-200 font-chivo font-bold z-40 mb-10 text-2xl sm:text-4xl' >About Me</h1>
      <div className='flex flex-wrap justify-between'>
        <div className='text-light-200 text-sm'>
          <h2>{text}</h2>
        </div>
        <ImageSection />

      </div>

    </div>
  )
}


function ImageSection() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className={'ml-10 relative mt-5 w-64 h-64 md:mt-0 md:w-80 md:h-96'}>
      <div className={`absolute cursor-pointer top-5 left-5 ${hovering ? 'top-2 left-2' : ''} transition-all hover:top-2 border-light-100 border-2 w-48 h-48 md:w-80 md:h-80  rounded-full`}></div>
      <div onMouseOver={() => { setHovering(true) }} onMouseOut={() => { setHovering(false) }} className='z-20 absolute top-0 w-48 md:w-80'>
        <Image className='rounded-full' src={doodle} alt={''}></Image>
      </div>
    </div>
  )
}