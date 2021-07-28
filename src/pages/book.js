import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import PageTitleComponent from '../components/pageTitle'
import FooterSection from '../components/footer'
import PageContainer from '../components/pageContainer'

const IllustrationPage = () => {
    return (
       <div className='p-2 bg-white'>
        <Seo title='Book' />
        <PageContainer>
        <Nav/>
        <PageTitleComponent
        titlePage='Book'
        description='Add some description that will wrap for test purpose.'
        />
        <FooterSection/>
        </PageContainer>
        </div>
    )
}

export default IllustrationPage