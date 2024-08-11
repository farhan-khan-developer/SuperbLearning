"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Basic Phonics Training for Preschool",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-200 bg-neutral-600">
          <DummyContentOne />
        </div>
      ),
    },
    {
      title: "Advanced Phonics Training for Grade I and Beyond",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-200 bg-neutral-600">
          <DummyContentTwo />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContentOne = () => {
  return (
    <div>
        <p>This course is tailored for early childhood educators, focusing on introducing young learners to the fundamentals of phonics. Through engaging activities and age-appropriate techniques, teachers will learn how to help preschoolers recognize sounds, letters, and simple words, setting the stage for their future reading success.
        </p>
    </div>
  );
};

const DummyContentTwo = () => {
    return (
      <div>
          <p>Aimed at educators working with older children, this course delves deeper into phonics instruction, covering more complex concepts and strategies. Teachers will gain the skills needed to support students in grade I and beyond, enhancing their reading fluency, comprehension, and overall literacy skills.
          </p>
      </div>
    );
  };
