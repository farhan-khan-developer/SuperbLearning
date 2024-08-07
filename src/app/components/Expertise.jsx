'use client'

import React from 'react'
import { CgProfile } from "react-icons/cg";
import CountUp from 'react-countup';

const Expertise = () => {
  return (
    <div className='p-5 w-full flex justify-center items-center flex-col gap-10'>
      <h1 className='text-5xl'>Behind the Expertise</h1>
      <div className='flex flex-col gap-3 justify-center items-center text-center'>
        <div className='text-9xl'>
            <CgProfile />
        </div>
        <h2 className='font-semibold text-xl'> Mrs. Khan Aisha Atik</h2>
        <p>Experienced Phonics Trainer | Expert in Early Childhood Care & Education | Dynamic Corporate <br /> Trainer | Empowering Learning and Development for All Ages</p>
      </div>
      <div className='bg-[#F7F7F9] p-3 w-[700px] rounded-lg flex justify-center items-center'>
        <div className='w-[50%] border-r-2 border-black text-center'>
            <h1 className='text-5xl font-semibold'><CountUp end={15} duration={5}/><span className='font-normal'>+</span></h1>
            <h2 className='text-lg'>years of experience of teaching</h2>
        </div>
        <div className='w-[50%] text-center'>
            <h1 className='text-5xl font-semibold'><CountUp end={1000} duration={1}/><span className='font-normal'>+</span></h1>
            <h2 className='text-lg'>teachers trained in India and abroad</h2>
        </div>
      </div>
    </div>
  )
}

export default Expertise
