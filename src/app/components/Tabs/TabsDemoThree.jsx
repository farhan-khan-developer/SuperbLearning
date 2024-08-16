"use client";

import { TabsThree } from "./TabsUi/tabsthree";
import { TabsTwo } from "./TabsUi/tabstwo";

export function TabsDemoThree() {
  const tabs = [
    {
      title: "Diploma in Corporate Training and Development",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
          <DummyContentOne />
        </div>
      ),
    },
    {
      title: "Diploma in Front Office Executive",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
          <DummyContentTwo />
        </div>
      ),
    },
    {
        title: "Diploma in Office Administrator",
        value: "service",
        content: (
          <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
            <DummyContentThree />
          </div>
        ),
      },
      {
        title: "Diploma in HR Executive Skills",
        value: "Service",
        content: (
          <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-bold text-neutral-200 bg-neutral-600">
            <DummyContentFour />
          </div>
        ),
      },
  ];

  return (
    <div className="h-[35rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full mb-40">
      <TabsThree tabs={tabs} />
    </div>
  );
}

const DummyContentOne = () => {
  return (
    <div>
        <p>Our Diploma in Corporate Training and Development is designed to prepare you for a successful career in the corporate training sector. This course provides comprehensive knowledge and practical skills in training methodologies, instructional design, and learning management systems.
        <br /> <br />
        Course Highlights:
        <ul className="list-disc">
            <li>Training Needs Analysis</li>
            <li>Designing and Delivering Training Programs</li>
            <li>Evaluating Training Effectiveness</li>
            <li>Leadership and Management Skills</li>
            <li>Communication and Interpersonal Skills</li>
        </ul>
        <br />
        Career Opportunities:
        <br />
        Graduates can pursue careers as Corporate Trainers, Training Managers, Learning and Development Specialists, and more.
        </p>
    </div>
  );
};

const DummyContentTwo = () => {
    return (
      <div>
        <p>The Diploma in Front Office Executive program equips you with the skills required to manage front office operations efficiently. This course covers a wide range of topics including customer service, administrative support, and office management.
        <br /><br />
        Course Highlights:
        <ul className="list-disc">
            <li>Customer Relationship Management</li>
            <li>Effective Communication Skills</li>
            <li>Office Administration</li>
            <li>Reception and Telephone Handling</li>
            <li>Basic Computer Skills</li>
        </ul>
        <br />
        Career Opportunities:
        <br />
        This diploma opens doors to careers such as Front Office Executive, Receptionist, Customer Service Representative, and Administrative Assistant.
        </p>
      </div>
    );
  };

  const DummyContentThree = () => {
    return (
        <div>
        <p>Our Diploma in Office Administrator program is tailored to provide you with the essential skills needed to manage office environments effectively. The course focuses on administrative functions, office technology, and organizational skills.
        <br /><br />
        Course Highlights:
        <ul className="list-disc">
            <li>Office Management            </li>
            <li>Record Keeping and Documentation            </li>
            <li>Time Management            </li>
            <li>Office Technology and Software Applications            </li>
            <li>Business Communication            </li>
        </ul>
        <br />
        Career Opportunities:
        <br />
        Graduates can look forward to roles like Office Administrator, Administrative Coordinator, Office Manager, and Executive Assistant.
        </p>
      </div>
    );
  };

  const DummyContentFour = () => {
    return (
        <div>
        <p>The Diploma in HR Executive Skills program prepares you for a career in human resources by covering key HR functions and practices. This course provides in-depth knowledge of recruitment, employee relations, performance management, and HR laws.
        <br /><br />
        Course Highlights:
        <ul className="list-disc">
            <li>Recruitment and Selection            </li>
            <li>Employee Relations and Engagement            </li>
            <li>Performance Management            </li>
            <li>HR Policies and Compliance            </li>
            <li>Training and Development            </li>
        </ul>
        <br />
        Career Opportunities:
        <br />
        Upon completion, you can pursue roles such as HR Executive, Recruitment Specialist, HR Coordinator, and HR Assistant.
        </p>
      </div>
    );
  };
