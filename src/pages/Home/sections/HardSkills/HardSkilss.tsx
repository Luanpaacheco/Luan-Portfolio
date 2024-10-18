import { useState } from 'react'
import programacao from './codigo.png'
import familia from './familia.png'
import react from '../Hero/biblioteca.png'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import java from "../../../../assets/javaC.png"
import  Javascript  from '../../../../assets/script-java.png';
import python from '../../../../assets/python.png'
import css from '../../../../assets/css-3.png'
import linux from '../../../../assets/plataforma-linux.png'
import git from '../../../../assets/git.png'
import typescript from '../../../../assets/typescript.png'
import html from '../../../../assets/html-5.png'
import mongodb from '../../../../assets/mongodb-2.png'
import docker from '../../../../assets/docker.png'




const HardSkillss=()=> {
   

  return (
//     <div className="grid grid-cols-7 gap- justify-center items-center bg-gray-900 p-4 rounded-lg">
//   {/* Primeira linha com 7 ícones */}
//   <img src={react} alt="Java" className="h-12" />
//   <img src={react} alt="JavaScript" className="h-12" />
//   <img src={react} alt="Python" className="h-12" />
//   <img src={react} alt="CSS" className="h-12" />
//   <img src={react} alt="HTML" className="h-12" />
//   <img src={react} alt="React" className="h-12" />
//   <img src={react} alt="MongoDB" className="h-12" />

//   {/* Segunda linha com 3 ícones */}
//   <img src={react} alt="Linux" className="h-12 col-span-2" />
//   <img src={react} alt="Git" className="h-12 col-span-2" />
//   <img src={react} alt="TypeScript" className="h-12 col-span-2" />
// </div>

<div className=' flex-row h-fit justify-center items-center align-middle my-32'>
<h1 className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>Know-How</h1>
    <div className=' h-fit'>
    <div className="flex justify-center space-x-10 pt-7">
  <img src={java} alt="Java" className="h-20" />
  <img src={Javascript} alt="JavaScript" className="h-20" />
  <img src={python} alt="Python" className="h-20" />
  <img src={css} alt="CSS" className="h-20" />
  <img src={html} alt="HTML" className="h-20" />
  <img src={react} alt="Python" className="h-20" />
  <img src={mongodb} alt="CSS" className="h-20" />
    </div>
    <div className=' h-fit pt-8'>
    <div className="flex justify-center space-x-10  ">
    <img src={react} alt="Java" className="h-20" />
    <img src={linux} alt="JavaScript" className="h-20" />
    <img src={git} alt="Python" className="h-20" />
    <img src={typescript} alt="CSS" className="h-20" />
    <img src={docker} alt="CSS" className="h-20" />
    </div>
    </div>
</div>
</div>
    
  )
}

export default HardSkillss
