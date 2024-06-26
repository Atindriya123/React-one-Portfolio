import React from 'react';
import Img from  "../assets/atin.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black to-gray-800 pt-4' >
       <div className='max-w-screen-lg mx-auto flex flex-col
       justify-center h-full px-2 
       items-center md:flex-row'>
         <div className='flex flex-col justify-center h-full mt-16'>
          <h2 className='text-4xl sm:text-7xl font-bold
          text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I love to work on webapplication using technologies like
            React,Tailwind, Next JS and Mongo DB.
          </p>
          <div>
            <Link to="portfolio" smooth duration ={500} className='group text-white w-fit px-6 
            py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500
             to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group hover:rotate-90 duration-300'>
              <MdKeyboardArrowRight size={25} className=' mt-2 ml-2'/>
                </span>
            </Link>
          </div>
         </div>
         <div>
          <img src={Img}alt=""
           className=' rounded-2xl 
            mx-auto w-2/3 md:w-full ml-10 mt-4 '/>
         </div>
       </div>
    </div>
  )
}

export default Home