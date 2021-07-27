import * as React from "react"
import Seo from '../components/seo'
import Nav from '../components/nav'



const IndexPage = () => {
  return (
    <div className='p-2 bg-white'>
    <Seo title='Homepage' />
      <Nav></Nav>
 
      <h1>This will be heading.</h1>
    
    </div>
  )
}

export default IndexPage
