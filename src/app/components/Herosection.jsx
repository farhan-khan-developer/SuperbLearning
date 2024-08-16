/* eslint-disable jsx-a11y/alt-text */
'use client'

import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className='flex justify-center items-center md:p-10 flex-col md:gap-7 xxsm:gap-3'>
      <h1 className='md:text-9xl xxsm:text-5xl font-light flex justify-center items-center xxsm:gap-2 md:gap-5'>Superb <span className='text-white bg-black p-2 rounded-lg '>Learning</span></h1>
      <div className='text-center flex md:gap-5 xxsm:gap-3 justify-center items-center'>
        <h2 className='md:text-4xl'>Authorized Center for Rural Urban <br /> Council of Skills & Vocational Studies
        </h2>
        <Image
        src='/superbruclogo 1.png'
        width={100}
        height={100}
        className='xxsm:w-[50px] xxsm:h-[50px] md:w-[100px] md:h-[100px]'
        />
      </div>
      <button className='bg-black md:px-10 md:py-3 xxsm:px-6 xxsm:py-1 rounded-xl text-white'>
        <p>Learn More</p>
      </button>
    </div>
  )
}

export default Herosection
