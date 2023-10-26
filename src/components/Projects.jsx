import React, { useEffect } from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
const Projects = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from("#cards", {
            x: -100,
            opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: "#cards",
                scroller: "body",
                start: "top 85%",
                // markers: true

            },
            yoyo: true,
            ease: "bounce.out"
        })
    }, [])
    return (
        <section className='py-16 mx-auto max-w-7xl px-4' id='projects'>
            <div className='text-3xl border-b border-gray-200 pb-5 text-center sm:text-start '>
                <h2>Web Creations</h2>
            </div>
            <div className='grid justify-center mt-5 ml-3 mr-3 gap-y-3 gap-x-2  md:grid-cols-2 md:justify-start   lg:ml-24 xl:grid-cols-3 xl:gap-x-10 xl:ml-0' id='cards'>
                {
                    projects.map((item) => {
                        return <ProjectCard key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects
