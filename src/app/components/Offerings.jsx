
"use client";
import Image from "next/image";
import React from "react";
import { Card,Carousel } from "./ui/apple-cards-carousel";
import { TabsDemo } from "./Tabs/TabsDemo";
import { TabsDemoTwo } from "./Tabs/TabsDemoTwo";
import { TabsDemoThree } from "./Tabs/TabsDemoThree";

export const Offerings = ()=> {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="md:text-5xl xxsm:text-3xl">Explore our Offerings.</h2>
        <Carousel items={cards} />
    </div>

  );
}

const DummyContentOne = () => {
  return (
    <>
        <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
              At SUPERB LEARNING, a premier teacher training center, we are dedicated to fostering literacy and language skills through our comprehensive phonics training courses. Our expertly designed programs cater to the diverse needs of educators and young learners alike, ensuring a solid foundation in reading and writing.
            </p>   
        </div>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-5 text-neutral-600 dark:text-neutral-400">
          <div className="max-w-3xl md:text-3xl">
            <h1>Our phonics training is divided into two distinct courses:</h1>
          </div>
          <div>
            <TabsDemo/>
          </div>
        </div>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-5 text-neutral-600 dark:text-neutral-400 md:text-2xl">
        <p>Join us at SUPERB LEARNING and become a part of our mission to empower teachers and students with the tools they need to achieve academic excellence through effective phonics education.</p>
        </div>
    </>
  );
};

const DummyContentTwo = () => {
  return (
    <>
        <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
            At SUPERB LEARNING, we are dedicated to empowering educators with the skills and knowledge they need to excel in their careers. As an authorized center for the Rural and Urban Council of Skills and Vocational Studies, we offer a range of diploma courses designed to meet the growing demands of the education sector.
            </p>   
        </div>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-5 text-neutral-600 dark:text-neutral-400">
          <div className="max-w-3xl md:text-3xl">
            <h1>Our Diploma Courses:</h1>
          </div>
          <div>
            <TabsDemoTwo/>
          </div>
        </div>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-5 text-neutral-600 dark:text-neutral-400 md:text-2xl">
        <p>Join SUPERB LEARNING and take the first step towards a fulfilling career in education. Enroll in our diploma courses and become a part of our community dedicated to excellence in teaching and learning.</p>
        </div>
    </>
  );
};

const DummyContentThree = () => {
  return (
    <>
        <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
            At SUPERB LEARNING, an authorized center for RURAL AND URBAN COUNCIL OF SKILLS AND VOCATIONAL STUDIES, is dedicated to providing high-quality education and training to equip you with the skills needed to excel in your chosen career. We offer a variety of diploma courses designed to meet the needs of todays dynamic job market
            </p>   
        </div>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-5 text-neutral-600 dark:text-neutral-400">
          <div className="max-w-3xl md:text-3xl">
            <h1>Explore our courses below:</h1>
          </div>
          <div>
            <TabsDemoThree/>
          </div>
        </div>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-5 text-neutral-600 dark:text-neutral-400 md:text-2xl">
        <p>Join us at SUPERB LEARNING and become a part of our mission to empower teachers and students with the tools they need to achieve academic excellence through effective phonics education.</p>
        </div>
    </>
  );
};

const data = [
  {
    // category: "Artificial Intelligence",
    title: "PHONICS",
    src: "/phonics.jpg",
    content: <DummyContentOne />,
  },
  {
    // category: "Productivity",
    title: "TEACHER",
    src: "/teacher.jpg",
    content: <DummyContentTwo />,
  },
  {
    // category: "Product",
    title: "CORPORATE",
    src: "/corporate2img.png.jpg",
    content: <DummyContentThree />,
  },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "/holistic.jpg",content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "/holistic.jpg",content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "/holistic.jpg",content: <DummyContent />,
//   },
];
