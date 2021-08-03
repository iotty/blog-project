import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import PageTitleComponent from '../components/pageTitle'
import PageContainer from '../components/pageContainer'
import FooterSection from '../components/footer'
import PosterImage from '../components/PosterImage'

const IllustrationPage = () => {
    return (
       <div>
        <Seo title='Illustration' />
        <PageContainer>
        <Nav/>
        <PageTitleComponent
            titlePage='Illustration'
            description='This will be my showcase to the design that I made, sometimes for fun, for college project, etc.'
            />
            <PosterImage/>
        <FooterSection/>
        </PageContainer>
        </div>
    )
}

export default IllustrationPage