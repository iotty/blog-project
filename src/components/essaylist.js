import * as React from 'react'
import { Link } from 'gatsby'

const EssayList = () => {
    return (
        <Link to='/learning-gatsby'>
            <div className='bg-white m-4 px-6 py-3 border shadow-sm rounded-md flex justify-between hover:shadow-md hover:border-0 hover:border-t-4 hover:border-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                <div>
                    <h3 className='text-xl font-bold text-gray-700 leading-normal'>Transportasi Darat sebagai Tulang Punggung Dunia</h3>
                </div>
                <div className='flex flex-col text-right ml-6'>
                    <p className='text-xs'>June 22, 2021</p>
                    <p className='text-sm mt-2 font-medium text-green-600'>Logistics</p>
                </div>
            </div>
        </Link>
    )
}

export default EssayList