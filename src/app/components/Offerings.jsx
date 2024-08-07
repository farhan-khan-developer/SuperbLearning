
"use client";
import Image from "next/image";
import React from "react";
import { Card,Carousel } from "./ui/apple-cards-carousel";

export const Offerings = ()=> {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center ">
        <h2 className="text-5xl">Explore our Offerings.</h2>
        <Carousel items={cards} />
    </div>

  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="max-w-3xl mx-auto font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/community.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="object-contain w-full h-full mx-auto md:w-1/2 md:h-1/2"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/holistic.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/holistic.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/holistic.jpg",
    content: <DummyContent />,
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
