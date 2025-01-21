import React from 'react'

const Info = () => {
  return (
    <div>
      
      <h1 className='text-4xl text-center font-bold'>Who am I</h1>

      <div className='flex items-center justify-center'>

        <div className='flex items-center justify-center bg-black text-white w-[400px] h-[400px] mt-10 rounded-full p-4 border-4 border-green-500 shadow-[0_0_15px_4px_rgba(0,255,0,0.5)]' >
          <div>
            <h1>Name: Some Person</h1>
            <h1>Email: someperson@gmail.com</h1>
            <h1>Tel: 9777777</h1>
            <h1>Age: 90</h1>
            <h1>Experience: python, java, dart</h1>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Info