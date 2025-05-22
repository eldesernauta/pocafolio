import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import BackBtn from "../components/BackBtn/backBtn"

const words = `Este proyecto reforzó mi pensamiento estratégico, capacidad de adaptación y enfoque colaborativo. Aprendí a gestionar entregas bajo presión manteniendo la calidad visual, y a trabajar con equipos diversos en entornos cambiantes, siempre alineado con los objetivos del usuario y del negocio.`;

const Mastercard = () => {
    const mockup = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/mastercard-hero_oyrz0w.png"
    const MastercardImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/mastercard_mj2eom.png"
    const nextCaseImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/la-cima-hero_edpdq6.png"
    const text = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403067/circle-text_wdzwpv.png'
    const separator = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png'
    const Mastercard1 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403075/mastercard_1_f9ngzn.png"
    const Mastercard2 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403075/mastercard_2_mmjmy9.png"
    const Mastercard3 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403075/mastercard_3_f5d9tg.png"
    const Mastercard4 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403075/mastercard_4_zxrneq.png"
    const Mastercard5 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403075/mastercard_5_e1o9z6.png"
    const Mastercard6 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403075/mastercard_6_khth7o.png"
    const Mastercard7 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/mastercard_7_zgnr5v.png"
    const Mastercard8 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403036/mastercard_8_ogi3hg.png"
    const Mastercard9 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403035/mastercard_9_wri0jy.png"

    return (
        <>
            <BackBtn />
            <section className="h-auto lg:h-screen w-full bg-gradient-to-r from-[#FF8B00] to-[#C90C14] py-16 lg:py-[100px] px-4 2xl:px-0">
                <div className="container mx-auto h-full px-4 2xl:px-0 flex flex-col lg:flex-row justify-center items-stretch">
                    <div className="w-full lg:w-3/6 h-full py-8 lg:py-0 flex flex-col justify-center lg:justify-between items-center lg:items-start">
                        <img src={MastercardImg} alt="avianca hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-6xl md:text-9xl text-white font-medium font-ClashDisplay">Mastercard</h1>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="w-full lg:w-[300px] 2xl:w-[550px]" />
                        <h6 className="text-white absolute bottom-0 right-0">Dentsu Creative</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 2xl:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex justify-center items-start">
                        <p className="text-sm">Trabajé como diseñador UI para campañas de Mastercard, creando landing pages, banners y correos masivos. Cada pieza requería alta precisión visual, coherencia con la marca y foco en conversiones para diferentes bancos aliados. Colaboré desde los wireframes hasta el diseño final, adaptando cada solución a los objetivos comerciales y usuarios de cada entidad.</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white flex flex-col gap-8 h-auto md:h-[460vh] xl:h-[500vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[140vh] xl:top-[130vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Desafío del proyecto</h2>
                        <p className="text-sm my-5">Atender múltiples campañas semanales para Mastercard y bancos aliados exigía alta velocidad de entrega sin sacrificar calidad ni coherencia visual.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Adaptarse a los lineamientos de cada banco aliado sin perder la identidad de Mastercard.</li>
                            <li>Cumplir con entregas frecuentes bajo plazos muy ajustados.</li>
                            <li>Gestionar feedback continuo para aprobar piezas en ciclos cortos.</li>
                            <li>Mantener una coherencia visual entre múltiples campañas simultáneas.</li>
                            <li>Optimizar el flujo de diseño para sostener la productividad del equipo.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard1} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard2} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[250vh] xl:top-[250vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso de diseño</h2>
                        <p className="text-sm my-5">El proceso inició con investigación UX, seguido por diseño iterativo de piezas visuales centradas en el usuario y alineadas a los objetivos de marca.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Participación en entrevistas y análisis de comportamiento de usuarios.</li>
                            <li>Construcción de sistemas visuales con guías estandarizadas.</li>
                            <li>Creación de wireframes y prototipos en Adobe XD y Figma.</li>
                            <li>Iteraciones rápidas validadas con pruebas de usabilidad.</li>
                            <li>Incorporación de microinteracciones en piezas clave para mayor engagement.</li>
                            <li>Ajustes continuos con base en feedback de stakeholders y equipo UX.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard3} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard4} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[360vh] xl:top-[370vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Solución</h2>
                        <p className="text-sm my-5">Se estructuró una solución técnica y visualmente coherente para responder a los requerimientos de múltiples marcas y campañas simultáneas.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Implementación de sistemas de diseño editables solo a nivel visual, manteniendo estructuras base.</li>
                            <li>Aplicación de guías de estilo que garantizaban coherencia y escalabilidad.</li>
                            <li>Diseño de landing pages enfocadas en conversión para promociones específicas.</li>
                            <li>Desarrollo de correos electrónicos responsivos y funcionales en distintos dispositivos.</li>
                            <li>Iteraciones constantes basadas en feedback de clientes y pruebas internas.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard5} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard6} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[470vh] xl:top-[490vh] left-0 right-0 px-4 2xl:px-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">Los sistemas implementados y la estandarización visual permitieron resultados sobresalientes en eficiencia y calidad.</p>
                        <ul className="text-sm list-disc space-y-4 pl-4">
                            <li>Se redujeron los tiempos de entrega gracias a la estandarización de elementos gráficos.</li>
                            <li>Se mantuvo consistencia visual entre campañas, destacando los atributos clave de cada banco.</li>
                            <li>Las piezas gráficas recibieron alta aprobación por parte de Mastercard y aliados estratégicos.</li>
                            <li>Las landing pages y correos mostraron mejoras notables en conversión y engagement.</li>
                            <li>El feedback reforzó la confianza del cliente en el equipo de diseño y fortaleció la relación a largo plazo.</li>
                        </ul>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 xl:gap-16 2xl:gap-8 justify-center items-start">
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard7} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-auto lg:h-[50vh] rounded-lg">
                            <img src={Mastercard8} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-24 md:pt-0 pb-24 mt-0 md:-mt-24">
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
                <div className="w-full md:w-4/6 mx-auto">
                    <img src={Mastercard9} alt="old carousel La cima" className="w-full rounded-lg mb-12" />
                </div>
            </section>
            <section className="bg-[#1E1E1E] w-full  h-screen md:h-auto flex md:block justify-center items-center py-12 md:py-24 px-4 2xl:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/la-cima'} className="mx-auto pt-8 md:pt-0">
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
                            <Link to={'/trabajo/la-cima'}>
                                <span className="hover:link-hover text-primary no-underline hover:underline">La Cima Ecohotel</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mastercard;