import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      
      <Nav />

      <main className='flex-grow'>

      <Outlet />

      </main>

      <Footer />

    </div>
  )
}

export default RootLayout