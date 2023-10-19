import React from 'react'
import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
const Hero = () => {
    return (
        <section className='bg-emerald-100 py-24'>
            <div className=' px-8 grid max-w-7xl mx-auto md:grid-cols-2 items-center gap-x-8 '>
                <article>
                    <h1 className='font-bold text-6xl tracking-wide md:text-7xl'>I'm Samartha</h1>
                    <p className='text-3xl tracking-wide mt-3 capitalize  text-slate-700'>Front-End Developer</p>
                    <p className='text-xl tracking-wide mt-3 capitalize text-slate-700'>Turning Ideas into Reality</p>
                    <div className='flex gap-x-4 mt-6'>
                        <a href="https://github.com/SamarthaKhare"><FaGithubSquare className='text-slate-500 h-8 w-8 hover:text-black duration-300' /></a>
                        <a href="https://www.linkedin.com/in/samartha-khare-68428b211/"><FaLinkedin className='text-slate-500 h-8 w-8 hover:text-black duration-300' /></a>
                        <a href="https://www.linkedin.com/in/samartha-khare-68428b211/"><FaTwitterSquare className='text-slate-500 h-8 w-8 hover:text-black duration-300' /></a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} className='h-80 lg:h-96' />
                </article>
            </div>
        </section>
    )
}

export default Hero
