import React from 'react'
import aboutImg from '../assets/about.svg'
import WorkCard from './WorkCard'
const WorkEx = () => {
    return (
        <section className='mx-auto max-w-8xl px-8 relative' id='experiences'>
            <div className=' grid justify-items-center grid-cols-1 gap-y-7 gap-x-9 items-center md:grid-cols-2 '>
                <img src={aboutImg} className='h-64 md:h-72 lg:h-96' />
                <article className='flex flex-col gap-y-4 text-center'>
                    <h2 className='mt-5 text-3xl  text-slate-500 font-bold'>Work Experience</h2>
                    <WorkCard />
                </article>
            </div>

        </section>
    )
}

export default WorkEx
