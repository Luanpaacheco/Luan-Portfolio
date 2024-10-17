import { useState } from 'react'
import programacao from './codigo.png'
import familia from './familia.png'
import futebol from './futebol.png'




const NavBar=()=> {
   

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#161513] text-white fixed w-full z-10">
            <div className="text-2xl font-bold">Luan Pacheco</div>
            <ul className="flex gap-10 pr-28">
                <li><a href="#home" className="text-lg hover:text-[#6148ac]">Home</a></li>
                <li><a href="#aboutme" className="text-lg hover:text-[#6148ac]">About me</a></li>
                <li><a href="#projects" className="text-lg hover:text-[#6148ac]">Projects</a></li>
                <li><a href="#experience" className="text-lg hover:text-[#6148ac]">Experience</a></li>
                <li><a href="#contact" className="text-lg hover:text-[#6148ac]">Contact</a></li>
            </ul>
        </nav>
  )
}

export default NavBar
