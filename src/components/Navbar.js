import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import resume from "../resume.pdf";

const Navbar = () => {
  const commonClass =
    "text-gray-300 hover:text-[#03c4a1] transition duration-500";

  return (
    <div className="flex justify-between w-full items-center py-6">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQEtEJ0jxbL19g/profile-displayphoto-shrink_800_800/0/1673940418112?e=1683763200&v=beta&t=U5xfTN5doT9SEZQCZ6z-D7isFl-7zAWJ7pdqRY_ul3w"
        className="rounded-full h-10 w-10 border"
      />

      <div className="flex space-x-5 items-center text-2xl">
        <a
          href="https://www.github.com/sirbor"
          target="_blank"
          className={commonClass}
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dominicbor"
          target="_blank"
          className={commonClass}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.twitter.com/sirbor_"
          target="_blank"
          className={commonClass}
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="mailto:dominicbor44@gmail.com"
          target="_blank"
          className={commonClass}
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
