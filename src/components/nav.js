import * as React from 'react'
import { Link } from 'gatsby'
import { Popover } from '@headlessui/react'
import Logo from '../images/icon.png'

const NavBar = () => {
    return (
        <header>
            <nav className='mt-12 sm:flex sm:justify-between'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link to='/'><img className='w-8 h-8' src={Logo} alt='Logo'></img></Link>
                    </div>
                    <div className='sm:hidden'>
                        <Popover className='relative'>
                        
                        <Popover.Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-gray-800' fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </Popover.Button>

                        
             
                        <Popover.Panel className="absolute z-10 bg-white -right-full -top-full">
                          <div className="w-screen h-screen flex flex-col justify-center items-center">
                            <Link className='text-2xl text-gray-400 font-bold hover:text-yellow-500 focus:text-red-500 focus:outline-none ' to='/essay'>Essay</Link>
                            <Link className='text-2xl text-gray-400 font-bold hover:text-yellow-500 focus:text-red-500 focus:outline-none mt-4' to='/illustration'>Illustration</Link>
                            <Link className='text-2xl text-gray-400 font-bold hover:text-yellow-500 focus:text-red-500 focus:outline-none mt-4' to='/book'>Book</Link>
                            <Link className='text-2xl text-gray-400 font-bold hover:text-yellow-500 focus:text-red-500 focus:outline-none mt-4' to='/'>About</Link>
                            <p className='mt-12 text-sm text-gray-400 font-mono'>(Tap anywhere to close)</p>
                         </div>
                         </Popover.Panel>
                         
                         
                        </Popover>
                    </div>
                </div>
                <div className='hidden sm:flex text-lg font-medium text-gray-400'>
                    <Link className='sm:ml-6 hover:text-yellow-500 focus:text-red-500 focus:outline-none transition duration-500 ease-in-out' to='/essay'>Essay</Link>
                    <Link className='sm:ml-6 hover:text-yellow-500 focus:text-red-500 focus:outline-none transition duration-500 ease-in-out' to='/illustration'>Illustration</Link>
                    <Link className='sm:ml-6 hover:text-yellow-500 focus:text-red-500 focus:outline-none transition duration-500 ease-in-out' to='/book'>Book</Link>
                    <Link className='sm:ml-6 hover:text-yellow-500 focus:text-red-500 focus:outline-none transition duration-500 ease-in-out' to='/'>About</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar