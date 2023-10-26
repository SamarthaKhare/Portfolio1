import React, { useEffect } from 'react'

import { skills } from '../data'
import SkillCard from './SkillCard'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Skills = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from("#skill-Card", {
            scale: 0.5,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#skill-Card",
                scroller: "body"
            }
        })
    }, [])
    return (
        <section className='py-20 mx-auto max-w-7xl px-8 ' id='skills'>
            <div className='text-3xl border-b border-gray-200 pb-5'>
                <h2>Tech Stack</h2>
            </div>
            <div className='grid md:grid-cols-2 md:gap-x-3 lg:grid-cols-3' id='skill-Card'>
                {
                    skills.map(({ id, title, icon, text }) => {
                        return <SkillCard key={id} title={title} icon={icon} text={text} />
                    })
                }
            </div>
        </section>
    )
}

export default Skills
