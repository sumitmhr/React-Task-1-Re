import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <div className='bg-black text-white px-4 py-2 flex justify-between sticky top-0 items-baseline z-50'>

      <a href='/'>
        <h1 className='text-2xl'>Demo</h1>
      </a>

      <nav className='flex gap-3'>

        <NavLink className='hover:bg-white hover:text-black p-2' to='/about'>About</NavLink>
        <NavLink className='hover:bg-white hover:text-black p-2' to='/contact'>Contact</NavLink>

      </nav>
      
    </div>
  )
}

export default Nav