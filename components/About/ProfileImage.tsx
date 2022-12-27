import { useState } from "react";
import Image from 'next/image'; 
import sun from '../../public/images/sun_pfp.png'

export default function ImageSection() {
    const [hovering, setHovering] = useState(false);
    return (
      <div className={' w-full flex justify-start sm:ml-10 mt-5 sm:w-64 sm:h-64 md:mt-0 md:w-80 md:h-96'}>
        <div onMouseOver={() => { setHovering(true) }} onMouseOut={() => { setHovering(false) }} className='z-20 w-48 md:w-64 lg:w-72 2xl:w-80 relative'>
          <Image className='rounded-full relative z-10 ' src={sun} alt={''}></Image>
          <div 
      className={`absolute z-0 cursor-pointer top-3 left-3  sm:top-5 sm:left-5 ${hovering ? 'top-2 left-2' : ''} transition-all hover:top-2 border-light-100 border-2 w-48 h-48 md:h-64 md:w-64 lg:h-72 lg:w-72 2xl:w-80 2xl:h-80 rounded-full`}></div>
        </div>
      </div>
    )
  }