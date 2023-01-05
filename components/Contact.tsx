import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import PurpleSpan from './PurpleSpan'
import { TbBrandNextjs  } from 'react-icons/tb';
export default function Contact() {
  const [display, setDisplay] = useState(false);
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }} id="Contact" className={`mt-28 duration-700 pt-40 sm:pt-0 2xl:px-10 transition-up ease-out 
      ${display ? ' translate-in ' : 'opacity-0 translate-y-1 translate-x-1 md:translate-y-4 md:-translate-x-4'}`}>
      <h1 className='content-header text-center'>
        Contact Me<PurpleSpan text='.' />
      </h1>
      <div className="flex justify-center">
        <p className='w-72 text-light-300 text-center font-chivo'>Currently looking for new work, short term or long term.  Contact me through email or discord, thanks! </p>
      </div>
      {/* Socials */}
      <div>

      </div>


      <div className='mt-32 font-chivo flex flex-col items-center text-light-400 text-center mb-5 text-sm'>
        <span className='inline-block'>Built with Next.js<span><TbBrandNextjs size={20} className='inline-block ml-2' /></span></span>

      </div>
    </InView>
  )
}


