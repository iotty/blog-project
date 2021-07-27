import * as React from 'react'

const heroHome = ({name, description, slug}) => {
    return (
        <section className='my-4'>
            <div className='mt-12 p-4 md:px-16 max-w-screen-xl mx-auto'>
                <div className='max-w-2xl'>
                    <h1 className='mt-15 text-gray-700 text-6xl md:text-7xl font-black tracking-wide leading-tighter'>{name}</h1>
                    <h2 className='mt-12 font-medium font-serif text-2xl md:text-4xl text-gray-600 leading-relaxed tracking-wide'>{description}</h2>
                    <p className='mt-8 text-xl text-gray-500 tracking-tighter leading-normal'>{slug}</p>
                </div>
            </div>
        </section>
    )
}

export default heroHome