import * as React from 'react'
import { Link } from 'gatsby'
import Icon from '../images/icon.png'


const PosterImage = ({link = './',}) => {
    return(
        <div className='my-12 flex flex-wrap justify-center sm:justify-start lg:justify-center'>
                <div className='ml-6 lg:ml-12 mb-24 flex flex-col border rounded-md overflow-hidden shadow hover:shadow-xl hover:border-yellow-500 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <img className='max-w-xs object-contain' src='https://maggieappleton.com/static/0afc983bc802c84de284d55455d7a299/630fb/progbrain.png'></img>
                    <h2 className='mt-4 py-4 px-6 text-gray-600 text-2xl font-semibold leading-normal text-center'>This is the title</h2>                
                    <Link to='/' className='mt-2 flex justify-end'>
                    <button type='button' className='py-2 px-4 border inline-block rounded outline-none font-medium text-yellow-700 hover:bg-yellow-600 hover:border-white hover:text-white transition duration-700 ease-in-out transform hover:scale-105'>
                    <div className='flex'>
                    <p className='text-lg'>Read full story</p>
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

export default PosterImage