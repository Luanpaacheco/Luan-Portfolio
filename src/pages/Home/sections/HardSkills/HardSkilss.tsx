import { useState } from 'react'
import programacao from './codigo.png'
import familia from './familia.png'
import react from '../Hero/biblioteca.png'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import java from "../../../../assets/javaC.png"
import  Javascript  from '../../../../assets/javaC.png';
import python from '../../../../assets/javaC.png'
import css from '../../../../assets/javaC.png'
import react from '../../../../assets/javaC.png'
import html from '../../../../assets/javaC.png'
import mongodb from '../../../../assets/javaC.png'




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

<div className='bg-red-700 flex-row h-fit justify-center items-center align-middle'>
<h1 className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>Know-How</h1>
    <div className=' h-fit'>
    <div className="flex justify-center space-x-6 ">
  <img src={react} alt="Java" className="h-12" />
  <img src={react} alt="JavaScript" className="h-12" />
  <img src={react} alt="Python" className="h-12" />
  <img src={react} alt="CSS" className="h-12" />
  <img src={react} alt="HTML" className="h-12" />
  <img src={react} alt="Python" className="h-12" />
  <img src={react} alt="CSS" className="h-12" />
  <img src={react} alt="HTML" className="h-12" />
    </div>
    <div className=' h-fit'>
    <div className="flex justify-center space-x-6  ">
    <img src={react} alt="Java" className="h-12" />
  <img src={react} alt="JavaScript" className="h-12" />
  <img src={react} alt="Python" className="h-12" />
  <img src={react} alt="CSS" className="h-12" />
  <img src={react} alt="HTML" className="h-12" />
    </div>
    </div>
</div>
</div>
    
  )
}

export default HardSkillss
