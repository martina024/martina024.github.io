import React from "react";
// import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div name="calender"
    className=" bg-blue-500 bg-gradient-to-t from-purple-300  w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-sky-900">
            <div className="md:mt-[0rem] sm:mt-[30rem]">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Statistics
          </p>
            </div>
            <div style={{margin:"auto"}}>
     
 
      <div
      
        style={{
          width: "100%",
          height: "300px",
          margin: "auto",
          display:"flex",
          gap:"20px" ,
          md:"flex"
            
        }}
      >
         <a href="https://github.com/martina024">
          <img
          // className="mb-20"
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com?user=martina024"
            
          />
        </a>

     
        <a href="https://github.com/martina024">
          <img
            align="center"
           
            src="https://github-readme-stats.vercel.app/api?username=martina024&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
    </div>
        
    </div>
   
  );
};

export default Stats;