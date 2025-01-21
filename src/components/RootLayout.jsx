import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
      
      <Nav />

      <Outlet />

      <Footer />

    </div>
  )
}

export default RootLayout