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
import  Javascript  from './script-java.png';
import python from './python.png'
import css from './css-3.png'
import react from './biblioteca.png'
import html from './html-5.png'
import mongodb from './mongodb-2.png'




const Hero=()=> {
   

  return (
    // <div className="bg-[#161513] text-white text-center  w-screen h-screen">
    <div className='text-white text-center'>
  <div className="profile-content h-[40rem] flex items-center justify-center">
    <div className="flex flex-col items-center h-full">
      <h1 className="text-6xl font-bold mb-4">
        I'm <span className="bg-gradient-to-r from-[#4F3892] to-[#5C3A8D] bg-clip-text text-transparent ">Luan</span>, <br /> Software Engineer
      </h1>
      <div className="flex flex-row items-center h-full pl-24">
        <div className="flex items-center h-[31.5rem]">
          <img
            src={avatar}
            alt="Luan profile"
            className="h-[40.5rem] pt-5"
          />
        </div>
        <div className="text-xl rounded-lg w-fit">
          +2 Years <div className='text-xs w-full flex justify-end'>experience</div> 
        </div>
      </div>
      <div className="bg-[#161513]/25 mt-[-3rem] left-1/2 flex justify-center gap-12 p-1 rounded-lg h-fit">
        <img className='h-20' src={java} />
        <img className='h-20' src={Javascript} />
        <img className='h-20' src={python} />
        <img className='h-20' src={css} />
        <img className='h-20' src={html} />
        <img className='h-20' src={react} />
        <img className='h-20' src={mongodb} />
      </div>
    </div>
  </div>
</div>

  
  
  )
}

export default Hero
