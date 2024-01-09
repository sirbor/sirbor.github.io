import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const workExp = [
  {
    id: 1,
    position: "Software Engineer Intern",
    companyName: "Rapid Research",
    from: "Oct 2023",
    to: "Dec 2023",
    current: true,
    description: [
      "Developed and maintained a portfolio of high-quality web applications using React, Next.js, and Tailwind CSS within a Java-based microservices architecture. Integrated RESTful web services to enhance the user experience.",

"Implemented scalable back-end solutions using Node.js, TypeScript, and Spring Boot to support web applications and microservices. Leveraged AWS services, such as Lambda and S3, for seamless integration and efficient data management.",

"Employed Agile methodologies to deliver value through regular releases of working software, utilizing CI/CD pipelines to automate build, test, and deployment processes for Java-based microservices and web applications.",

"Optimized relational databases (MySQL and MongoDB) within the microservices architecture to ensure high performance and reliability. Proactively identified and resolved potential database-related issues, adhering to best practices and industry standards.",

"Collaborated effectively with cross-functional teams, including developers, designers, and product managers, to seamlessly integrate front-end and back-end components within the microservices architecture. Ensured alignment with Spring Boot frameworks and RESTful web service standards.",

"Contributed to the development of cloud-based solutions using Linux, Git, and Docker environments, in conjunction with AWS services. Leveraged serverless computing with Lambda functions and utilized S3 for efficient data storage and retrieval within the microservices architecture."
    ],
    isVisible: true,
  },
  {
    id: 2,
    position: "Software Engineer Intern",
    companyName: "Labs Afrika",
    from: "May 2023",
    to: "Aug 2023",
    current: false,
    description: [
      "Utilized front-end languages (HTML, CSS, JavaScript) and frameworks (AngularJS, jQuery, Bootstrap) to develop, modify, and maintain websites and web application user interfaces.",
"Translated design wireframes into functional code, collaborating with senior professionals for guidance and support.",
"Assisted in the creation of tools to enhance user experience and interaction with the site, ensuring multi-browser compatibility and optimal performance.",
"Implemented responsive design principles to create mobile-friendly websites.",
"Acted as a liaison between design/creative teams and back-end development, ensuring seamless integration and optimizing functionality, performance, scalability, security, and internationalization.",
"Conducted usability testing during development, addressing bugs and ensuring a high-quality user experience, with guidance and support from senior professionals."
    ],
    isVisible: false,
  },
  
];

const Experience = () => {
  const activeClass =
    "-ml-[2px] md:border-l-2 border-t-2 md:border-t-0 border-[#03c4a1] px-3 h-12 w-36 txt-green text-left bg-dark-light transition-all duration-300";

  const inactiveClass =
    "-ml-[2px] md:border-l-2 border-t-2 md:border-t-0 hover:border-[#03c4a1] px-3 h-12 w-36 text-gray-400 text-left hover:bg-[#23262b] hover:text-[#03c4a1] transition-all duration-300";

  const [workData, setWorkData] = React.useState(workExp);

  const showCompany = (id) => {
    let tempData = workData.map((item) => {
      if (item.id === id) {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
      return item;
    });
    setWorkData(tempData);
  };

  return (
    <div className="pb-16">
      <p className="md:text-4xl text-3xl text-gray-200 flex font-semibold">
        Where I've
        <div className="relative ml-2">
          <span className="absolute bottom-1 border-b-[8px] w-[120px] md:w-[145px]  border-[#03c4a1]" />
          <h1 className="relative">Worked</h1>
        </div>
      </p>

      <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-3 mt-12 ">
        <div className="flex md:flex-col flex-row items-start text-gray-100 ">
          <button
            onClick={() => showCompany(1)}
            className={workData[0].isVisible ? activeClass : inactiveClass}
          >
            Rapid Research
          </button>
          <button
            onClick={() => showCompany(2)}
            className={workData[1].isVisible ? activeClass : inactiveClass}
          >
            Labs Afrika
          </button>

        </div>
        <div>
          {workExp.map((work, index) => {
            return (
              <div
                key={index}
                className={`${work.isVisible ? "block" : "hidden"}`}
              >
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-200 text-xl font-semibold">
                    {work.position}{" "}
                    <span className="txt-green">@{work.companyName}</span>
                  </p>
                </div>
                <div className="flex flex-col space-y-2 mt-3">
                  <p className="text-gray-200 text-sm font-medium">
                    {work.from} - {work.current === true ? "Present" : work.to}
                  </p>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                  {work.description.map((desc) => (
                    <div className="flex space-x-2" key={desc}>
                      <div className="triangle w-2 h-2" />
                      <p className="text-gray-300 -mt-2">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
