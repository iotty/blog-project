import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import { graphql } from 'gatsby'
import EssayCard from '../components/essaycard'
import PageTitleComponent from '../components/pageTitle'
import PageContainer from '../components/pageContainer'
import FooterSection from '../components/footer'

const EssayPage = ({data}) => {
    const essays = data.allMdx.nodes
    return (
        <div>
            <Seo title='Essay' />
            <PageContainer>

            <Nav/>
            <PageTitleComponent
            titlePage='Essay'
            description='Add some description that will wrap for test purpose.'
            />
        
        <div className='flex flex-wrap justify-center sm:justify-start'>
        {essays.map((post) => {
          return (
              <EssayCard
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              />
            )
        })}
            </div>
        <FooterSection/>
        </PageContainer>
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