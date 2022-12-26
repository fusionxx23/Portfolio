import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader/Loader'
import Landing from '../components/Landing'
import { useEffect, useState } from 'react'
import About from '../components/About'
import SocialsRight from '../components/SocialsRight'
import SocialsLeft from '../components/SocialsLeft'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [scroll500, setScroll500] = useState(false);
  const handleScroll = (e: any) => {
    console.log(e.target);
    const scrollPosition = e.target.scrollTop; // => scroll position
    console.log(scrollPosition);
    if (scrollPosition > 499) {
      console.log('ran here scum');
      setScroll500(true);
    }
    console.log(scrollPosition);
  };
  useEffect(() => {

    if (!document)
      return;
    let main = document.querySelector('#mainPage');
    if (main) {
      main.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (main)
        main.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!loaded) {
      setTimeout(() => { setLoaded(true) }, 3200);
    }
  }, [loaded])
  return (
    <>
      <SocialsRight></SocialsRight>
      <SocialsLeft />
      <Loader display={loaded} />
      <div className='bg-dark-300 w-full'>

        <Navbar display={loaded}></Navbar>
        <div className='w-full px-7 sm:px-28 md:px-20 lg:px-48 xl:px-80 2xl:px-108 h-screen overflow-y-auto overflow-x-hidden ' id='mainPage'>

          <Landing display={loaded} />
          <About display={scroll500}></About>
        </div>

      </div>

    </>

  )
}
