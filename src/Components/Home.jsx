// import React,{useState} from 'react'
// import Typewriter from "typewriter-effect"
// import HeroImage from "../assets/heroImage.png";
// const Home = () => {
//   const [state]=useState({
//     title:"Hi",
//     titleTwo:"I'm",
//     titleThree:"Martina Varghese",
//     image:HeroImage
//   })
//   return (
//     <div
//     name="home"
//     className="h-screen w-full bg-gradient-to-b from-black via-black to-indigo-900">
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//         <h2 className="text-1.5xl sm:text-6xl font-bold text-white">
//           <div>{state.title}</div>
//           <div>{state.titleTwo}</div>
//           <div>{state.titleThree}</div>
//         </h2>
//         </div>
       
//         <div className="text-1.5 sm:text-6xl font-bold text-white">
//           <Typewriter
//           options={{
//             autoStart:true,
//             loop:true,
//             delay:40,
//             string:[
//               "I am a Full Stack Web Developer",
//               "I love Coding",
//               "CODE !",
              
//             ]
//           }}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home



import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {BiDownload} from "react-icons/bi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-t from-blue-500 to-bg-transparent "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row" style={{border:"0px solid blue"}}>
        <div className="flex flex-col justify-center h-full" style={{border:"0px solid red"}}>
          <h2 className="text-1.5xl sm:text-6xl font-bold text-sky-900">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-black py-4 max-w-md">
           I love to work on web application using technologies like
            React, JavaScript, Chakra UI,CSS etc.
          </p>

          <div style={{display:"flex" , gap:"20px"}}>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-700 to-blue-800 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div>
            <a href="/Martina_Varghese_Resume.pdf" download className="group text-white w-fit px-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-700 to-blue-800 cursor-pointer">
              Resume <span >
                <BiDownload size={20}  className="ml-3" />
              </span>
              </a>
          </div>
          </div>
         
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-fit "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;