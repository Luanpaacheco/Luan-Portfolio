import { useState } from 'react'
import {
    Html as HtmlIcon,
    Css as CssIcon,
    Storage as MongoDBIcon,
    Coffee as JavaIcon, // Usando um ícone genérico para Java
  } from '@mui/icons-material';
import  JavascriptIcon from '@mui/icons-material/Javascript';
import AccessibleIcon from '@mui/icons-material/Accessible';
import avatar from "./perfil.png"
import java from "./javaC.png"




const Hero=()=> {
   

  return (
    <div className="bg-[#161513] text-white text-center p-8 w-screen h-screen">
    <div className="profile-content h-[40rem]  flex items-center justify-center">
      <div className="flex flex-col items-center  h-[40rem] ">
        <h1 className="text-6xl font-bold mb-4">
          I'm <span className="text-purple-400">Luan</span>, <br /> Software Engineer
        </h1>
        <div className="flex flex-row items-center h-[40rem] pl-24 relative">
        <div className="flex items-center h-[31.5rem] ">
          <img
            src={avatar}
            alt="Luan profile"
            className="h-[37.5rem]  "
          />
          </div>
          <div className="  text-xl   rounded-lg  w-fit">
            +2 Years <div className='text-xs  w-full flex justify-end '> experience</div> 
        </div> 
        
        </div>
        <div className="bg-[#161513]/25  absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-20 p-1  mb-4 rounded-lg h-fit">
        <img className='h-20 'src={java} />
          
          <JavascriptIcon className="text-white" fontSize="large" />
          <JavascriptIcon className="text-white" fontSize="large" />
          <JavascriptIcon className="text-white" fontSize="large" />
          <JavascriptIcon className="text-white" fontSize="large" />
          <JavascriptIcon className="text-white" fontSize="large" />
          <JavascriptIcon className="text-white" fontSize="large" />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Hero
