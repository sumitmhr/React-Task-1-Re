import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-60 flex items-end justify-center py-16'
    style={{
      clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)'
    }}
    >
      <footer className='text-white'>
          <h1>Developed By</h1>
          <h1>Someone Anonymous</h1>
      </footer>
    </div>
  )
}

export default Footer