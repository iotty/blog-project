import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'

const EssayPostPage = ({data}) => {

    const essay = data.mdx

    return (
        <article>
            <h1>{essay.frontmatter.title}</h1>
            <p>Published in {essay.frontmatter.date}</p>
            <p>{essay.frontmatter.read} read</p>
            <MDXRenderer>{essay.body}</MDXRenderer>
        </article>
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