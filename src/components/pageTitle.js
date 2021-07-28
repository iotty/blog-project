import * as React from 'react'

const pageTitleComponent = ({titlePage, description = ''}) => {
    return (
        <section className='mt-12 p-4 md:px-16 max-w-screen-xl mx-auto'>
        <h1 className='text-5xl font-bold text-gray-700 tracking-wide leading-relaxed'>{titlePage}</h1>
        <h2 className='my-6 text-xl text-gray-700 leading-relaxed'>{description}</h2>
        </section>
    )
}

export default pageTitleComponent