import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import PageTitleComponent from '../components/pageTitle'
import FooterSection from '../components/footer'
import PageContainer from '../components/pageContainer'

const IllustrationPage = () => {
    return (
       <div>
        <Seo title='Book' />
        <PageContainer>
        <Nav/>
        <PageTitleComponent
        titlePage='Book'
        description='This will be my book that i have read, in read, or still in my bucket list'
        />
        <FooterSection/>
        </PageContainer>
        </div>
    )
}

export default IllustrationPage