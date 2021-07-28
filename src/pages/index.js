import * as React from "react"
import Seo from '../components/seo'
import Nav from '../components/nav'
import HeroHome from '../components/heroHome'



const IndexPage = () => {
  return (
    <div className='p-2 bg-white'>
    <Seo title='Homepage' />
      <Nav/>
      <HeroHome
      name='Rihot Gusron'
      description='A passionate millenial who love to hear your story about logistics, design, and photography.'
      slug='Logistician, dreamer, designer, some coding. Currently Lab Assistant at Logistics Department.'
      />
    
    </div>
  )
}

export default IndexPage
