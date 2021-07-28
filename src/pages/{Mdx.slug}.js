import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import BlogTitle from '../components/blogTitle'
import Seo from '../components/seo'

const EssayPostPage = ({data}) => {

    const essay = data.mdx

    return (
        <div>
        <Seo title={essay.frontmatter.title}/>
        <article>
            <BlogTitle/>
            <h1>{essay.frontmatter.title}</h1>
            <p>Published in {essay.frontmatter.date}</p>
            <p>{essay.frontmatter.read} read</p>
            <MDXRenderer>{essay.body}</MDXRenderer>
        </article>
        </div>
    )
}

export const query = graphql`
    query EssayPostById($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                read
            }
        body
        }
    }`

export default EssayPostPage