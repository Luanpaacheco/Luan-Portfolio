import { useState } from 'react';
import signature from '../../../../assets/signature.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-10 md:pr-28 bg-[#161513] text-white fixed w-full z-10 h-fit">
      <img className="h-14 pt-1" src={signature} alt="Logo" />
      
      {/* Ícone do menu para mobile */}
      <div className="md:hidden pr-3" onClick={toggleMenu}>
        <button className="text-white focus:outline-none">
          {/* Ícone do menu (hambúrguer) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu de navegação */}
      <ul className={`md:flex gap-10  pt-5 pb-2  ${isOpen ? 'grid grid-cols-2 gap-2' : 'hidden'} md:block`}>
        <li >
          <a href="#home" className="text-sm hover:text-[#6148ac]">Home</a>
        </li>
        <li >
          <a href="#aboutme" className="text-sm hover:text-[#6148ac]">About me</a>
        </li>
        <li >
          <a href="#projects" className="text-sm hover:text-[#6148ac]">Projects</a>
        </li>
        <li >
          <a href="#knowhow" className="text-sm hover:text-[#6148ac]">Know-How</a>
        </li>
        <li >
          <a href="#contact" className="text-sm hover:text-[#6148ac]">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
