import instagram from '../../../../assets/instagram.png';
import email from '../../../../assets/o-email.png';
import telefone from '../../../../assets/telefone.png';
import twitter from '../../../../assets/twitter.png';
import linkedin from '../../../Home/sections/Hero/logotipo-do-linkedin.png';
import github from '../../../Home/sections/Hero/github.png';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
    const elementoContato = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        gsap.to(elementoContato.current, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: elementoContato.current,
            }
        });
        return () => {
            gsap.killTweensOf(elementoContato.current);
        };
    }, []);

    return (
        <div id="contact" ref={elementoContato} className='translate-x-[-500px] opacity-0'>
            <h1 className='text-4xl font-bold mt-6 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>
                Contact
            </h1>

            <div className='text-center text-white flex flex-col md:flex-col justify-center items-center h-fit py-9 w-full'>
                <div className='flex flex-col md:flex-row w-full items-center md:items-start pb-5 gap-4'>
                    <div className='w-full md:w-2/3 text-center md:text-left flex flex-col items-center md:items-center'>
                        <div className='flex flex-row items-center gap-2 mb-3'>
                            <img className='h-4' src={email} alt="Email" />
                            <a href="mailto:luanpachecolima00@gmail.com" className='text-xs underline-offset-8 text-white'>
                                luanpachecolima00@gmail.com
                            </a>
                        </div>
                        <div className='flex flex-row items-center gap-2 mb-3'>
                            <img className='h-4' src={telefone} alt="Telefone" />
                            <h3 className='text-xs'>+55 (51) 99908-3711</h3>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <a href="https://www.instagram.com/luanpaacheco/" target="_blank" rel="noopener noreferrer">
                            <img className='h-6' src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://x.com/Luanlimapacheco" target="_blank" rel="noopener noreferrer">
                            <img className='h-6' src={twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
                <div className='flex flex-row gap-5 mt-4 md:mt-0'>
                    <a href="https://www.linkedin.com/in/luan-pacheco-lima/" target="_blank" rel="noopener noreferrer">
                        <img className='h-10' src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Luanpaacheco" target="_blank" rel="noopener noreferrer">
                        <img className='h-10' src={github} alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
