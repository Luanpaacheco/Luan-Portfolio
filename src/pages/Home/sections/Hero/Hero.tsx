import { useState } from 'react'

import avatar from "./perfil.png"

import download from './download-direto.png'
import aspas from './citar.png'
import github from './github.png'
import linkedin from './logotipo-do-linkedin.png'



const Hero=()=> {
   

  return (
    // <div className="bg-[#161513] text-white text-center  w-screen h-screen">
    <div className='text-white text-center'>
  <div className="profile-content h-[40rem] flex items-center justify-center">
    <div className="flex flex-col items-center h-full">
      <div className='hover:scale-110 duration-300 hover:cursor-default'>
      <h1 className="text-6xl font-bold pt-24">
        I'm <span className="bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent ">Luan</span>, <br /> Software Engineer
      </h1>
      </div>
      
      <div className="flex flex-row items-center h-full w-fit pr-32">
      <div className=" hover:scale-125 duration-300 text-xs rounded-lg  text-slate-50 text-left font-semibold">
        <img className='h-8'src={aspas} alt="" />
      I have not failed.<br></br> 
I've just found 10,000 ways that won't<br></br> work.<div className='text-sm w-full flex justify-end pt-1'>Thomas endson</div> 
        </div>
        <div className="flex items-center h-[28rem]">

          <img
            src={avatar}
            alt="Luan profile"
            className="h-[32rem] 
            "
          />
        </div>
        <div className="text-xl rounded-lg w-fit flex  gap-8">
          <button>
            <img className='h-9 hover:scale-125 duration-300'src={github} alt="" />
          </button>
          <button>
            <img className='h-9 hover:scale-125 duration-300'src={linkedin} alt="" />
          </button>
        
        
          {/* +2 Years <div className='text-xs w-full flex justify-end'>experience</div>  */}

        </div>
      </div>
      <div className="bg-[#161513]/25 mt-[-3rem] rounded-[50px] left-1/2 flex justify-center align-middle items-center  p-1.5 h-fit backdrop-blur-[2px] border-2 border-white/25">
        <button className=' hover:scale-95 bg-gradient-to-r hover:bg-gradient-to-l transition duration-700 from-[#6148ac] to-[#6312d6] text-xl rounded-[50px] p-2 px-4 flex items-center '>Download CV
        <img className='h-5 ml-4' src={download} />
        </button>
        <h2 className='px-6 text-lg  '>Hire Me</h2>
        {/* <img className='h-14' src={java} />
        <img className='h-14' src={Javascript} />
        <img className='h-14' src={python} />
        <img className='h-14' src={css} />
        <img className='h-14' src={html} />
        <img className='h-14' src={react} />
        <img className='h-14' src={mongodb} /> */}
      </div>
    </div>
  </div>
</div>

  
  
  )
}

export default Hero
