import React from "react";
import Javascript from "../assets/js.png";
import MongoDB from "../assets/mongoDB.png";
import Nextjs from "../assets/nextjs.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import HTML from "../assets/html.png";
import Nodejs from "../assets/nodejs.png";
import ReactJS from "../assets/react2.png";
import Express from "../assets/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 4,
      src: Nextjs,
      title: "Nextjs",
      style: "shadow-white",
    },
    {
      id: 5,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: Redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: Nodejs,
      title: "Nodejs",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: ReactJS,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: Express,
      title: "Express",
      style: "shadow-gray-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b
    from-gray-800 to-black w-full h-full  "
    >
      <div
        className=" mx-auto p-4 flex
      flex-col justify-center w-full h-full text-white"
      >
        <div className="mt-16">
          <p
            className="text-4xl font-bold border-b-4
          border-gray-500 mx-8 inline"
          >
            Experience
          </p>
          <p className="py-6 mx-7">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="grid grid-cols-2 m-6 sm:grid-cols-3 gap-8  py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  flex flex-col justify-center items-center hover:scale-105 duration-300
            py-4 rounded-lg ${style}`}
            >
              <img
                src={src}
                className="h-20  m-4 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                alt=""
              />
              <p className="mt-4 mx-4 text-sm px-8">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
