'use client'

import React from 'react'
import { v4 as uuidv4 } from "uuid";
// import Carousssel from '../components/Carousssel';
import Card from '../components/Cards/Card';
import dynamic from 'next/dynamic';

const Carousssel = dynamic(() => import('../components/Carousssel'), { ssr: false });

const CoursesCards = () => {

    let cards = [
        {
          key: uuidv4(),
          content: <Card cardColor="#A098FF" cardContent="Phonics" cardImage='/phonicsnewimg.png'/>
        },
        {
          key: uuidv4(),
          content: <Card cardColor="#B57EDC" cardContent="Teacher" cardImage='/teachertrainingimg.png'/>
        },
        {
          key: uuidv4(),
          content: <Card cardColor="#FF8058" cardContent="Corporate" cardImage='/corporatetrainingimg.png'/>
        },
    ]

    return(
        <>
        <div className='mx-28'>
            <Carousssel
            cards={cards}
            height="300px"
            width="80%"
            margin="0 auto"
            offset={2}
            showArrows={false}
            />
      </div>
        </>
    );
}

export default CoursesCards
