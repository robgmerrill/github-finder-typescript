import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar({title}: {title: string}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-netural-content'>
        <div className='container mx-auto flex justify-between'>
            <div className='flex items-center space-x-4'>
                <FaGithub className='text-4xl' />
                <div className='font-bold text-3xl'><Link to='/'>{title}</Link></div>
            </div>
            <div className='flex space-x-4'>
                <Link to='/' className="btn btn-ghost rounded-btn">Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
