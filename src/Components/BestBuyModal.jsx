import React from 'react'

const BestBuyModal = ({visible,onClose}) => {
    const handelOnCloseb=(e)=>{
        if(e.target.id === "containerb") onClose()
        
       
    }

    if(!visible) return null
  return (
    <div 
    id="containerb"
     onClick={handelOnCloseb} 
     className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
      <div className='p-4 rounded-2xl bg-slate-300 '> 
      <h1 className="font-semibold text-center text-xl text-gray-700">
         BestBuy.com
        </h1>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>About JobNest-:</h4>
            <p className='text-xm'> BestBuy.com is an e-commerce web application that widely provides Tech-Gadgets and Tech-accessories.<br/> This repository consist replica of BestBuy.com project <br/> by using MERN Stack Technologies. </p>
        </div>
        <div className="text-left text-gray-700 mb-5 "> <h4 className='font-semibold'>Tech Stack-:</h4>
            <p className='text-xm'> HTML |CSS |JavaScript |Bootstrap </p>
        </div>

        <div className="flex flex-col">
         
          
        </div>
       
        <div className="flex items-center justify-center">
        <a href="https://moonlit-druid-960309.netlify.app" target="_blank" rel="noreferrer"><button  className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-slate-400">
                  Demo
        </button></a>
        <a href="https://github.com/Piryanshu88/BestBuys_Clone" target="_blank" rel="noreferrer"><button className="w-3/3 px-4 py-3 m-4 duration-200 hover:scale-105 bg-slate-400">
                  Code
        </button></a>
        </div>

      
      </div>
    </div>
  )
}

export default BestBuyModal
