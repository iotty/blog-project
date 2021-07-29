import * as React from 'react'

const blogTitle = ({postTitle, date}) => {
    return (
        <div className='my-12 border-b'>
        <h1 className='text-4xl md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug text-gray-700 font-bold text-center tracking-wide leading-snug'>{postTitle}</h1>
        <p className='text-center my-4 text-gray-400'>Published on {date}</p>
        </div>
    )
}

export default blogTitle