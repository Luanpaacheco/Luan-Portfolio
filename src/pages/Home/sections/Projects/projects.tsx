import React, { useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Projects.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import html from '../../../../assets/html-5.png'

const Projects: React.FC = () => {
    const projects = [
        {
            image: html,
            title: 'Calculadora',
            link: 'https://github.com/gabrielahf/Calculadora',
        },
        {
            image: html,
            title: 'Conversor de Moedas',
            link: 'https://github.com/gabrielahf/Conversor_Moedas',
        },
        {
            image: 'Foto1',
            title: 'Portfolio',
            link: '#',
        },
    ];

    const eelementoReff = useRef(null);

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(()=>{
    gsap.to(eelementoReff.current, {
      y:0,
      opacity:1,
      scrollTrigger:{
        trigger:eelementoReff.current,
        markers:false
      }
      
    })
    return()=>{
      gsap.killTweensOf(eelementoReff.current)
    }
  }, [])
    return (
        <>
        <div>
        
        <div id="projects" ref={eelementoReff} className='translate-y-[500px] opacity-0 pt-7'>

        <h1 className='text-4xl font-bold text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>Projects</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className=""
            
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        {/* Envolvendo o card com o link */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            <div className="slide-content">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <h3>{project.title}</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            </div>
        </>
    );
};

export default Projects;