import Link from 'next/link'
import React from 'react'

export default function Navbar({ display }: { display: boolean }) {
    return (

        <div className={`absolute top-0 w-full z-10 duration-500 transition-all ${display ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 '} `}>
            <div className="flex justify-between items-center px-4 md:px-20 pt-4">
                <div className='cursor-pointer'>
                    <h1 className='text-light-100 text-3xl' >TT</h1>
                </div>
                <div className='sm:flex hidden text-light-200 items-center'>
                    <NavLink title={'About'}></NavLink>
                    <NavLink title={'Experience'}></NavLink>
                    <NavLink title={'Work'}></NavLink>
                    <NavLink title={'Contact'}></NavLink>
                    <div className='px-4 ml-3 text-light-100 border-2 py-2 hover:bg-100 cursor-pointer hover:bg-opacity-25 rounded-md border-light-100 flex items-center justify-center'>
                        Resume
                    </div>
                </div>
                <div className='sm:hidden'>Hamburger</div>
            </div>
        </div>

    )
}


function NavLink({ title }: { title: string }) {
    return (
        <Link className='mx-1 lg:mx-3 font-chivo' href={''}>
            <h1 className='hover:text-light-100 text-sm  md:text-lg cursor-pointer'>{title}<span className='text-light-100'>.</span></h1>

        </Link>
    )
}