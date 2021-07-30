import * as React from 'react'
import { Link } from 'gatsby'

const EssayCard = ({title, date, link}) => {
    return (
        <div className='mr-4 mb-4 w-full md:w-80 sm:max-w-xs'>
            <arcticle className=''>
                <Link to={link} key={link}>
                <div className='bg-white m-4 px-6 py-8 mx-auto border shadow-sm rounded-md flex flex-col hover:shadow-md hover:border-0 hover:border-t-4 hover:border-yellow-500 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <div>
                        <h3 className='text-xl font-bold text-gray-700 leading-normal'>{title}</h3>
                    </div>
                    <div className='mt-6 pt-4 flex text-right items-baseline justify-between border-t'>
                        <p className='text-sm text-gray-400'>{date}</p>
                        <p className='text-md font-medium text-green-600'>Logistics</p>
                    </div>
                </div>
            </Link>
            </arcticle>
        </div>
    )
}

export default EssayCard