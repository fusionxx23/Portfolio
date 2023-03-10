import React from 'react'

export default function NavAnimatedIcon({open}: {open: boolean}) {
    return (
        <svg width="35"  height="35" viewBox="0 0 286 286" fill="none" xmlns="http://www.w3.org/2000/svg">   
                <rect className={`nav-transition ${open ? '' : 'Rectangle1'}`} id="Rectangle1" x="56" y="51" width="73" height="21" rx="0"
                    transform="rotate(45 59 51)" fill="white" />
                <rect className={`nav-transition ${open ? '' : 'Rectangle2'}`} id="Rectangle2" x="50" y="221" width="242" height="21" rx="0"
                    transform="rotate(-45 50 221)" fill="white" />
                <rect className={`nav-transition ${open ? '' : 'Rectangle3'}`} id="Rectangle3" x="106" y="98" width="175" height="21" rx="0"
                    transform="rotate(45 106 98)" fill="white" />
        </svg>
    )
}
