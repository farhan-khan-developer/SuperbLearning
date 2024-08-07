import React from 'react'
import { CgProfile } from "react-icons/cg";

const Expertise = () => {
  return (
    <div className='border border-black p-5 w-full flex justify-center items-center flex-col gap-10'>
      <h1 className='text-5xl'>Behind the Expertise</h1>
      <div className='flex flex-col gap-3 justify-center items-center text-center'>
        <div className='text-9xl'>
            <CgProfile />
        </div>
        <h2 className='font-semibold text-xl'> Mrs. Khan Aisha Atik</h2>
        <p>Experienced Phonics Trainer | Expert in Early Childhood Care & Education | Dynamic Corporate <br /> Trainer | Empowering Learning and Development for All Ages</p>
      </div>
      <div className='bg-[#F7F7F9] p-3 w-[600px]'>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Expertise
