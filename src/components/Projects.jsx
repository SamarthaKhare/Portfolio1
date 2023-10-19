import React from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
const Projects = () => {
    return (
        <section className='py-16 mx-auto max-w-7xl px-8 ml-8' id='projects'>
            <div className='text-3xl border-b border-gray-200 pb-5 text-center sm:text-start '>
                <h2>Web Creations</h2>
            </div>
            <div className='grid justify-center mt-5 ml-3 mr-3 gap-y-3 gap-x-2  md:grid-cols-2 md:justify-start   lg:ml-24 xl:grid-cols-3 xl:gap-x-10 xl:ml-0' >
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
