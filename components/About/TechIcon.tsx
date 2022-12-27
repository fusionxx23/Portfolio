import React from 'react'

export default function TechIcon({ Icon, title }: { Icon: any, title: string }) {
    return (
        <div className='mr-4 my-2 flex flex-col items-center'>
            <h1 className='mb-1 text-xs md:text-md'>{title}</h1>
            <Icon className='text-light-100' size={20} />
        </div>
    )
}