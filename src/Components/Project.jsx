import React,{useState} from "react";
import BestBuyHomePage from "../assets/portfolio/BestBuyHomePage.jpg";
import jobnest from "../assets/portfolio/jobnest.jpg"
import metadigital from "../assets/portfolio/metadigital.jpg"
import BestBuyModal from "./BestBuyModal";
import JobNestModal from "./JobNestModal";


const Project = () => {
  const [showMyModal ,setShowMyModal] =useState(false)
  const [showMyModalb ,setShowMyModalb] =useState(false)
const handelClose=()=>setShowMyModal(false)
const handelCloseb=()=>setShowMyModalb(false)

  // const project = [
  //   {
  //     id: 1,
  //     src: BestBuyHomePage,
  //     href:"https://moonlit-druid-960309.netlify.app",
  //     href1:"https://github.com/Piryanshu88/BestBuys_Clone"
  //   },
 


  //   {
  //     id: 3,
  //     src: jobnest,
  //     href:"https://common-dock-7043.vercel.app/",
  //     href1:"https://github.com/Sahnawaz7hussain/common-dock-7043",
  //     handelClose:handelClose
  //   },
    
  // ];

  return (
    <div
      name="project"
      className="  bg-purple-300 bg-gradient-to-b from-blue-500 text-sky-900 md:h-screen "
    >
      <div className="max-w-screen-lg p-4 md:mx-[6rem] sm:mx-auto flex flex-col justify-center w-full ">
        <div className="pb-2 mt-20 " style={{border:"0px solid blue"}}>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="pt-6  ">Check out some of my work right here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-[20rem] sm:gap-20 px-1 py-6 sm:px-0 sm:py-20  " style={{border:"0px solid red"}}>
        <div className=" md:w-[20rem] md:h-auto sm:w-0  sm:h-auto  " >
          {/* {project.map(({ id, src ,href,href1,handelClose}) => ( */}
            <div  className="shadow-md shadow-gray-600 rounded-lg px-6 py-8" style={{border:"4px solid gray-700"}}>
            <h1 className="font-semibold text-center text-xl text-gray-700 mb-4">
         JobNest.in
        </h1>
              <img
              onClick={()=>setShowMyModal(true)}
                src={jobnest}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-50"
                
              />
              <div className=" justify-center h-80" >
            
        <div className="text-left text-gray-700 mb-5 mt-1 "> <h4 className='font-semibold'>About JobNest-:</h4>
            <p className='text-[12px]'> This is a recruitment platform that provides hiring-related services to corporates and recruiters,placement agencies, and job seekers in India and overseas.It offers multiple products like Resume Database Access, Job Listings. </p>
        </div>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>Tech Stack-:</h4>
            <p className='text-[12px]'> HTML | CSS | Javascript | ReactJS | Redux | React-Redux | React-Router | Json-server | LocalStorage | Json_apis | Axios | Redux_thunk. </p>
        </div>

        <div className="flex flex-col">
         
          
        </div>
       
        <div className="flex items-center justify-center">
        <a href="https://common-dock-7043.vercel.app/" target="_blank" rel="noreferrer"><button  className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Demo
        </button></a>
        <a href="https://github.com/Sahnawaz7hussain/common-dock-7043" target="_blank" rel="noreferrer"><button className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Code
        </button></a>
        </div>
                {/* <button onClick={()=>setShowMyModal(true)} className="w-1/2  px-4 py-3 m-4 duration-200 hover:scale-105" style={{border:"1px solid red"}}>
                <b>JobNest.in</b> */}
          {/* </button> */}
              </div>
              {/* <JobNestModal onClose={handelClose} visible={showMyModal}/> */}
            </div>
          {/* ))} */}
        </div>


        <div className=" md:w-[20rem] md:h-auto sm:w-0 sm:h-auto  " >
          {/* {project.map(({ id, src ,href,href1,handelClose}) => ( */}
            <div  className="shadow-md shadow-gray-600 rounded-lg px-6 py-8" style={{border:"4px solid gray-700"}}>
            <h1 className="font-semibold text-center text-xl text-gray-700 mb-4 ">
            META Digital
        </h1>
              <img
              onClick={()=>setShowMyModal(true)}
                src={metadigital}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-50 h-70 "
                
              />
              <div className=" justify-center h-80" >
            
        <div className="text-left text-gray-700 mb-5 mt-7 "> <h4 className='font-semibold'>About META Digital-:</h4>
            <p className='text-[12px]'> This is a recruitment platform that provides hiring-related services to corporates and recruiters,placement agencies, and job seekers in India and overseas.It offers multiple products like Resume Database Access, Job Listings. </p>
        </div>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>Tech Stack-:</h4>
            <p className='text-[12px]'> HTML |CSS |JavaScript |Redux |Chakra UI|MongoDB |MongoDB Atlas |Node JS|Express |ReactJS | Redux | React-Redux | React-Router| Axios | Redux_thunk. </p>
        </div>

        <div className="flex flex-col">
         
          
        </div>
       
        <div className="flex items-center justify-center">
        <a href="https://jade-semolina-c23dce.netlify.app/" target="_blank" rel="noreferrer"><button  className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Demo
        </button></a>
        <a href="https://github.com/martina024/PRD_Project" target="_blank" rel="noreferrer"><button className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Code
        </button></a>
        </div>
                {/* <button onClick={()=>setShowMyModal(true)} className="w-1/2  px-4 py-3 m-4 duration-200 hover:scale-105" style={{border:"1px solid red"}}>
                <b>JobNest.in</b> */}
          {/* </button> */}
              </div>
              {/* <JobNestModal onClose={handelClose} visible={showMyModal}/> */}
            </div>
          {/* ))} */}
        </div>
        

        <div className="md:w-[20rem] md:h-auto sm:w-0 sm:h-auto " >
         
            <div  className="shadow-md shadow-gray-600 rounded-lg px-6 py-8" style={{border:"4px solid gray-700"}}>
            <h1 className="font-semibold text-center text-xl text-gray-700 mb-4">
         IndustryBuying.com
        </h1>
              <img
              onClick={()=>setShowMyModalb(true)}
                src={"https://user-images.githubusercontent.com/76995063/213940407-29245dc1-3e9f-4d65-b9be-9cbf56947a89.png"}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              style={{minHeight:"150px"}}
              />
              <div className=" justify-center">
             
        <div className="text-left text-gray-700 mb-5 mt-4 "> <h4 className='font-semibold'>About Industry Buying-:</h4>
            <p className='text-[12px]'> IndustryBuying is an e-commerce website provides service in New Delhi for Purchase of products by organizations for their own use or re-sell. </p>
        </div>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>Tech Stack-:</h4>
            <p className='text-[12px]'> HTML |CSS |JavaScript |Redux |Chakra UI|MongoDB |MongoDB Atlas |Node JS|Express |ReactJS | Redux | React-Redux | React-Router| Axios | Redux_thunk.</p>
        </div>

        <div className="flex flex-col">
         
          
        </div>
       
        <div className="flex items-center justify-center">
        <a href="https://aesthetic-kheer-0649e3.netlify.app/" target="_blank" rel="noreferrer"><button  className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Demo
        </button></a>
        <a href="https://github.com/martina024/industryBuying" target="_blank" rel="noreferrer"><button className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Code
        </button></a>
        </div>
              
                {/* <button onClick={()=>setShowMyModalb(true)} className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
                <b>BestBuy.com</b>
          </button> */}
              </div>
              <BestBuyModal onClose={handelCloseb} visible={showMyModalb}/>
            </div>
        
        </div>


        <div className="md:w-[20rem] md:h-auto sm:w-0 sm:h-auto " >
         
            <div  className="shadow-md shadow-gray-600 rounded-lg px-6 py-8" style={{border:"4px solid gray-700"}}>
            <h1 className="font-semibold text-center text-xl text-gray-700 mb-4">
         BestBuy.com
        </h1>
              <img
              onClick={()=>setShowMyModalb(true)}
                src={BestBuyHomePage}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              style={{minHeight:"150px"}}
              />
              <div className=" justify-center">
             
        <div className="text-left text-gray-700 mb-5 mt-4 "> <h4 className='font-semibold'>About JobNest-:</h4>
            <p className='text-sm'> BestBuy.com is an e-commerce web application that widely provides Tech-Gadgets and Tech-accessories.<br/> This repository consist replica of BestBuy.com project <br/> by using MERN Stack Technologies. </p>
        </div>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>Tech Stack-:</h4>
            <p className='text-sm'> HTML |CSS |JavaScript |Bootstrap </p>
        </div>

        <div className="flex flex-col">
         
          
        </div>
       
        <div className="flex items-center justify-center">
        <a href="https://moonlit-druid-960309.netlify.app" target="_blank" rel="noreferrer"><button  className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Demo
        </button></a>
        <a href="https://github.com/Piryanshu88/BestBuys_Clone" target="_blank" rel="noreferrer"><button className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-[#d4d4d4] hover:bg-[#a5b4fc] font-bold">
                  Code
        </button></a>
        </div>
              
                {/* <button onClick={()=>setShowMyModalb(true)} className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
                <b>BestBuy.com</b>
          </button> */}
              </div>
              <BestBuyModal onClose={handelCloseb} visible={showMyModalb}/>
            </div>
        
        </div>

        </div>
       
      </div>
     
    </div>
  );
};

export default Project;