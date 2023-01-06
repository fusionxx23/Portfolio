import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import PurpleSpan from '../PurpleSpan';
import { BsFillTerminalFill } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import {FiGithub} from 'react-icons/fi'; 
import work from '../../public/images/work/asteria-aio.png';
import zinlabs from '../../public/images/work/zinlabs.png';
import beefy from '../../public/images/work/beefy-blokes.png';
import { SiNextdotjs, SiSolidity, SiTypescript, SiDocker, SiTailwindcss, SiElectron, SiReact, SiNodedotjs, SiFirebase } from 'react-icons/si';

import { Project } from './Project';

let lorem = 'Lorem ipsum text about something about the project at hand. The Division of two square numbers are a random number info.'
let asteria = 'NFT Tools desktop app with: Eth Minting, Opensea Sniping, Magic Eden Sniping, Candy Machine Minting, Wallet Distributor and Consolidator, Wallet Creator, NFT Gallery, NFT Login, and more.'
let beefyBlokes = 'Beefy Blokes minting website made with NEXT.js.'
let zinlabsTxt = 'NFT Monitoring website made with NEXT.js and Node.  Monitor collection listings and sales, and create custom desktop notifications with parameters(price, rarity, traits). '
export default function Work() {
  const [display, setDisplay] = useState(false);
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }} id={'Work'}  className='mb-20'>
      <div className={`duration-700 sm:pt-0 transition-up ease-out
      ${display ? ' translate-in ' : 'opacity-0 translate-y-3 translate-x-3 md:-translate-y-6 md:-translate-x-6'} `}>
        <h1 className='content-header pt-20'>Previous Projects<PurpleSpan text={'.'} /></h1>
        {/* Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 mt-2 '>
          <Project title={'ASTERIA-AIO'} icons={[SiReact, SiElectron, SiTypescript, SiTailwindcss]} img={work} desc={asteria}></Project>
          <Project title={'ZINLABS'} icons={[SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss, SiSolidity, SiDocker, SiFirebase]} img={zinlabs} desc={zinlabsTxt} link={'https://zin-labs.xyz'}></Project>
          <Project title={'BEEFY-BLOKES'} icons={[SiNextdotjs, SiTypescript, SiTailwindcss]} img={beefy} desc={beefyBlokes} link={'https://beef-blokes.vercel.app'} github={'https://github.com/fusionxx23/Beef-Blokes'}></Project>
          <Project title={'BUTERIN-CARDS'} icons={[SiSolidity, SiNextdotjs, SiTypescript, SiTailwindcss]} img={work} desc={lorem}></Project>
        </div>
      </div>

    </InView>
  )
}



