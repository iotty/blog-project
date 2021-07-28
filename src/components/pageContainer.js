import * as React from 'react'

const pageContainer = ({children}) => {
    return (
        <main className='max-w-7xl mx-auto px-6 lg:px-8 bg-white'>
         {children}
        </main>
    )
}

export default pageContainer