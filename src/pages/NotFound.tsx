import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='container mx-auto flex justify-center items-center'>
      <div>
        <h2 className='font-bold text-6xl'>Oops</h2>
        <p>404 - page not found</p>
        <button className='button flex items-center'>
            <p><FaHome className='text-6xl' /></p><p className='uppercase'>back to home</p>
        </button>
      </div>
    </div>
  )
}

export default NotFound
