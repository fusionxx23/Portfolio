import Link from 'next/link';
import React from 'react'
import useSidebarProvider from '../libs/hooks/Sidebar'

export default function Sidebar() {
  const { sidebar, setSidebar } = useSidebarProvider();
  const closeSidebar = () => setSidebar(false); 
  return (
    <div className={`right-0 top-0 fixed duration-300 z-30 transition-all ease-out overflow-hidden ${sidebar ? 'w-60' : 'w-0'} h-screen bg-dark-100`}>
      <div className='h-full w-full flex flex-col items-center mt-40'>

        <SidebarLink title={'ABOUT'} link={'#About'} onClick={closeSidebar}/>
        <SidebarLink title={'WORK'} link={'#Work'} onClick={closeSidebar}/>
        <SidebarLink title={'CONTACT'} link={'#Contact'} onClick={closeSidebar}/>
        <div className='text-light-100 border border-light-100 px-4 py-2 rounded-md mt-4'>
          <h1>Resume</h1>
        </div>
      </div>
    </div>
  )
}

function SidebarLink({title, link, onClick} : {title: string, link: string, onClick?: () => void}) {
  return (
    <Link onClick={onClick} href={link}>
      <h1 className='text-light-100 my-5 font-chivo font-bold text-xl'>{title}</h1>
    </Link>
  )
}
