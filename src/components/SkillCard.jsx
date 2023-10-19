import React from 'react'

const SkillCard = ({ icon, text, title }) => {
    return (
        <div className='mt-4'>
            <article >
                <div>{icon}</div>
                <h3 className='text-lg font-bold mt-4'>{title}</h3>
                <p className='mt-2 text-slate-500'>{text}</p>
            </article>
        </div>
    )
}

export default SkillCard
