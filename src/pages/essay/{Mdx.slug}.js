import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import BlogTitle from '../../components/blogTitle'
import SeoBlog from '../../components/SeoBlog'
import PageContainer from '../../components/pageContainer'
import Nav from '../../components/nav'
import BlogContainer from '../../components/blogContainer'
import BlogBody from '../../components/BlogBody'
import Footer from '../../components/footer'

const EssayPostPage = ({data}) => {

    const essay = data.mdx

    return (
        <div>
        <SeoBlog title={essay.frontmatter.title}/>
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
        <PageContainer>

        <Footer/>
        </PageContainer>
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