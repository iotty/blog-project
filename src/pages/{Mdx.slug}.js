import * as React from 'react'
import {graphql} from 'gatsby'

const EssayPostPage = ({data}) => {
    return <h1>{data.mdx.frontmatter.title}</h1>
}

export const query = graphql`
    query EssayPostById($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
            }
        }
    }`

export default EssayPostPage