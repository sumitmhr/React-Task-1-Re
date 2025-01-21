import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='bg-black text-white px-4 py-2'>

      <h1 className='text-2xl'>Demo</h1>

      <nav>

        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>

      </nav>
      
    </div>
  )
}

export default Header