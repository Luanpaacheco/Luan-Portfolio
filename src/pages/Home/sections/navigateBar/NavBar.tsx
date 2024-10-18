import { useState } from 'react'
import programacao from './codigo.png'
import familia from './familia.png'
import futebol from './futebol.png'
import signature from '../../../../assets/signature.svg'



const NavBar=()=> {
   

  return (
    <nav className="flex justify-between items-center px-10  bg-[#161513] text-white fixed w-full z-10 h-fit">
            <img className='h-14 'src={signature}alt="" />
            <ul className="flex gap-10 pr-28">
                <li><a href="#home" className="text-sm hover:text-[#6148ac]">Home</a></li>
                <li><a href="#aboutme" className="text-sm hover:text-[#6148ac]">About me</a></li>
                <li><a href="#projects" className="text-sm hover:text-[#6148ac]">Projects</a></li>
                <li><a href="#knowhow" className="text-sm hover:text-[#6148ac]">Know-How</a></li>
                <li><a href="#contact" className="text-sm hover:text-[#6148ac]">Contact</a></li>
            </ul>
        </nav>
  )
}

export default NavBar
