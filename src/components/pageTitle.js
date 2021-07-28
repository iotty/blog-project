import * as React from 'react'

const pageTitleComponent = ({titlePage, description = ''}) => {
    return (
        <section className='mt-12'>
        <h1 className='text-5xl font-bold text-gray-700 tracking-wide leading-relaxed'>{titlePage}</h1>
        <h2 className='my-6 text-xl text-gray-700 leading-relaxed'>{description}</h2>
        </section>
    )
}

export default pageTitleComponent