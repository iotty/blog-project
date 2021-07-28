import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import { graphql } from 'gatsby'
import EssayCard from '../components/essaycard'
import PageTitleComponent from '../components/pageTitle'

const EssayPage = ({data}) => {
    const essays = data.allMdx.nodes
    return (
        <div className='p-2 bg-white'>
            <Seo title='Essay' />
            <Nav/>
            <PageTitleComponent/>
            <EssayCard/>
        {essays.map((post) => {
            return (
            <div>
                <h2>{post.frontmatter.title}</h2>
                <h2>{post.frontmatter.date}</h2>
            </div>
            )
        })}
        </div>
    )
}

export const pageQuery = graphql`
{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      slug
    }
  }
}`

export default EssayPage