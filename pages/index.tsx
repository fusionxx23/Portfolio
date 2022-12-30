import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader/Loader'
import Landing from '../components/Landing'
import { useEffect, useState } from 'react'
import About from '../components/About/About'
import SocialsRight from '../components/SocialsRight'
import SocialsLeft from '../components/SocialsLeft'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Sidebar from '../components/Sidebar'
import SidebarProvider from '../libs/hooks/Sidebar/SidebarProvider'
import useSidebarProvider from '../libs/hooks/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const { sidebar } = useSidebarProvider();
  const b = window.document.querySelector('body')?.classList; 
  const removeHidden = () => {b?.remove('overflow-y-hidden')}
  const removeScroll = () => {b?.remove('overflow-y-scroll')}
  const addScroll = () => {b?.add('overflow-y-scroll')}
  const addHidden = () => {{b?.add('overflow-y-hidden')}}

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => { setLoaded(true) }, 3200);
    } else {
      removeHidden(); 
      addScroll(); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded])
  useEffect(() => {
    if(sidebar) {
      removeScroll(); 
      addHidden(); 
    } else {
      removeHidden(); 
      addScroll(); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebar])
  console.log((loaded && !sidebar)); 
  return (
    <>
      <Sidebar />
      <SocialsRight display={false}></SocialsRight>
      <SocialsLeft display={loaded} />
      <Loader display={loaded} />
      <div className='bg-dark-300 w-full'>
        <Navbar display={loaded}></Navbar>
        <div className='w-full px-7 sm:px-28 md:px-20 lg:px-48 xl:px-80 2xl:px-100 min-h-fit overflow-x-hidden ' id='mainPage'>

          <Landing display={loaded} />
          <About></About>
          <Work />
          <Contact />
        </div>

      </div>

    </>
  )
}
