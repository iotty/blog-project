import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import BlogTitle from '../components/blogTitle'
import Seo from '../components/seo'
import PageContainer from '../components/pageContainer'
import Nav from '../components/nav'
import BlogContainer from '../components/blogContainer'
import BlogBody from '../components/BlogBody'

const EssayPostPage = ({data}) => {

    const essay = data.mdx

    return (
        <div>
        <Seo title={essay.frontmatter.title}/>
        <PageContainer>
            <Nav/>
            </PageContainer>
        <article>
            <BlogContainer>
            <BlogTitle 
            postTitle={essay.frontmatter.title} 
            date={essay.frontmatter.date}
            />
            <BlogBody>
            <MDXRenderer>{essay.body}</MDXRenderer>
            </BlogBody>
            </BlogContainer>
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