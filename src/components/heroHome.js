import * as React from 'react'

const heroHome = ({name, description, slug}) => {
    return (
        <section className='my-4'>
            <div className='p-4 md:px-16 max-w-screen-xl mx-auto'>
                <h1 className='mt-15 text-gray-700 text-6xl font-black tracking-wide leading-tighter'>{name}</h1>
                <h2 className='mt-12 font-medium font-serif text-2xl text-gray-600 tracking-normal leading-normal'>{description}</h2>
                <p className='mt-8 text-xl text-gray-600 tracking-tighter leading-normal'>{slug}</p>
            </div>
        </section>
    )
}

export default heroHome