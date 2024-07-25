/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <div 
    style={{backgroundColor: props.cardColor}}
    className={`rounded-2xl h-[250px] w-[450px] flex justify-between shadow-xl relative`}>
        <div className='flex flex-col gap-5 justify-center px-2'>
            <div className='text-7xl w-[40%] leading-[65px]'>
                <h1 className='text-white'>{props.cardContent}</h1>
                <h1 className='text-white'>Training</h1>
            </div>
            <div>
                <button className='px-5 py-2 border border-black rounded-xl text-xl'>Learn More</button>
            </div>
        </div>
        <Image
        className='absolute left-36' 
        src={props.cardImage}
        width={800}
        height={800}
        />
    </div>
  )
}

export default Card
