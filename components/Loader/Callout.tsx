import React from 'react'

export default function Callout({display} :{display: boolean}) {
  return (
    <div className={`callout ${!display ? '' : 'hidden'}`}>
      <div className="callout-container shrink">
        <h1 className="call text-3xl">TT</h1>
      </div>
    </div>
  )
}
