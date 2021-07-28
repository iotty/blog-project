import * as React from 'react'
import { Link } from 'gatsby'

const EssayCard = () => {
    return (
        <div className='flex flex-wrap justify-center sm:justify-start mt-4'>
            <arcticle className='mr-4 mb-4 max-w-xs'>
                <Link to='/learning-gatsby'>
                <div className='bg-white m-4 px-6 py-8 mx-auto border shadow-sm rounded-md flex flex-col hover:shadow-md hover:border-0 hover:border-t-4 hover:border-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <div>
                        <h3 className='text-xl font-bold text-gray-700 leading-normal'>Transportasi Darat sebagai Tulang Punggung Dunia</h3>
                    </div>
                    <div className='mt-6 pt-4 flex text-right items-baseline justify-between border-t'>
                        <p className='text-sm text-gray-400'>June 22, 2021</p>
                        <p className='text-md font-medium text-green-600'>Logistics</p>
                    </div>
                </div>
            </Link>
            </arcticle>
            <arcticle className='mr-4 mb-4 max-w-xs'>
                <Link to='/learning-gatsby'>
                <div className='bg-white m-4 px-6 py-8 max-w-xs mx-auto border shadow-sm rounded-md flex flex-col hover:shadow-md hover:border-0 hover:border-t-4 hover:border-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <div>
                        <h3 className='text-xl font-bold text-gray-700 leading-normal'>Transportasi Darat sebagai Tulang Punggung Dunia</h3>
                    </div>
                    <div className='mt-6 pt-4 flex text-right items-baseline justify-between border-t'>
                        <p className='text-sm text-gray-400'>June 22, 2021</p>
                        <p className='text-md font-medium text-green-600'>Logistics</p>
                    </div>
                </div>
            </Link>
            </arcticle>
        </div>
    )
}

export default EssayCard