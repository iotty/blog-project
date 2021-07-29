import * as React from 'react'

const BlogBody = ({children}) => {
    return (
        <div className='text-lg leading-relaxed text-gray-700'>
            {children}
        </div>
    )
}

export default BlogBody