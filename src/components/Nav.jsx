import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <div className='bg-black text-white px-4 py-2 flex justify-between'>

      <a href='/' className='text-2xl'>Demo</a>

      <nav>

        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

      </nav>
      
    </div>
  )
}

export default Nav