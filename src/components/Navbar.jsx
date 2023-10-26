import React from 'react'
import { links } from '../data'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const Navbar = () => {
    const logoRef = useRef(null);
    const navLinkRef = useRef(null);
    const tl = gsap.timeline()
    useEffect(() => {
        tl.from(["#logo", "#navLinks"], {
            y: -100,
            duration: 1.5,
            delay: 0.3,
            // stagger: 0.5,
            yoyo: true,
            ease: "bounce.out"
        })

    }, [])
    return (
        <nav className='bg-emerald-100 '>
            <div className='flex flex-col mx-auto px-8 py-4 max-w-7xl sm:flex-row sm:gap-x-16 sm:items-baseline sm:py-8  '>
                <h1 className='text-4xl font-bold ' ref={logoRef} id='logo' >Web<span className='text-emerald-600'>Dev</span></h1>
                <div className='flex gap-x-4 items-center sm:py-3 ' ref={navLinkRef} id='navLinks'>
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
