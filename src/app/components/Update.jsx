/* eslint-disable @next/next/no-img-element */
'use client'

/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';  // Correct import for default theme
import Image from 'next/image';

const Update = () => {
  return (
    <div className='relative'>
        <Splide
        options={{
            type: 'loop',
            autoplay: true,
            arrows: false,
            interval: 3000
        }}
        >
        <SplideSlide className='relative'>
            <div className='md:w-full xxsm:h-[200px] md:h-[400px] relative'>
            <Image 
                src='/updateimg1.jpg' 
                alt="Update Image 1" 
                layout='fill' 
                objectFit='cover' 
                className='rounded-2xl' 
            />
            </div>
        </SplideSlide>
        <SplideSlide className='relative'>
            <div className='md:w-full xxsm:h-[200px] md:h-[400px] relative'>
            <Image 
                src='/updateimg2.jpg' 
                alt="Update Image 2" 
                layout='fill' 
                objectFit='cover' 
                className='rounded-2xl' 
            />
            </div>
        </SplideSlide>
        </Splide>
        <Image
        src='/Vector.png'
        width={60}
        height={60}
        className='absolute -top-3 md:-right-8 xxsm:w-[40px] xxsm:h-[25px] md:w-[60px] md:h-[40px] xxsm:-right-5'
        />
    </div>
  )
}

export default Update
