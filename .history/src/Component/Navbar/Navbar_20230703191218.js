import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
            <div>
                <img src='./Image/logo.png' alt='Logo' />
            </div>
            <div>
            <Link to='/'>
                <p></p>
            </Link>
            </div>
    </div>
  )
}

export default Navbar