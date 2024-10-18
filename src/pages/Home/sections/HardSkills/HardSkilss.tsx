import { useLayoutEffect, useRef } from 'react';
import react from "../../../../assets/biblioteca.png";
import java from "../../../../assets/javaC.png";
import Javascript from '../../../../assets/script-java.png';
import python from '../../../../assets/python.png';
import css from '../../../../assets/css-3.png';
import linux from '../../../../assets/plataforma-linux.png';
import git from '../../../../assets/git.png';
import typescript from '../../../../assets/typescript.png';
import html from '../../../../assets/html-5.png';
import mongodb from '../../../../assets/mongodb-2.png';
import docker from '../../../../assets/docker.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HardSkillss = () => {
  const elementoHardSkill = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(elementoHardSkill.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: elementoHardSkill.current,
      }
    });
    return () => {
      gsap.killTweensOf(elementoHardSkill.current);
    };
  }, []);

  return (
    <div ref={elementoHardSkill} className='translate-x-[500px] opacity-0 flex-row h-fit justify-center items-center align-middle my-32'>
      <h1 id="knowhow" className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>Know-How</h1>
      <div className='h-fit'>
        <div className="flex justify-center space-x-10 pt-7">
          <img src={java} alt="Java" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          <img src={Javascript} alt="JavaScript" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          <img src={python} alt="Python" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          <img src={css} alt="CSS" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          <img src={html} alt="HTML" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          <img src={react} alt="React" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          <img src={mongodb} alt="MongoDB" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
        </div>
        <div className='h-fit pt-8'>
          <div className="flex justify-center space-x-10">
            <img src={react} alt="React" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
            <img src={linux} alt="Linux" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
            <img src={git} alt="Git" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
            <img src={typescript} alt="TypeScript" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
            <img src={docker} alt="Docker" className="h-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-125" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardSkillss;
