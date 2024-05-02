import React, { Children } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <br />
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md ",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Atindriya123",
    },
    {
      id: 3,
      child: (
        <>
          E-Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:atindriyamondal1@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1zxU0XosuqpOYSP0b56MCzCi6QQUSfOu-/view?usp=sharing", // Provide the actual URL for the resume
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed px-0 ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center w-40 h-14 px-2 p-4 flex-col  text-base md:text-lg lg:text-xl  ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-30 bg-gray-500 ` +
              style
            }
          >
            <a
              href={href} // Provide the href attribute with the actual URL
              className="flex justify-between items-center text-white p-0 gap-5"
              download={download}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                download;
              }}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
