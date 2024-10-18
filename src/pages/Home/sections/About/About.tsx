import { useLayoutEffect, useRef, useState } from 'react'
import programacao from './codigo.png'
import familia from './familia.png'
import futebol from './futebol.png'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




const About=()=> {
  const eelementoRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(()=>{
    gsap.to(eelementoRef.current, {
      y:0,
      opacity:1,
      scrollTrigger:{
        
       
      }
      
    })
    return()=>{
      gsap.killTweensOf(eelementoRef.current)
    }
  }, [])

  return (

    <section id="aboutme">
      <div  ref={eelementoRef} className='translate-y-[500px] opacity-0 bg-[#0C0B0A] h-[24rem] rounded-[55px] text-center text-white flex justify-start align-top flex-col pt-14 mt-[3.5rem] '>
        <h1 className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>About Me</h1>
        <p className='pt-5 pb-9 px-48 text-lg'>Certa vez, um pinguim resolveu abrir uma startup de sorvetes no Polo Sul. 
            O slogan era "Mais gelado, só do lado de fora!" Ele achou que ia fazer sucesso, 
            mas ninguém apareceu. Afinal, quem é que quer tomar sorvete onde já faz -30°C? Desolado, 
            ele fechou a loja e decidiu investir em algo mais quente: virou vendedor de cobertores elétricos para focas.
        </p>
        <div className="  left-1/2 flex justify-center gap-12 pt-8 rounded-lg h-fit">
        <img className='h-8' src={programacao} />
        <img className='h-8' src={familia} />
        <img className='h-8' src={futebol} />

      </div>
    </div>
    </section>
        

    
  )
}

export default About
