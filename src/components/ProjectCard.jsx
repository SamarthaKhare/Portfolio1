import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectCard = ({ url, text, title, github, img }) => {
    return (
        <div className="card w-96 md:w-80  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Project" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-start ">
                    <a href={github}> <FaGithubSquare className='text-slate-500 h-6 w-6 hover:text-black duration-300' /></a>
                    <a href={url}>  <TbWorldWww className='text-slate-500 h-6 w-6 hover:text-black duration-300' /></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
