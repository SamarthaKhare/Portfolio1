import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/all';

import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
const Hero = () => {
    const words = ["Samartha", "A Developer", "A Coder", "A UI-Designer"];
    const masterTl = gsap.timeline({ repeat: -1 });
    gsap.registerPlugin(TextPlugin);
    useEffect(() => {
        gsap.from(["#cursor"], {
            opacity: 0,
            ease: "Power2.inOut",
            repeat: -1,
            yoyo: true,
            duration: 0.3
        })
        {
            words.forEach((word) => {
                const tl = gsap.timeline({ repeat: 1, yoyo: true });
                tl.to(["#text"], {
                    text: word,
                    duration: 1
                })
                masterTl.add(tl)
            })
        }
        gsap.from("#image", {
            scale: 0.5,
            opacity: 0,
            duration: 1.5,
            delay: 1
        })
    }, [])
    return (
        <section className='bg-emerald-100 py-24'>
            <div className=' px-8 grid max-w-7xl mx-auto md:grid-cols-2 items-center gap-x-8 '>
                <article>
                    <h1 className='font-bold text-6xl tracking-wide md:text-6xl'>I'm <span id='text'></span><span id='cursor'>_</span></h1>
                    {/* <p className='text-3xl tracking-wide mt-3 capitalize  text-slate-700'>Front-End Developer</p> */}
                    <p className='text-xl tracking-wide mt-3 capitalize text-slate-700'>Turning Ideas into Reality</p>
                    <div className='flex gap-x-4 mt-6'>
                        <a href="https://github.com/SamarthaKhare"><FaGithubSquare className='text-slate-500 h-8 w-8 hover:text-black duration-300' /></a>
                        <a href="https://www.linkedin.com/in/samartha-khare-68428b211/"><FaLinkedin className='text-slate-500 h-8 w-8 hover:text-black duration-300' /></a>
                        <a href="https://www.linkedin.com/in/samartha-khare-68428b211/"><FaTwitterSquare className='text-slate-500 h-8 w-8 hover:text-black duration-300' /></a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} className='h-80 lg:h-96' id='image' />
                </article>
            </div>
        </section>
    )
}

export default Hero
