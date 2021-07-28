import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import PageTitleComponent from '../components/pageTitle'
import PageContainer from '../components/pageContainer'
import FooterSection from '../components/footer'

const IllustrationPage = () => {
    return (
       <div className='p-2 bg-white'>
        <Seo title='Illustration' />
        <PageContainer>
        <Nav/>
        <PageTitleComponent
            titlePage='Illustration'
            description='Add some description that will wrap for test purpose.'
            />
        <FooterSection/>
        </PageContainer>
        </div>
    )
}

export default IllustrationPage