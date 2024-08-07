import React from 'react'
import VissionMission from '../components/VissionMission'
import Expertise from '../components/Expertise'

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-10'>
      <VissionMission/>
      <Expertise/>
    </div>
  )
}

export default page
