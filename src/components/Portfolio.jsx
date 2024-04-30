import React from "react";
import Arraydestucture from "../assets/Arraydestucture.png";
import nodejs from "../assets/nodejs.png";
import reactremovebg from "../assets/reactremovebg.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Arraydestucture,
    },
    {
      id: 2,
      src: reactremovebg,
    },
    {
      id: 3,
      src: reactremovebg,
    },
  
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black 
    to-gray-900 w-full flex justify-center  text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 
        max-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline 
          border-b-4 border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-5  px-20 sm:px-0  lg:grid-cols-5"
        >
          {portfolio.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md  w-full  shadow-gray-600 p-9    rounded-lg "
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 md:w-80 lg:w-80 "
              />
              <div className="flex items-center gap-3 justify-center">
                <button className="w-1/2 text-2xl   px-5 m-3 py-3 ml-2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-auto px-6 text-2xl  py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
