import * as React from 'react'
import {MDXProvider} from '@mdx-js/react'
import Paragraf from './Paragraf'
import BlogHeading from './BlogHeading'

const BlogContainer = ({children}) => {
    const shortcodes = {Paragraf, BlogHeading}
    return (
        <main className='container md:max-w-xl lg:max-w-2xl xl:max-w-3xl py-16 px-7 mx-auto'>
            <MDXProvider components={shortcodes}>{children}
            </MDXProvider>
        </main>
    )
}

export default BlogContainer