import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxCaretLeft } from 'react-icons/rx'
import useSidebarProvider from '../libs/hooks/Sidebar'
import NavAnimatedIcon from './NavAnimatedIcon';


export default function Navbar({ display }: { display: boolean }) {
    const { setSidebar, sidebar } = useSidebarProvider();
    const [isScrolled, setIsScrolled] = useState(false); 
    let anim = `${display ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 '}`
    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        if(scrollPosition > 0 && !isScrolled) {
            setIsScrolled(true); 
        }
        if(scrollPosition === 0) {
            setIsScrolled(false); 
        }
    };
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div onClick={() => { setSidebar(!sidebar) }}
                className={`sm:hidden  origin-center ${anim} transition-up fixed right-3 top-0 pt-2 z-40 text-light-200`}>
                <NavAnimatedIcon open={sidebar} />
            </div>
            {sidebar && <div className='w-screen h-screen fixed z-10 bg-black bg-opacity-40'>
            </div>}

            <div className={`fixed top-0  w-full ${isScrolled ? 'drop-shadow-[0_5px_5px_rgba(0,0,0,0.59)]' : ''} sm:pb-0 z-10 duration-300 bg-dark-300 transition-all ${display ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 '} `}>
                <div className="flex justify-between items-center px-4 md:px-20 ">
                    <Link href={'#Landing'}>
                        <div className='cursor-pointer'>
                            <h1 className='text-light-100 text-3xl py-2' >TT</h1>
                        </div>
                    </Link>

                    <div className='sm:flex items-center hidden text-light-200 py-4'>
                        <NavLink title={'About'} link={'#About'}></NavLink>
                        {/* <NavLink title={'Experience'} link={'#Experience'}></NavLink> */}
                        <NavLink title={'Work'} link={'#Work'}></NavLink>
                        <NavLink title={'Contact'} link={'#Contact'}></NavLink>
                        <div className='px-4 ml-3 text-light-100 border-2 py-2 hover:bg-100 cursor-pointer hover:bg-opacity-25 rounded-md border-light-100 flex items-center justify-center'>
                            Resume
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


function NavLink({ title, link }: { title: string, link: string }) {

    return (
        <Link className='mx-1 lg:mx-3 font-chivo' href={link}>
            <h1 className='hover:text-light-100 text-lg cursor-pointer'>{title}<span className='text-light-100'>.</span></h1>
        </Link>
    )
}