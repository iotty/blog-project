import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.png'

const NavBar = () => {
    return (
        <header>
            <nav className='p-4 max-w-screen-xl mx-auto sm:flex sm:justify-between'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img className='w-8 h-8' src={Logo} alt='Logo'></img>
                    </div>
                    <div className='sm:hidden'>
                        <button type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-gray-800' fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div className='hidden sm:flex text-lg font-medium text-gray-400'>
                    <Link className='sm:ml-6' to='/essay'>Essay</Link>
                    <Link className='sm:ml-6' to='/illustration'>Illustration</Link>
                    <Link className='sm:ml-6' to='/book'>Book</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar