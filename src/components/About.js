import React from "react";
import resume from "../resume.pdf";

const Skill = ({ title }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="triangle w-2 h-2" />
      <p className="text-gray-200 ">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="py-12 flex flex-col">
      <p className="text-3xl mb-2 txt-green"></p>
      <p className="text-4xl sm:text-6xl font-bold animate1 text-gray-200">
        Hi! i'm Dominic Bor
      </p>
      <p className="text-2xl sm:text-4xl font-bold py-4 txt-green animate2">
        Software Engineer
      </p>
      <p className="text-gray-300 animate3 sm:text-xl text-base mt-4 mb-6 ">
        Highly skilled software engineer with a strong background in object-oriented programming and expertise in Java, C++, PHP, and SQL. Proficient in front-end development using HTML, CSS, React, and Next.js, with a solid understanding of JavaScript and Python. Experienced in working within the software development lifecycle, leveraging Agile methodologies to deliver high-quality software products within project deadlines. Demonstrated proficiency in npm and Git version control, and extensive knowledge of Linux, Git, and Docker environments. A versatile and adaptable developer passionate about creating efficient, scalable, and user-friendly software solutions that meet user needs and drive business success.</p>
      <p className="mb-6 font-medium text-gray-100 text-xl">
        Currently i'm available to participate in interesting Android development & Web Applications, schedule a
        <a
          href="https://calendly.com/sirbor/30min"
          target="_blank"
          className="underline txt-green ml-1" rel="noreferrer"
        >
          chat
        </a>
      </p>
      <div className=" mb-10">
        {/* <p className="text-lg text-gray-300"></p> */}
        <p className="md:text-2xl text-xl text-gray-300 flex font-semibold">
          Some
          <div className="relative mx-2">
            <span className="absolute bottom-1 border-b-[3px] md:border-b-[5px] w-[120px] md:w-[144px]  border-[#03c4a1]" />
            <h1 className="relative">technologies</h1>
          </div>
          that I code with:
        </p>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="Java" />
            <Skill title="C++" />
            <Skill title="PHP" />
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="Javascript" />
            <Skill title="SQL" />
            <Skill title="Python" />
          </div>
        </div>
      </div>
      <a
        href={resume}
        download
        className="w-24 h-11 flex items-center justify-center font-medium border border-[#03c4a1] txt-green hover:bg-[#03c4a1] hover:text-gray-900 transition duration-500"
      >
        Resume
      </a>
    </div>
  );
};

export default About;
