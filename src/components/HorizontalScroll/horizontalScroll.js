import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';


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
                start: '70px 100vh',
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
            <div className="massiveImage flex justify-start items-start gap-8 px-2 2xl:px-0 pt-16 lg:pt-32  pb-32">
                <div className='static lg:absolute -top-16 left-0 flex lg:block flex-col justify-center items-center'>
                    <h4 className="text-lg text-primary font-bold text-center lg:text-left translate-x-0 lg:translate-x-24"> Todas mis </h4>
                    <h2 className="text-5xl lg:text-9xl font-ClashDisplay font-medium text-white">Creaciones</h2>
                </div>
                <HorizontalCard
                    client={'Avianca'}
                    href={'/trabajo/avianca'}
                    subtitle={'Dentsu Creative'}
                    id={'avianca'}
                    resume={'Gracias a la agencia en la que trabajaba, tuve la oportunidad de unirme al equipo de la aerolínea Avianca, una de las compañías aéreas más...'}
                />
                <HorizontalCard
                    client={'Mastercard'}
                    href={'/trabajo/mastercard'}
                    subtitle={'Dentsu Creative'}
                    id={'mastercard'}
                    resume={'En mi rol como diseñador de interfaces UI, trabajé en múltiples proyectos para Mastercard, colaborando estrechamente con...'}
                />
                <HorizontalCard
                    client={'La Cima Ecohotel'}
                    href={'/trabajo/la-cima'}
                    subtitle={'Freelancer'}
                    id={'la-cima'}
                    resume={'En este proyecto, colaboré con un exclusivo Ecohotel llamado La Cima, ubicado en el corazón del Quindío, una región conocida por...'}
                />
                <HorizontalCard
                    client={'Extras'}
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
        <div className="w-[100vw] lg:w-[60vw] h-auto px-0 hidden lg:block">
            <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                <div className='w-full flex flex-col justify-start items-start'>
                    <Link id={id} to={href} className='w-[100vw] lg:w-full h-[50vh] lg:h-[500px] overflow-hidden bg-black'>

                    </Link>
                    <div className='w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-0 lg:items-center mt-8'>
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