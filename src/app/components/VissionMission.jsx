import React from 'react'

const VissionMission = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='md:h-[400px] xxsm:h-[500px] w-full bg-[#F7F7F9] p-5 shadow-xl rounded-xl'>
        <h1 className='md:text-8xl xxsm:text-5xl relative -top-16 flex flex-wrap justify-center items-center md:flex-none md:gap-5 xxsm:gap-2'>About Superb <span className='text-white bg-black p-2 rounded-lg'>Learning</span></h1>
        <div className='flex justify-center items-center flex-col gap-5'>
            <div className='text-center'>
                <h2 className='md:text-4xl xxsm:text-3xl'>Our Mission</h2>
                <p className='md:font-semibold'> To empower educators with the skills, knowledge, and resources <br /> needed to inspire and nurture young minds, fostering a lifelong love for <br /> learning.</p>
            </div>
            <div className='text-center'>
                <h2 className='md:text-4xl xxsm:text-3xl'>Our Vission</h2>
                <p className='md:font-semibold'>To set the benchmark for excellence in teacher training and<br /> phonics education, recognized globally for our innovative approach <br /> and outstanding results.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VissionMission
