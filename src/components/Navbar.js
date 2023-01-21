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
        src="https://blog.sirbor.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1667934430586%2FE_ES3h0AW.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
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
