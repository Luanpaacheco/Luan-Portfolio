import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Projects from './sections/Projects/projects'
import NavBar from './sections/navigateBar/NavBar'
import HardSkill from './sections/HardSkills/HardSkilss'
import Contact from './sections/Contact/Contact'
import Signature from './sections/Signature/Signature'




const Home=()=> {


  return (
    <>
    
    <NavBar/>
    <Hero/>
    <About/>
   <Projects/>
   <HardSkill/>
   <Contact/>
   <Signature/>
    </>
  )
}

export default Home
