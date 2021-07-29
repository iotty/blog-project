import * as React from 'react'

const BlogContainer = ({children}) => {
    return (
        <main className='max-w-prose py-16 px-7 mx-auto'>
            {children}
        </main>
    )
}

export default BlogContainer