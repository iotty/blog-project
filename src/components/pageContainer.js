import * as React from 'react'

const PageContainer = ({children}) => {
    return (
        <main className='max-w-7xl mx-auto px-8 lg:px-10 bg-white'>
         {children}
        </main>
    )
}

export default PageContainer