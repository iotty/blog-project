import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import PageTitleComponent from '../components/pageTitle'

const IllustrationPage = () => {
    return (
       <div className='p-2 bg-white'>
        <Seo title='Book' />
        <Nav/>
        <PageTitleComponent
            titlePage='Book'
            description='Add some description that will wrap for test purpose.'
            />
        </div>
    )
}

export default IllustrationPage