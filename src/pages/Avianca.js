import { Link } from "react-router-dom";

import StickyBox from "react-sticky-box";
import BackBtn from "../components/BackBtn/backBtn";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `​​Este proyecto reforzó mi atención al detalle, adaptabilidad y escucha activa, permitiéndome colaborar de forma efectiva con distintos equipos. A través de un diseño iterativo y preciso, entendí cómo la coherencia visual y la experiencia del usuario se potencian cuando la comunicación fluye y cada decisión responde a un propósito claro.`;

const Avianca = () => {
    const mockup = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-hero_chjvbp.png"
    const avianca = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403064/avianca_y59uh7.png"
    const nextCaseImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/mastercard-hero_oyrz0w.png"
    const text = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403067/circle-text_wdzwpv.png'
    const separator = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png'
    const Avianca1 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-1_un7icl.png"
    const Avianca2 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-2_mfvos0.png"
    const Avianca3 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-3_xfo8nm.png"
    const Avianca4 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-4_jhi4vq.png"
    const Avianca5 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-5_zdqmxl.png"
    const Avianca6 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-6_rwuzqh.png"
    const Avianca7 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-7_m8rsvz.png"
    const Avianca8 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-8_bb8co0.png"
    const Avianca9 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-9_n5vudx.png"

    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#EA0024] to-[#C0006C] py-[100px] ">
                <div className="container mx-auto h-full px-4 2xl:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={avianca} alt="avianca hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Avianca</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="w-full lg:w-[300px] 2xl:w-[550px]" />
                        <h6 className="text-white absolute bottom-0 right-0">Dentsu Creative</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 2xl:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex justify-center items-start">
                        <p className="text-sm">Trabajé como diseñador UI para la aerolínea Avianca, desarrollando piezas gráficas clave como landing pages, banners y journeys para email marketing. El proyecto exigía alta producción y consistencia visual, con foco en microinteracciones, calidad visual y fidelidad a los lineamientos de marca.</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white flex flex-col gap-8 h-auto md:h-[460vh] xl:h-[500vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[130vh] 2xl:top-[120vh] left-0 right-0  px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Desafío del proyecto</h2>
                        <p className="text-sm my-5">Optimizar los recursos gráficos sin sacrificar la calidad visual ni afectar el rendimiento de carga del sitio.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Limitaciones estrictas en el peso de los archivos subidos a la plataforma.</li>


                            <li>Pérdida de calidad en ilustraciones y animaciones al ser compiladas.</li>


                            <li>Sobrecarga visual y de rendimiento al combinar imágenes, textos y animaciones.</li>


                            <li>Necesidad de definir con precisión qué elementos debían llevar microinteracciones.</li>


                            <li>Balance entre experiencia visual y tiempos de carga eficientes</li>
                        </ul>
                        {/* <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple text-purple">Design System</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple text-purple">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple text-purple">User Experience</span>
                        </div> */}
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg ">
                            <img src={Avianca1} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg ">
                            <img src={Avianca2} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[240vh] xl:top-[250vh] left-0 right-0  px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso de diseño</h2>

                        <p className="text-sm my-5">Ejecución precisa del UI kit oficial, garantizando coherencia visual y rendimiento óptimo en cada entrega.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Seguimiento riguroso a las directrices del líder de diseño del equipo.</li>
                            <li>Generación de múltiples variaciones por pieza gráfica (hasta 9 por imagen).</li>
                            <li>Optimización constante de recursos por el alto peso generado por herramientas como After Effects.</li>
                            <li>Iteraciones continuas con otros equipos para testeo y mejora de entregables.</li>
                            <li>Enlace colaborativo entre áreas para mantener calidad, orden y consistencia.</li>
                            <li>Alto nivel de concentración para cumplir entregas exigentes sin comprometer la calidad visual.</li>
                        </ul>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg ">
                            <img src={Avianca3} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg ">
                            <img src={Avianca4} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[350vh] xl:top-[370vh] left-0 right-0  px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Solución</h2>
                        <p className="text-sm my-5">Optimizamos procesos y recursos para mantener calidad visual sin comprometer el rendimiento de la plataforma.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Sustitución de After Effects por Jitter, reduciendo el peso de los archivos exportados.</li>
                            <li>Integración de plugins más ligeros y compatibles con Figma para acelerar el flujo de trabajo.</li>
                            <li>Aplicación estratégica de microinteracciones enfocadas en puntos clave del journey del usuario.</li>
                            <li>Animaciones solo en etapas de satisfacción: login, formularios progresivos y feedback visual.</li>
                            <li>Ilustraciones con iteraciones cortas para reducir carga gráfica sin perder impacto.</li>
                            <li>Microtransiciones aplicadas en procesos de búsqueda y carga de tiquetes para mejorar la percepción del tiempo.</li>
                        </ul>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg ">
                            <img src={Avianca5} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg ">
                            <img src={Avianca6} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[460vh] xl:top-[490vh] left-0 right-0  px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">Mejoramos el rendimiento de carga y la experiencia del usuario en cada punto del journey.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Optimización del peso visual permitió una carga fluida incluso en conexiones lentas (low bandwidth).</li>
                            <li>Interfaces más intuitivas y ligeras desde el inicio del proceso de compra hasta la confirmación final.</li>
                            <li>Reducción de errores gracias a la correcta implementación del UI kit y control de calidad visual.</li>
                            <li>Flujo de trabajo ágil y colaborativo entre equipos, manteniendo alta productividad y consistencia.</li>
                            <li>Aumento en la satisfacción del usuario final al ofrecer una navegación clara, rápida y funcional.</li>
                        </ul>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg ">
                            <img src={Avianca7} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg ">
                            <img src={Avianca8} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </section >
            <section className="bg-white pt-24 md:pt-0 pb-24 mt-0 md:-mt-24 px-4 2xl:px-0">
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
                <div className="w-full md:w-4/6 mx-auto">
                    <img src={Avianca9} alt="old carousel La cima" className="w-full rounded-lg mb-12" />
                </div>
            </section>
            <section className="bg-[#1E1E1E] w-full py-12 md:py-24 px-4 2xl:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/mastercard'} className="mx-auto pt-8 md:pt-0">
                        <img src={nextCaseImg} alt="avianca hero" />
                    </Link>
                    <div className="w-full flex justify-center relative -mt-12 md:-mt-24 mb-4 md:mb-12">
                        <Link to={'/conectemos'} className="link-hover scale-75 ">
                            <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                            <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
                        </Link>
                    </div>
                    <div className="w-full flex justify-center text-center">
                        <h4 className="text-white font-semibold text-xl md:text-3xl">Mira la siguiente experiencia con&nbsp;
                            <Link to={'/trabajo/mastercard'}>
                                <span className="hover:link-hover text-primary no-underline hover:underline">Mastercard</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Avianca;