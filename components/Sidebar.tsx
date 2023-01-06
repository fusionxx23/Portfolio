import React from 'react'
import useSidebarProvider from '../libs/hooks/Sidebar'

export default function Sidebar() {
  const {sidebar} = useSidebarProvider(); 
  return (
    <div className={`right-0 top-0 fixed duration-300 z-30 transition-all ease-out overflow-hidden ${sidebar ?  'w-60' :'w-0' } h-screen bg-dark-100`}>
      <div className='h-full w-full flex flex-col items-center mt-40'>
          <h1 className='text-light-100 my-5 font-chivo font-bold text-xl'>ABOUT</h1>
          <h1 className='text-light-100 my-5 font-chivo font-bold text-xl'>WORK</h1>
          <h1 className='text-light-100 my-5 font-chivo font-bold text-xl'>CONTACT</h1>
          <div className='text-light-100 border border-light-100 px-4 py-2 rounded-md mt-4'>
            <h1>Resume</h1>
          </div>
      </div>
    </div>
  )
}
