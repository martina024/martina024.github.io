import React from 'react'

const JobNestModal = ({visible ,onClose}) => {
    const handelOnClose=(e)=>{
        if(e.target.id === "container") onClose()
        
       
    }

    if(!visible) return null
  return (
    <div 
    id="container"
     onClick={handelOnClose} 
     className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
      <div className='p-4 rounded-2xl bg-slate-300 '> 
      <h1 className="font-semibold text-center text-xl text-gray-700">
         JobNest.in
        </h1>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>About JobNest-:</h4>
            <p className='text-xm'> This is a recruitment platform that provides hiring-related services to corporates/recruiters,<br/> placement agencies, and job seekers in India and overseas.<br/> It offers multiple products like Resume Database Access, Job Listings. </p>
        </div>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>Tech Stack-:</h4>
            <p className='text-xm'> HTML | CSS | Javascript | ReactJS | Redux | React-Redux | React-Router <br/> Json-server | LocalStorage | Json_apis | Axios | Redux_thunk. </p>
        </div>

        <div className="flex flex-col">
         
          
        </div>
       
        <div className="flex items-center justify-center">
        <a href="https://common-dock-7043.vercel.app/" target="_blank" rel="noreferrer"><button  className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-slate-400">
                  Demo
        </button></a>
        <a href="https://github.com/Sahnawaz7hussain/common-dock-7043" target="_blank" rel="noreferrer"><button className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-slate-400">
                  Code
        </button></a>
        </div>

      
      </div>
    </div>
  )
}

export default JobNestModal
