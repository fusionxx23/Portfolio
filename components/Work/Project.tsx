import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsFillTerminalFill } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

export function Project({ title, icons, img, desc, github, link }: { title: string, icons: any[], img: StaticImageData, desc: string, link?: string, github?: string }) {
  const [imageHover, setImgHover] = useState(false);
  return (
    <div className='flex justify-center  hover:-translate-y-2 transition-all cursor-pointer'>
      <section className='w-full flex flex-col justify-start  my-4 md:my-2 md:m-4 bg-dark-0 rounded-md p-4 sm:p-6'>
        <div>
          <div className='flex justify-between'>
            <BsFillTerminalFill size={20} className='text-white hover:text-light-100' />

            <div className='text-light-200 flex'>
              {link && <Link rel="noopener noreferrer" target="_blank" href={link}><GoLinkExternal className='cursor-pointer mx-1 hover:text-light-100' size={20} /></Link>}
              {github && <Link rel="noopener noreferrer" target="_blank" href={github}><FiGithub className='cursor-pointer ml-1 hover:text-light-100' size={20} /></Link>}
            </div>

          </div>
          <h1 className='text-light-200 mt-4 text-2xl font-chivo hover:text-light-100'>{title}</h1>
        </div>


        <div className='flex justify-center'>
          <div className='mt-4 relative cursor-pointer'>
            {/* Purple BG */}
            <div onMouseOver={() => { setImgHover(true) }}
              onMouseLeave={() => { setImgHover(false) }}
              className="absolute transition-all z-10 ease-in h-full w-full hover:bg-transparent bg-light-100 bg-opacity-40 rounded-md">
            </div>
            <Image className='rounded-md z-0 transition-all ease-in ' src={img} alt={title}
              style={{ filter: `${imageHover ? '' : 'grayscale(100%)'}` }} />
          </div>
        </div>


        <div className=" flex flex-col">
          <div className='font-chivo text-light-300 text-sm mt-1'>
            <p>{desc}</p>
          </div>
          <div className='flex'>
            {icons.map((I, i) => <I className='text-light-200 m-2' size={20} key={i} />)}
          </div>
        </div>

      </section>
    </div>

  )
}