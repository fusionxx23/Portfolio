import React from 'react'
import useSidebarProvider from '../libs/hooks/Sidebar'

export default function Sidebar() {
  const {sidebar} = useSidebarProvider(); 
  return (
    <div className={`right-0 top-0 fixed duration-300 z-30 transition-all ease-out ${sidebar ?  'w-60' :'w-0' } h-screen bg-dark-100`}>

    </div>
  )
}
