import * as React from 'react'

const blogTitle = ({postTitle, date}) => {
    return (
        <div className='my-12'>
        <h1 className='text-4xl font-black text-gray-800 text-center tracking-wide leading-tight'>{postTitle}</h1>
        <p className='text-center my-4 text-gray-400'>Published on {date}</p>
        <div className='border-b-2 my-4 mx-24 border-gray-100'></div>
        </div>
    )
}

export default blogTitle