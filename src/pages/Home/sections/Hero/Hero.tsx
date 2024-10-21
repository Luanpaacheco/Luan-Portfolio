import { useLayoutEffect, useRef } from 'react';
import avatar from "./perfil.png";
import download from './download-direto.png';
import aspas from './citar.png';
import github from './github.png';
import linkedin from './logotipo-do-linkedin.png';
import cv from "./cv.pdf";
import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

const Hero = () => {
  const elementoRef = useRef(null);
  const textoRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  useLayoutEffect(() => {
    gsap.to(elementoRef.current, {
      delay: 2.5,
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "bounce.out"
    });

    gsap.to(textoRef.current, {
      text: "I'm <span style='background: linear-gradient(to right, #6148ac, #6312d6); -webkit-background-clip: text; color: transparent;'>Luan</span>, <br/>Software Engineer",
      duration: 1.5,
      ease: "none",
      delay: 0.5,
      parseTransform: true
    });

    return () => {
      gsap.killTweensOf(elementoRef.current);
      gsap.killTweensOf(textoRef.current);
    };
  }, []);

  return (
    <div className='text-white text-center' id="home">
      <div className="profile-content h-auto flex flex-col items-center justify-center md:flex-row md:h-[40rem]">
        <div className="flex flex-col items-center md:h-full">
          <div className='hover:scale-110 duration-300 hover:cursor-default'>
            <h1 className="text-3xl sm:text-4xl pt-20 md:text-6xl font-bold  md:pt-24" ref={textoRef}></h1>
          </div>
          <div className="flex flex-col md:flex-row items-center h-full w-full md:w-fit px-4 md:pr-32">
            <div className="hover:scale-125 duration-300 text-xs rounded-lg text-slate-50 text-left font-semibold mb-4 md:mb-0">
              <img className='h-6 md:h-8' src={aspas} alt="" />
              I have not failed.<br />
              I've just found 10,000 ways that won't<br />
              work.
              <div className='text-sm w-full flex justify-end pt-1'>Thomas Edison</div>
            </div>
            <div className="flex items-center h-[18rem] sm:h-[24rem] md:h-[28rem] mb-4 md:mb-0">
              <img
                src={avatar}
                alt="Luan profile"
                className="h-[18rem] sm:h-[20rem] lg:h-[32rem] md:[]"
              />
            </div>
            <div className="text-xl rounded-lg w-full md:w-fit flex gap-4 md:gap-8  mb-10 md:flex justify-center">
              <a href="https://github.com/Luanpaacheco" target="_blank" rel="noopener noreferrer">
                <img className='h-8 hover:scale-125 duration-300' src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/luan-pacheco-lima/" target="_blank" rel="noopener noreferrer">
                <img className='h-8 hover:scale-125 duration-300' src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div ref={elementoRef} className="translate-y-[100px] opacity-0 bg-[#161513]/25 mt-[-2rem] md:mt-[-3rem] rounded-[50px] flex justify-center align-middle items-center p-1.5 h-fit backdrop-blur-[2px] border-2 border-white/25">
            <a href={cv} download className='hover:scale-95 bg-gradient-to-r hover:bg-gradient-to-l transition duration-700 from-[#6148ac] to-[#6312d6] text-base md:text-xl rounded-[50px] p-2 px-4 flex items-center'>
              Download CV
              <img className='h-4 md:h-5 ml-4' src={download} alt="Download CV" />
            </a>
            <h2 className='px-4 md:px-6 text-lg'>Hire Me</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
