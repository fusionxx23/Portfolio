import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import PurpleSpan from '../PurpleSpan';
import work from '../../public/images/work/asteria-aio.png';
import zinlabs from '../../public/images/work/zinlabs.png';
import beefy from '../../public/images/work/beefy-blokes.png';
import sage from '../../public/images/work/sage.png';
import buterin from '../../public/images/work/buterin.png';
import nftDiffusionImg from '../../public/images/work/nft-diffusion-site.png'
import { SiNextdotjs, SiSolidity, SiTypescript, SiDocker, SiTailwindcss, SiElectron, SiReact, SiNodedotjs, SiFirebase, SiGo } from 'react-icons/si';

import { Project } from './Project';

let lorem = 'Lorem ipsum text about something about the project at hand. The Division of two square numbers are a random number info.'
let nftDiffusion = "NFT Project that lets users mint thier own nft using Stable Diffusion."
let asteria = 'NFT Tools desktop app with: Eth Minting, Opensea Sniping, Magic Eden Sniping, Candy Machine Minting, Wallet Distributor and Consolidator, Wallet Creator, NFT Gallery, NFT Login, and more.'
let beefyBlokes = 'Beefy Blokes minting website made with NEXT.js.'
let SageBet = `SageBet is an on-chain prediction market built on Arbitrum and Ethereum's Virtual Machine.`
let Buterin = `NFT Mining Project.`
let zinlabsTxt = 'NFT Monitoring website made with NEXT.js and Node.  Monitor collection listings and sales, and create custom desktop notifications with parameters(price, rarity, traits). '
export default function Work() {
  const [display, setDisplay] = useState(false);
  return (
    <InView onChange={(inView, _entry) => {
      if (inView) {
        setDisplay(true);
      }
    }} id={'Work'} className='mb-20'>
      <div className={`duration-700 sm:pt-0 transition-up ease-out
      ${display ? ' translate-in ' : 'opacity-0 translate-y-3 translate-x-3 md:-translate-y-6 md:-translate-x-6'} `}>
        <h1 className='content-header pt-20'>Previous Projects<PurpleSpan text={'.'} /></h1>
        {/* Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 mt-2 '>
          <Project title={'SAGE-BET'} icons={[SiNextdotjs, SiTypescript, SiSolidity]}
            img={sage}
            desc={SageBet}
            link={'https://sage.bet/'} />

          <Project title={'BUTERIN-CARDS'} icons={[SiNextdotjs, SiTypescript, SiSolidity]}
            img={buterin}
            desc={Buterin}
            link='https://www.buterin.cards/' />

          <Project title={'ASTERIA-AIO'}
            icons={[SiReact, SiElectron, SiTypescript, SiTailwindcss]}
            img={work}
            desc={asteria}></Project>

          <Project title={'ZINLABS'}
            icons={[SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss, SiSolidity, SiDocker, SiFirebase]}
            img={zinlabs}
            desc={zinlabsTxt}
            link={'https://zin-labs.xyz'}></Project>

          <Project title={'BEEFY-BLOKES'} icons={[SiNextdotjs, SiTypescript, SiTailwindcss]} img={beefy} desc={beefyBlokes} link={'https://beef-blokes.vercel.app'} github={'https://github.com/fusionxx23/Beef-Blokes'}></Project>
          <Project title={'NFT-DIFFUSION'} icons={[SiSolidity, SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiGo]} github={'https://github.com/Nft-Diffusion'} img={nftDiffusionImg} desc={nftDiffusion}></Project>
        </div>
      </div>

    </InView>
  )
}



