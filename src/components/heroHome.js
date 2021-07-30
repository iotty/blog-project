import * as React from 'react'

const heroHome = ({name, description, slug}) => {
    return (
        <section>
                <div className='max-w-2xl mt-32'>
                    <h1 className='mt-15 text-gray-700 text-6xl md:text-7xl font-black tracking-wide leading-tighter'>{name}</h1>
                    <h2 className='mt-12 font-medium font-serif text-2xl md:text-4xl md:leading-normal text-gray-600 leading-normal tracking-wide'>{description}</h2>
                    <p className='mt-8 text-xl text-gray-500 tracking-tighter leading-normal'>{slug}</p>
                </div>
        </section>
    )
}

export default heroHome