import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const clientes1 = require('../../img/goo-clientes-1.png')
const clientes2 = require('../../img/goo-clientes-2.png')
const clientes3 = require('../../img/goo-clientes-3.png')

const HorizontalScroll = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const massiveImage = document.querySelector('.massiveImage');

        gsap.set(massiveImage, {
            backgroundColor: 'transparent', // Example background color
            height: 'auto',
            width: '300vw',
        });

        gsap.to(massiveImage, {
            xPercent: -100,
            x: () => window.innerWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: massiveImage,
                start: '-150px top',
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
            <div className="massiveImage flex justify-start items-start gap-8 py-8">
                <HorizontalCard client={'Avianca'} imgSrc={clientes1} />
                <HorizontalCard client={'Bancolombia'} imgSrc={clientes2} />
                <HorizontalCard client={'Avianca'} imgSrc={clientes3} />
                <HorizontalCard client={'Bancolombia'} imgSrc={clientes1} />
                <HorizontalCard client={'Avianca'} imgSrc={clientes2} />
            </div>

        </div>
    );
};

export default HorizontalScroll;


const HorizontalCard = ({ client, imgSrc }) => {
    return (
        <div className="w-[55vw] h-auto px-0">
            <div className="flex flex-col w-full items-center justify-start rounded-md mx-auto overflow-hidden">
                <div className='flex flex-col justify-start items-start'>
                    <div className='w-full h-96 overflow-hidden'>
                        <img
                            src={imgSrc}
                            className='object-contain'
                            alt='imagen avianca'
                        />
                    </div>
                    <div className='w-full flex items-center mt-8'>
                        <div className='w-2/6 flex flex-col justify-center items-start gap-2'>
                            <h2 className='text-white text-4xl font-bold'>{client}</h2>
                            <p className='text-white'>Aerovías del Continente Americano</p>
                            <button className='btn rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Ver más</button>
                        </div>
                        <div className='w-4/6 flex flex-col'>
                            <p className='text-white text-sm'>
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}