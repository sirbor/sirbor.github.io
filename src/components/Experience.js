import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const workExp = [
  {
    id: 1,
    position: "Software Engineer",
    companyName: "Rapid Research",
    from: "Sept 2021",
    to: "",
    current: true,
    description: [
      "Working with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.",
      "Adjusting design parameters to incorporate new features.",
      "Developing robust, scalable, modular and API-centric infrastructures.",
      "Promoting experience with Kubernetes, Docker and Amazon Web Services.",
      "Collaborating with fellow engineers to evaluate software and hardware interfaces",
      "Partnering with development team on product development and application support plans.",
      "Integrating third-party tools and components into applications.",
      "Participating in architecture, design and implementation of back-end features using Node js, Typescript and Python.",
      "Designing enhancements and updates for subsystems of end-user applications software running on local, networked and Internet-based platforms.",
      "Collaborating with management, internal and development partners regarding software application design status and project progress.",
      "Updating old code bases to modern development standards, improving functionality."
    ],
    isVisible: true,
  },
  {
    id: 2,
    position: "Software Engineer",
    companyName: "Labs Afrika",
    from: "April 2020",
    to: "Sept 2021",
    current: false,
    description: [
      "Wrote clear, clean code for various projects.",
      "Tested new applications for usability and adherence to code plan.",
      "Proofread technical documentation and user manuals.",
      "Analyzed source code to identify functionality issues.",
      "Collaborated with developers to identify and remove software bugs.",
      "Handled scripting tasks for debugging and automation.",
      "Sat in on design team and planning meetings.",
      "Delivered project reports and milestone updates to team lead."
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