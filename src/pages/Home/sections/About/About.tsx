import { useLayoutEffect, useRef } from 'react'
import programacao from './codigo.png'
import familia from './familia.png'
import futebol from './futebol.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const eelementoRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.to(eelementoRef.current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {}
    })
    return () => {
      gsap.killTweensOf(eelementoRef.current)
    }
  }, [])

  return (
    <section id="aboutme">
      <div ref={eelementoRef} className='translate-y-[500px] opacity-0 bg-[#0C0B0A] h-fit rounded-[55px] text-center text-white flex flex-col justify-start pt-14  mt-[3.5rem] mx-4 sm:mx-0 sm:h-[24rem] '>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent md:mb-0 sm:mb-0'>
          About Me
        </h1>
        <p className='pt-9 pb-5 md:pb-5 lg:pb-9 px-6 sm:px-20 md:px-48 text-base sm:text-lg'>
          I am a <span className='font-bold bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>full-stack developer</span>, 
          a Software Engineering student at PUCRS in my third semester, 20 years old, and Brazilian. Driven by a passion for technology, 
          I constantly seek opportunities to learn and challenge myself. In my free time, I enjoy spending time with <span className='font-bold bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>family and friends</span> and <span className='font-bold bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>practicing sports</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 lg:pt-8 md:pt-0 rounded-lg h-fit mb-6 sm:mb-0">
          <img className='h-8' src={programacao} alt="Programming" />
          <img className='h-8' src={familia} alt="Family" />
          <img className='h-8' src={futebol} alt="Sports" />
        </div>
      </div>
    </section>
  )
}

export default About
