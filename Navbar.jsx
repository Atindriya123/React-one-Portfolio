import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center w-full
    h-20 text-white bg-black px-4 fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Atindriya</h1>
      </div>
      <ul className="flex ">
        <li
          className="px-4 cursor-pointer  font-medium 
        text-gray-500 hover:scale-105 opacity-5 "
        ></li>
        <li className="px-4 text-gray-500 cursor-pointer mt-4 text-sm">Home</li>
      </ul>
    </div>
  );
};

export default Navbar;
