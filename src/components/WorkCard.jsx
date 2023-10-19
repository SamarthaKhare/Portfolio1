import React from 'react'

const WorkCard = () => {
    return (
        <>
            <div className="carousel w-96 h-fit text-2xl border-2 border-slate-200">
                <div id="slide1" className="carousel-item relative w-full ">
                    <article className='w-full h-full text-lg text-slate-500 p-4 mt-4 mx-auto text-start ml-5'>
                        <h2 className='font-bold'>Internship Business Web Solutions Inc</h2>
                        <p> May 2023 - Jul 2023 <span>Remote</span></p>
                        <p>Worked on building custom projects for clients using MERN stack.Design, recommend and pitch improvements to new and existing features.</p>
                        <p className='font-semibold'>Technologies Used: JavaScript,MERN</p>
                    </article>
                    <button className='absolute top-2 left-1 text-red-200'> ❮ </button>
                    <button className='absolute top-2 right-1 text-red-200'> ❯ </button>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <article className='w-full h-full text-lg text-slate-500 p-4 mt-4 mx-auto text-start ml-5'>
                        <h2 className='font-bold'>Internship Business Web Solutions Inc</h2>
                        <p> May 2023 - Jul 2023 <span>Remote</span></p>
                        <p>Worked on building custom projects for clients using MERN stack.Design, recommend and pitch improvements to new and existing features.</p>
                        <p className='font-semibold'>Technologies Used: JavaScript,MERN</p>
                    </article>
                    <button className='absolute top-2 left-1 text-red-200'> ❮ </button>
                    <button className='absolute top-2 right-1 text-red-200'> ❯ </button>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <article className='w-full h-full text-lg text-slate-500 p-4 mt-4 mx-auto text-start ml-5'>
                        <h2 className='font-bold'>Internship Business Web Solutions Inc</h2>
                        <p> May 2023 - Jul 2023 <span>Remote</span></p>
                        <p>Worked on building custom projects for clients using MERN stack.Design, recommend and pitch improvements to new and existing features.</p>
                        <p className='font-semibold'>Technologies Used: JavaScript,MERN</p>
                    </article>
                    <button className='absolute top-2 left-1 text-red-200'> ❮ </button>
                    <button className='absolute top-2 right-1 text-red-200'> ❯ </button>
                </div>

            </div>
        </>
    )
}

export default WorkCard
