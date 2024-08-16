"use client";

import { TabsTwo } from "./TabsUi/tabstwo";

export function TabsDemoTwo() {
  const tabs = [
    {
      title: "Early Childhood Care and Education (ECCE)",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
          <DummyContentOne />
        </div>
      ),
    },
    {
      title: " Diploma in Guidance and Counselling",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
          <DummyContentTwo />
        </div>
      ),
    },
    {
        title: "Nursery Teacher Training (NTT)",
        value: "service",
        content: (
          <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
            <DummyContentThree />
          </div>
        ),
      },
      {
        title: "Primary Teacher Training (PTT)",
        value: "Service",
        content: (
          <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
            <DummyContentFour />
          </div>
        ),
      },
  ];

  return (
    <div className="h-[27rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full mb-40">
      <TabsTwo tabs={tabs} />
    </div>
  );
}

const DummyContentOne = () => {
  return (
    <div>
        <p>The Early Childhood Care and Education (ECCE) diploma focuses on the holistic development of young children. Our curriculum covers essential aspects such as child psychology, early childhood education theories, and practical approaches to nurture and educate children from birth to six years.
        <br /> <br />
        Course Highlights:
        <ul className="list-disc">
            <li>
            Understanding child development stages
            </li>
            <li>
            Creating engaging learning environments
            </li>
            <li>
            Implementing age-appropriate educational activities Health, nutrition, and safety for young children
            </li>
        </ul>
        </p>
    </div>
  );
};

const DummyContentTwo = () => {
    return (
      <div>
        <p>The Diploma in Guidance and Counselling is designed to equip educators and aspiring counsellors with the skills needed to support students mental and emotional well-being. This course covers counselling techniques, child and adolescent psychology, and strategies for addressing various behavioural and emotional issues.
        <br /><br />
        Course Highlights:
        <ul className="list-disc">
            <li>Fundamentals of counselling and guidance</li>
            <li>Child and adolescent psychology</li>
            <li>Techniques for effective communication</li>
            <li>Addressing learning difficulties and behavioural issues</li>
        </ul>
        </p>
      </div>
    );
  };

  const DummyContentThree = () => {
    return (
      <div>
          <p>Our Nursery Teacher Training (NTT) diploma prepares educators to teach and nurture young children in a nursery setting. The course includes a comprehensive study of early childhood education principles, classroom management, and creative teaching methodologies.
        <br /><br />
        Course Highlights:
        <ul className="list-disc">
            <li>Principles of early childhood education</li>
            <li>Classroom management techniques</li>
            <li>Creative and interactive teaching methods</li>
            <li>Assessing and supporting individual learning needs</li>
        </ul>
          </p>
      </div>
    );
  };

  const DummyContentFour = () => {
    return (
      <div>
          <p>The Primary Teacher Training (PTT) diploma is designed for those who aspire to teach children in primary schools. This course provides in-depth knowledge of child development, pedagogical methods, and the latest educational practices to create a dynamic and effective learning environment.
        <br /><br />
        Course Highlights:
        <ul>
            <li>Child development and learning theories</li>
            <li>Effective teaching strategies for primary education</li>
            <li>Curriculum planning and implementation</li>
            <li>Integrating technology in the classroom</li>
        </ul>
          </p>
      </div>
    );
  };
