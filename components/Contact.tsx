import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import PurpleSpan from './PurpleSpan'

export default function Contact() {
  const [display, setDisplay] = useState(false); 
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }} className={`mt-20 duration-700 pt-40 sm:pt-0 2xl:px-10 transition-up ease-out 
      ${display ? ' translate-in ' : 'opacity-0 translate-y-3 translate-x-3 md:translate-y-12 md:-translate-x-12'}`}>
        <h1 className='content-header'>
          Contact Me<PurpleSpan text='.'/>
        </h1>
      </InView>
  )
}


