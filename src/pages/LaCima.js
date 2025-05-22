import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import BackBtn from "../components/BackBtn/backBtn"

const words = `Este proyecto fortaleció mi atención al detalle, empatía y pensamiento estratégico, al diseñar para un público premium con expectativas elevadas. La investigación centrada en el usuario y las decisiones visuales bien fundamentadas fueron clave para crear una experiencia diferenciadora que conectara funcionalidad y lujo.`;

const LaCima = () => {
    const mockup = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/la-cima-hero_edpdq6.png"
    const LaCimaImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403072/la-cima_wphmlc.png"
    const nextCaseImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403069/extras-footer_t7oz3c.png"
    const text = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403067/circle-text_wdzwpv.png'
    const separator = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png'
    const LaCima1 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403072/la-cima-1_dtcbmp.png"
    const LaCima2 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403072/la-cima-2_kvgwrx.png"
    const LaCima3 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403073/la-cima-3_oumn8q.png"
    const LaCima4 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403073/la-cima-4_gjbcez.png"
    const LaCima5 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403073/la-cima-5_kqiagq.png"
    const LaCima6 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/la-cima-6_ccjueg.png"
    const LaCima7 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403073/la-cima-7_mpjvg7.png"
    const LaCima8 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403073/la-cima-8_syqghg.png"
    const LaCima9 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/la-cima-9_d3uzla.png"

    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#DFBA59] to-[#BC9B44] py-[100px]">
                <div className="container mx-auto h-full px-4 2xl:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={LaCimaImg} alt="la cima hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-semibold font-ClashDisplay">La Cima</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="w-full lg:w-[300px] 2xl:w-[550px]" />
                        <h6 className="text-white absolute bottom-0 right-0">Freelancer</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 2xl:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex flex-col justify-center items-start">
                        <p className="text-sm mb-4">
                            En este proyecto lideré tanto la investigación UX como el diseño visual UI para el Ecohotel La Cima, un hotel luxury en el Quindío. Potencié mis habilidades en diseño centrado en el usuario, creando una experiencia única y premium donde cada detalle visual y funcional comunica sofisticación y marca la diferencia, logrando un equilibrio entre estética y usabilidad para un nicho exclusivo.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white flex flex-col gap-8 h-auto md:h-[460vh] xl:h-[500vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[130vh] 2xl:top-[120vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Desafío del proyecto</h2>
                        <p className="text-sm my-4">
                            El principal desafío fue crear una interfaz que reflejara el lujo y exclusividad del ecohotel, alineada con su identidad y alto valor comercial.
                        </p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>La web existente no transmitía la experiencia premium ni diferenciaba las cinco habitaciones temáticas y el restaurante de alta cocina.</li>
                            <li>La navegación confusa dificultaba la reserva y exploración de servicios.</li>
                            <li>Reseñas negativas afectaban la confianza de usuarios potenciales.</li>
                            <li>Se debía captar la atención de un público selecto con expectativas elevadas y poco tiempo para decidir.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={LaCima1} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={LaCima2} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[240vh] xl:top-[250vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso de diseño</h2>
                        <p className="text-sm my-4">
                            La estrategia se centró en rediseñar la experiencia del usuario desde un enfoque premium, alineado con las expectativas del público objetivo.
                        </p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Iniciamos con entrevistas y análisis de comportamiento para entender las motivaciones y necesidades de los usuarios.</li>
                            <li>Creamos wireframes y prototipos en Figma, priorizando una navegación clara y fluida.</li>
                            <li>Se desarrolló un sistema visual basado en espacios amplios, fotografía envolvente y una tipografía elegante.</li>
                            <li>Realizamos pruebas de usabilidad para validar decisiones y mejorar puntos críticos en el proceso de reserva.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg">
                            <img src={LaCima3} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg">
                            <img src={LaCima4} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[350vh] xl:top-[370vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Solución</h2>
                        <p className="text-sm my-4">
                            El rediseño de la web se enfocó en transmitir exclusividad y confianza desde el primer clic.
                        </p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Se desarrolló una interfaz elegante, con fotografía inmersiva y detalles visuales que comunicaran lujo y autenticidad.</li>
                            <li>Optimicé la arquitectura de la información para facilitar el recorrido del usuario y agilizar las reservas.</li>
                            <li>Se implementaron elementos visuales diferenciadores para destacar cada habitación y experiencia del ecohotel.</li>
                            <li>Las mejoras visuales y de navegación elevaron la percepción de marca y fortalecieron la credibilidad.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg">
                            <img src={LaCima5} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg">
                            <img src={LaCima6} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[460vh] xl:top-[490vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">
                            El rediseño de la página web del Ecohotel La Cima logró mejorar significativamente la experiencia del usuario y la percepción de la marca. Implementamos un diseño visualmente atractivo y funcional, optimizando la navegación para facilitar la exploración y reserva de habitaciones. La integración de herramientas como videos y recorridos virtuales proporcionó una experiencia inmersiva, mientras que la optimización para dispositivos móviles aseguró accesibilidad desde cualquier plataforma. Estas mejoras resultaron en un aumento notable en la conversión de visitantes a clientes, reflejando el éxito del proyecto en cumplir con los objetivos de negocio del Ecohotel La Cima.
                        </p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg">
                            <img src={LaCima7} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] 2xl:h-auto rounded-lg">
                            <img src={LaCima8} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-24 md:pt-0 pb-24 mt-0 md:-mt-24">
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
                <div className="w-full md:w-4/6 mx-auto">
                    <img src={LaCima9} alt="old carousel La cima" className="w-full rounded-lg mb-12" />
                </div>
            </section>
            <section className="bg-[#1E1E1E] w-full  h-screen md:h-auto flex md:block justify-center items-center py-12 md:py-24 px-4 2xl:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/extras'} className="mx-auto pt-8 md:pt-0">
                        <img src={nextCaseImg} alt="avianca hero" />
                    </Link>
                    <div className="w-full flex justify-center relative md-4 md:mb-12">
                        <Link to={'/conectemos'} className="link-hover scale-75 ">
                            <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                            <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
                        </Link>
                    </div>
                    <div className="w-full flex justify-center text-center">
                        <h4 className="text-white font-semibold text-xl md:text-3xl">Mira la siguiente experiencia con&nbsp;
                            <Link to={'/trabajo/extras'}>
                                <span className="hover:link-hover text-primary no-underline hover:underline">Extras</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LaCima;