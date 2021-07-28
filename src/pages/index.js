import * as React from "react"
import Seo from '../components/seo'
import Nav from '../components/nav'
import HeroHome from '../components/heroHome'
import FooterSection from "../components/footer"
import PageContainer from "../components/pageContainer"



const IndexPage = () => {
  return (
    <div>
    <Seo title='Homepage' />
    <PageContainer>
    <Nav/>
      <HeroHome
      name='Rihot Gusron'
      description='A passionate millenial who love to hear your story about logistics, design, and photography.'
      slug='Logistician, dreamer, designer, some coding. Currently Lab Assistant at Logistics Department.'
      />
    <FooterSection/>
    </PageContainer>
    </div>
  )
}

export default IndexPage
