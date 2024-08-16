"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Comprehensive Teacher Training Focus",
    description:
      "Unlike many other platforms that offer general education resources, SUPERB LEARNING is specifically dedicated to teacher training. This specialized focus ensures that our courses are tailored to meet the unique needs of educators, providing them with practical skills and strategies they can directly apply in their classrooms.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/teacher.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Expertly Designed Phonics Programs",
    description:
      "Our phonics training programs are developed by experienced educators and literacy specialists. The curriculum is research-based and incorporates proven methodologies to enhance reading and writing skills in young learners, making our courses both effective and up-to-date with the latest educational standards.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/phonics.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Customized Course Offerings",
    description:
      " We offer distinct courses for different age groups, such as our basic phonics training for preschool educators and advanced training for teachers of grade I and above. This targeted approach ensures that each course is relevant to the developmental stage of the students and the specific needs of the educators.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/course.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Hands-on Learning and Practical Application",
    description:
      " Our training emphasizes hands-on learning, providing educators with practical tools and resources that they can implement in their teaching practices. We focus on real-world applications, ensuring that teachers are well-prepared to foster literacy development in their students.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/learning.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dedicated Support and Community",
    description:
      "At SUPERB LEARNING, we offer ongoing support to our participants. Our educators can access a wealth of resources, engage in discussions with peers, and receive guidance from our experienced instructors. This community-driven approach fosters a supportive learning environment.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/community.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Holistic Approach to Education",
    description:
      "In addition to phonics training, SUPERB LEARNING offers a range of courses in early childhood education, teacher training, and professional development. This holistic approach helps educators enhance their overall teaching skills and effectiveness in the classroom.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/holistic.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-5">
        <h2 className="md:text-5xl xxsm:text-3xl">What Sets Us Apart</h2>
      <StickyScroll content={content} />
    </div>
  );
}
