import React, { useEffect, useState } from 'react'

export default function Hex({display}: {display: boolean}) {
    const [clock, setClock] = useState(false);

    useEffect(() => {
        if(!clock) {
            setTimeout(() => {setClock(true)}, 3000); 
        }
    }, [clock])
    return (
        <div className={`margin-0 z-0 h-screen flex items-center justify-center ${!display ? '' : 'hidden'} ${clock ? 'bg-transparent' : 'bg-dark-100'} transition-all ease-out duration-300`}>
            <svg id="hexContainer" className="shrink" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        pathLength="10"
                        id="Hexigon"
                        d="M52.9356 71.90L100.5 44.571L148.064 70.7953V123.205L100.5 149.429L52.9356 124.220V70.7953Z"
                    />
                </g>
            </svg>
        </div>
    )
}
