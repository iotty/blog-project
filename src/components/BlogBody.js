import * as React from 'react'

const BlogBody = ({children}) => {
    return (
        <div className='text-lg lg:text-xl lg:leading-normal leading-normal text-gray-700'>
            {children}
        </div>
    )
}

export default BlogBody