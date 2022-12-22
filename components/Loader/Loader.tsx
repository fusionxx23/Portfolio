import React from 'react'
import Callout from './Callout'
import Hex from './Hex'

export default function Loader({display}: {display: boolean}) {
    return (
        <div className={`h-screen absolute w-full ${display ? 'h-0' : 'z-40'}`}>
            <Hex display={display} />
            <Callout display={display} />
        </div>
    )
}
