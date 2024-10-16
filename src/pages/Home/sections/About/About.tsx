import { useState } from 'react'
import html from '../Hero/html-5.png'




const About=()=> {
   

  return (
    <div className='bg-[#0C0B0A] h-[20rem] rounded-[55px] text-center text-white flex justify-start align-top flex-col pt-4 mt-[4.5rem] '>
        <h1 className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#1C31A5] to-[#8E407A] bg-clip-text text-transparent'>About Me</h1>
        <p className='pt-5 pb-9 px-14 text-lg'>Certa vez, um pinguim resolveu abrir uma startup de sorvetes no Polo Sul. 
            O slogan era "Mais gelado, só do lado de fora!" Ele achou que ia fazer sucesso, 
            mas ninguém apareceu. Afinal, quem é que quer tomar sorvete onde já faz -30°C? Desolado, 
            ele fechou a loja e decidiu investir em algo mais quente: virou vendedor de cobertores elétricos para focas.
        </p>
        <div className="  left-1/2 flex justify-center gap-12 pt-8 rounded-lg h-fit">
        <img className='h-12' src={html} />
        <img className='h-12' src={html} />
        <img className='h-12' src={html} />

      </div>
    </div>
  )
}

export default About
