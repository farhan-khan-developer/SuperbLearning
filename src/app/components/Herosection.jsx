/* eslint-disable jsx-a11y/alt-text */
'use client'

import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className='flex justify-center items-center p-10 flex-col gap-7'>
      <h1 className='text-9xl font-light'>Superb <span className='text-white bg-black p-2 rounded-lg '>Learning</span></h1>
      <div className='text-center flex gap-5 justify-center items-center'>
        <h2 className='text-4xl'>Authorized Center for Rural Urban <br /> Council of Skills & Vocational Studies
        </h2>
        <Image
        src='/superbruclogo 1.png'
        width={100}
        height={100}
        />
      </div>
      <button className='bg-black px-10 py-3 rounded-xl text-white'>
        <p>Learn More</p>
      </button>
    </div>
  )
}

export default Herosection
