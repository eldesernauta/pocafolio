import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const clientes1 = require('../../img/creaciones_1_static.png')
const clientes2 = require('../../img/creaciones_2.gif')
const clientes3 = require('../../img/la-cima-home.gif')
const clientes4 = require('../../img/extras-home.gif')

const HorizontalScroll = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const massiveImage = document.querySelector('.massiveImage');

        gsap.set(massiveImage, {
            backgroundColor: 'transparent', // Example background color
            height: 'auto',
            width: '260vw',
        });

        gsap.to(massiveImage, {
            xPercent: -100,
            x: () => window.innerWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: massiveImage,
                start: 'top 100vh',
                end: () => window.innerWidth * 3,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });


        // Cleanup function
        return () => {
            gsap.killTweensOf(massiveImage);
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div>
            <div className="massiveImage flex justify-start items-start gap-8 px-2 md:px-0 pt-16 md:pt-32  pb-32">
                <div className='static md:absolute -top-16 left-0 flex md:block flex-col justify-center items-center'>
                    <h4 className="text-lg text-primary font-bold text-center md:text-left translate-x-0 md:translate-x-24"> Todas mis </h4>
                    <h2 className="text-5xl md:text-9xl font-ClashDisplay font-medium text-white">Creaciones</h2>
                </div>
                <HorizontalCard
                    client={'Avianca'}
                    imgSrc={clientes1}
                    href={'/trabajo/avianca'}
                    subtitle={'Dentsu Creative'}
                    id={'avianca'}
                    resume={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de...'}
                />
                <HorizontalCard
                    client={'Mastercard'}
                    imgSrc={clientes3}
                    href={'/trabajo/mastercard'}
                    subtitle={'Dentsu Creative'}
                    id={'mastercard'}
                    resume={'En mi rol como diseñador de interfaces UI, trabajé en múltiples proyectos para Mastercard, colaborando estrechamente con...'}
                />
                <HorizontalCard
                    client={'La Cima Ecohotel'}
                    imgSrc={clientes2}
                    href={'/trabajo/la-cima'}
                    subtitle={'Freelancer'}
                    id={'la-cima'}
                    resume={'En este proyecto, colaboré con un exclusivo Ecohotel llamado La Cima, ubicado en el corazón del Quindío, una región conocida por...'}
                />
                <HorizontalCard
                    client={'Extras'}
                    imgSrc={clientes4}
                    href={'/trabajo/extras'}
                    subtitle={'Freelancer'}
                    id={'extras'}
                    resume={'Como diseñador freelancer, he tenido la oportunidad de crear interfaces gráficas de diferentes marcas. El desafío ha sido capturar y representar...'}
                />
            </div>

        </div>
    );
};

export default HorizontalScroll;


const HorizontalCard = ({ client, id, href, subtitle, resume }) => {
    return (
        <div className="w-[100vw] md:w-[60vw] h-auto px-0 hidden md:block">
            <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                <div className='w-full flex flex-col justify-start items-start'>
                    <div id={id} className='w-[100vw] md:w-full h-[50vh] md:h-[500px] overflow-hidden bg-black'>

                    </div>
                    <div className='w-full flex flex-col md:flex-row items-start gap-8 md:gap-0 md:items-center mt-8'>
                        <div className='w-6/6 md:w-5/12 flex flex-col justify-center items-start gap-1'>
                            <h2 className='text-white text-4xl font-bold'>{client}</h2>
                            <p className='text-white'>{subtitle}</p>
                            <Link to={href} className='link-hover btn mt-2 rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Ver más</Link>
                        </div>
                        <div className='w-full md:w-7/12 flex flex-col'>
                            <p className='text-white text-sm'>
                                {resume}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}