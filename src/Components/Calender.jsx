import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 24;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div  name="calender"
    className=" bg-blue-500 bg-gradient-to-b from-purple-300 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-sky-900">
        <div className="md:mt-[0rem] sm:mt-[30rem]">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Github Calander
          </p>
        </div>
        <div style={{width:"100%" , marginTop:"50px",border:"0px solid red"}} >
        <GitHubCalendar
        style={{ margin: "auto" }}
        username="martina024"
        // transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={10}
      >
         <ReactTooltip delayShow={10} html /> 
      </GitHubCalendar>
        </div>
      </div>
      
    </div>
  );
};

export default Calender;