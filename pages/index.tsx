import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader/Loader'
import Landing from '../components/Landing'
import { useEffect, useState } from 'react'
import About from '../components/About/About'
import SocialsRight from '../components/SocialsRight'
import SocialsLeft from '../components/SocialsLeft'
import Work from '../components/Work'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => { setLoaded(true) }, 3200);
    } else {
      window.document.querySelector('body')?.classList.remove('overflow-y-hidden')
      window.document.querySelector('body')?.classList.add('overflow-y-scroll')
    }
  }, [loaded])
  return (
    <>
      <SocialsRight display={false}></SocialsRight>
      <SocialsLeft display={loaded} />
      <Loader display={loaded} />
      <div className='bg-dark-300 w-full'>
        <Navbar display={loaded}></Navbar>
        <div className='w-full px-7 sm:px-28 md:px-20 lg:px-48 xl:px-80 2xl:px-100 min-h-fit overflow-x-hidden ' id='mainPage'>

          <Landing display={loaded} />
          <About></About>
          <Work/>
          <Contact/>
        </div>

      </div>
    </>

  )
}
