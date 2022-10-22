import React from "react";
import { AiFillSetting } from "react-icons/ai";

const Details = [
  {
    title: "Neumorphic Calculator",
    description:
      "A basic calculator",
    github: "https://github.com/sirbor/Neumorphic-calculator",
    demo: "https://neumorphic-calculator.netlify.app",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Weather App",
    description:
      "A weather App to check on weather forecast in any location using either celcius or Fahrenheit",
    github: "https://github.com/sirbor/Weather-app",
    demo: "https://weather44-app.netlify.app",
    tech: ["HTML","CSS", "Javascript"],
  },
  {
    title: "Bus Reservation System",
    description:
      "This is a simple Bus Reservation System programmed using Cpp",
    github: "https://github.com/sirbor/Bus-Reservation-System",
    demo: "https://github.com/sirbor/Bus-Reservation-System#readme",
    tech: ["C++"],
  },
  {
    title: "Dating App",
    description:
      "A love dating app like Tinder",
    github: "https://github.com/sirbor/Dating-App",
    demo: "https://github.com/sirbor/Dating-App/blob/main/lovedating1.2.apk",
    tech: ["Java"],
  },
  {
    title: "Chat Bot",
    description:
      "A chat application built in MERN stack with socket.io.",
    github: "https://github.com/sirbor/chat-Bot",
    demo: "https://github.com/sirbor/chat-Bot#readme",
    tech: ["Mongo DB", "Express.js", "React", "Node js"],
  },
  {
    title: "School Scheduler",
    description:
      "Creates a schedule for all users.",
    github: "https://github.com/sirbor/school-scheduler",
    demo: "https://github.com/sirbor/school-scheduler#readme",
    tech: ["HTML","CSS", "Javascript", "Java", "My SQL"],
  },
];

const DetailsComponent = ({ data }) => {
  return (
    <div className="flex border border-gray-600 py-6 px-3">
      <AiFillSetting className="txt-green w-16 text-2xl" />
      <div className="flex flex-col w-full -mt-1">
        <p className="text-gray-100 text-xl font-bold">{data.title}</p>
        <p className="text-gray-400 mt-2 text-sm">{data.description}</p>
        <div className="flex items-center mt-3 space-x-4 flex-wrap">
          {data.tech.map((tech) => (
            <span className="text-gray-100 font-medium mr-1 text-sm">
              {tech}{" "}
            </span>
          ))}
        </div>
        <div className="flex mt-3 space-x-4 items-center">
          <a href={data.github} target="_blank" className="txt-green underline">
            Github
          </a>
          <a href={data.demo} target="_blank" className="txt-green underline">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="py-16">
      <p className="md:text-4xl text-3xl text-gray-200 flex font-semibold">
        Some Things I've
        <div className="relative ml-2">
          <span className="absolute bottom-1 border-b-[8px] w-[70px] md:w-[81px]  border-[#03c4a1]" />
          <h1 className="relative">Built</h1>
        </div>
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {Details.map((detail) => (
          <DetailsComponent data={detail} key={detail.title} />
        ))}
      </div>
      <p className="text-gray-300 mt-5">
        Not Enough ? Checkout my{" "}
        <a
          href="https://github.com/sirbor?tab=repositories"
          target="_blank"
          className="txt-green underline font-medium px-1"
        >
          Github
        </a>{" "}
        account
      </p>
    </div>
  );
};

export default Work;
