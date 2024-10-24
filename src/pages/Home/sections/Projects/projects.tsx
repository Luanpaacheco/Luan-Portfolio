import React, { useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './projects.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import mongodb from '../../../../assets/mongodb-2.png';
import react from "../../../../assets/biblioteca.png";
import java from "../../../../assets/javaC.png";
import Javascript from '../../../../assets/script-java.png';
import css from '../../../../assets/css-3.png';
import git from '../../../../assets/git.png';
import typescript from '../../../../assets/typescript.png';
import html from '../../../../assets/html-5.png';
import api from '../../../../assets/api.png';
import projetoTempo from '../../../../assets/Projeto-tempo.png'
import projetoCalculadora from '../../../../assets/Projeto-calculadora.png'
import projetoSport from '../../../../assets/Projeto-sport.png'
import instamovies from '../../../../assets/Projeto-instamovies.png'
import github from '../../../Home/sections/Hero/github.png';

const Projects: React.FC = () => {
    interface Project {
        image: string;
        title: string;
        link: string;
        tec: string[]; // Opcional, pois nem todos os projetos têm tecnologias
    }
    
    const projects:Project[] = [
        {
            image: projetoCalculadora,
            title: 'Calculator',
            tec:[Javascript,html,css],
            link: 'https://github.com/Luanpaacheco/BEAUTIFUL-CALCULATOR',
        },
        {
            image: projetoTempo,
            title: 'Weather Forecast Web',
            tec:[Javascript, html, css, api, git],
            link: 'https://github.com/Luanpaacheco/Weather-Forecast-Web-App',
        },
        {
            image: instamovies,
            title: 'InstaMovie',
            tec:[typescript, css,html, react, mongodb, api ],
            link: 'https://github.com/Luanpaacheco/InstaMovie',
        },
        {
            image: projetoSport,
            title: 'Sports Federation Simulator',
            tec:[java],
            link: 'https://github.com/Luanpaacheco/Sports-Federation-Simulator',
        },
        // {
        //     image: python,
        //     title: 'Pokedex',
        //     tec:[],
        //     link: 'https://github.com/Luanpaacheco/POKEDEX-flask',
        // },
        // {
        //     // image: 'Foto1',
        //     // title: 'Portfolio',
        //     // tec:[],
        //     // link: '#',
        // },
    ];

    const elementoReff = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        gsap.to(elementoReff.current, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: elementoReff.current,
                markers: false
            }
        });
        return () => {
            gsap.killTweensOf(elementoReff.current);
        };
    }, []);

    return (
        <>
            <div id="projects" ref={elementoReff} className='translate-y-[500px] opacity-0 pt-7'>
                <h1 className='text-4xl font-bold text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>Projects</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="my-swiper"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="swiper-slide-custom">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                <div className="slide-content">
                                    <img src={project.image} alt={project.title} className="bg-[#161513] rounded-[8px] p-1 " />
                                    <div className="tech-icons flex gap-2 justify-center p-1 items-center mt-2">
                                        {project.tec.map((tecImage, techIndex) => (
                                            <img key={techIndex} src={tecImage} alt={`Tecnologia ${techIndex}`} className="tech-image w-5 h-5 " />
                                        ))}
                                    </div>
                                    <h3 className='font-bold text-slate-300'>{project.title}
                                    <img src={github} alt="" className='h-3' /> 
                                    </h3>
                            

                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Projects;
