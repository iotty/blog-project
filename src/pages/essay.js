import * as React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'

const EssayPage = () => {
    return (
        <div className='p-2 bg-white'>
            <Seo title='Essay' />
            <Nav/>
            <h1>This is Essay</h1>
        </div>
    )
}

export default EssayPage