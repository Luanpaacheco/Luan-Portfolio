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

import signature from '../../../../assets/signature.svg'

const Signature=()=> {
   

  return (
<div className=' flex h-fit justify-center items-center align-middle my-24 text-center '>
<img className='h-28'src={signature}alt="" />
</div>

  )
}

export default Signature
