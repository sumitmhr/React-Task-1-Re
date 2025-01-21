import React from 'react'
import LottieAnimation from '../components/LottieAnimation'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 md:mb-7 items-center'>

      <div>

      <LottieAnimation />

      </div>

      <div>
        <h1 className='text-4xl font-bold'>Hi, I am John</h1>
        <author className='text-rose-500'>
          Some Dev, Freelancer, Rounder
        </author>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!
        </p>
      </div>
      
    </div>
  )
}

export default DisplaySection