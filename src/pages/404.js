import * as React from "react"
import Seo from '../components/seo'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <div>
      <Seo title='Page Not Found'/>

        <div className='px-6 max-w-2xl h-screen flex flex-col mt-44 mx-auto'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-left font-extrabold text-gray-800'>Page not found</h1>
          <p className='text-lg mt-4'>Sorry 😔 —we couldn’t find what you were looking for.</p>
        <Link to='/' className='mt-8'>
        <button type='button' className='py-2 px-4 border inline-block rounded outline-none font-medium text-red-700 hover:bg-red-600 hover:border-white hover:text-white transition duration-700 ease-in-out transform hover:scale-105'>
          <div className='flex'>
            <p>Go back home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
          </div>
          </button>
          </Link>
        </div>

    </div>
  )
}

export default NotFoundPage
