import React from 'react'
import { links } from '../data'

const Navbar = () => {
    return (
        <nav className='bg-emerald-100 '>
            <div className='flex flex-col mx-auto px-8 py-4 max-w-7xl sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 '>
                <h1 className='text-4xl font-bold ' >Web<span className='text-emerald-600'>Dev</span></h1>
                <div className='flex gap-x-4 items-center sm:py-3 '>
                    {
                        links.map(({ id, href, text }) => {
                            return <a key={id} href={href} className='text-xl cursor-pointer capitalize tracking-wide hover:text-emerald-600 duration-300'>{text}</a>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
