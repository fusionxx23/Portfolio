import React from 'react'

export default function Landing({ display }: { display: boolean }) {
    const c = '-translate-y-6 opacity-100'
    const dis = display ? c : 'opacity-0'
    const anim = 'transition-all ease-out duration-500'
    return (
        <main className={`flex font-poppins justify-center text-light-100  `} style={{height:'1000px'}}>
            <div className={`w-full mt-40 md:mt-72`}>
                <h2 className={`mb-5 delay-500 text-md md:text-lg pl-1 ${dis} ${anim} font-chivo`}>Hi, my name is</h2>
                <h1 className={`text-4xl md:text-7xl delay-700 mb-3 font-bold ${dis} ${anim}`} style={{ color: '#ccd6f6' }}>Travis Tarpley</h1>
                <h3 className={`text-3xl md:text-6xl delay-1000  ${dis} ${anim}`} style={{ color: '#8892b0' }}>Im a Full-Stack Dapp Developer</h3>
                <h4 className={`text-sm md:text-md md:w-1/2 mt-7  font-chivo text-light-400 delay-1000 ${dis} ${anim}`}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</h4>
                <div className={`flex mt-14 delay-1000 font-chivo ${dis} ${anim}`} >
                    <div className='px-6 py-3 border border-light-100 rounded-md cursor-pointer hover:bg-light-100 hover:bg-opacity-30'>
                        <h1 className='text-md'>Check out my work!</h1>
                    </div>
                </div>

            </div>
        </main>
    )
}
